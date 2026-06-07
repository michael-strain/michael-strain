<template>
  <v-container v-if="mapId" fluid class="pa-0 fill-height bg-grey-darken-4 position-relative overflow-hidden">
    
    <v-navigation-drawer absolute permanent width="320" color="grey-darken-3" class="elevation-4 z-index-10">
      <v-card class="pa-4 h-100 d-flex flex-column" flat color="transparent">
        <div class="text-h6 font-weight-bold white--text mb-2">🛡️ GM Control Panel</div>
        <v-divider class="mb-4"></v-divider>

        <div class="text-subtitle-2 mb-2">Combat Controls:</div>
        <v-btn 
          size="small" 
          :color="combatState.active ? 'error' : 'warning'" 
          block 
          variant="elevated" 
          @click="combatState.active ? endCombat() : startCombat()"
        >
          {{ combatState.active ? 'End Combat' : 'Roll Initiative & Start Combat' }}
        </v-btn>

        <v-select
          v-model="currentUserId"
          label="Assets"
          :items="players"
          item-title="name"
          item-value="id"
          variant="solo-filled"
          density="compact"
          class="mb-4"
          hide-details
        ></v-select>

        <div class="text-subtitle-2 mb-2">Active Mapping Tool:</div>
        <v-btn-toggle v-model="activeTool" mandatory color="primary" class="w-100 mb-4" density="compact">
          <v-btn value="navigate" prepend-icon="mdi-cursor-default" variant="flat">Navigate</v-btn>
          <v-btn value="walls" prepend-icon="mdi-vector-line" variant="flat">Draw Walls</v-btn>
          <v-btn value="teleport" prepend-icon="mdi-portal" variant="flat">Placers</v-btn>
        </v-btn-toggle>

        <v-btn v-if="activeTool === 'walls'" size="small" color="error" class="mb-4" block variant="tonal" @click="clearDraftWall">
          Cancel Current Wall
        </v-btn>

        <v-divider class="my-2"></v-divider>

        <div class="text-subtitle-2 mb-2 d-flex justify-space-between align-center">
          <span>Spawn Asset Palette:</span>
          <v-btn size="x-small" color="primary" variant="tonal" @click="spawnNewToken">Quick Spawn</v-btn>
        </div>
        
        <v-list class="bg-grey-darken-4 rounded overflow-y-auto flex-grow-1" density="compact">
          <v-list-item 
            v-for="asset in spawnableAssets" 
            :key="asset.name"
            :title="asset.name"
            :subtitle="asset.type.toUpperCase()"
            prepend-icon="mdi-plus-box"
            class="mb-1 rounded"
            @click="spawnNewToken(asset)"
          >
            <template v-slot:prepend>
              <v-icon :color="asset.color">mdi-circle</v-icon>
            </template>
          </v-list-item>
        </v-list>

        <v-divider class="my-2"></v-divider>
        <div class="text-subtitle-2 mb-2">Combat Protocol:</div>
        <v-btn 
          size="small" 
          :color="combatState.active ? 'error' : 'warning'" 
          block 
          variant="elevated" 
          @click="combatState.active ? endCombat() : startCombat()"
        >
          {{ combatState.active ? 'End Combat' : 'Roll Initiative & Start' }}
        </v-btn>

        <v-alert
          v-if="proximityMessage"
          type="warning"
          density="compact"
          variant="tonal"
          class="mt-2 text-caption"
        >
          {{ proximityMessage }}
        </v-alert>

      </v-card>
    </v-navigation-drawer>

    <v-card class="position-absolute ma-4 pa-3 token-hud top-0 right-0 d-flex flex-column" elevation="5" width="260" max-height="85vh">
      
      <div class="text-caption">Map Instance: <strong>{{ mapId }}</strong></div>
      <v-btn size="x-small" color="secondary" block variant="tonal" class="my-2" @click="resetCamera">
        Reset Camera View
      </v-btn>
      <v-divider class="mb-2"></v-divider>

      <div v-if="combatState.active" class="d-flex flex-column flex-grow-1 overflow-hidden">
        <div class="d-flex justify-space-between align-center mb-2">
          <span class="text-subtitle-2 text-warning font-weight-bold">⚔️ Round {{ combatState.currentRound }}</span>
          <v-btn size="x-small" color="primary" @click="nextTurn">Next Turn ⏭️</v-btn>
        </div>
        
        <v-list density="compact" class="bg-transparent pa-0 overflow-y-auto flex-grow-1">
          <v-list-item 
            v-for="(actor, idx) in sortedInitiativeQueue" 
            :key="actor.id"
            :class="idx === combatState.currentTurnIndex ? 'bg-grey-darken-3 rounded' : ''"
            class="mb-1"
          >
            <template v-slot:prepend>
              <v-avatar 
                size="24" 
                :color="actor.color" 
                class="mr-2 border" 
                :style="idx === combatState.currentTurnIndex ? 'border-color: #FFC107 !important; border-width: 2px;' : ''"
              ></v-avatar>
            </template>
            
            <v-list-item-title class="text-caption" :class="idx === combatState.currentTurnIndex ? 'text-warning font-weight-bold' : ''">
              {{ actor.name }}
            </v-list-item-title>
            
            <template v-slot:append>
              <v-chip size="x-small" :color="actor.initiativeRoll === null ? 'grey' : 'white'" variant="tonal">
                {{ actor.initiativeRoll === null ? '⏳' : actor.initiativeRoll }}
              </v-chip>
            </template>
          </v-list-item>
        </v-list>
      </div>
      
      <div v-else class="text-caption text-grey-lighten-1 mt-2 text-center">
        Combat inactive.
      </div>
    </v-card>

    <v-stage 
      ref="stageRef" 
      :config="stageConfig" 
      @wheel="handleZoom"
      @mousedown="handleCanvasMouseDown"
      @mousemove="handleCanvasMouseMove"
    >
      <v-layer :config="{ listening: false }">
        <v-image 
          v-if="mapImageElement" 
          :config="mapConfig" 
        />

        <v-line
          v-for="(x, index) in verticalLines"
          :key="'v-'+index"
          :config="{
            points: [x, 0, x, MAP_HEIGHT],
            stroke: 'rgba(255, 255, 255, 0.2)',
            strokeWidth: 1,
            dash: [4, 4]
          }"
        />

        <v-line
          v-for="(y, index) in horizontalLines"
          :key="'h-'+index"
          :config="{
            points: [0, y, MAP_WIDTH, y],
            stroke: 'rgba(255, 255, 255, 0.2)',
            strokeWidth: 1,
            dash: [4, 4]
          }"
        />
      </v-layer>

      <v-layer :config="{ listening: false }">
        <v-line
          v-for="(wall, i) in wallLines"
          :key="'wall-'+i"
          :config="{
            points: wall.points,
            stroke: '#FF5252',
            strokeWidth: 4,
            lineCap: 'round',
            lineJoin: 'round'
          }"
        />

        <v-line
          v-if="wallDrawingPoints.length > 0"
          :config="{
            points: wallDrawingPoints,
            stroke: '#FFEA00',
            strokeWidth: 4,
            dash: [10, 5],
            lineCap: 'round',
            lineJoin: 'round'
          }"
        />

        <v-group
          v-for="(portal, i) in teleportNodes"
          :key="'portal-'+i"
          :config="{ x: portal.x, y: portal.y }"
        >
          <v-circle
            :config="{
              radius: TOKEN_RADIUS,
              fill: 'rgba(156, 39, 176, 0.4)',
              stroke: '#E040FB',
              strokeWidth: 3,
              dash: [5, 5]
            }"
          />
          <v-text
            :config="{
              text: portal.label || 'Portal',
              fill: 'white',
              fontSize: 12,
              align: 'center',
              y: -TOKEN_RADIUS - 15,
              x: -40,
              width: 80
            }"
          />
        </v-group>
      </v-layer>

      <v-layer>
        <v-group
          v-for="token in tokens"
          :key="token.id"
          :config="{
            x: token.x,
            y: token.y,
            draggable: true,
            id: token.id 
          }"
          @dragmove="handleTokenDrag"
          @dragend="handleTokenDragEnd"
          @dblclick="centerCameraOn(token.x,token.y)"
        >
          <v-circle
            :config="{
              radius: TOKEN_RADIUS,
              fill: token.color || '#2196F3',
              stroke: combatState?.active && token.id === activeActorTokenId ? '#FFC107' : '#FFFFFF',
              strokeWidth: combatState?.active && token.id === activeActorTokenId ? 4 : 2,
              shadowColor: 'black',
              shadowBlur: 5,
              shadowOpacity: 0.6
            }"
          />
          <v-text
            :config="{
              text: token.name,
              fontSize: 14,
              fontFamily: 'Arial',
              fill: 'white',
              align: 'center',
              y: TOKEN_RADIUS + 5,
              x: -50,
              width: 100,
              shadowColor: 'black',
              shadowBlur: 2,
            }"
          />
        </v-group>
      </v-layer>
    </v-stage>
  </v-container>
  <v-container v-else fluid class="fill-height bg-grey-darken-4 d-flex align-center justify-center">
    <v-card color="grey-darken-3" class="text-center pa-8 border-thin" elevation="8" max-width="450">
      
      <v-avatar color="grey-darken-2" size="80" class="mb-4">
        <v-icon size="40" color="grey-lighten-1">mdi-map-off</v-icon>
      </v-avatar>
      
      <v-card-title class="text-h5 text-white font-weight-bold">
        No Active Map Loaded
      </v-card-title>
      
      <v-card-text class="text-grey-lighten-1 text-body-1 mt-2">
        Welcome to your new campaign! You currently don't have an active map set for your players to explore.
      </v-card-text>
      
      <v-card-actions class="justify-center mt-6">
        <NuxtLink :to="`/trpg/${campaignId}/gm/maps`" class="text-decoration-none w-100">
          <v-btn color="primary" variant="elevated" block prepend-icon="mdi-map-plus" size="large">
            Open Map Manager
          </v-btn>
        </NuxtLink>
      </v-card-actions>
      
    </v-card>
  </v-container>
