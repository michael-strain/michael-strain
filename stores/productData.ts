import { acceptHMRUpdate, defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useProductDataStore = defineStore('productData', () => {
  const productData = ref(useLocalStorage("productData", []))
  return {
    productData,
  }
});
  // const products = computed(() => productData.value.products.data)},
  // const products = ref([])

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
  // getters: {
  //     getProducts: (state) => state.products,
  //   },

// const { data: products, pending, refresh } = useLazyFetch('https://api.printify.com/v1/shops/6483145/products.json', opts, { lazy: true, server: true, refresh: true })
// // const { data : products, pending } = await useAsyncData('products',()=>$fetch('https://api.printify.com/v1/shops/6483145/products.json', opts), {watch:true}) // lazy: true, server:true, refresh:true?
// const refreshAll = () => refreshNuxtData('products')

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductDataStore, import.meta.hot))
}