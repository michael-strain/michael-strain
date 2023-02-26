import braintree from 'braintree'
import { getQuery, readBody } from 'h3'


  // Need to post the nonce from the client as body
  // Need to get cart data from the client
  // Need to build our pricing and shipping data in order to set the transaction amount without depending on any info from the client (except what is in their cart) to prevent tampering
  // Need to post the device data from the client as body (cart data should be in the device data)
  // Need to post the shipping address from the client as body (cart data should be in the device data)


export default defineEventHandler(async (event) => {

  //Merchant ID
  const merchantId = 'dwt5hs5tpmvyy2vy'
  //Public Key
  const publicKey = 'p6c57mpq53sxvc88'
  //Private Key
  const privateKey = 'eb0903e8dbaaa945d611a39a62af6139'

  var nonce = null
  var deviceData = null
  var cart = null
  var cartItems = null
  // var userData = null
  var totalCost = null
  var shippingInfo = null
  // var shippingCountry = null

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
  if (body.cart) {
    cart = body.cart
    // for (let i = 0; i < cart.length; i++) {
    //   cartItems.itemId.push(cart[i].id)
    //   for (let j=0; j < cart[i].variants.length; j++) {
    //     // let cartItem = {
    //     //   itemId: cart[i].id,
    //     //   variantId: cart[i].variants[j].id,
    //     //   quantity: cart[i].variants[j].quantity
    //     // }
    //     cartItems.variantId.push(cart[i].variants[j].id)
    //     cartItems.quantity.push(cart[i].variants[j].quantity)  // Are we sure this isn't cartQty here?

    //     //Create an array of all the variants of all items in cart in order to query the database for the price of each variant
    //     //See shop page for example of getting itemprice and shipcost for each variant
    //     //Multiply item cost and ship cost by quantity
    //     // totalAmount += //not based on cart, fetch it separately from our server or DB
    //   } 
    // }
  }
  if (body.cartItems){
    cartItems = body.cartItems
  }
  if (body.shipping) {
    shippingInfo = body.shipping
    console.log(shippingInfo)
  }

  //We need to fetch our product data from the DB in order to calculate the price of each variant
  //Can we do some kind of query to get all the variants in the cart?
  // const cartItems = $fetch('/api/shop/cart?' + uid ? 'uid=' + uid: 'test', { method: 'GET' })

  console.log(await body)

  //Time to put our data into the braintree transaction

  const products = await $fetch('/api/queryItem?' + 'col=products' + '&field=id&operator===&value=' + cartItems.itemId , { method: 'GET' })

  for (let i = 0; i < products.length; i++) {
    for(let j = 0; j < products[i].variants.length; j++) {
      if(products[i].variants[j].id === cartItems.variantId[j]) {
        console.log("Found a match at j-index: " + j)
        let thisItemPrice = itemPrice(products[i].variants[j], shippingInfo.country)
        let thisShipCost = itemShippingPrice(products[i].variants[j], shippingInfo.country)
        let thisItemQty = cartItems.quantity[j]
        // console.log(thisItemQty)
        totalCost += ((thisItemPrice + thisShipCost) * thisItemQty)/100
      }
    }
  }

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
  const gateway = await new braintree.BraintreeGateway({
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
  // Create a transaction
  await gateway.transaction.sale({
    amount: totalCost,
    paymentMethodNonce: nonce,
    // deviceData: deviceData,
    options: {
      submitForSettlement: true

      // This could come in handy
      // verifyCard:true,
      // verificationMerchantAccountId: 'exampleMerchantAccountId',
      // verificationAmount: '1.00',
    }

  }, (err, results) => {
    console.log(results)
    console.log(err)
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






//OLD

// import braintree from 'braintree'
// import { getQuery, readBody } from 'h3'
// import { getAuth } from 'firebase/auth'

// export default defineEventHandler(async (event) => {

//   //Merchant ID
//   const merchantId = 'dwt5hs5tpmvyy2vy'
//   //Public Key
//   const publicKey = 'p6c57mpq53sxvc88'
//   //Private Key
//   const privateKey = 'eb0903e8dbaaa945d611a39a62af6139'

//   let nonce = null
//   let deviceData = null
//   let cart = null
//   let shippingCountry = null

//   const auth = getAuth();
//   const uid = auth.currentUser.uid ? auth.currentUser.uid : 'test'
//   const clientAuthorization = $fetch('/api/payment/braintree/clientToken?' + uid ? 'uid=' + uid: 'test', { method: 'GET' })
//   console.log(clientAuthorization)


//   const body = await readBody(event)
//   console.log(body)
//   if (body.nonce) {
//     nonce = body.nonce
//   }
//   if (body.deviceData) {
//     deviceData = body.deviceData
//   }
//   if (body.cart) {
//     cart = body.cart
//   } else {
//     return {
//       status: 400,
//       body: 'No cart data'
//     }
//   }
//   if (body.shippingCountry) {
//     shippingCountry = body.shippingCountry
//   } else {
//     return {
//       status: 400,
//       body: 'No shipping country'
//     }
//   }

//   //Get device data from client
//   const deviceDataFromClient = deviceData

//   // Use cart data to determine pricing and shipping


//   // Need to post the nonce from the client as body
//   // Need to get cart data from the client
//   // Need to build our pricing and shipping data in order to set the transaction amount without depending on any info from the client (except what is in their cart) to prevent tampering
//   // Need to post the device data from the client as body (cart data should be in the device data)
//   // Need to post the shipping address from the client as body (cart data should be in the device data)

//   // // Create a Braintree Gateway
//   // const gateway = new braintree.BraintreeGateway({
//   //   environment: braintree.Environment.Sandbox,
//   //   merchantId: merchantId,
//   //   publicKey: publicKey,
//   //   privateKey: privateKey
//   // })

//   const gateway = new braintree.connect({
//     environment: braintree.Environment.Sandbox,
//     merchantId: merchantId,
//     publicKey: publicKey,
//     privateKey: privateKey
//   })

//   // const clientToken = nonce

//   // Create a transaction
//   gateway.transaction.sale({
//     amount: '10.00',
//     paymentMethodNonce: nonce,
//     deviceData: deviceDataFromClient,
//     options: {
//       submitForSettlement: true
//     }

//   }, (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     console.log(result)
//   })
// })

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
  // const cart = useCartDataStore()
  // const user = useUserDataStore()
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
  // console.log("Item Cost: " + itemCost)
  // return itemCost // Profit margin is 10% of cost + $1.00
}//)