</template>

<script setup>
import { collection, onSnapshot, doc, updateDoc, addDoc, query, setDoc } from 'firebase/firestore';
import { useDocument, useCurrentUser, useCollection } from 'vuefire'

const props = defineProps({
  map: {
    type: String,
    default: null
  }
})

// Tracking references
const route = useRoute()
const campaignId = route.params.id
const db = useFirestore()
const userProfile = computed(()=>useCurrentUser().value)
const activeTool = ref('navigate'); // Options: navigate, walls, teleport

const campaignData = inject('campaignData')
// const currentMapId = computed(()=>{
//   if(route.params.mapId) return route.params.mapId
//   else if (campaignData.value?.activeMapId) return campaignData.value.activeMapId
//   else return false
// })


const mapId = computed(() => {
  if (props.map) return props.map
  if (campaignData.value?.activeMapId) return campaignData.value.activeMapId
  return null
})
const mapDocRef = computed(() => {
  if (!mapId.value) return null // Stop Firebase from crashing!
  return doc(db, 'campaigns', campaignId, 'maps', mapId.value)
})
const {data:mapData} = useDocument(mapDocRef)


// const mapDocRef = computed(()=>{
//   if(!props.map||!campaignId) return null
//   return doc(db, 'campaigns',campaignId,'maps',props.map)
// })
const tokenColRef = computed(()=>{
  if(!mapId.value) return null
  return collection(db,'campaigns',campaignId,'maps',mapId.value,'tokens')
})
const wallColRef = computed(()=>{
  if(!mapId.value) return null
  return collection(db,'campaigns',campaignId,'maps',mapId.value,'walls')
})
const teleportColRef=computed(()=>{
  if(!mapId.value) return null
  return collection(db,'campaigns',campaignId,'maps',mapId.value,'teleports')
})

