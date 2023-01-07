<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- Requires a Product ID -->
    <!-- Requires a Shop ID  -->
    <!-- This is the product specific page based on the name passed in through the url.
    Check out Vuetify slide groups for showcasing art on a variety of printify products.
    https://next.vuetifyjs.com/en/components/slide-groups/ -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const shopId = '6483145'
const baseUrl = `https://api.printify.com/v1/shops/${shopId}`
const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q'
const scopes = ['shops.manage','shops.read','catalog.read','orders.read','orders.write','products.read','products.write','webhooks.read','webhooks.write','uploads.read','uploads.write','print_providers.read']
const getProductsQuery = `/products.json`
// const idQuery = `/shops/${shopId}/products/${productId}.json`
// const orderIdQuery = `/shops/${shopId}/orders/${orderId}.json`
const postOrderQuery = `/orders.json`
// const sendOrderToProduction = `/shops/${shopId}/orders/${orderId}/send_to_production.json`
const postCalcShipping = `/orders/shipping.json`
// const postCancelUnpaidOrder = `/orders/${orderId}/cancel.json`

//
//  Now we are going to specify required inputs for the queries
//

// POST Order Properties


</script>