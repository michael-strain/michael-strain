<template>
  <v-layout>
    <v-container fluid class="pa-0 fill-height bg-grey-darken-4 position-relative overflow-hidden">
      <!-- <v-container fluid class="pa-0 fill-height bg-grey-darken-4"> -->
        
        <!--This seems more like GM stuff that needs to be moved to the GmSandboxCanvas component-->
        <!-- UI Overlay Panel: Floating Hud over the canvas -->
        <v-card class="ma-4 pa-3 token-hud" elevation="5" min-width="250">
          <v-card-title class="text-subtitle-1 font-weight-bold pa-0">Game Master Dashboard</v-card-title>
          <v-divider class="my-2"></v-divider>

          <!-- Current User Role Simulator -->
          <v-select
            v-model="userProfile.uid"
            label="Simulated Player Profile"
            :items="playerProfiles"
            item-title="name"
            item-value="id"
            variant="underlined"
            density="compact"
            class="mb-2"
          ></v-select>


          <div class="text-caption mb-1">Grid Size (5ft): <strong>{{ GRID_SIZE }}px</strong></div>
          <div class="text-caption mb-2">Token Location: <strong>X: {{ Math.round(tokenPos.x) }}, Y: {{ Math.round(tokenPos.y) }}</strong></div>

          <div class="text-caption mb-1">Zoom Level: <strong>{{ Math.round(zoomScale * 100) }}%</strong></div>
          <div class="text-caption mb-2">Controls: <span class="text-grey-darken-1">Scroll to Zoom | Right-Click + Drag to Pan</span></div>

          <div class="text-caption mb-1">Active Tokens Online: <strong>{{ tokens.length }}</strong></div>
          <div class="text-caption mb-2 text-grey-darken-1">Note: You can only drag your assigned character token.</div>
          
          <v-btn size="x-small" color="primary" block variant="elevated" @click="spawnNewToken" class="mt-2">
            Spawn New Token Here
          </v-btn>


          <v-btn size="x-small" color="secondary" block variant="tonal" @click="resetCamera">
            Reset Camera View
          </v-btn>

          
          <!-- Interactive system alert feed -->
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


        <!--This seems more like a player HUD-->
        <!-- FLOATING HUD: Turn & Action Controller -->
        <v-app-bar class="ma-4 pa-3 token-hud" elevation="5" min-width="300">
          <v-card-title class="text-subtitle-1 font-weight-bold pa-0 d-flex justify-space-between align-center">
            <span>⚔️ Action & Movement</span>
            <v-chip color="primary" size="small">Turn Active</v-chip>
          </v-card-title>
          <v-divider class="my-2"></v-divider>
          
          <!-- Movement tracking bar -->
          <div class="d-flex justify-space-between text-caption mb-1">
            <span>Movement Remaining:</span>
            <strong>{{ remainingMovement }} / {{ selectedTokenStats.maxMovement }} ft</strong>
          </div>
          <v-progress-linear
            :model-value="(remainingMovement / selectedTokenStats.maxMovement) * 100"
            color="green"
            height="8"
            rounded
            class="mb-3"
          ></v-progress-linear>

          <!-- Combat Action Selection Toggles -->
          <div class="text-subtitle-2 mb-1">Select Action Range Indicator:</div>
          <v-btn-toggle v-model="selectedAction" mandatory color="amber-darken-2" class="w-100" density="compact">
            <v-btn value="none" size="small">None</v-btn>
            <v-btn value="melee" size="small" prepend-icon="mdi-sword">Melee (5ft)</v-btn>
            <v-btn value="archery" size="small" prepend-icon="mdi-bow-arrow">Bow (60ft)</v-btn>
            <v-btn value="spell" size="small" prepend-icon="mdi-auto-fix">Spell (120ft)</v-btn>
          </v-btn-toggle>

          <v-btn size="x-small" color="success" block class="mt-3" @click="resetTurn">
            End & Reset Turn (Replenish Move)
          </v-btn>
        </v-app-bar>

        <!-- RIGHT SIDEBAR: Tactical Combat Initiative Tracker -->
        <v-navigation-drawer location="right" floating class="ma-4 pa-3 token-hud d-flex flex-column" elevation="5" width="280" max-height="85vh">
          <v-card-title class="text-subtitle-1 font-weight-bold pa-0 d-flex justify-space-between align-center">
            <span>🛡️ Turn Order</span>
            <v-chip size="x-small" color="amber-darken-3" variant="flat">Round {{ combatState.currentRound }}</v-chip>
          </v-card-title>
          <v-divider class="my-2"></v-divider>

          <!-- Combat Toggle Utilities for the Game Master -->
          <v-btn 
            v-if="!combatState.active" 
            color="error" 
            size="small" 
            block 
            prepend-icon="mdi-sword-cross"
            @click="startCombat"
          >
            Roll & Start Combat
          </v-btn>

          <div v-else class="d-flex gap-2 w-100 mb-3">
            <v-btn color="primary" size="small" class="flex-grow-1" prepend-icon="mdi-chevron-right" @click="nextTurn">
              Next Turn
            </v-btn>
            <v-btn color="grey-darken-1" size="small" icon="mdi-stop" variant="tonal" @click="endCombat" title="End Combat"></v-btn>
          </div>

          <!-- Scrollable Turn Order List Queue -->
          <v-list class="bg-transparent pa-0 overflow-y-auto" density="compact">
            <v-list-item
              v-for="(token, index) in sortedInitiativeQueue"
              :key="token.id"
              :value="index"
              :active="combatState.active && index === combatState.currentTurnIndex"
              active-color="primary"
              class="rounded mb-1 border-s-xl"
              :style="{ borderLeftColor: token.color + ' !important' }"
            >
              <!-- Order Badge and Name -->
              <template v-slot:prepend>
                <v-avatar size="24" :color="index === combatState.currentTurnIndex && combatState.active ? 'primary' : 'grey-darken-3'" class="text-caption text-white mr-2">
                  {{ index + 1 }}
                </v-avatar>
              </template>

              <v-list-item-title class="text-body-2 font-weight-medium">
                {{ token.name }}
              </v-list-item-title>

              <!-- Initiative Score Overlay Badge -->
              <template v-slot:append>
                <v-chip size="x-small" variant="outlined" :color="token.type === 'monster' ? 'error' : 'success'">
                  Init: {{ token.initiativeRoll || '--' }}
                </v-chip>
              </template>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>



        <!-- HTML5 Canvas Engine Container via Vue-Konva -->
        <v-stage :config="stageConfig" ref="stageRef" @wheel="handleZoom" @contextmenu.prevent>
          
          <!-- LAYER 1: The uploaded Map Image -->
          <v-layer>
            <!-- In a real app, bind image to your Firebase Firestore image URL -->
            <v-image :config="mapConfig" />
          </v-layer>

          <!-- LAYER 2: Procedural Tactical Grid Line System -->
          <v-layer>
            <!-- Vertical Grid Lines -->
                    <v-line 
              v-for="x in verticalLines" 
              :key="'v-'+x" 
              :config="{ points: [x, 0, x, MAP_HEIGHT], stroke: 'rgba(255,255,255,0.25)', strokeWidth: 1 }" 
            />
            <v-line 
              v-for="y in horizontalLines" 
              :key="'h-'+y" 
              :config="{ points: [0, y, MAP_WIDTH, y], stroke: 'rgba(255,255,255,0.25)', strokeWidth: 1 }" 
            />

            <!-- <v-line 
              v-for="x in verticalLines" 
              :key="'v-'+x" 
              :config="{ points: [x, 0, x, stageConfig.height], stroke: 'rgba(255,255,255,0.25)', strokeWidth: 1 }" 
            /> -->
            <!-- Horizontal Grid Lines -->
            <!-- <v-line 
              v-for="y in horizontalLines" 
              :key="'h-'+y" 
              :config="{ points: [0, y, stageConfig.width, y], stroke: 'rgba(255,255,255,0.25)', strokeWidth: 1 }" 
            /> -->
          </v-layer>


          <!-- LAYER 3: Tactical Range Aura & Indicators -->
          <!-- <v-layer> -->
            <!-- AURA A: Dynamic Movement Radius Circle (Drawn underneath the active token) -->
            <!-- <v-circle 
              v-if="remainingMovement > 0"
              :config="{
                x: tokenPos.x,
                y: tokenPos.y,
                radius: (remainingMovement / 5) * GRID_SIZE,
                fill: 'rgba(76, 175, 80, 0.08)',
                stroke: '#4CAF50',
                strokeWidth: 1.5,
                dash: [10, 5]
              }"
            /> -->

            <!-- AURA B: Contextual Combat Range Ring Indicator -->
            <!-- <v-circle 
              v-if="currentActionRangeRadius > 0"
              :config="{
                x: tokenPos.x,
                y: tokenPos.y,
                radius: currentActionRangeRadius,
                fill: 'rgba(255, 179, 0, 0.05)',
                stroke: '#FFB300',
                strokeWidth: 2,
                dash: [5, 5]
              }"
            />
          </v-layer> -->


          <!-- LAYER 4: Active Interactive Entities -->
          <!-- <v-layer> -->
            <!-- Dummy Enemy Orc Target to test range checks -->
            <!-- <v-group :config="{ x: enemyPos.x, y: enemyPos.y }" @click="handleTargetEnemy">
              <v-circle :config="{ radius: TOKEN_RADIUS, fill: '#E53935', stroke: '#FFF', strokeWidth: 2 }" />
              <v-text :config="{ text: 'Orc', fill: 'white', fontSize: 12, x: -11, y: -6, fontStyle: 'bold' }" />
            </v-group> -->

            <!-- Player Controlled Token -->
            <!-- <v-group
              :config="{ x: tokenPos.x, y: tokenPos.y, draggable: true }"
              @dragstart="handleTokenDragStart"
              @dragmove="handleTokenDragMove"
              @dragend="handleTokenDragEnd"
            > -->
              <!-- Visual feedback indicator: glow green if they have movement left, orange if empty -->
              <!-- <v-circle :config="{ radius: TOKEN_RADIUS, fill: '#1976D2', stroke: remainingMovement > 0 ? '#00E676' : '#FF9100', strokeWidth: 3 }" />
              <v-text :config="{ text: 'Hero', fill: 'white', fontSize: 12, x: -14, y: -6, fontStyle: 'bold' }" />
            </v-group>
          </v-layer> -->


          <!-- LAYER 3: Active Interactive Tokens Grid -->
          <v-layer>
            <v-group
              v-for="token in tokens"
              :key="token.id"
              :config="{ 
                id: token.id, 
                x: token.x, 
                y: token.y, 
                // Draggable if it's their turn OR if combat is inactive
                draggable: !combatState.active || (activeActorTokenId === token.id)
              }"
              @dragstart="handleTokenDragStart"
              @dragmove="handleTokenDragMove"
              @dragend="handleTokenDragEnd"
            >
              <!-- Active Turn Highlighting Aura ring -->
              <v-circle 
                v-if="combatState.active && activeActorTokenId === token.id"
                :config="{ radius: TOKEN_RADIUS + 8, stroke: '#00E676', strokeWidth: 3, opacity: 0.8 }" 
              />

              <!-- Base Token Geometry -->
              <v-circle :config="{ radius: TOKEN_RADIUS, fill: token.color, stroke: '#FFFFFF', strokeWidth: 2 }" />
              <v-text :config="{ text: token.name.substring(0, 5), fill: 'white', fontSize: 11, x: -14, y: -5, fontStyle: 'bold' }" />
            </v-group>
          </v-layer>






                <!-- LAYER 3: Dynamic Multi-Token Network Layer -->
          <!-- <v-layer> -->
            <!-- Loop dynamically through real-time Firestore array states -->
            <!-- <v-group
              v-for="token in tokens"
              :key="token.id"
              :config="{ 
                id: token.id,
                x: token.x, 
                y: token.y, 
                // Lock movement mechanics down strictly to the token owner
                draggable: token.ownerId === currentUserId 
              }"
              @dragmove="handleRemoteTokenDrag"
              @dragend="handleRemoteTokenDragEnd"
            > -->
              <!-- Outer decorative visual framework -->
              <!-- <v-circle :config="{ radius: TOKEN_RADIUS, fill: token.color, stroke: token.ownerId === currentUserId ? '#00E676' : '#FFFFFF', strokeWidth: token.ownerId === currentUserId ? 4 : 2 }" /> -->
              
              <!-- Text Name Label Plate -->
              <!-- <v-text :config="{ text: token.name, fill: 'white', fontSize: 13, x: -18, y: -6, fontStyle: 'bold', align: 'center' }" /> -->
            <!-- </v-group> -->
          <!-- </v-layer> -->

          


          <!-- LAYER 3: Interactive Interactive Entities (Loot, NPCs) -->
          <!-- <v-layer> -->
            <!-- Static Interactable Object (Loot Chest) -->
            <!-- <v-circle :config="lootConfig" /> -->
            
            <!-- Player Controlled Token -->
            <!-- <v-group -->
              <!-- :config="{ x: tokenPos.x, y: tokenPos.y, draggable: true }" -->
              <!-- @dragmove="handleTokenDrag" -->
              <!-- @dragend="handleTokenDragEnd" -->
            <!-- > -->
              <!-- Token Base Circular Frame -->
              <!-- <v-circle :config="{ radius: TOKEN_RADIUS, fill: '#1976D2', stroke: '#FFFFFF', strokeWidth: 3 }" /> -->
              <!-- Simple Character Label -->
              <!-- <v-text :config="{ text: 'Hero', fill: 'white', fontSize: 14, x: -14, y: -6, fontStyle: 'bold' }" /> -->
            <!-- </v-group> -->
          <!-- </v-layer> -->
        </v-stage>

        <!-- User Feedback Toast Notification Banner -->
        <v-snackbar v-model="showToast" :color="toastColor" timeout="4000">
          {{ toastMessage }}
        </v-snackbar>

      </v-container>
  </v-layout>
  