const {data:tokens} = useCollection(tokenColRef.value)
// const {data:mapData} = useDocument(mapDocRef.value)

const {data:wallLines} = useCollection(wallColRef.value)
const {data:teleportNodes} = useCollection(teleportColRef.value)

//We need all the control functionality of this, plus updating the mapData.combatState field in firestore when things change
// const combatState = ref({
//   active:false,
//   currentTurnIndex: 0,
//   currentRound: 1
// })

const combatState = computed(() => {
  return mapData.value?.combatState || { active: false, currentTurnIndex: 0, currentRound: 0 }
})

// const players = Object.entries(campaignData?.value.players)

const p = computed(()=>Object.keys(campaignData.value.players).map(key => ({
  id: key,
  type:'player',
  ...campaignData.value.players[key]
})))

//At some point we may want to convert items and bestiary to subcollections so they get their own ids instead of just being array items

// const items = campaignData?.value.items
// const bestiary = campaignData?.value.bestiary
// const spawnableAssets = ref([...players.value,...items,...bestiary])
const spawnableAssets = computed(() => {
  if (!campaignData.value) return []

  // Map Firebase objects into standard palette items, injecting their Firebase Document ID
  // const p = Object.entries(campaignData.value.players || {}).map(([id, data]) => ({ id, type: 'player', color: '#1976D2', ...data }))
  const m = Object.entries(campaignData.value.bestiary || {}).map(([id, data]) => ({ id, type: 'monster', color: '#E53935', ...data }))
  const i = Object.entries(campaignData.value.items || {}).map(([id, data]) => ({ id, type: 'item', color: '#FFB300', ...data }))
  
  // Hardcode system entities like Traps and Portals
  const sys = [
    { id: 'trap-base', name: 'Hidden Trap', type: 'trap', color: '#FF5252' },
    { id: 'portal-base', name: 'Teleport Gate', type: 'portal', color: '#9C27B0' }
  ]

  return [...p.value, ...m, ...i, ...sys]
})


