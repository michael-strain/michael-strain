<template>
    Select the active map, see players, npcs, and mobs located at a given location, and create new maps.
  <!-- <v-card title="Manage Maps">
    <!-List all maps in this campaign grouped by region with some basic details about them->
    <!-Maps with a region field should be listed in an expandable dropdown.  Maps without a defined region should all be grouped in a 'No Region' expansion dropdown->
    
    <v-card-actions>
      <v-btn @click="dialog">Add New Item</v-btn>
    </v-card-actions>
  </v-card> -->

   <v-card class="pa-4" elevation="2">
      <v-card-title class="text-h5 d-flex justify-space-between align-center pb-4">
        <span>Available Maps</span>
        <!-- Small badge to quickly see total map count -->
        <v-chip color="secondary" size="small">{{ allMapData.length }} Maps</v-chip>
      </v-card-title>

      <!-- Loading State -->
      <v-row v-if="pending" justify="center" class="my-6">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-row>

      <!-- Empty State -->
      <v-alert
        v-else-if="allMapData.length === 0"
        type="info"
        variant="tonal"
        text="No maps uploaded yet. Use the upload form to add your first map."
      ></v-alert>

      <!-- Grid Grid of Maps -->
      <v-row v-else>
        <v-col 
          v-for="map in allMapData" 
          :key="map.id" 
          cols="12" 
          sm="6"
        >
          <!-- Dynamic styling: Adds a primary border if the map is active -->
          <v-card 
            :variant="activeMapId === map.id ? 'outlined' : 'flat'"
            :color="activeMapId === map.id ? 'primary' : 'surface-variant'"
            class="h-100 d-flex flex-column"
          >
            <!-- Map Image Preview -->
            <v-img
              :src="map.imageUrl"
              height="200"
              cover
              class="align-end text-white"
            >
              <!-- Optional Region overlay on image -->
              <v-chip 
                v-if="map.region" 
                size="small" 
                color="black" 
                class="ma-2 position-absolute top-0 right-0"
              >
                {{ map.region }}
              </v-chip>
            </v-img>

            <v-card-item>
              <v-card-title class="text-h6">{{ map.name }}</v-card-title>
              <v-card-subtitle v-if="map.region">Region: {{ map.region }}</v-card-subtitle>
            </v-card-item>

            <v-card-text class="flex-grow-1">
              <p class="text-body-2 text-wrap">
                {{ map.description || 'No description provided.' }}
              </p>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions class="pa-4 pt-2 d-flex align-center justify-space-between gap-3">
              <!-- Primary Action: Toggle Map State (Takes up more proportional weight) -->
              <v-btn
                :color="activeMapId === map.id ? 'success' : 'primary'"
                :variant="activeMapId === map.id ? 'elevated' : 'tonal'"
                :prepend-icon="activeMapId === map.id ? 'mdi-check-circle' : 'mdi-play-circle'"
                @click="setActiveMap(map.id)"
                class="flex-grow-1 text-none font-weight-bold letter-spacing-sm action-btn"
                height="42"
              >
                {{ activeMapId === map.id ? 'Active Map' : 'Select Active' }}
              </v-btn>

              <!-- Secondary Action: Configuration Link (Clean, balanced anchor button) -->
              <v-btn
                :to="`/trpg/${useRoute().params.id}/gm/maps/${map.id}`"
                color="secondary"
                variant="outlined"
                prepend-icon="mdi-cog"
                class="flex-grow-1 text-none font-weight-bold action-btn"
                height="42"
              >
                Customize
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-btn @click="dialog=true">Add New Item</v-btn>
      </v-card-actions>
    </v-card>

  <v-dialog
    v-model="dialog"
  >
    <v-card class="elevation-3 border-thin fill-height d-flex flex-column">
      <!-- Card Header Banner -->
      <v-card-item class="bg-blue-grey-darken-4 text-white py-3">
        <v-card-title class="text-h6 font-weight-bold d-flex justify-space-between align-center">
          New Map  
        </v-card-title>
      </v-card-item>

      <!-- Vuetify Form with ref validation -->
      <v-form ref="formRef" v-model="isFormValid" @submit.prevent="generateMap">
        
        <!-- Map Name (Required) -->
        <v-text-field
          v-model="mapFields.mapName"
          label="Map Name *"
          variant="outlined"
          :rules="[v => !!v || 'Map Name is required']"
          required
          class="mb-2"
        ></v-text-field>

        <!-- Map Description (Optional) -->
        <v-textarea
          v-model="mapFields.mapDescription"
          label="Map Description"
          variant="outlined"
          rows="3"
          class="mb-2"
        ></v-textarea>

        <!-- Region (Optional) -->
        <v-text-field
          v-model="mapFields.region"
          label="Region"
          variant="outlined"
          class="mb-2"
        ></v-text-field>

        <!-- File Input (Required) -->
        <v-row>
          <v-col>
            <v-file-input
              v-model="selectedFile"
              accept="image/*"
              label="Select Map Image *"
              prepend-icon="mdi-map"
              variant="outlined"
              :rules="[v => !!v || 'Map image is required']"
              required
              clearable
            ></v-file-input>
          </v-col>
          <v-col>
            <v-tooltip interactive>
              <template v-slot:activator="{ props: activatorProps }">
                <v-icon-btn icon="mdi-information-outline" v-bind="activatorProps"></v-icon-btn>
              </template>
              <div>
                Please ensure all floors of your map are on a single image to avoid spreading players out across multiple maps.<br />
                Please do not include grid lines on your map, they will be generated automatically.               
              </div>
            </v-tooltip>

          </v-col>
        </v-row>

        <!-- Submit Button -->
        <v-btn
          type="submit"
          color="primary"
          variant="outlined"
          block
          class="mt-4"
          :loading="uploading"
          :disabled="!isFormValid || uploading"
        >
          Generate Map
        </v-btn>
      </v-form>
    </v-card>
  </v-dialog>

  <!-- Notification Toast -->
  <v-snackbar v-model="showSnackbar" :color="snackbarColor" timeout="3000">
    {{ message }}
  </v-snackbar>

  <!-- <p>Campaign Info: {{ campaignData.items }}</p> -->
