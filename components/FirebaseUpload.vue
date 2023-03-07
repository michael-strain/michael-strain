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

<!-- An example of good coding -->
<script setup>
const emits = defineEmits(["fileChange","fileUploading"])

const onFileChange = async (e) => {
  emits("fileUploading", true)
  var files = e.target.files || e.dataTransfer.files
  if (!files.length) return

  // uploadFile comes from ./combosables/firebase.ts
  const { snapshot, downloadUrl, metadata } = await uploadFile(files[0])
  emits("fileUploading",false)
  emits("fileChange", snapshot, downloadUrl, metadata)
  console.log(downloadUrl)
}
</script>