const GRID_SIZE = 70;
const TOKEN_RADIUS = 30;
const MAP_WIDTH = 2000;
const MAP_HEIGHT = 2000;

// Reactive state tracking arrays
// const tokens = ref([]);
// const wallLines = ref([]);
// const teleportNodes = ref([]);
const wallDrawingPoints = ref([]); // Live point feed for walls being drawn


//TODO
//Make this populate from campaignData, and for things like chests make it possible for player to claim an array of items/weapons/armor/spellbooks/etc that is added to their inventory appropriately
//Need a new type 'trap' and it needs to have Sense DC, Insepct DC, Disassemble DC, and a tripEffect that can be parsed if given in dice roll format (harming the player) or some other effect such as immobilizing the player (movement:0 but in a reversible manner) 
//Might need a new way of doing portals that involves spawnable assets as well
//Would also be nice if, in addition to having a more organized asset pallet, we had a list of used assets and centered our 'camera' on an asset when clicked
//We also want to be able to select a token and customize/roll stats based on predefined ranges from the specific doc/field it came from


const spawnNewToken = async (asset) => {
  if (!asset) return

  // Calculate the exact center of the GM's current screen view
  const stage = stageRef.value.getNode()
  const scale = stage.scaleX()
  const screenCenterX = (-stage.x() + (window.innerWidth / 2)) / scale
  const screenCenterY = (-stage.y() + (window.innerHeight / 2)) / scale

  // Snap to the nearest grid intersection
  const snapX = Math.floor(screenCenterX / GRID_SIZE) * GRID_SIZE + (GRID_SIZE / 2)
  const snapY = Math.floor(screenCenterY / GRID_SIZE) * GRID_SIZE + (GRID_SIZE / 2)

  const baseEntity = {
    name: asset.name,
    type: asset.type,
    color: asset.color,
    x: snapX,
    y: snapY
  }

  try {
    if (asset.type === 'portal') {
      // Divert portals to the teleport collection
      await addDoc(teleportColRef.value, {
        ...baseEntity,
        label: 'New Portal',
        targetMapId: mapId.value, // Default to self
        targetX: snapX + GRID_SIZE,
        targetY: snapY
      })
    } else if (asset.type=== 'player') {
      const tokenPayload = {
        ...baseEntity,
        ownerId: asset.id,
      }
      const tokenDocRef = computed(()=>{
        if(!mapId.value) return null
        return doc(db,'campaigns',campaignId,'maps',mapId.value,'tokens',asset.id)
      })
      await setDoc(tokenDocRef.value,tokenPayload)
      return
    } else {
      // Add players, monsters, items, and traps to the token collection
      const tokenPayload = {
        ...baseEntity,
        ownerId: asset.type === 'player' ? asset.id : userProfile.value.uid,
      }

      if (asset.type === 'trap') {
        // Inject the requested Trap DC fields
        Object.assign(tokenPayload, {
          detected: false,
          senseDC: 15,
          inspectDC: 15,
          disassembleDC: 15,
          tripEffect: '1d6', // Can be intercepted by your dice parser later!
          isImmobilizing: false
        })
      }

      await addDoc(tokenColRef.value, tokenPayload)
    }
  } catch (err) {
    console.error("Token deployment error:", err)
  }
}

