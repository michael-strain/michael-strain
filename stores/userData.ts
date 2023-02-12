//country and language: default to US and English
//save all checkout info on client side
//user id and auth stuff for less logging in
//theme and color preferences

// Suggested By CoPilot
  // shipping info
  // billing info
  // payment info
  // cart info
  // order history
  // wishlist
  // product reviews
  // product ratings
  // product tags
  // product categories
  // product search history
  // product search results
  // product search filters
  // product search sort
  // product search pagination
  // product search results
  // product search filters


import { acceptHMRUpdate, defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useUserDataStore = defineStore('userData', () => {
  const userData = ref(useLocalStorage("userData", [
    {
      country: "US",
      language: "English",
      shippingInfo: {},
      billingInfo: {},
      paymentInfo: {},
      cartInfo: {},
      orderHistory: {},
      wishlist: {},
      // productReviews: {},
      // productRatings: {},
      // productTags: {},
      // productCategories: {},
      // productSearchHistory: {},
      // productSearchResults: {},
      // productSearchFilters: {},
      // productSearchSort: {},
      // productSearchPagination: {},
    }
  ]))
  return {
    userData,
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserDataStore, import.meta.hot))
}