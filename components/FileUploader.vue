<template>
  <div
    :class=" $device.isDesktopOrTablet ? 'flex': 'flex-wrap'"
  >
    <div class="grow">
      <br>
      <input
        ref="uploadInput"
        type="file"
        accept="*/*"
        multiple
      >
      <v-btn @click="submitUpload()">
        Upload Files
      </v-btn>
      <v-progress-linear
        v-for="uprogress in uploadProgress"
        :key="uprogress"
        :model-value="uprogress"
        height="20px"
        rounded
        color="yellow"
      >
        <strong>{{ uprogress }} %</strong>
      </v-progress-linear>
      <!--Uploaded Files List-->
      <br>
      <br>
      <div
        v-if="uploadInput && uploadInput.files!=undefined"
      >
        <p>Uploaded Files</p>
        <ul>
          <li
            v-for="(file, index) in fileInfo"
            :key="index"
            class="flex align-center"
          >
            <v-menu :persistent="false">
              <template #activator="{ props }">
                <v-btn
                  variant="icon"
                  icon="mdi-menu"
                  v-bind="props"
                />
              </template>
              <v-list>
                <v-list-item
                  title="Make Default file"
                  @click="setDefaultfile(index)"
                />
                <v-list-item
                  title="View In New Tab"
                />
                <v-list-item
                  title="Delete File"
                />
              </v-list>
            </v-menu>
           

            <!-- <img
              v-if="uploadInput.files[index]"
              :src="imgUrls[index]"
              class="object-scale-down h-[30px] mr-2"
            > -->
            <!--We could still do some kind of icon or something...?-->
            <p class="mr-2">
              {{ new Date() }}
            </p>
            <a
              v-if="uploadInput.files[index]"
              :href="fileUrls[index]"
            >{{ file }}</a>
            <!-- <div
              v-if="imgPreview"
            >
              file Preview
              <img
                v-if="uploadInput.files[index]"
                :src="imgUrls[index]"
                class="max-h-[250px]"
              >
            </div> -->
          </li>
        </ul>
      </div>
      <br>
      <!-- <label>YouTube Link:
      </label>
      <input v-model="youtubeEmbedId">
      {{ youtubeEmbedId }}
      </input> -->
    </div>
    <!--Primary file-->
    <div
      v-if="uploadInput && uploadInput.files!=undefined"
      class="flex-none m-[20px] mt-0  p-[10px] mx-auto"
    >
      <p class="text-center font-bold">
        Primary file
      </p>

      <a :href="fileUrls[primaryfileIdx]">Download URL</a>

      <!-- <img
        v-if="uploadInput.files[primaryfileIdx]"
        :src="imgUrls[primaryfileIdx]"
        class="object-scale-down max-h-[300px]"
      > -->
    </div>
  </div>
</template>

<script setup>
//UNDER CONSTRUCTION

//MAJOR TODO
//Need to update the product document to include the download urls (and we need to only allow read access to these urls/the files at their endpoints if users have paid for it)

//TODO
// -Track filesize additions for the organization that the file is being uploaded under
// -Allow organization admins to share create/read/update/delete access to users of their choosing to allow file management to their organization
// -Set a user role up that determines whether or not a user can modify user's roles
// -Don't allow a user with admin access to revoke their own (or other's) admin access - require super-admin involvement?
import { getStorage, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ref as sref } from "firebase/storage";
// import { useObjectUrl } from '@vueuse/core'
import { doc, updateDoc, setDoc } from "@firebase/firestore";
import { useFirestore } from "vuefire";

const params = defineProps(['uid'])

const organization = ref(useRoute().params.name) //this should be based on the route? to get the partnername?
const fileInfo = ref([])  //Array of Objects with name:String() format
const uploadProgress = ref([])
const imgPreview = ref(false)


const uploadInput = ref()

const storage = getStorage();

const fileUrls = ref([])
const files = ref([])
// const bucketRef = sref(storage, 'partners/'+organization.value+'/Files');

//LIMITATIONS on Upload Filenames
// Total length of reference.fullPath must be between 1 and 1024 bytes when UTF-8 encoded.
// No Carriage Return or Line Feed characters.
// Avoid using #, [, ], *, or ?
const uploadFiles = () =>{
  for(let i=0;i<uploadInput.value.files.length;i++){
    fileInfo.value[i] = uploadInput.value.files[i].name
    const uploadRef = sref(storage, params.uid+'/'+uploadInput.value.files[i].name)
    let metadata = {
      uploadDate: new Date(),
      userId: useCurrentUser().value.uid,
      organization: organization.value
    }
    const uploadTask = uploadBytesResumable(uploadRef, uploadInput.value.files[i], metadata);

    uploadTask.on('state_changed', (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      uploadProgress.value[i] = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + uploadProgress.value[i] + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          console.log("Unauthorized storage attempt")
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          console.log("User canceled the storage attempt")
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          console.log("What the fuck did you do...")
          console.log(error)
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, () => {
      // Upload completed successfully, now we can get the download URL
      delete uploadProgress.value[i]
      imgPreview.value = true
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        fileUrls.value[i] = downloadURL
        // These download url's should be stored in firestore under jobs/general/applicants/{uid}/uploads
        let file = {
          is_default: primaryfileIdx.value==i,
          filename:uploadInput.value.files[i].name,
          src: downloadURL,
          variant_ids:[/*NOT YET INTEGRATED OH SHIT*/]
        }

        files.value[i] = file
      });
    });
  }
  return {success:true}
}

const submitUpload = () => {
  const success = uploadFiles()
  if(success){
    const docRef = doc(useFirestore(),'/users/'+params.uid+'/files/'+new Date().toString())
    setDoc(docRef,{files: files.value})
  }
}

const primaryfileIdx = ref(0)
const setDefaultfile = (idx) => {
  primaryfileIdx.value = idx
}



</script>