// Canvas Configuration references
const stageRef = ref(null);
const stageConfig = ref({ width: 1024, height: 768, x: 0, y: 0, scaleX: 1, scaleY: 1 });
const mapImageElement = ref(null);
const mapConfig = computed(() => ({
  image: mapImageElement.value,
  width: MAP_WIDTH,
  height: MAP_HEIGHT,
  opacity: 0.85
}));
const verticalLines = computed(() => { const lines = []; for (let i = 0; i < MAP_WIDTH; i += GRID_SIZE) lines.push(i); return lines; });
const horizontalLines = computed(() => { const lines = []; for (let i = 0; i < MAP_HEIGHT; i += GRID_SIZE) lines.push(i); return lines; });


/**
 * COMPUTE COMBAT INTERACTION QUEUES
 * Sorts tokens dynamically: descending initiative score, break ties using a tie breaker roll
 */
const sortedInitiativeQueue = computed(() => {
  return [...tokens.value]
    .filter(t => t.initiativeRoll !== null)
    .sort((a, b) => {
      return b.initiativeRoll - a.initiativeRoll;
    });
});

// Resolve precisely which token ID signature holds the active round permissions
const activeActorTokenId = computed(() => {
  if (!combatState.value.active || sortedInitiativeQueue.value.length === 0) return null;
  return sortedInitiativeQueue.value[combatState.value.currentTurnIndex].id;
});


const startCombat = async () => {
  let rollRequests = {}
  
  for (const token of tokens.value) {
    // 1. Players get a prompt to physically roll their 3D dice
    if (token.type === 'player' && token.ownerId) {
      rollRequests[token.ownerId] = {
        reason: 'Initiative',
        base: 1, 
        faces: 20,
        rankSumModifier: ['Agility'],
        // This tells the Dice Box exactly where to save the result!
        location: `campaigns/${campaignId}/maps/${mapId.value}/tokens/${token.id}`,
        field: 'initiativeRoll',
        timestamp: Date.now() // Ensures the Vue watcher triggers on the player's screen
      };
    } 
    // 2. Monsters auto-roll to save the GM time
    else if (token.type === 'monster' || token.type === 'npc') {
      const autoRoll = Math.floor(Math.random() * 20) + 1; // Generic d20 for now
      await updateDoc(doc(db, 'campaigns', campaignId, 'maps', mapId.value, 'tokens', token.id), {
        initiativeRoll: autoRoll
      });
    }
  }

  // Push the requests and start the combat clock
  await updateDoc(mapDocRef.value, {
    'rollRequests': rollRequests,
    'combatState.active': true,
    'combatState.currentTurnIndex': 0,
    'combatState.currentRound': 1
  })
};

