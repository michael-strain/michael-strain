import { initializeApp, getApp } from 'firebase-admin/app'
import { getFirestore, FieldValue } from 'firebase-admin/firestore'
import { useServerStripe } from '#stripe/server'
import { getRequestHeaders, readBody, readRawBody } from 'h3'

//ORIGINAL FROM LSDOPE
//NOT AT ALL UPDATED TO WORK WITH MICHAEL-STRAIN

export default defineEventHandler(async(event) => {
  //Need to authenticate requests to ensure they are coming ONLY from stripe
  //https://stripe.com/docs/webhooks#verify-official-libraries
  try{
    getApp().name
  }catch{
    initializeApp()
  }
  
  const headers = await getRequestHeaders(event)
  const sig = headers['stripe-signature'];
  // console.log(sig)

  const hookSecret = useRuntimeConfig().public.WTFAMI=="DEV" ? "whsec_e965f4b75ebed3d661c42009cc96cd8c9607b198582f614af2d75ad0a89b4bd3" : "whsec_4hn3kbbB2U2FZ8aUa5RvnbjtPOCvFyFS"

  // const temphook = "whsec_e965f4b75ebed3d661c42009cc96cd8c9607b198582f614af2d75ad0a89b4bd3"
  const stripe = await useServerStripe(event)

  const body = await readBody(event)
  // console.log(body)

  const rawBody = await readRawBody(event, 'utf-8')
  const stripeEvent = stripe.webhooks.constructEvent(rawBody, sig, hookSecret);
  if(!stripeEvent){
    // console.log("Stripe Signature Invalid.")
    return { error: "Invalid Stripe Signature"}
  }
  // console.log(stripeEvent)
  // }

  
  //Required fields:
  // const userId = body.uid
  // const args = body.email ? {email:body.email, metadata:{uid: userId}} : { metadata:{uid: userId }}

  //Need to get orderId from body and use it to update order doc in firestore
  const orderId = body.data.object.metadata.orderId

  if(!orderId){
    // console.log("No Order ID associated with payment.  Was this a test?  Did I pass?")
    return {error: "No Order ID associated with Payment"}
  }

  const db = getFirestore()
  const docRef = db.collection('orders').doc(orderId)
      
    docRef.update({
      paymentId: body.data.object.id,
      paymentStatus: body.data.object.status,
      paymentStatusDate: body.data.object.created,
      status: "Sale Succeeded",
      statusLog:FieldValue.arrayUnion({msg:"Sale Succeeded",date:new Date(),author:"LSDOPE", displayName:'LSDope'}),
      paymentReceived: body.data.object.amount_received
      // cartTotal: (itemTotal + shipTotal)/100
    })

    // if(body.data.object.livemode){
    //TODO
    //post the order to printify production and get that order out the door baby!!!
    const docGet = (await docRef.get()).data()
    const lineItems = docGet.lineItems
    const userInfo = docGet.userInfo


    //this is the best place for user purchasedItems addition
    let idArray = []
    for(let i=0;i<lineItems.length;i++){
      //I hate that I'm doing this but don't know a better way
      db.collection('users').doc(userInfo.uid).update({'purchasedItems': FieldValue.arrayUnion(lineItems[i].id)})
    }
    
    const shippingInfo = docGet.shippingInfo
    var printifyLineItems = []
    for(let i=0; i<lineItems.length; i++){
      let productDocRef = db.collection('products').doc(lineItems[i].id)
      productDocRef.update({
        sales:FieldValue.increment(lineItems[i].quantity),
        revenue:FieldValue.increment((lineItems[i].price + lineItems[i].shipCost)*lineItems[i].quantity)
      })

      //In the future, this is where we will utilize an isPrintify field to determine if there are ANY printify line items to be pushed, and will then trigger a printify order only if needed
      printifyLineItems.push({
        product_id:lineItems[i].id,
        variant_id:lineItems[i].variantId,
        quantity:lineItems[i].quantity
      })

      //And now let's update our shoppers/wishers subcollections
      let shopperDocRef = db.collection('products').doc(lineItems[i].id).collection('shoppers').doc(userInfo.uid)
      shopperDocRef.set({
        purchases:FieldValue.arrayUnion({
          'date': new Date(),
          'price': lineItems[i].price,
          'shipCost': lineItems[i].shipCost,
          'quantity': lineItems[i].quantity,
          'orderId':orderId,
        })
      }, {merge:true})

      let wishersDocRef = db.collection('products').doc(lineItems[i].id).collection('wishers').doc(userInfo.uid)
      try{
        wishersDocRef.update({ //will fail if doc doesn't exist, no worries
          purchased:true,
          purchaseDate:new Date(),
          purchasePrice:lineItems[i].price,
          purchaseShipCost:lineItems[i].shipCost,
          purchaseQty:lineItems[i].quantity
        })
      } catch {
        //I don't care lol
      }
    }

    if(body.data.object.livemode){


      const printifyOrder = {
        "external_id": orderId,
        "label":orderId, //this is like an order number i think
        "line_items": printifyLineItems, //this should just have a product_id, variant_id, and quantity
        "shipping_method": 1, //2 for express shipping
        "send_shipping_notification": true,
        "address_to": {
          "first_name": shippingInfo.firstName,
          "last_name": shippingInfo.lastName,
          "email": userInfo.email,
          "phone": userInfo.phone,
          "country": shippingInfo.country,
          "region": shippingInfo.region,
          "address1": shippingInfo.address1,
          "address2": shippingInfo.address2,
          "city": shippingInfo.city,
          "zip": shippingInfo.zip,
        }
      }

      //Instead of using a retarded broken endpoint, let's just directly call printify here
      const shopId = useRuntimeConfig().PRINTIFY_SHOP_ID
      const key = useRuntimeConfig().PRINTIFY_API_KEY

      //maybe we need to manually map readBody(event) to fields that we pass in the body?
      const printifyOrderId = await $fetch('https://api.printify.com/v1/shops/'+shopId+'/orders.json', {
        method: 'POST',
        headers: { 'Authorization': 'Bearer ' + key },
        body: printifyOrder
      })

      // const psec = String(useRuntimeConfig().PRINTIFY_WEBHOOK_SECRET)
      // const hmac = createHmac('sha256', Buffer.from(psec));
      // //we should likely still use some kind of secrets manager for this one, or at least allow for configuration and rotation since we are signing fucking payments with it
      // hmac.update(JSON.stringify(printifyOrder))
      // const hash = hmac.digest('hex')

      // //Does this update our printifyOrderId?  Or should we return that data and update with the other stuff below?
      // const printifyOrderId = await $fetch('/api/printify/order',{method:'POST',body:printifyOrder,headers:{token:"sha256="+hash}})

      docRef.update({
        status: "Submitted to Manufacturer",
        statusLog:FieldValue.arrayUnion({msg:"Submitted to Manufacturer",date:new Date(),author:"LSDOPE",displayName:'LSDope'}),
        printifyOrderId: printifyOrderId,
      })
      //order status will update after printify posts their own webhook

      //Now let's send our customer an email too :D
      await $fetch('/api/brevo/order-success',{method:'POST',body:{cart:lineItems, shipping:shippingInfo, user:userInfo, orderId:orderId}})

    } 

  // const customer = await stripe.customers.create(args)
  // const db = getFirestore()
  // db.collection("users").doc(userId).update({stripeCustomerId:customer.id})
  
  return { success:true }
})