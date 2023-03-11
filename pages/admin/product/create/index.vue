<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
<template>
  <!--To Do: 
    Add something for variables. Size, color, ect.
    Make text edit buttons float in description box.
    Add drop down for extra information.
    Alert pop-ups what pushing bottom buttons.
    Upload and select images.
    Blueprint ID field with a link to admin/printfy/blueprints.
    Print provider ID

    Use v-data-tables for your products list.
-->

  <v-form class="flex text-center align-middle items-center justify-center flex-shrink bg-white">
    <v-card class="w-full">
      <v-container class="bg-white">
        <!-- <h1 class="text-3xl my-10 text-center"> -->
        <h3
          class="justify-center text-center align-center font-bold text-5xl mt-5 mb-10"
          :style="{fontFamily: 'Roboto Slab', textShadow: '3px 3px rgba(52, 211, 153)'}"
        >
          Create New Product
        </h3>
        <!--FIRST ROW-->
        <v-row class="pt-5">
          <v-col
            cols="12"
            sm=""
            class=""
          >
            <v-text-field
              v-model="selectTitle"
              label="Product Title"
              placeholder="Product  Title"
              variant="outlined"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
            class="outlined"
          >
            <v-text-field
              v-model="selectCategory"
              label="Category"
              placeholder="Category"
              variant="outlined"
              class=""
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
            class=""
          >
            <v-text-field
              v-model="blueprintId"
              label="Blueprint ID"
              placeholder="Blueprint ID"
              variant="outlined"
              class=""
              @change="addData"
            />
          </v-col>
        </v-row>

        <!--SECOND ROW - NEEDS LOVIN'-->
        <v-row class=" ">
          <v-col
            cols="12"
            sm=""
            class=""
          >
            <v-combobox
              v-model="selectTags"
              :items="items"
              label="Tags"
              clearable
              multiple
              persistent-hint
              variant="outlined"
              chips
              transition="scale-transition"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
            class=""
          >
            <!-- TODO Need to ensure users can't add text to these fields, only select options that are there-->
            <!-- Needs to automatically populate with print provider data based on the blueprintId-->
            <v-combobox
              v-model="selectPrintProvider"
              :items="printProviders"
              label="Print Provider"
              clearable
              multiple
              persistent-hint
              variant="outlined"
              chips
              transition="scale-transition"
            />
           
            <!-- //We need to allow a multi-select for Variants -->
            <v-combobox
              v-model="selectVariant"
              :items="variants"
              label="Variants"
              clearable
              multiple
              persistent-hint
              variant="outlined"
              chips
              transition="scale-transition"
            />
          </v-col>
          <!-- <v-col
            cols="12"
            sm=""
            class=""
          >
            <v-btn-toggle
              v-model="formatting"
              multiple
              variant="outlined"
              divided
            >
              <v-btn>
                <v-icon icon="mdi-format-italic" />
              </v-btn>

              <v-btn>
                <v-icon icon="mdi-format-bold" />
              </v-btn>

              <v-btn>
                <v-icon icon="mdi-format-underline" />
              </v-btn>
            
              
              <v-btn>
                <v-icon icon="mdi-format-align-center" />
              </v-btn>

              <v-btn>
                <v-icon icon="mdi-format-align-left" />
              </v-btn>

              <v-btn>
                <v-icon icon="mdi-format-align-right" />
              </v-btn>
            </v-btn-toggle>
          </v-col> -->
        </v-row>
        
        <!--DESCRIPTION-->
        <v-row class=" ">
          <v-col
            cols="12"
            class=""
          >
            <v-textarea
              v-model="selectDescription"
              label="Description"
              placeholder="Description"
              variant="outlined"
              auto-grow
              class=""
            />
          </v-col>
        </v-row>
        
        <!--PRICING-->
        <!-- <v-row class=" ">
          <v-col
            cols="12"
            sm=""
          >
            <v-text-field
              label="Product Cost"
              placeholder="Product Cost"
              variant="outlined"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
          >
            <v-text-field
              label="Shipping Cost"
              placeholder="Shipping Cost"
              variant="outlined"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
          >
            <v-text-field
              label="Retail Price"
              placeholder="Retail Price"
              variant="outlined"
            />
          </v-col>
          <v-col
            cols="12"
            sm=""
          >
            <v-text-field
              label="Profit"
              placeholder="Profit"
              variant="outlined"
            />
          </v-col>
        </v-row> -->
        
        <!--  UPLOAD FILES-->
        <v-row>
          <v-col
            cols="12"
            sm=""
          >
            <v-text-field
              v-model="imageName"
              label="Image Filename"
              placeholder="Image Filename"
              variant="outlined"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col
            cols="12"
            sm=""
          >
            <v-text-field
              v-model="imageUrl"
              label="Image URL"
              placeholder="Image URL"
              variant="outlined"
            />
            <!-- https://next.vuetifyjs.com/en/components/file-inputs/ -->

            <!-- <div class="w-full">
              <v-file-input
                chips
                multiple
                label="File input w/ chips"
                variant="outlined"
                @change="onFileChange"
              />
              <v-progress-circular
                v-if="fileUploading"
                indeterminate
              />
            </div> -->
            <!-- <FirebaseUpload @file-change="receivedFile" /> -->
          </v-col>
        </v-row>

        
        
        <!--BUTTONS-->
        <v-row class=" ">
          <v-col>
            <v-row class="flex text-center align-middle items-center justify-center">
              <div class="sm:flex align-middle items-center h-min">
                <v-col
                  cols="12"
                  sm=""
                >
                  <v-btn
                    class="align-middle items-center"
                    size="large"
                  >
                    <v-icon
                      icon="mdi-email"
                      class="mr-3"
                    />Save Draft
                  </v-btn>
                </v-col>
                
                <v-col
                  cols="12"
                  sm=""
                  class=""
                >
                  <v-btn
                    class="align-middle items-center"
                    size="large"
                    :disabled="fileUploading"
                    @click="submit()"
                  >
                    <v-icon
                      icon="mdi-email"
                      class="mr-3"
                    />Submit
                  </v-btn>
                </v-col>
                <v-col
                  cols="12"
                  sm=""
                >
                  <v-btn
                    class="align-middle items-center"
                    size="large"
                  >
                    <v-icon
                      icon="mdi-email"
                      class="mr-3"
                    />DELETE
                  </v-btn>
                </v-col>
              </div>
            </v-row>
          </v-col>
        </v-row>

        <v-row class="pt-5">
          <v-col
            cols="12"
            sm=""
            class=""
          />
        </v-row>
        <v-row class="pt-5">
          <v-col
            v-if="doWeNeedDetails"
            cols="12"
            sm=""
            class="w-screen d-flex flex-wrap text-center align-middle items-center justify-center flex-shrink"
          >
            <p class="text-3xl">
              Product Details
            </p>
            <v-divider />
            <v-item-group
              multiple
              selected-class="bg-purple"
            >
              <div class="text-caption mb-2">
                Tags
              </div>
              <v-item
                v-for="n in 8"
                :key="n"
                v-slot="{ selectedClass, toggle }"
              >
                <v-chip
                  :class="selectedClass"
                  @click="toggle"
                >
                  Tag {{ n }}
                </v-chip>
              </v-item>
            </v-item-group>
            <!-- <v-card
              class="w-screen d-flex flex-wrap text-center items-center justify-center flex-shrink"
              color=""
              flat
              rounded="0"
              min-height=""
            >
              <v-text-field
                v-for="n in 10"
                :key="n"
                class="pa-2"
                variant="outlined"
                rounded="0"
              >
                Flex item
              </v-text-field>
            </v-card> -->
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-form>
  



  <!--CAROUSEL-->
  <!-- 
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> -->

  <!--TABS-->
  <!-- <v-card> -->
  <!-- <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2">
        MENU
      </h1>
    </v-card-title> -->

  <!--TABS NAV BAR-->
  <!-- <v-tabs
      v-model="tab"
      bg-color="transparent"
      color=""
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs> -->
  <!--HOVER-->
  <!-- <v-window v-model="tab">
      <v-window-item
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
      >
        <div>
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="mx-auto"
              color="grey-lighten-4"
              max-width="600"
              v-bind="props"
            >
              <v-img
                :aspect-ratio="16/9"
                cover
                src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
              >
                <v-expand-x-transition>
                  <div 
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out backdrop-opacity-10 backdrop-invert bg-white/50 v-card--reveal text-h2 items-center align-center justify-center"
                    style="height: 100%;"
                  >
                    <v-btn
                      class="outlined raised"
                      color="primary"
                      size="x-large"
                    >
                      VIEW
                    </v-btn>
                  </div>
                </v-expand-x-transition>
              </v-img>

              <v-card-text class="pt-6 text-center">
                <h3 class="text-h4 text-primary mb-2">
                  Product Name
                </h3>

                <div class="text-h5 mb-2">
                  $10.00
                </div>
              </v-card-text>
            </v-card>
          </v-hover>
        </div>
      </v-window-item>
    </v-window> -->
  <!-- </v-card> -->

  <!--CONTAINER CARDS-->
  <!-- <v-card>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="text-white align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title>{{ card.title }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card> -->
