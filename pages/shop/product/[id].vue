<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<!-- eslint-disable vue/no-v-html -->
<template>
  <div
    class="bg-image bg-repeat align-items-center align-middle items-center h-full"
    style="background-image: url('/img/purple-mushroom.jpg')"
  >
    <!-- This is the product specific page based on the name passed in through the url.
    Check out Vuetify slide groups for showcasing art on a variety of printify products.
    https://next.vuetifyjs.com/en/components/slide-groups/ -->
    
    <ShopHeader />
    <!-- TODO Need to refactor this page to use '/api/query?col=products' if the product ID isn't available in storage for some reason -->
    <v-container class="">
      <v-row dense>
        <v-col cols="12">
          <div class="flex flex-wrap">
            <v-card class="bg-white w-full text-wrap rounded-xl border flex m-5 p-2 shadow-xl">
              <!-- New way -->
              <div v-if="product">
                <v-card-title class="bg-surface py-5">
                  <p                      
                    :style="{fontFamily: 'Roboto Slab'}"
                    class="text-wrap text-5xl m-3 text-center"
                  >
                    {{ product.title }}
                  </p>
                </v-card-title>
                
                <!--Carousel-->
                <div class="sm:(w-full h-full float-none) flex md:(w-1/3 float-left mr-10)">
                  <v-carousel
                    color="primary-darken-1"
                    delimiter-icon="mdi-circle-slice-8"
                  >
                    <v-carousel-item
                      v-for="(img, i) in product.images"
                      :key="i"
                      :src="img.src"
                      :lazy-src="img.src"
                      :alt="img.alt"
                    />
                    <!-- <v-img
                      :src="product.images[0].src"
                    /> -->
                  </v-carousel>
                </div>
        
                <!--Right Side (Basically Everything)-->
                <div class="sm:(float-none p-10 w-full) md:(w-full)">
                  <!--Price and Buttons-->
                  <div class="text-center justify-space-between sm:(flex-none md:flex)">
                    <v-btn
                      class="text-wrap <md:w-3/4 md:w-1/3 !font-semibold !text-green-600 !text-2x3 hover:(!text-green-800)"
                      variant="outlined"
                      size="x-large"
                      :style="{fontFamily: 'Roboto Slab'}"
                      @click="heartClick(product, product.variants[product.variantNum])"
                    >
                      <p class="text-base">
                        Add to Cart
                      </p>
                    </v-btn>
                    
                    <p
                      class="<md:(w-full py-6) md:(w-1/3 pt-2) text-center text-4xl font-semibold text-green-600"
                      size=""
                    >
                      {{ formatter.format((itemPrice(product.variants[product.variantNum])/100)) }}
                    </p>
                    
                    <NuxtLink
                      to="/shop/checkout"
                      class="<md:w-3/4 md:w-1/3"
                    >
                      <v-btn
                        class="<md:w-3/4 w-full text-wrap !font-semibold !text-green-600 !text-2x3 hover:(!text-green-800)"
                        variant="outlined"
                        size="x-large"
                        :style="{fontFamily: 'Roboto Slab'}"
                      >
                        <p class="text-base">
                          <v-icon class="pr-3">
                            mdi-cart
                          </v-icon>View Cart
                        </p>
                      </v-btn>
                    </NuxtLink>
                  </div>
                  <p
                    :style="{fontFamily: 'Roboto Slab'}"
                    class="text-wrap text-xl text-justify py-10 <md:px-5"
                    v-html="product.description"
                  />
                  <div class="flex align-center">
                    <v-select
                      :default="product.variants[product.variantNum].title"
                      label="Select a variant"
                      :items="product.variants"
                      class=""
                      @update:model-value="changeProductVariantNum(product, $event)"
                    /> 
                  </div>
                </div>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
  <ShopFooter />
</template>

<!-- <p class="bg-green transition-colors">
  Per Item: {{ formatter.format((itemPrice(product.variants[product.variantNum]))/100) }}
/p> -->

