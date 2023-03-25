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


import { acceptHMRUpdate, defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useUserDataStore = defineStore('userData', () => {
  const userData = useLocalStorage("userData", 
    {
      // language: "English", //Sorry, i'm not internationalizing this hard.  At least not yet.
      shippingInfo: {
        country: "US" //I guess we are defaulting to the US
      },
      billingInfo: {},
      cartInfo: {},
      // orderHistory: [{orderId:''}], //should be a list of complete order objects, preferably updated by webhooks from braintree and printify and stuff
      // wishlist: {},
      // productReviews: {},
      // productRatings: {},
      // productTags: {},
      // productCategories: {},
      // productSearchHistory: {},
      // productSearchResults: {},
      // productSearchFilters: {},
      // productSearchSort: {},
      // productSearchPagination: {},
      userInfo: {inVault: false}
    }
  )
  return { userData: skipHydrate(userData) }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserDataStore, import.meta.hot))
}