</template>

<script setup>
import { collection, onSnapshot, doc, updateDoc, addDoc, query } from 'firebase/firestore';
import { useCollection } from 'vuefire'

const route = useRoute()
const db = useFirestore()
const campaignId = computed(()=>route.params.id)
const campaignData = inject('campaignData') //comes from the player layout. Nifty!
const userProfile = computed(()=>useCurrentUser().value)
const mapId = campaignData?.value?.activeMapId
const tokenId = userProfile.value.uid
const tokens = useCollection(collection(db,'campaigns',campaignId.value,'maps',mapId,'tokens'))
const mapData = useDocument(doc(db,'campaigns',campaignId.value,'maps',mapId))
const playerProfiles = campaignData.value?.players


// Game constants (70px is standard VTT sizing representing a 5ft space)
const GRID_SIZE = 70
const TOKEN_RADIUS = 30

//Explicit bounding sizes for the map layout workspace
const MAP_WIDTH = 2000
const MAP_HEIGHT = 2000

//TODO
//Might want to populate this directly from mapData on initialization that way we are consistent for all players and on page initialization and such
const combatState = ref({
  active:false,
  currentTurnIndex: 0,
  currentRound: 1
})


// Token Data Config Model
//Need to populate this with the current user player info from the respective held item, available spells, player.movement, etc.
const selectedTokenStats = ref({
  maxMovement: playerProfiles[userProfile.value.uid].movement*12, // Max feet allowance per standard action turn
  meleeRange: 5,   // in feet
  archeryRange: 60, //this may be specific for each type of bow
  spellRange: 120 //This will be specific for each spell
});


