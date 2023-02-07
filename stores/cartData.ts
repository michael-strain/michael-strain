import { acceptHMRUpdate, defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useCartDataStore = defineStore('cartData', () => {
  const cartData = ref(
    useLocalStorage("cartData", [

    ]
        //   {
        //     id: "0",
        //     title: "Loading",
        //     description: "Loading",
        //     tags: [
        //         "Non-Existent",
        //     ],
        //     options: [
        //         {
        //             name: "There Aren't Any",
        //             type: "null",
        //             values: [
        //                 {
        //                     id: 0,
        //                     title: "There Are No Options"
        //                 }
        //             ]
        //         }
        //     ],
        //     variants: [
        //         {
        //             id: 0,
        //             sku: "0",
        //             cost: 999,
        //             price: 1009,
        //             title: "This Product is Not Loaded",
        //             grams: 45300,
        //             is_enabled: false,
        //             is_default: true,
        //             is_available: false,
        //             options: [
        //                 0
        //             ]
        //         }
        //     ],
        //     images: [
        //         {
        //             src: "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/145/mug-11oz.jpg",
        //             variant_ids: [
        //                 33719
        //             ],
        //             position: "front",
        //             is_default: false
        //         },
        //         {
        //             src: "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/146/mug-11oz.jpg",
        //             variant_ids: [
        //                 33719
        //             ],
        //             position: "other",
        //             is_default: false
        //         },
        //         {
        //             src: "https://images.printify.com/mockup/5d39b159e7c48c000728c89f/33719/147/mug-11oz.jpg",
        //             variant_ids: [
        //                 33719
        //             ],
        //             position: "other",
        //             is_default: true
        //         }
        //     ],
        //     created_at: "2023-01-17 23:14:00+00:00",
        //     updated_at: "2023-01-17 13:14:00+00:00",
        //     visible: true,
        //     is_locked: false,
        //     blueprint_id: 0,
        //     user_id: 0,
        //     shop_id: 6483145,
        //     print_provider_id: 0,
        //     print_areas: [
        //         {
        //             variant_ids: [
        //                 0
        //             ],
        //             placeholders: [
        //                 {
        //                     position: "front",
        //                     images: [
        //                         {
        //                             id: "5c7665205342af161e1cb26e",
        //                             name: "Test.png",
        //                             type: "image/png",
        //                             height: 5850,
        //                             width: 4350,
        //                             x: 0.5,
        //                             y: 0.5,
        //                             scale: 1.01,
        //                             angle: 0
        //                         }
        //                     ]
        //                 }
        //             ],
        //             background: "#ffffff"
        //         }
        //     ],
        //     sales_channel_properties: []    
        // }
    )
  )
  return {
    cartData,
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
  import.meta.hot.accept(acceptHMRUpdate(useCartDataStore, import.meta.hot))
}