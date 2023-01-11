import { acceptHMRUpdate, defineStore } from 'pinia'

const opts = {
  method: 'GET',
  // mode: 'no-cors',
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
    'Access-Control-Allow-Origin': '*',
  },
};


export const useProductDataStore = defineStore('productData', {
  state: () => {
    return {
      products: [],
    }
  },

  // actions: {
  //   async fetchProducts() {
  //     const response = await fetch('https://api.printify.com/v1/shops/6483145/products.json', opts)
  //     this.products = await response.json()
  //   },
  //   async refreshProducts() {
  //     const refresh = () => refreshNuxtData('products')
  //     refresh()
  //   }
  // },
})

// const { data: products, pending, refresh } = useLazyFetch('https://api.printify.com/v1/shops/6483145/products.json', opts, { lazy: true, server: true, refresh: true })
// // const { data : products, pending } = await useAsyncData('products',()=>$fetch('https://api.printify.com/v1/shops/6483145/products.json', opts), {watch:true}) // lazy: true, server:true, refresh:true?
// const refreshAll = () => refreshNuxtData('products')

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductDataStore, import.meta.hot))
}