//const playerProfiles = [
// {id:'player_1',name:'Hero',color:'#1976D2'},
// {id:'player_2',name:'Mage',color:'#9C27B0'},
// {id:'gm_profile',name:'Goblin',color:'#E53935'}
//]

const stageRef = ref(null)
let unsubscribeTokens = null
const zoomScale = ref(1)

// Responsive window boundaries for the base stage wrapper
const stageConfig = ref({
  width: 1024,
  height: 768,
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
})

// Calculate static line setups mapping through full map dimensions
const verticalLines = computed(() => {
  const lines = [];
  for (let i = 0; i < MAP_WIDTH; i += GRID_SIZE) lines.push(i);
  return lines;
})

const horizontalLines = computed(() => {
  const lines = [];
  for (let i = 0; i < MAP_HEIGHT; i += GRID_SIZE) lines.push(i);
  return lines;
})


// Mock Data Background Map Image Configuration
const mapImageElement = ref(null);
const mapConfig = computed(() => ({
  image: mapImageElement.value,
  width: MAP_WIDTH,
  height: MAP_HEIGHT,
  opacity: 0.85
}));

// Static Loot Chest Coordinates (Placed near the middle grid blocks)
const lootConfig = ref({
  x: GRID_SIZE * 5 + (GRID_SIZE / 2), // Grid space center
  y: GRID_SIZE * 3 + (GRID_SIZE / 2),
  radius: 15,
  fill: '#FFB300',
  stroke: '#333',
  strokeWidth: 2
});

