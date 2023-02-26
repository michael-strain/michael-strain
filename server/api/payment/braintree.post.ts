import braintree from 'braintree'
import { getQuery, readBody } from 'h3'

export default defineEventHandler((event) => {

  //Merchant ID
  const merchantId = 'dwt5hs5tpmvyy2vy'
  //Public Key
  const publicKey = 'p6c57mpq53sxvc88'
  //Private Key
  const privateKey = 'eb0903e8dbaaa945d611a39a62af6139'

  var nonce
  var deviceData
  var cart
  var shippingInfo
  var shippingCountry

  const body = readBody(event)
  // console.log(body)
  if (body.nonce) {
    nonce = body.nonce
  }
  if (body.deviceData) {
    deviceData = body.deviceData
  }
  if (body.cart) {
    cart = body.cart
  }
  if (body.shipping) {
    shippingInfo = body.shippingInfo
  }
  console.log(body)
  // if (body.shippingCountry) {
  //   shippingCountry = body.shippingCountry
  // } else {
  //   return {
  //     status: 400,
  //     body: 'No shipping country'
  //   }
  // }

  // Use cart data to determine pricing and shipping


  // Need to post the nonce from the client as body
  // Need to get cart data from the client
  // Need to build our pricing and shipping data in order to set the transaction amount without depending on any info from the client (except what is in their cart) to prevent tampering
  // Need to post the device data from the client as body (cart data should be in the device data)
  // Need to post the shipping address from the client as body (cart data should be in the device data)

  // Create a Braintree Gateway
  const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: merchantId,
    publicKey: publicKey,
    privateKey: privateKey
  })

  // Create a transaction
  gateway.transaction.sale({
    amount: '10.00',
    paymentMethodNonce: nonce,
    deviceData: deviceData,
    options: {
      submitForSettlement: true

      // This could come in handy
      // verifyCard:true,
      // verificationMerchantAccountId: 'exampleMerchantAccountId',
      // verificationAmount: '1.00',
    }

  }, (err, results) => {
    console.log("Results: " + results)
    console.log("Err: " + err)
    // if (results.success) {
    //   console.log(results.transaction)
    //   // console.log(results)
    //   return
    // } else {
    //   console.log(err)
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