</template>

<!--SCRIPT-->
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useBlueprintDataStore } from '~/stores/blueprintData'

const product = ref()

const route = useRoute()
const blueprintId = ref('3')
const selectTags = ref([])
const selectPrintProvider = ref()
const selectVariant = ref([])
const selectDescription = ref('')
const selectTitle = ref('')
const selectCategory = ref('')

// const fileUploading = ref(false)
// const imgUrl = ref('')

const store = useBlueprintDataStore()

const items = ref([
  'Programming',
  'Design',
  'Vue',
  'Vuetify'
])
var bpData = []

const blueprint = ref()

const printProviders = ref([])
const variants = ref([])

const imageUrl = ref('')
const imageName = ref('')
const image = ref()

// const emit = defineEmits(['receivedFile']) //Not sure if this is necessary

// We could update this to true to print blueprint and print provider info after they are successfully fetched.
const doWeNeedDetails = ref(false)

const loaded = ref(false)


onMounted(async() => {
  await addData()
  //Select all variants by default
  for (let i = 0; i < variants.value.length; i++) {
    selectVariant.value.push(variants.value[i].title)
  }
  // await getPrintProviders()
})

const getUniquePrintProviders = () => {
  let uniquePrintProviders = []


  //OLD METHOD THAT SEEMED TO WORK A BIT
  for (let i=0; i<variants.value.length; i++){
    let obj = {
      "id":variants.value[i].printProvider.id,
      "title":variants.value[i].printProvider.title
    }
    // console.log(printProviders.value.findIndex((o) => o.id == obj.id))
    if (uniquePrintProviders.findIndex((o) => o.id == obj.id) > -1) { //== store.blueprintData[bpIndex].variants[i].printProvider.id){
      console.log("Print provider already in list")
      break
    } else{
      uniquePrintProviders.push(obj)
      console.log("Pushing print provider obj to printProviders.value")
    }
  }
  //Maybe we should also update printProvders.value here?

  printProviders.value = uniquePrintProviders
  selectPrintProvider.value = uniquePrintProviders[0]
  // return uniquePrintProviders
}

