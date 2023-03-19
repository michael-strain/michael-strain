<!-- eslint-disable vue/multi-word-component-names -->
<!-- This will be the Order ID page - users will be redirected here when attempting to view their own order information - and should have access to options like - contact customer service, and order again.
We should display all the relevant order information possible, including PUBLIC case notes if present. -->
<template>
  <div v-if="auth.currentUser">
    <v-container>
      <v-card
        v-for="(order, item) in pageOrder"
        :key="item"
      >
        <br><br><br>
        <p>
          ID: {{ order.id }}<br>
          Status: {{ order.status }}<br><br>
          <!-- {{ order.create_date }} -->
          UserInfo: {{ order.userInfo }}<br><br>
          ShippingInfo: {{ order.shippingInfo }}<br><br>
          BillingInfo: {{ order.billingInfo }}
        </p>
      </v-card>
    </v-container>
  </div>
  <div v-else>
    <NuxtLink to="/login"><v-btn>Login</v-btn></NuxtLink>
  </div>
</template>

<script setup>
import { getAuth } from 'firebase/auth'
// import { useRoute } from 'nuxt'
import { useOrderDataStore } from '~/stores/orderData'
import { ref, onMounted } from 'vue'

const auth = getAuth()

const pageOrder = ref([])
let idBool = false


//We should check the user's order data store first to see if stored information is present
const orders = useOrderDataStore()
var foundOrderLocally = false

const route = useRoute()
const orderId = route.query.id

try{
  if (orderId.length>0) {
    idBool = true
  }
} catch(e){
  console.log("No ID found, going to display all of this user's orders.")
}

onMounted(async()=>{

  pageOrder.value = []

  //TEMPORARILY COMMENTING OUT for debugging
  //I need to first authenticate the user
  const uid = auth.currentUser.uid
  console.log("uid: " + uid)

  if (!idBool && orders.orderData.length>0){
    foundOrderLocally = true
    console.log("Found local orders")
  }

  for (let i=0; i<orders.orderData.length; i++) {
    let order = orders.orderData[i]
    if (idBool && order.id==orderId){
      pageOrder.value = order
      foundOrderLocally = true
      console.log("Found the specific order by ID in client local storage :D")
      break
    } else if(!idBool){
      pageOrder.value.push(order)
    }
  }

  //get the order from firebase if the uid is a match
  if(!foundOrderLocally){
    console.log("Did not find order in client local storage :'(")
    //Test order ID: IWseAIanYa7S8Qaiflvx
    // query.col, query.field, query.operator, query.value
    console.log("Searching for Orders by User ID: " + uid)
    const firebaseOrders = await $fetch('/api/queryItem?col=orders&field=uid&operator===&value='+uid, {method: "GET"})
    
    console.log("Finished fetching your shit")
    console.log(firebaseOrders)

    if (firebaseOrders.length>0) {
      //Yay we have firebase orders i think!
      //Now we should store the orders locally then parse through them for our individual order ID ;)
      orders.$patch({orderData: firebaseOrders})
      if(!idBool){
        pageOrder.value = orders.orderData
      } else {
        for (let i=0; i<firebaseOrders.length; i++){
          let doc = firebaseOrders[i]
          
          if (idBool && orderId==doc.id){
            pageOrder.value = doc //does this work?  or can we just use doc?
            break
          }
        }
      }

    }
  }
})
</script>