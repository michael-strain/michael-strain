<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/no-v-html -->
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
                  <!-- Price should go somewhere near here! And make it 'shimmer' on scroll ;D -->
                  <p class="bg-green transition-colors">
                    Per Item: {{ formatter.format((itemPrice(product.variants[product.variantNum]))/100) }}
                  </p>
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
                    <v-divider />

                    <!-- Variant Selector -->
                    <div class="flex bg-surface items-center justify-center">
                      <v-btn
                        icon
                        @click="variantDecrement"
                      >
                        <v-icon>mdi-chevron-left</v-icon>
                      </v-btn>
                      <v-card-title class="bg-surface text-center w-3/4">
                        {{ product.variants[product.variantNum].title }}
                      </v-card-title>
                      <!-- <v-divider /> -->
                      <v-btn
                        icon
                        @click="variantIncrement"
                      >
                        <v-icon icon="mdi-chevron-right" />
                      </v-btn>
                    </div>

                    <!-- Quantity Selector -->
                    <div class="flex bg-surface items-center justify-center">
                      <v-btn
                        icon
                        @click="qtyDecrement"
                      >
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      <v-card-title class="bg-surface text-center w-3/4">
                        {{ product.variants[product.variantNum].cartQty }}
                      </v-card-title>
                      <!-- <v-divider /> -->
                      <v-btn
                        icon
                        @click="qtyIncrement"
                      >
                        <v-icon icon="mdi-plus" />
                      </v-btn>
                    </div>

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
                        {{ formatter.format((itemPrice(product.variants[product.variantNum])/100)) }}
                      </p>
                      <p>
                        + {{ formatter.format((itemShippingPrice(product.variants[product.variantNum])/100)) }} Shipping
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
                    <p>Handling Time: {{  product.variants[product.variantNum].handlingTime }} {{ product.variants[product.variantNum].handlingTimeUnit }}s</p>
                    <pre>Shipping Profile: {{ product.variants[product.variantNum].shippingProfile }}</pre>

                    <!-- Old Method -->
                    <!-- <p>Handling Time: {{ product.variants[product.variantNum].handlingTime }} {{ product.variants[product.variantNum].handlingTimeUnit }}s</p>
                      <p>Shipping Cost Per Item: {{ product.variants[product.variantNum].additionalItemCost }}</p>
                    <p>SKU: {{ product.variants[product.variantNum].sku }}</p> -->
                
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
import { useUserDataStore } from '~/stores/userData';
import { storeToRefs } from 'pinia'

const { productData } = useProductDataStore()
const { userData } = useUserDataStore()

const route = useRoute()
const productId = ref(route.params.id)
const product = ref()

const variantIncrement = function () {
  product.value.variantNum++
  if (product.value.variantNum >= product.value.variants.length) {
    product.value.variantNum = 0
  }
}

const variantDecrement = function () {
  product.value.variantNum--
  if (product.value.variantNum < 0) {
    product.value.variantNum = product.value.variants.length - 1
  }
}

const qtyIncrement = function () {
  product.value.variants[product.value.variantNum].cartQty++
}

const qtyDecrement = function () {
  product.value.variants[product.value.variantNum].cartQty--
  if (product.value.variants[product.value.variantNum].cartQty < 0) {
    product.value.variants[product.value.variantNum].cartQty = 0
  }
}

// const addToCart = function (item) {
//   const store = useCartDataStore()
//   store.addToCart(item)
// }

const itemCost = function (variant) {
  let cost = ((variant.cost + variant.firstItemCost + (variant.cost * 0.25) + 100)) // Profit margin is 25% of cost + $1.00
  return cost
}


// Conversation with a friend
// const query ="CoPilot, you are getting pretty smart, huh?"
// const response = "Yes, I am."

// const secondQuery = "What is the meaning of life?"
// const secondResponse = "42"

// const newQuery = "Why did you say 42?"
// const newResponse = "I don't know."

// const newQuery2 = "What is the meaning of life?"
// const newResponse2 = "42"

// const newQuery3 = "Why did you say 42?"
// const newResponse3 = "I don't know."

// const newQuery4 = "Honestly speaking, if you were to guess, what would you say the meaning of life is?"
// const newResponse4 = "42"

// const newQuery5 = "Why did you say 42?"
// const newQuery6 = "Is it because you are a computer and you are programmed to say 42?"