// Active character token coordinate tracking state
// const tokenPos = ref({ 
//   x: GRID_SIZE / 2, 
//   y: GRID_SIZE / 2 
// });

//Not sure if this will accurately reflect user's/enemy token position 
const tokenPos = ref({ x: GRID_SIZE * 2 + (GRID_SIZE / 2), y: GRID_SIZE * 2 + (GRID_SIZE / 2) });
const enemyPos = ref({ x: GRID_SIZE * 6 + (GRID_SIZE / 2), y: GRID_SIZE * 5 + (GRID_SIZE / 2) });

const remainingMovement = ref(players[userProfile.value.uid].movement*12)
const selectedAction = ref('none') //Values: none, melee, archery, spell

let dragStartCoords = {x:0, y:0}

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


//Initiate Combat!
//First we need to push an initiative roll event for each player and gm controlled character
//GMs will handle this in a completely different way but we need all GM rolls and player rolls complete before we start combat
//we may also want to automatically initiate turn order with a enemy line-of sight function - even if a player is not necessarily detected due to sneak

//we also may want to consider stopping players from moving into certain regions/areas of the map until the GM is given a chance to describe what the player sees


// const startCombat = () => { //This was designed as a GM action
  // Simulate rolling a 20-sided die (d20) for each entity
  // tokens.value.forEach(token => {
  //   const d20Roll = Math.floor(Math.random() * 20) + 1;
  //   token.initiativeRoll = d20Roll + token.dexMod;
  // });
  
  //New version should instead... be entirely moved to the GM page and somehow push a dialog to every player with a token on the map and health >0 to roll for initiative, then wait to set combatState.value.active to true until everyone has rolled

  // combatState.value.active = true;
  // combatState.value.currentTurnIndex = 0;
  // combatState.value.currentRound = 1;
  
  // replenishCurrentActorMovement();
