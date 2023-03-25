import braintree from 'braintree'
import { getQuery, readBody } from 'h3'
// import { ref } from 'vue'


  // Need to post the nonce from the client as body
  // Need to get cart data from the client
  // Need to build our pricing and shipping data in order to set the transaction amount without depending on any info from the client (except what is in their cart) to prevent tampering
  // Need to post the device data from the client as body (cart data should be in the device data)
  // Need to post the shipping address from the client as body (cart data should be in the device data)


export default defineEventHandler(async(event) => {

  //Merchant ID
  const merchantId = 'dwt5hs5tpmvyy2vy'
  //Public Key
  const publicKey = 'p6c57mpq53sxvc88'
  //Private Key
  const privateKey = 'eb0903e8dbaaa945d611a39a62af6139'

  var nonce
  var deviceData
  var cart
  var cartItems
  var shippingInfo
  var billingInfo
  var userInfo
  var orderId
  var firebaseOrder

  // var cartItems = {
  //   itemId: [],
  //   variantId: [],
  //   quantity: []
  // }

  const body = await readBody(event)
  // console.log(body)
  if (body.nonce) {
    nonce = body.nonce
  }
  if (body.deviceData) {
    deviceData = body.deviceData
  }
  if (body.cart){
    cartItems = body.cart
  }
  if (body.shipping) {
    shippingInfo = body.shipping
    // console.log(shippingInfo)
  }
  if (body.billing) {
    billingInfo = body.billing 
  }
  if (body.user) {
    userInfo = body.user
  }
  if (body.orderId) {
    orderId = body.orderId
    // console.log(orderId)
  }
  if (body.firebaseOrder){
    firebaseOrder = body.firebaseOrder
  }

  // console.log(body)

  let cartItemIds = []
  let cartVariantIds = []
  let cartVariants = [{}]
  for (let i = 0; i<cartItems.length;i++){
    cartItemIds.push(await cartItems[i].id)
    for (let j = 0; j<cartItems[i].variants.length; j++){
      if(cartItems[i].variants[j].inCart){
        cartVariantIds.push(await cartItems[i].variants[j].id)
        cartVariants.push({
          id: cartItems[i].variants[j].id,
          cartQty: cartItems[i].variants[j].cartQty
        })
      }
    }
  }
  console.log(cartItemIds)

  //We need to fetch our product data from the DB in order to calculate the price of each variant
  //Can we do some kind of query to get all the variants in the cart?
  // const cartItems = $fetch('/api/shop/cart?' + uid ? 'uid=' + uid: 'test', { method: 'GET' })

  // console.log(await body)


  //CONFIRM THE CART TOTALCOST IS ACCURATE BASED ON SERVER-SIDE QUERIES
  //Time to put our data into the braintree transaction

  let products = []
  for (let i=0; i< cartItemIds.length;i++){
    let product = await $fetch('/api/queryItem?col=products&field=id&operator===&value='+cartItemIds[i], {method: 'GET'})
    products.push(await product[0]) //or we could do all our processing within one loop here?
  }

  console.log(products)

  let totalCost = 0
  let totalShippingAmount = 0

  let lineItems = []
  let printifyLines = []

  for (let i = 0; i < products.length; i++) {
    for(let j = 0; j < products[i].variants.length; j++) {
      let variant = products[i].variants[j]
      if(cartVariantIds.includes(variant.id)){
        console.log("variant.id in cartVariantIds: " + variant.id)
        let thisItemPrice = Number(itemPrice(variant, shippingInfo.country))
        let thisShipCost = Number(itemShippingPrice(variant, shippingInfo.country))
        let thisItemQty = Number(cartVariants[cartVariants.map((x)=>{return x.id}).indexOf(variant.id)].cartQty)

        console.log('thisItemPrice: ' + thisItemPrice)
        console.log("thisShipCost: " + thisShipCost)
        console.log("thisItemQty: " + thisItemQty)

        totalCost += (thisItemPrice + thisShipCost) * thisItemQty
        totalShippingAmount += thisShipCost * thisItemQty
        
        let lineItem = {
          name: products[i].variants[j].title,
          kind: "debit",
          quantity: thisItemQty,
          unitAmount: thisItemPrice + thisShipCost,
          totalAmount: (thisItemPrice + thisShipCost) * thisItemQty
        }
        let printifyLine = {
          // product_id, variant_id, and quantity
          product_id: products[i].id,
          variant_id: variant.id,
          quantity: thisItemQty

        }
        lineItems.push(lineItem)
        printifyLines.push(printifyLine)
        // console.log(thisItemQty)
        
      }
    }
  }

  totalCost = Math.ceil(totalCost)/100
  totalShippingAmount = Math.ceil(totalShippingAmount)/100

  console.log("totalCost: " + totalCost)
  console.log("totalShippingAmount: " + totalShippingAmount)

  // Use cart data to determine pricing
  // Use our shipping data to determine shipping cost of each item
  // Add total cost of all items and shipping costs to get total amount

  //We should ideally pull a whole bunch of data from the DB at once, but we can't do that with the current API
  //We should make a new API call that can query multiple items at once
  
  //Fetch the queryItem api to get product data for each item in the cart at once
  // const fieldValues = 'id,variants'
  // const products = await $fetch('/api/queryItem?' + 'col=products' + '&field=' + fieldValues + '&operator=array-contains' + '&value=' + cartItems.itemId + ',' + cartItems.variantId , { method: 'GET' })

  // console.log("Filtered Products returned from firestore: " + products)



  // for (let i = 0; i < cartItems.length; i++) {
  //   //Fetch the price of each variant in the cart
  //   //Fetch the shipping cost of each variant in the cart
  //   //Multiply the price of each variant by the quantity of that variant
  //   //Add the price of each variant to the total amount

  //   //Going to use the new queryItem api call
  
  //   // for variant in item.variants
  //   //   if variant.id == cartItems[i].variantId
  //   //     variant.price

  //   for (let j = 0; j < cartItems[i].variants; j++) {
      
  //   }

  // Create a Braintree Gateway
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: merchantId,
    publicKey: publicKey,
    privateKey: privateKey
  })
  // To create a transaction:
  // You must include an amount
  // and, either a paymentMethodNonce, a paymentMethodToken, or a customerId.
  // Passing a customerId is equivalent to passing the paymentMethodToken of the customer's default payment method.

  console.log("Creating a transaction for amt: " + totalCost)
  let customer = {}
  if(!userInfo.inVault){
    customer = {
      id: userInfo.uid,
      email: userInfo.email,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      phone: userInfo.phone,
      //or you could theoretically use a customerId from the Braintree Vault
    }
  }
  // Create a transaction
  gateway.transaction.sale({
    amount: totalCost,
    paymentMethodNonce: nonce,
    // deviceData: deviceData,
    //Do we need to do a billing country? and zip and stuff?
    billing: {
      countryCodeAlpha2: billingInfo.country,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      streetAddress: billingInfo.address,
      extendedAddress: billingInfo.address2,
      locality: billingInfo.city,
      region: billingInfo.region,
      postalCode: billingInfo.zip
    },
    // customer: customer? customer: null,
    orderId: orderId,
    shipping: {
      countryCodeAlpha2: shippingInfo.country,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      streetAddress: shippingInfo.address1,
      extendedAddress: shippingInfo.address2,
      locality: shippingInfo.city,
      region: shippingInfo.region,
      postalCode: shippingInfo.zip
    },
    shippingAmount: totalShippingAmount,
    customerId: userInfo.inVault ? userInfo.uid : null,
    customer: !userInfo.inVault ? customer : null,
    //customerId: 'ID from Braintree Vault used to charge existing customers'
    // descriptor: { //'Not enabled on all braintree accounts by default - but could be cool to use!!!'
    //   name: 'Business Name',
    //   phone: '10-14 characters, ONLY #,-,(,),.',
    //   url: '13 chars MAX'
    // },
    lineItems: lineItems, //249 max
    options: {
      addBillingAddressToPaymentMethod: true,
      submitForSettlement: true,
      paypal:{
        description: "Payment for your Dope Order - ID: " + orderId
      },
      storeInVault: true,
      storeShippingAddressInVault: true,
      // threeDSecure: {
      //   required: true
      // }
      venmo:{
        profileId:'@SICoLLC'
      },
      //We need to build a transactionSource implementation and allow CS reps to manually enter recurring and unscheduled orders
      // transactionSource: "moto" //initiated by the customer via the merchant by mail or telephone

      // This could come in handy
      // verifyCard:true,
      // verificationMerchantAccountId: 'exampleMerchantAccountId',
      // verificationAmount: '1.00',
    }

  }, async (err, result) => {
    console.log(result)
    if (!result.success){
      console.log(err)
    }

    //Example Result :D
      // {                                                                     16:48:06
      //   transaction: Transaction {
      //     id: 'g0vkwmkv',
      //     status: 'submitted_for_settlement',
      //     type: 'sale',
      //     currencyIsoCode: 'USD',
      //     amount: '63.00',
      //     amountRequested: '63.00',
      //     merchantAccountId: 'straininvestmentscompanyllc',
      //     subMerchantAccountId: null,
      //     masterMerchantAccountId: null,
      //     orderId: 'cFak6SRxl3YqXzn5IWl3',
      //     createdAt: '2023-03-24T21:48:04Z',
      //     updatedAt: '2023-03-24T21:48:06Z',
      //     customer: {
      //       id: 'TkEKGIw1RNT8DfNFyK88eQtJBwl1',
      //       firstName: 'Testfirst',
      //       lastName: 'Testlast',
      //       company: null,
      //       email: 'michael.v.strain@gmail.com',
      //       website: null,
      //       phone: '8885552222',
      //       fax: null,
      //       globalId: 'Y3VzdG9tZXJfVGtFS0dJdzFSTlQ4RGZORnlLODhlUXRKQndsMQ'
      //     },
      //     billing: {
      //       id: '3r',
      //       firstName: 'Testfirst',
      //       lastName: 'Testlast',
      //       company: null,
      //       streetAddress: null,
      //       extendedAddress: '101',
      //       locality: 'Test City',
      //       region: 'TX',
      //       postalCode: '10101',
      //       countryName: 'United States of America',
      //       countryCodeAlpha2: 'US',
      //       countryCodeAlpha3: 'USA',
      //       countryCodeNumeric: '840'
      //     },
      //     refundId: null,
      //     refundIds: [],
      //     refundedTransactionId: null,
      //     partialSettlementTransactionIds: [],
      //     authorizedTransactionId: null,
      //     settlementBatchId: null,
      //     shipping: {
      //       id: null,
      //       firstName: 'Testfirst',
      //       lastName: 'Testlast',
      //       company: null,
      //       streetAddress: null,
      //       extendedAddress: '101',
      //       locality: 'Test City',
      //       region: 'TX',
      //       postalCode: '10101',
      //       countryName: 'United States of America',
      //       countryCodeAlpha2: 'US',
      //       countryCodeAlpha3: 'USA',
      //       countryCodeNumeric: '840'
      //     },
      //     customFields: '',
      //     accountFundingTransaction: false,
      //     avsErrorResponseCode: null,
      //     avsPostalCodeResponseCode: 'M',
      //     avsStreetAddressResponseCode: 'I',
      //     cvvResponseCode: 'I',
      //     gatewayRejectionReason: null,
      //     processorAuthorizationCode: '7KBPWX',
      //     processorResponseCode: '1000',
      //     processorResponseText: 'Approved',
      //     additionalProcessorResponse: null,
      //     voiceReferralNumber: null,
      //     purchaseOrderNumber: null,
      //     taxAmount: null,
      //     taxExempt: false,
      //     scaExemptionRequested: null,
      //     processedWithNetworkToken: false,
      //     creditCard: CreditCard {
      //       token: '1p5zyxf9',
      //       bin: '411111',
      //       last4: '1111',
      //       cardType: 'Visa',
      //       expirationMonth: '01',
      //       expirationYear: '2027',
      //       customerLocation: 'US',
      //       cardholderName: null,
      //       imageUrl: 'https://assets.braintreegateway.com/payment_method_logo/visa.png?environment=sandbox',
      //       isNetworkTokenized: false,
      //       prepaid: 'Unknown',
      //       healthcare: 'Unknown',
      //       debit: 'Unknown',
      //       durbinRegulated: 'Unknown',
      //       commercial: 'Unknown',
      //       payroll: 'Unknown',
      //       issuingBank: 'Unknown',
      //       countryOfIssuance: 'Unknown',
      //       productId: 'Unknown',
      //       globalId: 'cGF5bWVudG1ldGhvZF9jY18xcDV6eXhmOQ',
      //       graphQLId: 'cGF5bWVudG1ldGhvZF9jY18xcDV6eXhmOQ',
      //       accountType: 'credit',
      //       uniqueNumberIdentifier: 'a5ce3887f78624b663c124394db6321a',
      //       venmoSdk: false,
      //       accountBalance: null,
      //       maskedNumber: '411111******1111',
      //       expirationDate: '01/2027'
      //     },
      //     statusHistory: [ [Object], [Object] ],
      //     planId: null,
      //     subscriptionId: null,
      //     subscription: { billingPeriodEndDate: null, billingPeriodStartDate: null },
      //     addOns: [],
      //     discounts: [],
      //     descriptor: { name: null, phone: null, url: null },
      //     recurring: false,
      //     channel: null,
      //     serviceFeeAmount: null,
      //     escrowStatus: null,
      //     disbursementDetails: DisbursementDetails {
      //       disbursementDate: null,
      //       settlementAmount: null,
      //       settlementCurrencyIsoCode: null,
      //       settlementCurrencyExchangeRate: null,
      //       settlementBaseCurrencyExchangeRate: null,
      //       fundsHeld: null,
      //       success: null
      //     },
      //     disputes: [],
      //     achReturnResponses: [],
      //     authorizationAdjustments: [],
      //     paymentInstrumentType: 'credit_card',
      //     processorSettlementResponseCode: '',
      //     processorSettlementResponseText: '',
      //     networkResponseCode: 'XX',
      //     networkResponseText: 'sample network response text',
      //     threeDSecureInfo: null,
      //     shipsFromPostalCode: null,
      //     shippingAmount: '12.36',
      //     discountAmount: null,
      //     networkTransactionId: '020230324214805',
      //     processorResponseType: 'approved',
      //     authorizationExpiresAt: '2023-03-31T21:48:05Z',
      //     retryIds: [],
      //     retriedTransactionId: null,
      //     refundGlobalIds: [],
      //     partialSettlementTransactionGlobalIds: [],
      //     refundedTransactionGlobalId: null,
      //     authorizedTransactionGlobalId: null,
      //     globalId: 'dHJhbnNhY3Rpb25fZzB2a3dta3Y',
      //     graphQLId: 'dHJhbnNhY3Rpb25fZzB2a3dta3Y',
      //     retryGlobalIds: [],
      //     retriedTransactionGlobalId: null,
      //     retrievalReferenceNumber: '1234567',
      //     achReturnCode: null,
      //     installmentCount: null,
      //     installments: [],
      //     refundedInstallments: [],
      //     responseEmvData: null,
      //     acquirerReferenceNumber: null,
      //     merchantIdentificationNumber: '123456789012',
      //     terminalIdentificationNumber: '00000001',
      //     merchantName: 'DESCRIPTORNAME',
      //     merchantAddress: {
      //       streetAddress: '',
      //       locality: 'Braintree',
      //       region: 'MA',
      //       postalCode: '02184',
      //       phone: '5555555555'
      //     },
      //     pinVerified: false,
      //     debitNetwork: null,
      //     processingMode: null,
      //     paymentReceipt: {
      //       id: 'g0vkwmkv',
      //       globalId: 'dHJhbnNhY3Rpb25fZzB2a3dta3Y',
      //       amount: '63.00',
      //       currencyIsoCode: 'USD',
      //       processorResponseCode: '1000',
      //       processorResponseText: 'Approved',
      //       processorAuthorizationCode: '7KBPWX',
      //       merchantName: 'DESCRIPTORNAME',
      //       merchantAddress: [Object],
      //       merchantIdentificationNumber: '123456789012',
      //       terminalIdentificationNumber: '00000001',
      //       type: 'sale',
      //       pinVerified: false,
      //       processingMode: null,
      //       networkIdentificationCode: null,
      //       cardType: 'Visa',
      //       cardLast4: '1111',
      //       accountBalance: null
      //     },
      //     paypalAccount: PayPalAccount {},
      //     paypalHereDetails: PayPalHereDetails {},
      //     localPayment: LocalPayment {},
      //     applePayCard: ApplePayCard {},
      //     androidPayCard: AndroidPayCard {},
      //     visaCheckoutCard: VisaCheckoutCard {},
      //     samsungPayCard: SamsungPayCard {},
      //     [Symbol()]: BraintreeGateway {
      //       config: [Config],
      //       graphQLClient: [GraphQLClient],
      //       http: [Http],
      //       addOn: [AddOnGateway],
      //       address: [AddressGateway],
      //       clientToken: [ClientTokenGateway],
      //       creditCard: [CreditCardGateway],
      //       creditCardVerification: [CreditCardVerificationGateway],
      //       customer: [CustomerGateway],
      //       disbursement: [DisbursementGateway],
      //       discount: [DiscountGateway],
      //       dispute: [DisputeGateway],
      //       documentUpload: [DocumentUploadGateway],
      //       exchangeRateQuote: [ExchangeRateQuoteGateway],
      //       merchantAccount: [MerchantAccountGateway],
      //       merchant: [MerchantGateway],
      //       oauth: [OAuthGateway],
      //       paymentMethod: [PaymentMethodGateway],
      //       paymentMethodNonce: [PaymentMethodNonceGateway],
      //       paypalAccount: [PayPalAccountGateway],
      //       plan: [PlanGateway],
      //       sepaDirectDebitAccount: [SepaDirectDebitAccountGateway],
      //       settlementBatchSummary: [SettlementBatchSummaryGateway],
      //       subscription: [SubscriptionGateway],
      //       testing: [TestingGateway],
      //       transaction: [TransactionGateway],
      //       transactionLineItem: [TransactionLineItemGateway],
      //       usBankAccount: [UsBankAccountGateway],
      //       usBankAccountVerification: [UsBankAccountVerificationGateway],
      //       webhookNotification: [WebhookNotificationGateway],
      //       webhookTesting: [WebhookTestingGateway]
      //     }
      //   },
      //   success: true
      // }
      // null                   

    if (result.success){
      let firebaseBody = firebaseOrder
      firebaseBody.paymentStatus = result.transaction.status,
      firebaseBody.status = result.success?'PAID':'PAYMENT_ISSUE',
      firebaseBody.paymentDate = result.success?new Date():'Not Paid'
      const firebase = await $fetch("/api/set?col=orders&docId="+orderId, { method:"POST", body: firebaseBody }) //update our firebase order by id
      //our body should be the printify order POST body
      if (firebase.success){
        const printifyOrder = {
          //Printify POST data
          external_id: orderId,
          line_items: printifyLines, //this should just have a product_id, variant_id, and quantity
          shipping_method: 1, //2 for express shipping
          send_shipping_notification: true,
          address_to: {
            first_name: userInfo.firstName,
            last_name: userInfo.lastName,
            email: userInfo.email,
            phone: userInfo.phone,
            country: shippingInfo.country,
            region: shippingInfo.region,
            address1: shippingInfo.address1,
            address2: shippingInfo.address2,
            city: shippingInfo.city,
            zip: shippingInfo.zip
          }
        }
        const printify = await $fetch('/api/printify/order', {method:"POST", body: printifyOrder}) //post our order to printify
        console.log("Printify response:")
        console.log(printify)

        //don't know what to put because I don't know what printify is gonna return
        let firebaseUpdateBody = firebaseBody
        firebaseUpdateBody.paymentStatus = result.transaction.status;
        firebaseUpdateBody.status = "Ordered - or whatever printify result says";
        firebaseUpdateBody.paymentDate = result.success?new Date():'Not Paid';
        
        const firebaseUpdate = await $fetch("/api/set?col=orders&docId="+orderId, { method:"POST", body: firebaseUpdateBody }) //update our firebase order by id

        console.log("Firebase Update: ")
        console.log(firebaseUpdate)
        return { success: true, result: result, firebaseResult: firebase, printifyResult: printify, firebaseUpdateResult: firebaseUpdate}
      } //there shouldn't be an else - if our firebase call fails the user must have network disconnected or something
      //I guess we should still probably pop an error up that says - hey, something went wrong, check your network and try again or reach out to CS and we can process your order?
    } else {
      //ERROR HANDLING: 
      console.log(err)
      //Example Error:
      // ErrorResponse {                                                       16:02:50
      //   errors: ValidationErrorsCollection {
      //     validationErrors: {},
      //     errorCollections: { transaction: [ValidationErrorsCollection] }
      //   },
      //   params: {
      //     transaction: {
      //       amount: '62.62',
      //       paymentMethodNonce: 'tokencc_bc_zqdvtd_h53y8r_bdjdp7_8mcm5z_yf4',
      //       billing: [Object],
      //       customer: [Object],
      //       orderId: 'h1JNf5AcKyAhec1EYAEY',
      //       shipping: [Object],
      //       shippingAmount: '12.36',
      //       lineItems: [Array],
      //       options: [Object],
      //       type: 'sale'
      //     }
      //   },
      //   message: 'Customer ID has already been taken.',
      //   success: false
      // }
    }

    // if (results.success) {
    //   console.log("Transaction results: " + results.transaction)
    //   // console.log(results)
    //   return
    // } else {
    //   console.log("Transaction error: " + err)
    // }
    // console.log(results.paymentMethod.verification)
    // console.log(results.success) // false
    // console.log(results.verification.status) // "processor_declined"
    // if (results.verification.status=="gateway_rejected") {
    //   console.log("result.verification.gatewayRejectionReason")
    // }
    // console.log(results.verification.processorResponseType) // "soft_declined"
    // console.log(results.verification.processorResponseCode) // "2000"
    // console.log(results.verification.processorResponseText) // "Do Not Honor"
  })
})

