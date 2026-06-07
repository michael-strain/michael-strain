<template>
  <v-container fluid class="pa-0 fill-height bg-grey-darken-4 position-relative overflow-hidden">
    
    <!-- LEFT SIDEBAR: GM Tool Belt and Entity Spawning Palette -->
    <v-navigation-drawer permanent width="300" color="grey-darken-3" class="elevation-4">
      <v-card class="pa-4 h-100 d-flex flex-column" flat color="transparent">
        <div class="text-h6 font-weight-bold white--text mb-2">🛡️ GM Control Panel</div>
        <v-divider class="mb-4"></v-divider>

        <!-- Tool Selection Toggles -->
        <div class="text-subtitle-2 mb-2">Active Mapping Tool:</div>
        <v-btn-toggle v-model="activeTool" mandatory color="primary" class="w-100 mb-4" density="compact">
          <v-btn value="navigate" prepend-icon="mdi-cursor-default" variant="flat">Navigate</v-btn>
          <v-btn value="walls" prepend-icon="mdi-vector-line" variant="flat">Draw Walls</v-btn>
          <v-btn value="teleport" prepend-icon="mdi-portal" variant="flat">Placers</v-btn>
        </v-btn-toggle>

        <v-btn v-if="activeTool === 'walls'" size="small" color="error" class="mb-4" block variant="tonal" @click="clearDraftWall">
          Cancel Current Wall
        </v-btn>

        <!-- Entity Asset Library -->
        <div class="text-subtitle-2 mb-2">Spawn Asset Palette:</div>
        <v-list class="bg-grey-darken-4 rounded overflow-y-auto flex-grow-1" density="compact">
          <v-list-item 
            v-for="asset in spawnableAssets" 
            :key="asset.name"
            :title="asset.name"
            :subtitle="asset.type.toUpperCase()"
            prepend-icon="mdi-plus-box"
            class="mb-1 rounded"
            @click="spawnEntity(asset)"
          >
            <template v-slot:prepend>
              <v-icon :color="asset.color">mdi-circle</v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <!-- RIGHT FLOATING HUD: Navigation Info -->
    <v-card class="position-absolute ma-4 pa-3 token-hud top-0 right-0" elevation="5" min-width="220">
      <div class="text-caption">Active Map Instance: <strong>{{ currentMapId }}</strong></div>
      <div class="text-caption">Total Collision Walls: <strong>{{ wallLines.length }}</strong></div>
      <div class="text-caption text-grey-lighten-1 mt-1">
        * Navigation mode: Scroll to zoom. Right-click to pan map view container surface.
      </div>
    </v-card>

    <!-- MAIN HTML5 CANVAS WINDOW ENGINE -->
    <v-stage 
      :config="stageConfig" 
      ref="stageRef"
      @wheel="handleZoom"
      @mousedown="handleCanvasMouseDown"
      @mousemove="handleCanvasMouseMove"
      @contextmenu.prevent
    >
      <!-- LAYER 1: Current Landscape Background Map -->
      <v-layer><v-image :config="mapConfig" /></v-layer>

      <!-- LAYER 2: Tactical Grid Coordinate Visual Outline Overlay -->
      <v-layer>
        <v-line v-for="x in verticalLines" :key="'v-'+x" :config="{ points: [x, 0, x, MAP_HEIGHT], stroke: 'rgba(255,255,255,0.15)', strokeWidth: 1 }" />
        <v-line v-for="y in horizontalLines" :key="'h-'+y" :config="{ points: [0, y, MAP_WIDTH, y], stroke: 'rgba(255,255,255,0.15)', strokeWidth: 1 }" />
      </v-layer>

      <!-- LAYER 3: Interactive Vector Vision Blocking Walls -->
      <v-layer>
        <!-- Render saved permanent static structural vector paths -->
        <v-line 
          v-for="(wall, idx) in wallLines" 
          :key="'w-'+idx" 
          :config="{ points: wall.points, stroke: '#FF5252', strokeWidth: 4, lineCap: 'round', lineJoin: 'round' }" 
        />
        <!-- Live-drawing feedback vector outline tracking string lines -->
        <v-line 
          v-if="wallDrawingPoints.length > 0" 
          :config="{ points: wallDrawingPoints, stroke: '#FFD700', strokeWidth: 3, dash: [10, 5] }" 
        />
      </v-layer>

      <!-- LAYER 4: Teleportation Gate Placement Map Overlay Nodes -->
      <v-layer>
        <v-group v-for="portal in teleportNodes" :key="portal.id" :config="{ x: portal.x, y: portal.y }">
          <v-circle :config="{ radius: 25, fill: 'rgba(0, 229, 255, 0.4)', stroke: '#00E5FF', strokeWidth: 2 }" />
          <v-text :config="{ text: portal.label, fill: 'white', fontSize: 11, x: -8, y: -5, fontStyle: 'bold' }" />
        </v-group>
      </v-layer>

      <!-- LAYER 5: Game Master Dynamic Multi-Token Network Manipulation Layer -->
      <v-layer>
        <v-group
          v-for="token in tokens"
          :key="token.id"
          :config="{ id: token.id, x: token.x, y: token.y, draggable: activeTool === 'navigate' }"
          @dragmove="handleTokenDrag"
          @dragend="handleTokenDragEnd"
        >
          <v-circle :config="{ radius: TOKEN_RADIUS, fill: token.color, stroke: '#FFE082', strokeWidth: 3 }" />
          <v-text :config="{ text: token.name, fill: 'white', fontSize: 12, x: -16, y: -6, fontStyle: 'bold', align: 'center' }" />
        </v-group>
      </v-layer>
    </v-stage>
  </v-container>