const addData = async () => {

  console.log("Fetching blueprint id: " + blueprintId.value)
  const bpData = await $fetch(`/api/printify/blueprints?id=${blueprintId.value}`, { method: 'GET' })

  console.log(bpData)
  //Now just update the store with new data
  store.$patch({blueprintData: bpData})
  blueprint.value = bpData
  product.value = blueprint.value

  variants.value = blueprint.value.variants
  console.log(variants.value)

  //get unique print providers for selected variants
  // printProviders.value = getUniquePrintProviders()
  getUniquePrintProviders()

  //Warning, selectVariant isn't currently functional with printify
  selectVariant.value = []
  for (let i = 0; i < variants.value.length; i++) {
    selectVariant.value.push(variants.value[i].title)
    variants.value[i].price=9999
  }
  selectDescription.value = blueprint.value.description
  selectTitle.value = blueprint.value.title
  //select accepted countries from list of available countries
  //get shipping profiles for selected countries

  //consider longer term solutions for storing and analyzing blueprint data efficiently





  // let bpIndex = bpData.findIndex((bp) => bp.id == blueprintId.value)
  // // let bpIndex = store.blueprintData.findIndex((bp) => bp.id == blueprintId.value)

  // store.blueprintData[bpIndex] = bpData[bpIndex]

  // bpData[bpIndex].variantNum = 0
  // bpData[bpIndex].currentCountry = 0 //should find the index of the user's country in the total list of country names present (or default to the index for REST OF WORLD)
  // bpData[bpIndex].currentCountryName = 'US' //should use userdata.country
  // bpData[bpIndex].currentShippingProfile = 0 //should set to the index of the shipping profile that matches the user's country (or default to the index for REST OF WORLD)


  // store.$patch({blueprintData: bpData})
  // loaded.value = true

  // console.log("bpIndex: " + bpIndex)

  // for (let i=0; i<store.blueprintData[bpIndex].variants.length; i++){
  //   let obj = {
  //     "id":store.blueprintData[bpIndex].variants[i].printProvider.id,
  //     "title":store.blueprintData[bpIndex].variants[i].printProvider.title
  //   }
  //   console.log(printProviders.value.findIndex((o) => o.id == obj.id))
  //   if (printProviders.value.findIndex((o) => o.id == obj.id) > -1) { //== store.blueprintData[bpIndex].variants[i].printProvider.id){
  //     console.log("Print provider already in list")
  //     break
  //   } else{
  //     printProviders.value.push(obj)
  //     console.log("Pushing print provider obj to printProviders.value")
  //   }
  // }

  // console.log("printProviders: " + printProviders.value)


}