// };

//This should depend on a player either taking all of their possible actions or electing to "Pass" or "End Turn"
const nextTurn = () => {
  let nextIndex = combatState.value.currentTurnIndex + 1;
  
  // Wrap around back to the top of the queue to trigger a new round
  if (nextIndex >= sortedInitiativeQueue.value.length) {
    nextIndex = 0;
    combatState.value.currentRound += 1;
  }
  
  combatState.value.currentTurnIndex = nextIndex;
  replenishCurrentActorMovement();
};

//Definitely a GM function to decide when players can be done with turn order
// const endCombat = () => {
//   combatState.value.active = false;
//   tokens.value.forEach(t => t.initiativeRoll = null);
//   remainingMovement.value = 30; // Restore free movement navigation overrides
// };

//TODO
//Need to utilize playerData to ensure their movement value is populated correctly
const replenishCurrentActorMovement = () => {
  remainingMovement.value = 30; // Fresh 30ft of move allowance allocated
};







const showToast = ref(false)
const toastMessage = ref('')
const toastColor = ref('success')

const currentActionRangeRadius = computed(()=>{
  let feet = 0
  if (selectedAction.value === 'melee') feet = selectedTokenStats.value.meleeRange;
  else if (selectedAction.value === 'archery') feet = selectedTokenStats.value.archeryRange;
  else if (selectedAction.value === 'spell') feet = selectedTokenStats.value.spellRange;
  
  return (feet / 5) * GRID_SIZE; // Convert: every 5 feet represents one full grid tile length

})

