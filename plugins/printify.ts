export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      fetchPrintify : async () => {
        const url = 'https://api.printify.com/v1/shops/6483145/products.json'
        const opts = {
          method: 'GET',
          // mode: 'no-cors',
          headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
            // 'Access-Control-Allow-Origin': 'https://localhost:3000',
            'User-Agent': 'Michael-Strain Nuxt App'
          },
        };
        const { data:printifyProducts } = await useFetch(url, opts)
        console.log(printifyProducts)
        
        for (let i = 0; i < printifyProducts.data.length; i++) {
          let product = printifyProducts.data[i]
          //store the product as a document in the products firestore collection
          // https://firebase.google.com/docs/firestore/manage-data/add-data
          
          console.log("Product #"+i+": "+product.title)

          // const { result } = await $fetch("/api/add?col=products", {
          //   method: 'POST',
          //   body: JSON.stringify(product)
          // })
        } 
      }
    }
  }
})