const itemShippingPrice = function(variant, shippingCountry) {
  let sProfile = false

  // is this running correctly?
  // console.log("Profiles: " + variant.shippingProfile[0])
  for (let i = 0; i < variant.shippingProfile.length ; i++) {
    for (let j = 0; j < variant.shippingProfile[i].countries.length; j++) {
      if (variant.shippingProfile[i].countries[j] == shippingCountry) {
        sProfile = variant.shippingProfile[i]
        variant.shipCost = sProfile.additional_items.cost
        console.log("Shipping Cost: " + sProfile.additional_items.cost)
        return sProfile.additional_items.cost
      }
    }
  }
  if (!sProfile) {
    for (let i=0; variant.shippingProfile.length; i++) {
      for (let j=0; variant.shippingProfile[i].countries.length; j++) {
        if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
          sProfile = variant.shippingProfile[i]
          variant.shipCost = sProfile.additional_items.cost
          console.log("Shipping Cost: " + sProfile.additional_items.cost)
          return sProfile.additional_items.cost
        }
      }
    }
  }
  // console.log(sProfile.first_item.cost)
  return (sProfile.additional_items.cost > 0 ? sProfile.additional_items.cost : 1000)
}//)

// const itemPrice = computed((variant) => {
const itemPrice = function(variant, shippingCountry) {
  let sProfile = false
  var itemCost

  for (let i = 0; i < variant.shippingProfile.length ; i++) {
    let countryList = []
    countryList = variant.shippingProfile[i].countries
    for (let j = 0; j < countryList.length; j++) {
      if (countryList[j] == shippingCountry) {
        sProfile = variant.shippingProfile[i]
        itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
        console.log("Item Cost: " + itemCost)
        return itemCost
      }
    }
  }
  if (!sProfile) {
    for (let i=0; variant.shippingProfile.length; i++) {
      for (let j=0; variant.shippingProfile[i].countries.length; j++){
        if (variant.shippingProfile[i].countries[j] == "REST_OF_THE_WORLD") {
          sProfile = variant.shippingProfile[i]
          itemCost = Math.ceil(variant.cost + sProfile.first_item.cost + (variant.cost * 0.1) + 100)
          console.log("Item Cost: " + itemCost)
          return itemCost
        }
      }
    }
  }
}