const nextTurn = async () => {
  if (!combatState.value.active || sortedInitiativeQueue.value.length === 0) return;

  let nextIndex = combatState.value.currentTurnIndex + 1;
  let nextRound = combatState.value.currentRound;

  // Wrap around back to the top of the queue if we hit the end
  if (nextIndex >= sortedInitiativeQueue.value.length) {
    nextIndex = 0;
    nextRound += 1;
  }

  // Push the active turn pointer to Firebase so all players update instantly
  await updateDoc(mapDocRef.value, {
    'combatState.currentTurnIndex': nextIndex,
    'combatState.currentRound': nextRound
  });
};

const endCombat = async () => {
  // 1. Turn off combat state
  await updateDoc(mapDocRef.value, {
    'combatState.active': false,
    'combatState.currentTurnIndex': 0,
    'combatState.currentRound': 0,
    'rollRequests': {} 
  });

  // 2. Clear out the old initiative scores from the board
  for (const token of tokens.value) {
    if (token.initiativeRoll !== undefined) {
      await updateDoc(doc(db, 'campaigns', campaignId, 'maps', mapId.value, 'tokens', token.id), {
        initiativeRoll: null
      });
    }
  }
};


onMounted(() => {
  watch(mapData, (newMap) => {
    if (newMap?.imageUrl && !mapImageElement.value) {
      const img = new Image();
      img.src = newMap.imageUrl;
      img.onload = () => { mapImageElement.value = img; };
    }
  }, { immediate: true })
  window.addEventListener('resize', handleResize);
  window.addEventListener('mousedown', handlePanningStart);
  handleResize();

  // initializeMapListeners(currentMapId.value);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  window.removeEventListener('mousedown', handlePanningStart);
  // if (unsubTokens) unsubTokens(); if (unsubWalls) unsubWalls(); if (unsubPortals) unsubPortals();
});

/**
 * MOUSE ACTION ROUTER HANDLERS
 * Diverts click events down to vector mapping engines or teleport placements based on selected tool
 */
const handleCanvasMouseDown = async (event) => {
  if(event.evt) {
    event.evt.preventDefault()
  }
  if (event.target !== event.target.getStage() && activeTool.value === 'navigate') return;
  
  const stage = stageRef.value.getNode();
  const pointer = stage.getPointerPosition();
  if (!pointer) return;

  // De-transform screen pixel values into map layout relative coordinate grids
  const transformX = (pointer.x - stage.x()) / stage.scaleX();
  const transformY = (pointer.y - stage.y()) / stage.scaleY();

  // TOOL A: Drawing Visinon Vectors
  if (activeTool.value === 'walls') {
    // Check for standard left-click to drop line nodes
    if (event.evt.button === 0) {
      wallDrawingPoints.value.push(transformX, transformY);
      
      // Once you have 2 point coordinates (4 values: [x1, y1, x2, y2]), save the segment
      //TODO in the future I may actually want to wait for all wall lines to be created (or user has to manually hit a save button) to save their wall lines
      
      if (wallDrawingPoints.value.length === 4) {
        await addDoc(collection(wallColRef.value), {
          points: [...wallDrawingPoints.value]
        });
        // Seed the next starting link segment automatically
        wallDrawingPoints.value = [transformX, transformY];
      }
    }
  }
  
  // TOOL B: Setting Teleport Gates
  else if (activeTool.value === 'teleport' && event.evt.button === 0) {
    const snapX = Math.floor(transformX / GRID_SIZE) * GRID_SIZE + (GRID_SIZE / 2);
    const snapY = Math.floor(transformY / GRID_SIZE) * GRID_SIZE + (GRID_SIZE / 2);

    // Mock link configurations (Portal T1 moves tokens to dungeon-level-2 coordinate sets)
    await addDoc(collection(teleportColRef.value), {
      x: snapX,
      y: snapY,
      label: 'Portal T1', //Need to convert this to a user input text field for GMS to be able to organize same-map teleport lists
      targetMapId: 'dungeon-level-2', //Need to convert this to a user input select field of available maps (default to the same map)
      targetX: GRID_SIZE * 2 + (GRID_SIZE / 2),
      targetY: GRID_SIZE * 2 + (GRID_SIZE / 2)
    })
    activeTool.value = 'navigate'
  }
}
  
