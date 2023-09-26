<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <v-layout>
    <ToggleTheme />
    <v-navigation-drawer
      permanent
      elevation="10"
    >
      <h3 class="text-center font-semibold py-1.5rem text-3xl">
        WELCOME
      </h3>
      
      <v-tabs
        v-model="tab"
        block
        bg-color="transparent"
        direction="vertical"
        class="flex justify-space-between w-full "
      >
        <!--SEARCH-->
        <v-tab>
          <v-autocomplete
            v-model="product"
            :items="products"
            item-title="tag"
            item-value="tag"
            multiple
            label="Search"
            clearable
            variant="underlined"
            class="w-200px justify-center mx-5"
            prepend-icon="mdi-magnify"
          />
        </v-tab>
        <br class="10px">
        <!--TABS-->
        <!-- <divider class="m-2" /> -->
        <div class="flex-col flex gap-4 bg-primary-lighten-3 py-2">
          <v-tab
            v-for="tab in tabs"
            :key="tab"
            :value="tab"
            class="justify-center rounded-0 bg-primary-lighten-3"
          >
            {{ tab }}
          </v-tab>
        </div>
      </v-tabs>
      <!--BOTTOM BUTTONS-->
      <template #append>
        <div class="flex-col gap-4 flex m-5">
          <v-btn
            block
            variant="text"
            prepend-icon="mdi-cart-heart"
            class="mx-auto"
            @click.stop="drawer = !drawer"
          >
            View Cart
          </v-btn>
          <v-btn
            block
            variant="text"
            prepend-icon="mdi-heart"
            class="mx-auto"
          >
            Wish List
          </v-btn>
          <v-btn
            block
            variant="text"
            prepend-icon="mdi-account"
            class="mx-auto"
          >
            My Account
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <!--CART NAV DRAWER-->
    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <h3 class="text-center font-semibold py-1.5rem text-3xl">
        CART
      </h3>
      <p class="mx-5">
        Your cart it empty. <br> Add something amazing.
      </p> 
    </v-navigation-drawer>

    <!--SHOP-->
    <v-main>
      <div>
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold text-h2">
            Nyx Knacks
          </h1>
        </v-card-title>

        <v-window
          v-model="tab"
          class="m-5"
        >
          <v-window-item>
            <v-row>
              <v-col
                v-for="product in products"
                :key="product"
                cols="12"
                md="3"
                sm="6"
                :value="product"
              >
                <v-hover
                  v-slot="{ isHovering, props }"
                  open-delay="100"
                  close-delay="100"
                >
                  <v-card
                    block
                    link
                    class="fill-height"
                    max-width="500"
                    v-bind="props"
                    :color="isHovering ? 'primary' : 'secondary-lighten-1'"
                    :elevation="isHovering ? '10' : '4'"
                  >
                    <v-img
                      cover
                      src="https://cdn.discordapp.com/attachments/1093246211080855603/1095783007316619314/nyxofkhaos_white_mug_with_watercolor_mushrooms_on_it._product_i_fe8254c4-e7f3-457d-8e2a-acf1af3cc178.png"
                      class="bg-white h-250px"
                    >
                      <v-btn
                        :color="isHovering ? 'primary' : 'secondary-lighten-1'"
                        append-icon="mdi-heart"
                        class="m-3 float-right rounded-0"
                        size="small"
                      >
                        $ {{ product.price }}
                      </v-btn>
                    </v-img>
                    <v-card-title 
                      class="text-center text-wrap"
                    >
                      {{ product.title }}
                    </v-card-title>
                    <v-card-text class="text-center ">
                      {{ product.subtitle }}
                    </v-card-text>
                    <v-btn
                      block
                      class="rounded-0"
                      :color="isHovering ? 'primary' : 'secondary'"
                    >
                      Add to Cart
                    </v-btn>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </div>
      <ShopFooter />
    </v-main>
  </v-layout>
</template>

<script setup>

const tabs = ref([
      "All",
      "Cups",
      "Shirts",
      "Towels",
  ])
const products = ref([
      { title: "I'm a Cup", subtitle: 'Subtitle for Product', price: '10.75', tag: 'cup'},
      { title: "I'm a Cup with a stupidly long title", subtitle: 'Subtitle for Product', price: '10.75', tag: 'cup'},
      { title: "I'm a Shirt", subtitle: 'Subtitle for Product', price: '10.75', tag: 'shirt'},
      { title: "I'm a Shirt", subtitle: 'Subtitle for Product', price: '10.75', tag: 'shirt'},
      { title: "I'm a Towel", subtitle: 'Subtitle for Product because why not make life hard', price: '10.75', tag: 'towel'},
      { title: "I'm a Towel", subtitle: 'Subtitle for Product', price: '10.75', tag: 'towel'},
  ])
const drawer=ref(null)

const search= ref (null)

</script>

<style>
.bgimg {
  background: #fff center center/contain repeat fixed;
}
</style>