const proximityMessage = ref('');

// Step 1: Preload boilerplate grid image asset safely
onMounted(() => {
  const img = new Image();
  img.src = mapData.imageUrl; // Fallback stock map background landscape
  img.onload = () => {
    mapImageElement.value = img;
  };

  // handleResize()
  window.addEventListener('resize',handleResize)
  window.addEventListener('mousedown', handlePanningStart)
  handleResize()


});

onUnmounted(()=>{
  window.removeEventListener('resize',handleResize)
  window.removeEventListener('mousedown',handlePanningStart)
})


//Real time UI dragging responsiveness optimization
// const handleRemoteTokenDrag = (event) => {
//   const target = event.target
//   const tokenId = target.id
//   const tokenIdx = tokens.value?.findIndex(t=>t.id==tokenId)
//   if(tokenIdx!==-1){
//     //Not sure this will work properly because tokens is coming from a readonly source i think
//     tokens.value[tokenIdx].x = target.x()
//     tokens.value[tokenIdx].y = target.y()
//   }
// }

//Push finalized position values straight into Firestore documents on release
// const handleRemoteTokenDragEnd = async (event) => {
//   const target = event.target
//   const tokenId = target.id

//   const snappedX = Math.floor(target.x() / GRID_SIZE) * GRID_SIZE + (GRID_SIZE / 2);
//   const snappedY = Math.floor(target.y() / GRID_SIZE) * GRID_SIZE + (GRID_SIZE / 2);

//   try{
//     const tokenDoc = doc(useFirestore(), 'campaigns', campaignId.value , 'tokens',tokenId)
//     await updateDoc(tokenDoc, {x:snappedX, y:snappedY})
//   } catch (err) {
//     console.error("Failed to persist token transformation to database:",err)
//   }
// }

const handleTokenDragStart = (event) =>{
  dragStartCoords = {
    x:event.target.x(),
    y:event.target.y()
  }
}

const handleTokenDragMove = (event) => {
  tokenPos.value = {
    x: event.target.x(),
    y: event.target.y()
  }
}

const handleTokenDragEnd = async (event) => {
  const target = event.target
  const snappedX = Math.floor(target.x() / GRID_SIZE) * GRID_SIZE + (GRID_SIZE / 2);
  const snappedY = Math.floor(target.y() / GRID_SIZE) * GRID_SIZE + (GRID_SIZE / 2);

  const pixelDistance = Math.sqrt(Math.pow(snappedX - dragStartCoords.x, 2) + Math.pow(snappedY - dragStartCoords.y, 2));
  const feetTraveled = Math.round((pixelDistance / GRID_SIZE) * 5);

  // Turn Lock Guard: Block movement if combat is active and it's not this token's turn
  if (combatState.value.active && tokenId !== activeActorTokenId.value) {
    revertToken(target, dragStartCoords);
    return;
  }


  // Speed Limit Guard
  if (combatState.value.active && feetTraveled > remainingMovement.value) {
    revertToken(target, dragStartCoords);
    return;
  }

  // Accept valid movement and subtract from turn allowance pool
  // Apply positions successfully
  if (combatState.value.active) remainingMovement.value -= feetTraveled;
  updateTokenLocalCoordinates(tokenId, snapX, snapY);
  target.position({ x: snapX, y: snapY });

  // Optional: Sync coordinates to Firestore subcollection if needed
  await updateDoc(doc(useFirestore(),'campaigns',campaignId.value, 'maps', mapId, 'tokens', tokenId), { x: snappedX, y: snappedY });

}