<!--Quantity Adjustor-->
<!-- <div class="flex float-right bg-surface items-center justify-center">
                    <v-btn
                      icon
                      @click="qtyDecrement"
                    >
                      <v-icon>mdi-minus</v-icon>
                    </v-btn>
                    <v-card-title class="bg-surface text-center w-3/4">
                      {{ product.variants[product.variantNum].cartQty }}
                    </v-card-title>
                    <v-btn
                      icon
                      @click="qtyIncrement"
                    >
                      <v-icon icon="mdi-plus" />
                    </v-btn>
                  </div> -->
<!-- More Variant data can go here :)
<p>Handling Time: {{ product.variants[product.variantNum].handlingTime }} {{ product.variants[product.variantNum].handlingTimeUnit }}s</p>
<pre>Shipping Profile: {{ product.variants[product.variantNum].shippingProfile }}</pre> -->
<!-- Variant Selector -->
<!-- <div class="flex bg-surface items-center justify-center">
                      <v-btn
                        icon
                        @click="variantDecrement"
                      >
                        <v-icon>mdi-chevron-left</v-icon>
                      </v-btn>
                      <v-card-title class="bg-surface text-center w-3/4">
                        {{ product.variants[product.variantNum].title }}
                      </v-card-title>
                      <v-btn
                        icon
                        @click="variantIncrement"
                      >
                        <v-icon icon="mdi-chevron-right" />
                      </v-btn>
                    </div> -->
<!-- Quantity Selector -->
<!-- <div class="flex bg-surface items-center justify-center">
            <v-btn
                        icon
                        @click="qtyDecrement"
                      >
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>
                      <v-card-title class="bg-surface text-center w-3/4">
                        {{ product.variants[product.variantNum].cartQty }}
                      </v-card-title>
                      <v-btn
                        icon
                        @click="qtyIncrement"
                      >
                        <v-icon icon="mdi-plus" />
                      </v-btn>
                    </div> -->
                    <!-- <p>
                        + {{ formatter.format((itemShippingPrice(product.variants[product.variantNum])/100)) }} Shipping
                      </p> -->

<script setup>
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

// const itemCost = function (variant) {
//   let cost = ((variant.cost + variant.firstItemCost + (variant.cost * 0.25) + 100)) // Profit margin is 25% of cost + $1.00
//   return cost
// }

