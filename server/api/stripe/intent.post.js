// import { getCurrentUser } from 'vuefire'
import { getApp, initializeApp } from 'firebase-admin/app'
import { getFirestore, FieldPath } from 'firebase-admin/firestore'
// import Stripe from 'stripe';
import { useServerStripe } from '#stripe/server'
// import * as auth from 'firebase-admin/auth'
// import { getHeaders } from 'h3'

//ORIGINAL VERSION FROM LSDOPE
//NOT AT ALL MODIFIED TO WORK WITH MICHAEL-STRAIN YET

export default defineEventHandler(async(event)=>{
  //First we make sure firebase is initialized
  try{
    getApp().name
  }catch{
    initializeApp()
  }

  //Now let's get our serverStripe Instance
  const stripe = await useServerStripe(event)
  // console.log("Stripe Instance from Intent.POST, Version: " + stripe.VERSION)

  const body = await readBody(event)
  const cart = body.cart
  const db = getFirestore()
  
  // const user = await getCurrentUser()
  const orderId = body.orderId
  // console.log(orderId)

  // const headers = getHeaders(event)
  // const token = headers.token
  //PAUSING AUTH
  // const verify = await auth.getAuth().verifyIdToken(token)
  
  var cartItems = []
  for(let i=0; i<cart.length;i++){
    //we are going to lookup the item+variant id's in the db
    cartItems.push(cart[i].id)
  }
  // console.log("Searching for cartItems: " + cartItems)

  const fire = await (db.collection('products').where(FieldPath.documentId(),'in',cartItems)).get()
  var cartTotal=0 //Stripe will throw an error if it remains 0
  if(fire.empty){
    // console.log("No valid products found :(")
    return {error:'Invalid Product'}
  }else{
    fire.forEach((product)=>{
      // console.log(product.get('title'))
      for(let i=0; i<cart.length;i++){
      //we are going to lookup the item+variant id's in the db
      // for(let x=0; x<products.length; x++){
        if(cart[i].id==product.id){
          // console.log("Found the product in firestore")
          let variants = product.get('variants')
          for(let y=0; y<variants.length; y++){
            if(cart[i].variantId==variants[y].id){
              // console.log("Found our product-variant combo in firestore :D")
              cartTotal+=(variants[y].price + variants[y].shipCost) * cart[i].quantity
            }
          }
        }
      }
    })
  }
  
  const paymentIntentArgs = {
    amount: cartTotal,
    currency: 'usd',
    automatic_payment_methods: {enabled: true},
    metadata:{orderId:orderId},
    statement_descriptor: "LSDOPE ORDER", //max 22 chars
    statement_descriptor_suffix: "LSDOPE ORDER", //max 22 chars
    //it'd be nice to add our orderId somewhere in stripe as well...

    //Can't do below until we are back on the client end I think
    // confirm: true,
    // return_url:'https://lsdope.com/shop/orders/'+orderId
  }

  //PAUSING AUTH
  //get user doc from user collection
  // const userDocRef = db.collection('users').doc(verify.uid)
  // const data = await userDocRef.get()
  // if(data.exists){
  //   paymentIntentArgs.customer = data.get('userInfo.stripeCustomerId')
  //   //this should always be found, because we should make a stripeCustomerId everytime we make a new user
  //   paymentIntentArgs.setup_future_usage = "on_session" //If a customer is not present in the checkout flow, use off_session (manual charge type thing?)
  // }

  const paymentIntent = await stripe.paymentIntents.create(paymentIntentArgs);
  const orderDocRef = db.collection('orders').doc(orderId)
  // const order = await orderDocRef.get()
  // if(!order.exists){
  //   console.error("No order doc was found, wtf")
  //   return {error: "No firebase order found to associate with this payment intent"}
  // }

  orderDocRef.update({
    'paymentIntentId':paymentIntent.id,
    'paymentIntentTotal': cartTotal
  })

  // console.log("SUCCESS")
  
  return paymentIntent.client_secret
})