const handleCanvasMouseMove = () => {
  if (activeTool.value !== 'walls' || wallDrawingPoints.value.length !== 2) return
  const stage = stageRef.value.getNode()
  const pointer = stage.getPointerPosition()
  if (!pointer) return
  const transformX = (pointer.x - stage.x()) / stage.scaleX()
  const transformY = (pointer.y - stage.y()) / stage.scaleY()
  // Create real-time structural visual feedback lines trailing the cursor frame
  if (wallDrawingPoints.value.length === 2) {
    wallDrawingPoints.value[2] = transformX
    wallDrawingPoints.value[3] = transformY
  }
}

const clearDraftWall = () => {
  wallDrawingPoints.value = []
}

// /**ENTITY MANIPULATION & INTERACTION MATH*/
// const spawnEntity = async (asset) => {

//   //If the asset IS a player
//   if(asset.type=='player'){
//     await addDoc(doc(db,'campaigns',campaignId,'maps',currentMapId.value,'tokens',asset.id),{
//       name: asset.name,
//       color: asset.color, //replace this with an image eventually
//       type: asset.type, //player
//       x: GRID_SIZE / 2,
//       y: GRID_SIZE / 2,
//       // initiativeRoll: null, //1d20+Agility
//     })
//   } else if(asset.type=='monster'){
//     //If the asset is NOT a player
//     await addDoc(collection(db, 'campaigns', campaignId, 'maps', currentMapId.value, 'tokens'), {
//       name: asset.name,
//       color: asset.color, //replace this with an image eventually
//       type: asset.type, //
//       x: GRID_SIZE / 2,
//       y: GRID_SIZE / 2,
//       //if the asset is an NPC or monster
//       // initiativeRoll: null, //1d20+Agility
//     })
//   } else if(asset.type=='item'){
//     await addDoc(collection(db, 'campaigns', campaignId, 'maps', currentMapId.value, 'tokens'), {
//       name: asset.name,
//       color: asset.color, //replace this with an image eventually
//       type: asset.type, //
//       x: GRID_SIZE / 2,
//       y: GRID_SIZE / 2,
//     })
//   } else if(asset.type=='portal'){
//     //add it and ensure our targetMapId, targetX, and targetY fields are populated
//   } else if(asset.type=='trap'){
//     //add it and ensure we have a detected field set to false and the token should be invisible until they are able to detect it or it is revealed by the GM (via party communcation or other means)
//     //local visibility manipulation would leave detected: false, while GM influence should reveal the trap to everyone in realtime
//   }

 
// }

const handleTokenDrag = (event) => {
  const target = event.target
  const idx = tokens.value.findIndex(t => t.id === target.id())
  if (idx !== -1) {
    tokens.value[idx].x = target.x()
    tokens.value[idx].y = target.y()
  }
}