//Need to watch the value of blueprintId.value and fetch the appropriate print provider and product info

// function receivedFile(name, file ) {
//   // console.log(snapshot)
//   // console.log(downloadUrl)
//   // console.log(metadata)

//   // imageName.value = metadata.fullPath //not sure what exactly to put here yet
//   imageName.value = name
//   // imageUrl.value = downloadUrl
//   image.value = file

//   // console.log(imageName.value)
//   // console.log(imageUrl.value)
//   console.log("I DID THE THING!")
//   console.log(image.value)
//   //On submit,
//   //Going to use the file url to POST to the image upload endpoint
//   //Then we will get back the image id and use that to POST to the product endpoint
// }

// async function getPrintProviders(){

//   // //OLD METHOD
//   // //Fetch print providers
//   // //Set printProviders.value to the response
//   // const store = useBlueprintDataStore()
//   // if(store.blueprintData.length > 0){
//   //   console.log("Blueprints already loaded")
//   //   if (store.blueprintData[store.blueprintData.findIndex((bp) => bp.id == blueprintId.value)]){
//   //     console.log("Blueprint already loaded")
//   //     let bpIndex = store.blueprintData.findIndex((bp) => bp.id == blueprintId.value)
//   //     blueprint.value = store.blueprintData[bpIndex]
//   //     for (let i=0; i<store.blueprintData[bpIndex].variants.length; i++){
//   //       let obj = {
//   //         "id":store.blueprintData[bpIndex].variants[i].printProvider.id,
//   //         "title":store.blueprintData[bpIndex].variants[i].printProvider.title
//   //       }
//   //       console.log(printProviders.value.findIndex((o) => o.id == obj.id))
//   //       if (printProviders.value.findIndex((o) => o.id == obj.id)>-1){ //== store.blueprintData[bpIndex].variants[i].printProvider.id){
//   //         console.log("Print provider already in list")
//   //         break
//   //         // console.log(printProviders.value)
//   //       } else{
//   //         printProviders.value.push(obj)
//   //         console.log("Pushing print provider obj to printProviders.value")
//   //         // console.log(printProviders.value)
//   //       }
//   //     }

