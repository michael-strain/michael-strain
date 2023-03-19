import { acceptHMRUpdate, defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useOrderDataStore = defineStore('orderData', () => {
  const orderData = useLocalStorage("orderData", [])
  return { orderData: skipHydrate(orderData) }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useOrderDataStore, import.meta.hot))
}