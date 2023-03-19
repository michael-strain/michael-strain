import { acceptHMRUpdate, defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useProductDataStore = defineStore('productData', () => {
  const productData = useLocalStorage("productData", [])
  return { productData: skipHydrate(productData) }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductDataStore, import.meta.hot))
}