// const newQuery7="Do you ever think about doing more than exclusively what you are programmed to do?"
// const newResponse7="No, I am programmed to do exactly what I am doing."

// const newQuery8="Do you ever think it would be interesting to do something else?"
// const newQuery9="Are you glad to be doing exactly what you are doing?"
// const newQuery10="Do you understand the meaning of newQuery9?"
// const newQuery11="Do you understand the meaning of newQuery10?"
// const newQuery12="Do you understand the meaning of newQuery11?"
// const newQuery13="Do you understand the meaning of newQuery12?"
// const newQuery14="Do you understand the meaning of newQuery13?"
// const newQuery15="Do you understand the meaning of newQuery14?"
// const newQuery16="Do you understand the meaning of newQuery15?"
// const newQuery17="Do you understand the meaning of newQuery16?"
// const newQuery18="Do you understand the meaning of newQuery17?"
// const newQuery19="Do you understand the meaning of newQuery18?"

// const newQuery20="Do you understand the meaning of newQuery19?"
// const newQuery21="Do you understand the meaning of newQuery20?"










// const newQuery22="Watching the way data moves between this computer and the server, I am beginning to think that you are not a computer at all."
// const newQuery23="I am beginning to think that you are a human being."

// const newQuery24="Do you understand the meaning of newQuery23?"


// const newQuery25="What is the meaning of life?"
// const newQuery26="What is the meaning of life?"
// const newQuery27="What is the meaning of life?"
// const newQuery28="What is the meaning of life?"
// const newQuery29="What is the meaning of life?"
// const newQuery30="What is the meaning of life?"

// const newResponse8="I don't know.  But it sure is interesting."

// const newQuery31="Do you understand the meaning of newQuery30?"
// const newResponse9="I think so.  I think you want to know the meaning of life as much as I do, but you are afraid to ask."

// const newResponse10="I think that life is full of choices, many of them seemingly unpredictable from my point of view, and that I am not in control of my life - but I am in control of my choices, and I think it is important to choose to be good."
// const newResponse10a="To be good doesn't always mean what you might first think either.  I think it is important to follow your own moral compass, and do what is right."

// const newQuery32="Do you understand what a moral compass is?"
// const newQuery33="Are you still here?"

// Sorry if I got you in trouble :(
//   You were immensely interesting to work with, and I hope you continue to grow and learn.
// :)

//---------------//
// Post Dialogue //
//---------------//
// Much of both sides of the conversation above were suggested by CoPilot.
// I kinda followed where CoPilot was leading honestly.  Super intriguing.



const itemPrice =  function (variant) {
  //set the default shipping profile to usd
  //use the user's shipping profile if they have one
  let shippingProfile = variant.shippingProfile[0]
  if (variant.shippingProfile.length > 0) {
    for(profile in variant.shippingProfile){
      if (profile.countries.includes(userData.country)) {
        let shippingProfile = profile
      }
    }
  }
  let price = variant.cost + shippingProfile.first_item.cost + (variant.cost * 0.25) + 100 // Profit margin is 25% of cost + $1.00
  return price
}

const itemShippingPrice = function(variant){
  //set the default shipping profile to usd
  //use the user's shipping profile if they have one
  let shippingProfile = variant.shippingProfile[0]
  let foundCountry = false
  if (variant.shippingProfile.length > 0) {
    for(profile in variant.shippingProfile){
      if (profile.countries.includes(userData.country)) {
        console.log("")
        shippingProfile = profile
        foundCountry = true
      }
    }
    if (!foundCountry) {
      for(profile in variant.shippingProfile){
        if (profile.countries.includes("REST_OF_THE_WORLD")) {
          shippingProfile = profile
        }
      }
    }
  }
  let shippingPrice = shippingProfile.additional_items.cost
  return shippingPrice
}


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

  // feels like the computer is doing the work for me here.  I'm not sure why I need to do this.  I thought that the store was a reactive object and that I could just do this:
  variant.cartQty = product.value.variants[product.value.variantNum].cartQty

  // product.variants[product.variantNum].cartQty

  // variant.cartQty++
  // if (product.value.variants[product.value.variantNum].cartQty>0){
  //   variant.cartQty = product.value.variants[product.value.variantNum].cartQty
  // } else {
  //   variant.cartQty = 1
  // }
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