</template>

<script setup>
import { collection, onSnapshot, doc, updateDoc, addDoc, query, setDoc } from 'firebase/firestore';
import { useDocument } from 'vuefire'


// Tracking references
const route = useRoute()
const campaignId = route.params.id
const currentMapId = route.params.mapId
const db = useFirestore()
const activeTool = ref('navigate'); // Options: navigate, walls, teleport

const campaignData = inject('campaignData')
const {data:tokens} = useCollection(collection(db,'campaigns',campaignId,'maps',currentMapId,'tokens'))
const {data:mapData} = useDocument(doc(db,'campaigns',campaignId,'maps',currentMapId))

const {data:wallLines} = useCollection(collection(db,'campaigns',campaignId,'maps',currentMapId,'walls'))
const {data:teleportNodes} = useCollection(collection(db,'campaigns',campaignId,'maps',currentMapId,'teleports'))


const players = campaignData?.value.players
const items = campaignData?.value.items
const bestiary = campaignData?.valie.bestiary
const spawnableAssets = [...players,...items,...bestiary]


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
//Need a new type 'trap'
//Might need a new way of doing portals that involves spawnable assets as well
//Would also be nice if, in addition to having a more organized asset pallet, we had a list of used assets and centered our 'camera' on an asset when clicked
//We also want to be able to select a token and customize/roll stats based on predefined ranges from the specific doc/field it came from

// const spawnableAssets = [
//   { name: 'Paladin Fighter', type: 'player', color: '#1976D2' },
//   { name: 'Rogue Scout', type: 'player', color: '#4CAF50' },
//   { name: 'Shopkeeper NPC', type: 'npc', color: '#9E9E9E' },
//   { name: 'Goblin Grunt', type: 'monster', color: '#E53935' },
//   { name: 'Ancient Dragon', type: 'monster', color: '#D32F2F' },
//   { name: 'Gold Chest', type: 'item', color: '#FFB300' }
// ];

// Canvas Configuration references
const stageRef = ref(null);
const stageConfig = ref({ width: 1024, height: 768, x: 0, y: 0, scaleX: 1, scaleY: 1 });
const mapImageElement = ref(null);
const mapConfig = computed(() => ({ image: mapImageElement.value, width: MAP_WIDTH, height: MAP_HEIGHT }));

const verticalLines = computed(() => { const lines = []; for (let i = 0; i < MAP_WIDTH; i += GRID_SIZE) lines.push(i); return lines; });
const horizontalLines = computed(() => { const lines = []; for (let i = 0; i < MAP_HEIGHT; i += GRID_SIZE) lines.push(i); return lines; });




onMounted(() => {
  const img = new Image();
  img.src = mapData?.value.imageUrl;
  img.onload = () => { mapImageElement.value = img; };

  window.addEventListener('resize', handleResize);
  window.addEventListener('mousedown', handlePanningStart);
  handleResize();

  // initializeMapListeners(currentMapId);
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
        await addDoc(collection(db,'campaigns',campaignId, 'maps', currentMapId, 'walls'), {
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
    await addDoc(collection(db,'campaigns',campaignId, 'maps', currentMapId, 'teleports'), {
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
const spawnEntity = async (asset) => {

  //If the asset IS a player
  if(asset.type=='player'){
    await addDoc(doc(db,'campaigns',campaignId,'maps',currentMapId,'tokens',asset.id),{
      name: asset.name,
      color: asset.color, //replace this with an image eventually
      type: asset.type, //player
      x: GRID_SIZE / 2,
      y: GRID_SIZE / 2,
      initiativeRoll: null, //1d20+Agility
    })
  } else if(asset.type=='monster'){
    //If the asset is NOT a player
    await addDoc(collection(db, 'campaigns', campaignId, 'maps', currentMapId, 'tokens'), {
      name: asset.name,
      color: asset.color, //replace this with an image eventually
      type: asset.type, //
      x: GRID_SIZE / 2,
      y: GRID_SIZE / 2,
      //if the asset is an NPC or monster
      initiativeRoll: null, //1d20+Agility
    })
  } else if(asset.type=='item'){
    await addDoc(collection(db, 'campaigns', campaignId, 'maps', currentMapId, 'tokens'), {
      name: asset.name,
      color: asset.color, //replace this with an image eventually
      type: asset.type, //
      x: GRID_SIZE / 2,
      y: GRID_SIZE / 2,
    })
  } else if(asset.type=='portal'){
    //add it and ensure our targetMapId, targetX, and targetY fields are populated
  } else if(asset.type=='trap'){
    //add it and ensure we have a detected field set to false and the token should be invisible until they are able to detect it or it is revealed by the GM (via party communcation or other means)
    //local visibility manipulation would leave detected: false, while GM influence should reveal the trap to everyone in realtime
  }

 
}

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
      const oldDocRef = doc(db, 'campaigns', campaignId, 'maps', currentMapId, 'tokens', tokenId)
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
  await updateDoc(doc(db, 'campaigns', campaignId, 'maps', currentMapId, 'tokens', tokenId), 
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
    
</script>

<style scoped>
  .token-hud {
    z-index: 10;
    pointer-events: auto;
  }
</style>