const itemPrice =  function (variant) {
  //set the default shipping profile to usd
  //use the user's shipping profile if they have one
  let shippingProfile = variant.shippingProfile[0]
  if (variant.shippingProfile.length > 0) {
    for(let i=0; i<variant.shippingProfile.length; i++){
      if (variant.shippingProfile[i].countries.includes(userData.country)) {
        shippingProfile = variant.shippingProfile[i]
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
    for(let i=0; i<variant.shippingProfile.length; i++){
      if (variant.shippingProfile[i].countries.includes(userData.country)) {
        console.log("")
        shippingProfile = variant.shippingProfile[i]
        foundCountry = true
        break
      }
    }
    if (!foundCountry) {
      for(let i=0; i<variant.shippingProfile.length; i++){
        if (variant.shippingProfile[i].countries.includes("REST_OF_THE_WORLD")) {
          shippingProfile = variant.shippingProfile[i]
          break
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
  // product.value = store.productData.find((item) => item.id == productId.value)
  product.value = store.productData[store.productData.map((x)=>{return x.id}).indexOf(productId.value)]
  console.log(product.value)
})


function changeProductVariantNum(item, e){
  console.log("Changing variant number to " + e)
  let idx = item.variants.map((x)=>{return x.title}).indexOf(e)
  item.variantNum = idx
  console.log(item)
}

function heartClick(item, variant){ 
    const cart = useCartDataStore()
    // const store = useProductDataStore()

   //TODO
   //Looks like the heart icon doesn't always necessarily show whether or not a variant is in the cart. 

    //:D   //Scenario 1: No items in cart, add this item to cart
    //:D   //Scenario 2: This item is in cart, but not this variant, add this variant to cart
    //:D   //Scenario 3: This item is in cart, and this variant is in cart:
          //:D  //Scenario 3a: If this is the only variant of this item in cart, remove the item from cart
          //:D  //Scenario 3b: If there are other variants of this item in cart, remove this variant from cart
    //:D   //Scenario 4: This item is not in cart, but other items are, add this item (and variant) to cart

    let thisItemInCart = false
    let thisVariantInCart = false
    let otherVariants = false
    let otherItems = false
    let itemIndex = null
    let variantIndex = null



    //Scenario 1: No items in cart, add this item to cart
    if (cart.cartData.length==0) {
      // console.log("No items in cart") //Scenario 1
      variant.cartQty = 1
      variant.inCart = true
      item.variants[item.variantNum] = variant
      // cart.$patch({ cartData: [item] })
      cart.$patch(cart.cartData[0] = item)
      // store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item)] = item)
      return
    }

    //Checking if this item is in the cart, and if other items are in the cart
    cartLoop: for (let i=0; i<cart.cartData.length; i++){
      if (cart.cartData[i].id != item.id){
        otherItems = true
      }
      if (cart.cartData[i].id == item.id){
        thisItemInCart = true

        variantLoop: for (let j=0; j<cart.cartData[i].variants.length; j++) {
          if (cart.cartData[i].variants[j].cartQty>0 && cart.cartData[i].variants[j].id != variant.id) {
            otherVariants = true
          }
          if (cart.cartData[i].variants[j].cartQty>0 && cart.cartData[i].variants[j].id == variant.id) {
            thisVariantInCart = true
            itemIndex = i
            variantIndex = j
          }
          if (otherVariants && thisVariantInCart) {
            if (otherItems && thisItemInCart) {
              break cartLoop
            }
            break variantLoop //Does this break out of both for loops, or just the variant loop?
          }
        }
      }
      if (otherItems && thisItemInCart) {
        break cartLoop
      }
    }

    //Scenario 2: This item is in cart, but not this variant, add this variant to cart
    if (thisItemInCart && !thisVariantInCart) {
      console.log("This item is in cart, but not this variant")
      variant.cartQty = 1
      variant.inCart = true
      item.variants[variantIndex] = variant
      cart.$patch(cart.cartData[cart.cartData.length] = item)
      // cart.cartData[itemIndex].variants.push(variant)
      // cart.$patch({ cartData: cart.cartData })
      // store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item)] = item)
      return
    }

    //Scenario 3: This item is in cart, and this variant is in cart:
    if (thisItemInCart && thisVariantInCart) {
      console.log("This item and this variant are in cart.")

      //Other variants should only be set to true if there are other variants OF THIS ITEM in the cart
      //Scenario 3a: If this is the only variant of this item in cart, remove the item from cart
      if (!otherVariants) {
        console.log("This is the only variant of this item in cart - Scenario 3a")
        variant.cartQty = 0
        variant.inCart = false
        item.variants[item.variantNum] = variant
        cart.$patch(cart.cartData[itemIndex].variants[variantIndex] = variant)
        cart.cartData.splice(itemIndex, 1)
        cart.$patch({ cartData: cart.cartData })
        // store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item)] = item)
        return
      }
      //Scenario 3b: If there are other variants of this item in cart, remove this variant from cart
      if (otherVariants) {
        console.log("There are other variants of this item in cart - Scenario 3b")
        variant.cartQty = 0
        variant.inCart = false
        item.variants[item.variantNum] = variant
        cart.$patch(cart.cartData[itemIndex].variants[variantIndex] = variant)
        cart.cartData.splice(itemIndex, 1)
        cart.$patch({ cartData: cart.cartData })
        // store.$patch(store.productData[store.productData.map((x)=>{return x.id}).indexOf(item)] = item)
        return
      }
    }

    //Scenario 4: This item is not in cart, but other items are, add this item (and variant) to cart
    if (!thisItemInCart && otherItems) {
      console.log("This item is not in cart, but other items are, add this item (and variant) to cart")
      variant.cartQty = 1
      variant.inCart = true
      item.variants[item.variantNum] = variant
      cart.$patch(cart.cartData[cart.cartData.length] = item)
      // store.$patch(store.productData[i] = item)
      return
    }
  }
</script>