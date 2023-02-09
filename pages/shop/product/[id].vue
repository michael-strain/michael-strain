<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!--{{ $route.params }} -->
    <!-- {{ $route.params.id }}  -->
    <!-- {{ productTitle }} -->
    <!-- {{ store.products }} -->
    <!-- Requires a Product ID -->
    <!-- Requires a Shop ID  -->
    <!-- This is the product specific page based on the name passed in through the url.
    Check out Vuetify slide groups for showcasing art on a variety of printify products.
    https://next.vuetifyjs.com/en/components/slide-groups/ -->
    
    <ShopHeader />

    <!-- TODO Need to refactor this page to use '/api/query?col=products' if the product ID isn't available in storage for some reason -->
    <!-- TODO Also need to do variant selector and print variant info and add variant to cart and stuff -->

    <v-container class="">
      <v-row dense>
        <v-col cols="12">
          <div class="flex flex-wrap">
            <v-card class="bg-white w-full text-wrap rounded-xl border flex m-5 p-2 shadow-xl">
              <!-- New way -->
              <div v-if="product">
                <div class="">
                  <v-img
                    class="sm:(w-1/2 h-full) flex sm<:w-full sm:float-left"
                    :src="product.images[0].src"
                  />
                </div>
                <div>
                  <div class="sm<:w-full sm:w-1/2 float-left sm:float-none">
                    <v-card-title class="bg-surface">
                      <p
                        :style="{fontFamily: 'Roboto Slab'}"
                        class="text-wrap text-4xl m-3 text-center"
                      >
                        {{ product.title }}
                      </p>
                    </v-card-title>
                    <v-card-title class="bg-surface text-center">
                      {{ product.variants[product.variantNum].title }}
                    </v-card-title>
                    <!-- <v-divider /> -->

                    <v-card-subtitle
                      :style="{fontFamily: 'Roboto Slab'}"
                      class="text-wrap text-2xl"
                      v-html="product.description"
                    />

                    <v-card-actions class="justify-center bg-surface">
                      <p
                        class="m-5 text-3xl font-semibold text-green-600"
                        size=""
                      >
                        {{ formatter.format((product.variants[product.variantNum].price)/100) }}
                      </p>
                      <v-btn
                        class="text-wrap !font-semibold !text-green-600 !text-2x3 hover:(!text-green-800)"
                        variant="outlined"
                        :style="{fontFamily: 'Roboto Slab'}"
                        @click="addToCart(product, product.variants[product.variantNum])"
                      >
                        <p class="text-base">
                          Add to Cart
                        </p>
                      </v-btn>
                    </v-card-actions>
                    <v-divider />

                    <!-- <v-radio-group
                      v-model="product"
                      :style="{fontFamily: 'Roboto Slab'}"
                      class="text-wrap text-2xl m-3"
                    >
                      <v-radio
                        v-for="(variant, index) in product.variants"
                        :key="index"
                        :label="variant.title"
                        :value="variant.title"
                      />
                    </v-radio-group> -->

                    <v-select
                      :default="product.variants[product.variantNum].title"
                      label="Select a variant"
                      :items="product.variants"
                      variant="solo"
                      @update:model-value="changeProductVariantNum(product, $event)"
                    /> 
                    More Variant data can go here :)
                    <p>Handling Time: {{ product.variants[product.variantNum].handlingTime }} {{ product.variants[product.variantNum].handlingTimeUnit }}s</p>
                    <p>SKU: {{ product.variants[product.variantNum].sku }}</p>
                  </div>
                
                  <!-- Make button green -->

                  <!-- <v-list v-for="(variant, index) in product.variants" :key="index" @click="product.variantNum = index">
                    <v-list-item
                      :style="{fontFamily: 'Roboto Slab'}"
                      class="text-wrap text-2xl m-3"
                    >
                      {{ variant.title }}
                    </v-list-item>>
                  </v-list> -->
                  


                  <!-- <v-select
                    label="Select a variant"
                    :items="product.variants"
                    chips
                    variant="solo"
                  /> -->
                  <!-- :default="product.variants[product.variantNum].title" -->

                  
                  <!-- <v-card-text v-if="product.qty>0" class="float-right">{{ product.qty }} Items In Cart</v-card-text> -->
                </div>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>




  <!--Product Container-->
  <!-- <v-container class="">
      <v-row dense>
        <v-col cols="12">
          <div class="flex flex-wrap">
            <v-card class="bg-white w-full text-wrap rounded-xl border flex m-5 p-2 shadow-xl">
              <v-img
                class="sm:(w-1/2 h-full) flex sm<:w-full sm:float-left"
                src="https://images-api.printify.com/mockup/63b7410a0b5a3e94ee0565ad/88141/58694/glowing-mushroom-mug.jpg"
              />

              <div class="sm<:w-full sm:w-1/2 float-left sm:float-none">
                <v-card-title class="bg-surface">
                  <p
                    :style="{fontFamily: 'Roboto Slab'}"
                    class="text-wrap text-4xl m-3"
                  >
                    Glowing Mushroom Mug
                  </p>
                </v-card-title>

                <v-card-subtitle
                  :style="{fontFamily: 'Roboto Slab'}"
                  class="text-wrap"
                >
                  <p class="text-2xl p-3 pt-5">
                    This mug gets its magic from a heat-reactive surface. The ceramic cup reveals the design once the mug gets warm. It will go back to its original colors, black outside and white inside, when it cools down. The C-shaped handle helps keep a sturdy grip. This mug holds 11 ounces – plenty for that big morning cup of coffee. Hand washing recommened. 
                  </p>
                </v-card-subtitle>

                <v-card-actions class="pb-5">
                  <p
                    class="m-5 text-3xl font-semibold text-green-600"
                    size=""
                  >
                    $15
                  </p>

                  <v-btn
                    class="text-wrap !font-semibold !text-green-600 !text-2x3 hover:(!text-green-800)"
                    variant="outlined"
                    :style="{fontFamily: 'Roboto Slab'}"
                    @click="addToCart(item)"
                  >
                    <p class="text-base">
                      Add to Cart
                    </p>
                  </v-btn>
                </v-card-actions>
              </div>
            </v-card>
          </div> 
        </v-col>
      </v-row>
    </v-container> -->