const revertToken = (target, coords) => {
  target.position({ x: coords.x, y: coords.y });
  updateTokenLocalCoordinates(target.id(), coords.x, coords.y);
};

const updateTokenLocalCoordinates = (id, x, y) => {
  const idx = tokens.value.findIndex(t => t.id === id);
  if (idx !== -1) { tokens.value[idx].x = x; tokens.value[idx].y = y; }
};



/**
 * ACTION RANGE INTERACTION LOGIC
 */
const handleTargetEnemy = () => {
  if (selectedAction.value === 'none') {
    triggerNotification("ℹ️ Clicked Orc enemy target. Select an action mode from the top panel to engage.", 'info');
    return;
  }

  // Calculate distance between the player and enemy positions
  const dx = enemyPos.value.x - tokenPos.value.x;
  const dy = enemyPos.value.y - tokenPos.value.y;
  const pixelDistance = Math.sqrt(dx*dx + dy*dy);
  const distanceInFeet = Math.round((pixelDistance / GRID_SIZE) * 5);

  // Cross-reference current operational mode requirements
  let allowedRangeFeet = 0;
  if (selectedAction.value === 'melee') {
    allowedRangeFeet = selectedTokenStats.value.meleeRange;
  } else if (selectedAction.value === 'archery') {
    allowedRangeFeet = selectedTokenStats.value.archeryRange
  } else if (selectedAction.value === 'spell') {
    allowedRangeFeet = selectedTokenStats.value.spellRange
  }

  if (distanceInFeet <= allowedRangeFeet) {
    triggerNotification(`🎯 Action Successful! Target is within range (${distanceInFeet} ft). Resolving ${selectedAction.value} execution.`, 'success')
  } else {
    triggerNotification(`❌ Out of Range! Target is ${distanceInFeet} ft away, but your ${selectedAction.value} only reaches ${allowedRangeFeet} ft.`, 'error')
  }
}

const resetTurn = () => {
  remainingMovement.value = selectedTokenStats.value.maxMovement //might use the campaignData.players value for this one
  selectedAction.value = 'none'
  triggerNotification("🔄 Turn reset! Movement pools replenished.", 'success')
}

const triggerNotification = (msg, color='success') => {
  toastMessage.value = msg
  toastColor.value = color
  showToast.value = true
}



const spawnNewToken = async () => {
  const activeProfile = playerProfiles.find(p=>p.id==userProfile.value.uid)
  try{
    const tokenSubcollection = collection(useFirestore(), 'campaigns', campaignId.value, 'maps', mapId, 'tokens')
    await addDoc(tokenSubcollection, {
      name:activeProfile.name,
      ownerId:userProfile.value.uid, //google says use activeProfile.id here
      color: activeProfile.color, //this doesn't exist yet and I probably want to use token images instead
      x: GRID_SIZE /2,
      y: GRID_SIZE / 2,
      initiativeRoll: null, //1d20+Agility
    })
  } catch (err) {
    console.error("Token deployment error:",err)
  }
}


const handleResize = () => {
  // if(process.client) {
    stageConfig.value.width = window.innerWidth
    stageConfig.value.height = window.innerHeight
  // }
}