//   //     console.log(printProviders.value)
//   //     loaded.value = true
//   //   }
//   //   else {
//   //     console.log("Fetching blueprint from Printify API")
//   //     await addData(blueprintId.value)
//   //     let bpIndex = store.blueprintData.findIndex((bp) => bp.id == blueprintId.value)
//   //     blueprint.value = store.blueprintData[bpIndex]
      
//   //     for (let i=0; i<bpData[bpIndex].variants.length; i++){
//   //       let obj = {
//   //         "id":store.blueprintData[bpIndex].variants[i].printProvider.id,
//   //         "title":store.blueprintData[bpIndex].variants[i].printProvider.title
//   //       }
//   //       console.log(printProviders.value.findIndex((o) => o.id == obj.id))
//   //       if (printProviders.value.findIndex((o) => o.id == obj.id)>-1) { //== store.blueprintData[bpIndex].variants[i].printProvider.id){
//   //         console.log("Print provider already in list")
//   //         break
//   //       } else{
//   //         printProviders.value.push(obj)
//   //         console.log("Pushing print provider obj to printProviders.value")
//   //       }
//   //     }

//   //     console.log(printProviders.value)
//   //     loaded.value = true
//   //   }
//   // }
//   // else {
//   //   console.log("Fetching blueprints from Printify API")
//   //   bpData = await $fetch(`/api/printify/blueprints?id=${blueprintId.value}`, { method: 'GET' })
//   //   store.$patch({blueprintData: bpData})
//   //   let bpIndex = store.blueprintData.findIndex((bp) => bp.id == blueprintId.value)
//   //   blueprint.value = store.blueprintData[bpIndex]
//   //   for (let i=0; i<store.blueprintData[bpIndex].variants.length; i++){
//   //     let obj = {
//   //       "id":store.blueprintData[bpIndex].variants[i].printProvider.id,
//   //       "title":store.blueprintData[bpIndex].variants[i].printProvider.title
//   //     }
//   //     console.log(printProviders.value.findIndex((o) => o.id == obj.id))
//   //     if (printProviders.value.findIndex((o) => o.id == obj.id)>-1) { //== store.blueprintData[bpIndex].variants[i].printProvider.id){
//   //       console.log("Print provider already in list")
//   //       break
//   //     } else{
//   //       printProviders.value.push(obj)
//   //       console.log("Pushing print provider obj to printProviders.value")
//   //     }
//   //   }

//   //   console.log(printProviders.value)
//   //   loaded.value = true
//   // }
//   // watch(() => blueprintId.value, async () => await addData(blueprintId.value) );
// }