</template>








<script setup>

// Time to introduce Variants

import { ref, computed, reactive } from 'vue'
import { useProductDataStore } from '~/stores/productData';
import { useCartDataStore } from '~/stores/cartData';
import { storeToRefs } from 'pinia'

const route = useRoute()
const productId = ref(route.params.id)
const product = ref()

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

//When the page loads, get the data from the store using our ID
onMounted(async () => {
  const store = useProductDataStore()
  product.value = store.productData.find((item) => item.id == productId.value)
  console.log(product.value)
})


//function heartClick(item, item.variants[item.variantNum])
// function addToCart(item){ 
//   const cart = useCartDataStore()

//   //if there are items in the cart
//   if(cart.cartData.length>0) {
//     console.log("Cart length: " + cart.cartData.length)
    
//     //loop through the cart.  If the item is already in the cart, increment the qty
//     for (let i = 0; i < cart.cartData.length; i++) {
//       if (item.id === cart.cartData[i].id) {
//         item.qty ++
//         item.inCart = true //not sure if this is needed
//         cart.$patch(cart.cartData[i] = item)
//         return
//       }
//     }

//     //if an item was not in the cart, add it to the cart
//     if (!item.inCart) {
//       item.qty = 1
//       item.inCart = true //not sure if this is needed
//       cart.$patch(cart.cartData[cart.cartData.length] = item)
//     }
//   //If there are no items in the cart
//   } else {
//     console.log("Adding first item to cart")
//     item.qty = 1
//     item.inCart=true
//     cart.$patch(cart.cartData[0] = item)
//     console.log(item)
//     console.log(cart.cartData[0])
//   }
// }

function changeProductVariantNum(item, e){
  console.log("Changing variant number to " + e)
  let idx = item.variants.map((x)=>{return x.title}).indexOf(e)
  item.variantNum = idx
  console.log(item)
}

function addToCart(item, variant){ 
  const cart = useCartDataStore()
  const store = useProductDataStore()
  let itemInCart = false

  variant.cartQty++
  variant.inCart = true
  // item.variants[item.variantNum] = variant
  item.variants[item.variants.map((x)=>{return x.id}).indexOf(variant.id)] = variant

  //if an item is already in the cart, patch the item with variant data
  for (let i = 0; i < cart.cartData.length ; i++){
    if (item.id == cart.cartData[i].id){
      console.log("This item is already in the cart.  Updating it.")
      cart.$patch( cart.cartData[i] = item )
      store.$patch( store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)]=item)
      itemInCart = true
    }
  }

  if (!itemInCart){
    if (cart.cartData.length){
      cart.$patch(cart.cartData[cart.cartData.length] = item)
      store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)]=item)
    } else {
      cart.$patch(cart.cartData[0]=item)
      store.$patch( store.productData[store.productData.map((x)=>{return x.id}).indexOf(item.id)]=item)
    }
  }
}
</script>