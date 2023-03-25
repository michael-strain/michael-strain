<!-- eslint-disable vue/multi-word-component-names -->
<!-- This will be the Order ID page - users will be redirected here when attempting to view their own order information - and should have access to options like - contact customer service, and order again.
We should display all the relevant order information possible, including PUBLIC case notes if present. -->
<template>
  <div>
    <v-container>
      <v-title>Some shit.</v-title>
      <v-subtitle>
        {{ pageOrder.id }}
        {{ pageOrder.status }}
        <!-- {{ pageOrder.create_date }} -->
        {{ pageOrder.userInfo }}
        {{ pageOrder.shippingInfo }}
        {{ pageOrder.billingInfo }}
      </v-subtitle>
    </v-container>
  </div>
</template>

<script setup>
// import { getQuery } from 'h3'
import { getAuth } from 'firebase/auth'
import { useOrderDataStore } from '~/stores/orderData'
import { ref, onMounted } from 'vue'

const pageOrder = ref({})


const route = useRoute()
const orderId = route.params.id

//We should check the user's order data store first to see if stored information is present
const orders = useOrderDataStore()
var foundOrderLocally = false

onMounted(async()=>{
  //I need to first authenticate the user
  const auth = await getAuth()
  const uid = auth.currentUser.uid
  console.log("uid: " + uid)

  for (let i=0; i<orders.orderData.length; i++) {
    let order = orders.orderData[i]
    if (order.id==orderId){
      pageOrder.value = order
      foundOrderLocally = true
      console.log("Found the order in client local storage :D")
      break
    }
  }

  //get the order from firebase if the uid is a match
  if(!foundOrderLocally){
    console.log("Did not find order in client local storage :'(")
    //Test order ID: IWseAIanYa7S8Qaiflvx
    // query.col, query.field, query.operator, query.value
    const firebaseOrder = await $fetch('/api/queryItem?col=orders&field=id&operator===&value='+orderId, {method: "GET"})
    pageOrder.value = firebaseOrder
    console.log("Finished fetching your shit")
    console.log(firebaseOrder)
  }
})

//If not, we can try to fetch the order from the Firebase DB WHERE uid=uid

</script>