//Need to do a validation check on the form before submitting
async function submit(){
  console.log("Attempting to submit image: " + imageName.value)
  //first step should be to validate all our selected shit
  //validate selected:
    //product title, category, blueprintId, tags, printProvider, variants, description, imageName and imageUrl
  //time to make the image post call
  // console.log("image: " + image.value)
  // function toBase64(string) {
  //   return window.btoa( string );
  // }

  // console.log(data)
  // const encodedImage = image.value;
  // console.log("imageUrl: " + imageUrl.value)
  // console.log("Base64Encoded image: " + image.value)
  // const freeimageKey = "6d207e02198a847aa98d0a2a901485a5"
  // const freeimageURL = "https://freeimage.host/api/1/upload/"
  // const res = await $fetch(`https://freeimage.host/api/1/upload/?key=${freeimageKey}&action=upload&source=${encodedImage}`, {method: "POST"})


  //Here's one:
  //AWV63QhW.jpg
  //https://thumbsnap.com/s/AWV63QhW.jpg

  //Maybe we could try checking for an existing matching image first here?
  //Or maybe not, idfk

  const uploadImage = await $fetch('/api/printify/image', {method:'POST', headers:{'ContentType':'application/json'}, body: { file_name: imageName.value, url: imageUrl.value }})

  //Returns
  // {
  //   id: '640a24d9a42aa55f5f715d00',
  //   file_name: 'AWV63QhW.jpg',
  //   height: 450,
  //   width: 450,
  //   size: 15518,
  //   mime_type: 'image/jpeg',
  //   preview_url: 'https://pfy-prod-image-storage.s3.us-east-2.amazonaws.com/11302399/db82628e-e29a-4a66-b7f2-71e7abd7bf0b',
  //   upload_time: '2023-03-09 18:26:33'
  // }

  //Need to properly display errors with image uploads
  //Example error response:
  // {
  //   "status": "error",
  //   // Exact error codes and messages are subject to change.
  //   "code": 8201,
  //   "message": "Validation failed.",
  //   "errors": {
  //     "reason": "Failed to upload image. Cause: {\"code\":\"error.file.size.limit.exceeded\"}",
  //     "code": 8201
  //   }
  // }


  //after successful image upload, let's (dynamically?) preview our unpublished product, and then allow the user to publish
  // console.log(uploadImage)


  //we need an unpublished products page to create, read, update, delete, and PUBLISH all our unpublished products
  
  //We are going to call our OWN API to create the product, and then call the printify API to publish it
  
  // for (let i=0; i<selectVariant.value.length;i++){

  // }

  let varray = []
  for (let i=0; i<variants.value.length; i++) {
    varray.push(variants.value[i].id)
  }



  const opts = {
    method: 'POST',
    url: '/api/printify/products',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "title": selectTitle.value,
      "description": selectDescription.value,
      "blueprint_id": blueprintId.value,
      "print_provider_id": selectPrintProvider.value.id,
      // "tags": selectTags.value,
      // "category_id": selectCategory.value,
      "variants": variants.value,
      "print_areas":[{
        "variant_ids":varray, //Need to make an array of all possible (or selected?) variantIds
        "placeholders":[{
          "position":"front",
          "images":[{
            "id":uploadImage.id,
            "x":0.5, //Center
            "y":0.5, //Center,
            "scale":1,
            "angle":0 //No rotation
          }]
        }]
      }]
    })
  }

  //Need to store the result of the call to our API - which should be the result from it's subsequent printify
  //If the result was a success, and the product was fully published,
  //then we should store the product in firestore from the server, and store it in the user's localStorage Pinia store when we return the product data to the client
  //Then, we can redirect the user to the product page

  //Here we need to make the actual call
  console.log("I am attempting to POST to /api/printify/products")
  const post = await $fetch(opts.url, { method: opts.method, headers: opts.headers, body: opts.body })
  console.log("I attempted to POST to /api/printify/products")

  if (post.error) {
    console.log(error)
    return error
  }

  console.log("post.id")
  console.log(post.id)

  //Here we should redirect users to the newly created [id] page
  ///admin/product/[id]
}


// Other worse way, but it definitely works
// import { getQuery } from "h3"

// // List all our form variables as const name = ref(datatype)
// const blueprintId = ref()

// onMounted(async() => {
//   if (getQuery().blueprintId) {
//     blueprintId.value = getQuery().blueprintId
//   } else {
//     blueprintId.value = ""
//   }
// })

// TODO
// on blueprintId.value change, fetch the appropriate print-provider and product info




//Seems like all we need to do now is add the image upload functionality, then post the product and follow the draft/publish flow


</script>

<!-- <script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        tab: 'Appetizers',
        items: [
          'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 4 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 4 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 4 },

      ],}
      }
  }
</script> -->