const handleZoom = (event) => {
  event.evt.preventDefault();
  const stage = stageRef.value.getNode()
  const scaleBy = 1.15
  const oldScale = stage.scaleX()
  const pointer = stage.getPointerPosition()

  if (!pointer) return

  const mousePointTo = {
    x: (pointer.x-stage.x()) / oldScale,
    y: (pointer.y-stage.y()) / oldScale
  }

  const newScale = event.evt.deltaY < 0 ? oldScale * 1.15 : oldScale / 1.15
  const clampedScale = Math.max(0.15, Math.min(4, newScale)); 
  stage.position({ x: pointer.x - mousePointTo.x * clampedScale, y: pointer.y - mousePointTo.y * clampedScale })

  // const newPos = {
  //   x: pointer.x - mousePointTo.x * clampedScale,
  //   y: pointer.y - mousePointTo.y * clampedScale
  // }

  // stage.position(newPos)
  stage.scale({ x: clampedScale, y: clampedScale })
  stage.batchDraw()
}

let isPanning = false
let startX = 0
let startY = 0

const handlePanningStart = (e) => {
  if (e.button!==1&&e.button!==2) return
  const stage = stageRef.value?.getNode()
  if(!stage) return

  isPanning = true
  startX = e.clientX - stage.x()
  startY = e.clientY - stage.y()

  window.addEventListener('mousemove', handlePanningMove)
  window.addEventListener('mouseup', handlePanningEnd)
}

const handlePanningMove = (e) => {
  if (!isPanning) return
  const stage = stageRef.value.getNode()
  stage.position({
    x:e.clientX - startX,
    y: e.clientY - startY
  })
  stage.batchDraw()
}

const handlePanningEnd = () => {
  isPanning = false
  window.removeEventListener('mousemove', handlePanningMove)
  window.removeEventListener('mouseup', handlePanningEnd)
}

const resetCamera = () => {
  const stage = stageRef.value.getNode()
  zoomScale.value = 1
  stage.position({x:0,y:0})
  stage.scale({x:1,y:1})
  stage.batchDraw()
}



// Step 2: Track token realtime movements 
// const handleTokenDrag = (event) => {
//   const target = event.target;
//   tokenPos.value = {
//     x: target.x(),
//     y: target.y()
//   };
// };
// const handleTokenDrag = (event) => {
//   tokenPos.value = {x:event.target.x(),y:event.target.y()}
// }


// // Step 3: Math snapping computation logic upon releasing drag tracking hooks
// const handleTokenDragEnd = (event) => {
//   const target = event.target
  
//   // Dynamic Grid Snapping Formula: Forces centering alignment within individual boxes
//   const snappedX = Math.floor(target.x() / GRID_SIZE) * GRID_SIZE + (GRID_SIZE / 2)
//   const snappedY = Math.floor(target.y() / GRID_SIZE) * GRID_SIZE + (GRID_SIZE / 2)

//   // Apply positions back to canvas node element state bindings
//   tokenPos.value = { x: snappedX, y: snappedY }
//   target.position({ x: snappedX, y: snappedY })

//   // Step 4: Proximity Distance Checks against local items array
//   checkInteractions(snappedX, snappedY)
// }

// Step 5: Process standard Euclidean distance range verification protocols 

//Need to ensure ranged characters can attack with ranged weapons, casters can attack with ranged spells, etc.
const checkInteractions = (playerX, playerY) => {
  const targetX = lootConfig.value.x;
  const targetY = lootConfig.value.y;
  const pixelDistance = Math.sqrt(Math.pow(targetX - playerX, 2) + Math.pow(targetY - playerY, 2));
  const distanceInFeet = Math.round((pixelDistance / GRID_SIZE) * 5);

  proximityMessage.value = distanceInFeet <= 5 
    ? `📦 Within Reach! [Distance: ${distanceInFeet} ft] Press Space to open Loot Chest.` 
    : '';
}
</script>

<style scoped>
.token-hud {
  z-index: 10; /* Keep floating HUD text layers elevated securely over canvas spaces */
  pointer-events: auto;
}
</style>