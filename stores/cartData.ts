import { acceptHMRUpdate, defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useCartDataStore = defineStore('cartData', () => {
  const cartData = useLocalStorage("cartData", [])
  return { cartData: skipHydrate(cartData) }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartDataStore, import.meta.hot))
}