</template>

<script setup>

  import { useCurrentUser, useFirestore, useDocument, useCollection } from 'vuefire';
  import { doc, setDoc ,addDoc, collection } from 'firebase/firestore'
  import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';


  definePageMeta({
    layout: 'gm',
  })

  //Need to useCollection to get our whole list of maps from the maps subcollection

  
  const campaignData = inject('campaignData') //comes from the gm layout. Nifty!
  const activeMapId = ref(null);

  const mapCollection = computed(()=> collection(useFirestore(),'campaigns',useRoute().params.id,'maps'))
  const {data:allMapData, pending, error, promise} = useCollection(mapCollection)


  const dialog = ref(false)
  const formRef = ref(null)
  const isFormValid = ref(false)
  const selectedFile = ref(null)
  const uploading = ref(false)
  const message = ref('')
  const showSnackbar = ref(false)
  const snackbarColor = ref('success')

  const mapFields = reactive({
    mapName: '',
    mapDescription: '',
    region:''
  })

  const generateMap = async()=>{
    //addDoc to maps subcollection
    //navigateTo the new map where we can add npcs, items, configure fields of view or by default we could show areas visited + everything in sight or something?
    //Need to let GMs define collisons, area boundaries, map edges and connections (when player moves to the end of a trail leading off the map, define a teleport point and which map and what coordinates it leads to - or let the gms manually configure this)
    //For maps with multiple floors, instead of doing some crazy leveling bullshit and spreading players across multiple maps, let's put all the levels of a map on the same background image and teleport to otherwise inaccessible parts of that same map
    //Will need to adjust the map size to fit grid lines so that each box represents a 5 ft square
    

    // Trigger a full form validation check manually
    const { valid } = await formRef.value.validate();
    if (!valid || !selectedFile.value) return;

    uploading.value = true;
    
    try {
      const file = selectedFile.value;
      const uniqueFileName = `${Date.now()}_${file.name}`;
      
      // 1. Upload map image to Firebase Storage
      const imageStorageRef = storageRef(useFirebaseStorage(), `maps/${uniqueFileName}`);
      await uploadBytes(imageStorageRef, file);

      // 2. Fetch the image URL
      const imageUrl = await getDownloadURL(imageStorageRef);

      // 3. Save map details and the image URL to Firestore
      await addDoc(collection(useFirestore(), 'campaigns', useRoute().params.id ,'maps'), {
        name: mapFields.mapName,
        description: mapFields.mapDescription || null, // Guard empty strings
        region: mapFields.region || null,
        imageUrl: imageUrl,
        createdAt: new Date().toISOString(),
        activeMap: false,
        combatActive: false,
        currentTurnIndex: 0,
        currentRound: 0,
        //this will eventually have a bunch of additional data from game logic to vue-flow data
      });

      // Reset Form and State on success
      message.value = 'Map entry saved successfully!';
      snackbarColor.value = 'success';
      showSnackbar.value = true;
      
      formRef.value.reset(); // Resets both text inputs and validation states
      selectedFile.value = null;
      
    } catch (error) {
      console.error('Submission error:', error);
      message.value = 'Failed to save map data.';
      snackbarColor.value = 'error';
      showSnackbar.value = true;
    } finally {
      uploading.value = false;
    }

  }

  // Update state when user selects a new active map
  const setActiveMap = (mapId) => {
    activeMapId.value = mapId;
    //update the campaignData.value.activeMap with the selected map data
    //update our maps subcollection to show the activeMap as active
  };

  onMounted(async()=>{
    if(allMapData.value){
      for(const map in allMapData.value){
        if(map.activeMap){
          activeMapId.value = map.id
        }
      }
    }
  })

</script>

<style scoped>
/* Generates a clean padding gap between elements inside the flexbox container */
.gap-3 {
  gap: 12px !important;
}

/* Enhances button text readability and removes default harsh tracking styles */
.letter-spacing-sm {
  letter-spacing: 0.5px !important;
}

/* Premium transition and shadow animations on hover states */
.action-btn {
  border-radius: 8px !important; /* Matches modern card layouts */
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
}

.action-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.action-btn:active {
  transform: translateY(0);
}
</style>