const handleTokenDragEnd = async (event) => {
  const target = event.target
  const tokenId = target.id()
  const snapX = Math.floor(target.x() / GRID_SIZE) * GRID_SIZE + (GRID_SIZE / 2)
  const snapY = Math.floor(target.y() / GRID_SIZE) * GRID_SIZE + (GRID_SIZE / 2)
  // Cross-reference teleport network triggers before updating standard coordinates
  for (const portal of teleportNodes.value) {
    if (portal.x === snapX && portal.y === snapY) {
      alert(`🌀 Teleport Triggered! Transferring token to database sector: ${portal.targetMapId}`)

 
      // Step 1: Remove entity document reference allocation from the old map location space
      const oldDocRef = doc(db, 'campaigns', campaignId, 'maps', mapId.value, 'tokens', tokenId)
      const movingTokenData = tokens.value.find(t => t.id === tokenId)
      // Step 2: Inject character properties directly into the destination target map subcollection
      await addDoc(collection(db, 'campaigns', campaignId, 'maps', portal.targetMapId, 'tokens'), {
        name: movingTokenData.name,
        color: movingTokenData.color,
        type: movingTokenData.type,
        x: portal.targetX,
        y: portal.targetY
      })
      // Step 3: Clean out old node allocations
      // (In production, use batch writes to make this transaction atomic)

      //temp safe remove
      await updateDoc(oldDocRef, { x: -999, y: -999 }) 
      // call deleteDoc() when batch-write/run-transaction method is used
      return
    }
  }

  // Standard positional update if no portal was hit
  await updateDoc(doc(db, 'campaigns', campaignId, 'maps', mapId.value, 'tokens', tokenId), 
    {
      x: snapX, y: snapY 
    }
  )
}


// --- Reused System Utilities ---
const handleZoom = (e) => {
  if(e.evt){
    e.evt.preventDefault()
  }
  const stage = stageRef.value.getNode()
  const oldScale = stage.scaleX()
  const pointer = stage.getPointerPosition()
  if (!pointer) return
  const mousePointTo = { x: (pointer.x - stage.x()) / oldScale, y: (pointer.y - stage.y()) / oldScale }
  const newScale = e.evt.deltaY < 0 ? oldScale * 1.15 : oldScale / 1.15
  const clampedScale = Math.max(0.15, Math.min(4, newScale))
  stage.position({ x: pointer.x - mousePointTo.x * clampedScale, y: pointer.y - mousePointTo.y * clampedScale })
  stage.scale({ x: clampedScale, y: clampedScale })
  stage.batchDraw()
}

let isPanning = false
let startX = 0
let startY = 0
const handlePanningStart = (e) => {
  if (e.button !== 1 && e.button !== 2) return
  const stage = stageRef.value?.getNode()
  if (!stage) return
  isPanning = true
  startX = e.clientX - stage.x()
  startY = e.clientY - stage.y()
  window.addEventListener('mousemove', handlePanningMove)
  window.addEventListener('mouseup', handlePanningEnd)
}

const handlePanningMove = (e) => {
  if (!isPanning) return
  const stage = stageRef.value.getNode()
  stage.position({ x: e.clientX - startX, y: e.clientY - startY })
  stage.batchDraw()
}

const handlePanningEnd = () => {
  isPanning = false
  window.removeEventListener('mousemove', handlePanningMove)
  window.removeEventListener('mouseup', handlePanningEnd)
}

const handleResize = () => {
  if (process.client) {
    stageConfig.value.width = window.innerWidth
    stageConfig.value.height = window.innerHeight
  }
}

const centerCameraOn = (x, y) => {
  const stage = stageRef.value.getNode()
  const scale = stage.scaleX()
  
  // Calculate new stage position to put the X/Y in the center of the window
  const newStageX = (window.innerWidth / 2) - (x * scale)
  const newStageY = (window.innerHeight / 2) - (y * scale)

  // Use Konva's built-in animation for a smooth pan
  stage.to({
    x: newStageX,
    y: newStageY,
    duration: 0.3,
    easing: Konva.Easings.EaseInOut
  })
}
    
</script>

<style scoped>
  .token-hud {
    z-index: 10;
    pointer-events: auto;
  }
</style>