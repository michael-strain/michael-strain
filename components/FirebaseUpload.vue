<template>
  <div>
    <v-container>
      <!-- https://next.vuetifyjs.com/en/components/file-inputs/ -->

      <div class="w-full">
        <v-file-input
          chips
          multiple
          label="File input w/ chips"
          @change="onFileChange"
        />
        <v-progress-circular
          v-if="fileUploading"
          indeterminate
        />
      </div>
      <!-- <div>
        File: {{ file }}
      </div> -->
    </v-container>

    <!-- <form class="w-full max-w-lg">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-file-input"
          >
            <input
              id="grid-file-input"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-eed-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="file"
              @change="onFileChange"
            >
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload" />
              </span>
              <span class="file-label">UPLOAD</span>
            </span>
          </label>
        </div>
      </div>
    </form> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Buffer } from 'buffer'

const file = ref()
const fileUploading = ref(false)

const emits = defineEmits(["fileChange","fileUploading"])

async function onFileChange (e) {

  //We somehow need to create a usable URL out of whatever file a user wants to upload.
  //Or I guess we could be lazy and make the user go get a URL to use...


  const file = e.target.files[0]
  console.log(file)
  if(!file) return
  const readData = async (f) => new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsBinaryString(f);
  });

  const data = await readData(file)
  const url = URL.createObjectURL(file)

  // const buffer = Buffer.from(data, 'base64')



  // const newData = data.replace(/^data:image\/(png|jpg);base64,/, "")

  //LET's try uploading this to freeimage.host/api/1/upload
  



  

  file.value = url.replace("blob:","")
  // console.log(file.value)
  emits("fileChange", file.name, file.value)
}


// const onFileChange = async (e) => {
//   fileUploading.value = true
//   emits("fileUploading", true)
//   console.log(e)
//   var files = e.target.files || e.dataTransfer.files
//   if (!files.length) return



//   console.log("files: ")
//   console.log(files)

//   //How the hell do we upload the image to printify??
//   //2 Options: we can use an objectURL or we can use a base64 encoded string

//   //Printify reccommends using the objectURL because it is apparently a more future proof solution
//   //Let's refactor this to use the objectURL

//   //Currently the image.post api call is trying to post a base64 encoded string
//   //But it's not working





//   // const objectUrl = await readData(files[0])
//   // console.log(objectUrl)


//   emits("fileUploading",false)
//   fileUploading.value = false
//   file.value = objectUrl
//   emits("fileChange", e.target.files[0].name, objectUrl)
//   // console.log(downloadUrl)
// }
</script>