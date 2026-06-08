<template>
  <v-container fluid class="pa-0 fill-height bg-grey-darken-4 position-relative overflow-hidden">
    
    <v-card class="position-absolute ma-4 pa-3 token-hud top-0 left-0" elevation="5" min-width="300">
      <v-card-title class="text-subtitle-1 font-weight-bold pa-0 d-flex justify-space-between align-center">
        <span>⚔️ Action & Movement</span>
        <v-chip color="primary" size="small">Turn Active</v-chip>
      </v-card-title>
      <v-divider class="my-2"></v-divider>
      
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

      <div class="text-subtitle-2 mb-1">Select Action Range:</div>
      <v-btn-toggle v-model="selectedAction" mandatory color="amber-darken-2" class="w-100" density="compact">
        <v-btn value="none" size="small">None</v-btn>
        <!--Need a button for each unique melee weapon equipped, each ranged weapon equipped, and each spell known-->
        <template v-for="item of Object.values(hands)">
          <v-btn v-if="item.includes('Melee')" value="melee" size="small" prepend-icon="mdi-sword" @click="pendingAction = {type: 'melee',damage:item.damage, range:item.range}"> {{ item.name }} ({{ item.range * 5 }}ft)</v-btn>
          <v-btn v-if="item.includes('Ranged')" value="ranged" size="small" prepend-icon="mdi-bow-arrow" @click="pendingAction = {type:'ranged',damage:item.damage,range:item.range}"> {{item.name}} ({{ item.range * 5 }}ft)</v-btn>
        </template>
        <template v-for="item of spells">
          //TODO
          //Spell damage is a bit more complicated.  For this, and for our hands attacks, we need to roll to hit before we roll for damage.  For spells we have to roll to conjure the spell (1d20+CAST which come from player.skills.find(obj=>obj.name=='Cast')).
          //Spell damage is based on how well your conjuring roll was, and on hit rolls and spell damage rolls we need to parse the string to add bonuses (such as +INT which should result in the player.abilityScore['Intellectual'] value being added to damage and player.)
          <v-btn 
            value="spell" 
            size="small" 
            prepend-icon="mdi-auto-fix" 
            @click="pendingAction = { type: 'spell', spellData: item }"
          >
            {{ item.name }} ({{ item.range * 5 }}ft)
          </v-btn>

        </template>
        <v-btn value="spell" size="small" prepend-icon="mdi-auto-fix">Spell (120ft)</v-btn>
      </v-btn-toggle>

      <v-btn size="x-small" color="success" block class="mt-3" @click="resetTurn">
        End & Reset Turn
      </v-btn>
    </v-card>

    <v-card class="position-absolute ma-4 pa-3 token-hud top-0 right-0 d-flex flex-column" elevation="5" width="280" max-height="85vh">
      <v-card-title class="text-subtitle-1 font-weight-bold pa-0 d-flex justify-space-between align-center">
        <span>🛡️ Turn Order</span>
        <v-chip size="x-small" color="amber-darken-3" variant="flat">Round {{ combatState.currentRound }}</v-chip>
      </v-card-title>
      <v-divider class="my-2"></v-divider>

      <div v-if="combatState.active" class="d-flex gap-2 w-100 mb-3">
        <v-btn color="primary" size="small" class="flex-grow-1" prepend-icon="mdi-chevron-right" @click="nextTurn">
          Next Turn
        </v-btn>
      </div>

    </v-card>

    <v-stage 
      ref="stageRef" 
      :config="stageConfig" 
      @wheel="handleZoom" 
      @mousedown="handlePanningStart" 
      @mousemove="handlePanningMove"
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

      <v-layer>
        <v-circle 
          :config="lootConfig" 
        />
        
        <v-line
          v-for="(wall, i) in wallLines"
          :key="'wall-'+i"
          :config="{
            points: wall.points,
            stroke: 'red',
            strokeWidth: 4,
            lineCap: 'round',
            lineJoin: 'round'
          }"
        />
      </v-layer>

      <v-layer>
        
        <v-circle
          v-if="selectedAction !== 'none'"
          :config="{
            x: tokenPos.x,
            y: tokenPos.y,
            radius: currentActionRangeRadius,
            fill: 'rgba(255, 193, 7, 0.1)',
            stroke: '#FFC107',
            strokeWidth: 2,
            dash: [10, 5],
            listening: false
          }"
        />

        <v-group
          v-for="token in tokens"
          :key="token.id"
          :config="{
            x: token.x,
            y: token.y,
            draggable: combatState.active ? token.id === activeActorTokenId : true
          }"
          @dragstart="handleTokenDragStart"
          @dragmove="handleTokenDragMove"
          @dragend="handleTokenDragEnd"
          @click="handleTokenClick(token)"
        >
          <template v-if="token.detected !== false">
            <v-circle
              :config="{
                radius: TOKEN_RADIUS,
                fill: token.color || '#2196F3',
                stroke: token.id === activeActorTokenId ? '#FFC107' : '#FFFFFF',
                strokeWidth: token.id === activeActorTokenId ? 4 : 2,
                shadowColor: 'black',
                shadowBlur: 10,
                shadowOpacity: 0.5
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
                width: 100
              }"
            />
          </template>
        </v-group>

      </v-layer>
    </v-stage>
  </v-container>

  <v-dialog v-model="dialog" persistent>
    <v-card title="GM Requests a Roll" :subtitle="'Reason: ' + r.reason">
      <v-btn @click="requestRoll(r); dialog=false">Roll</v-btn>
    </v-card>
    <!-- <v-btn @click="requestRoll(r)">Roll</v-btn> -->
  </v-dialog>
</template>

<script setup>
import { collection, onSnapshot, doc, updateDoc, addDoc, query } from 'firebase/firestore';
import { useCollection, useDocument, useFirestore, useCurrentUser } from 'vuefire'

const route = useRoute()
const router = useRouter()
const db = useFirestore() //need to clean stuff up

//Core Profile and Campaign Setup
const campaignId = computed(()=>route.params.id)
const campaignData = inject('campaignData') //comes from the player layout. Nifty!
const userProfile = computed(()=>useCurrentUser().value||{})
const uid = computed(()=>userProfile.value?.uid)

const mapId = computed(()=>campaignData.value?.activeMapId)
const mapDocRef = computed(() => mapId.value ? doc(db, 'campaigns', campaignId.value, 'maps', mapId.value) : null)
const {data:mapData} = useDocument(mapDocRef)

const tokensRef = computed(() => mapId.value ? collection(db, 'campaigns', campaignId.value, 'maps', mapId.value, 'tokens') : null)
const {data:tokens} = useCollection(tokensRef)

const playerProfiles = computed(()=>campaignData.value?.players||{})
const combatState = computed(() => mapData.value?.combatState || { active: false, currentRound: 0, currentTurnIndex: 0 })
const rollRequests = computed(()=>mapData.value?.rollRequests||{})

const dialog = ref(false)
const rollRequest = computed(()=>rollRequests.value[uid.value])

const pendingAction = ref(null)
const sourceToken = ref(null)

const r = computed(()=> {
  if(!rollRequest.value) return {}
  return {
    roll:generateDiceNotation(rollRequest.value),
    reason:rollRequest.value.reason,
    user: playerProfiles[uid.value]?.name||'Player',
    uid:uid.value,
    pub:true,
    location: rollRequest.value.location,
    field:rollRequest.value.field
  }
})

const player = computed(()=>playerProfiles.find(p=>p.id==userProfile.value.uid))
// const u = ref() //doc(useFirestore(),'campaigns',campaignId.value,'maps',mapId)
const hands = computed(()=>player.value.equipment.map(obj=>obj.hands))
const spells = computed(()=>player.value.spells)
//TODO
//Need an interface for players to 'equip' items from their inventory based on their available item slots
const generateDiceNotation = (req)=>{
  const characterStats = []//consolidate player.skills and player.abilityScore fields
  // const activePlayerStats = {
  //   Physical: 2,
  //   Agility: 3,
  //   Social: 1,
  //   Melee: 2
  // };

  const getStat = (statName) => Number(characterStats[statName]) || 0

  // 1. CALCULATE NUMBER OF DICE (The 'X' in Xd20)
  let numDice = req.base || 1

  const diceSums = [
    ...(req.baseAbilitySum||[]),
    ...(req.baseRankSum || [])
  ].reduce((total,stat)=>total+getStat(stat),0)

  numDice+=diceSums

  const diceMultipliers = [
    ...(req.baseAbilityMultiplier || []),
    ...(req.baseRankMultiplier || [])
  ]

  if(diceMultipliers.length > 0) {
    const multTotal = diceMultipliers.reduce((total, stat) => total*getStat(stat),1)
    numDice *= multTotal
  }

  numDice = Math.max(1, Math.floor(numDice))

  // 2. CONSTRUCT BASE NOTATION
  const faces = req.faces || 20
  let notation = `${numDice}d${faces}`
  
  // 3. CALCULATE FLAT MODIFIERS (+ or - to the result)
  const flatMod = [
    ...(req.abilitySumModifier || []),
    ...(req.rankSumModifier || [])
  ].reduce((total,stat)=>total+getStat(stat),0)

  if (flatMod>0) notation+=` + ${flatMod}`
  if (flatMod<0) notation+=` - ${Math.abs(flatMod)}`

  // 4. CALCULATE FINAL MULTIPLIERS (* to the result)
  const finalMultipliers = [
    ...(req.abilityMultiplier || []),
    ...(req.rankMultiplier || [])
  ];

  if (finalMultipliers.length > 0) {
    const finalMultTotal = finalMultipliers.reduce((total, stat) => total * getStat(stat), 1);
    
    // Only append if it actually changes the math (not multiplying by 1)
    if (finalMultTotal !== 1) notation += ` * ${finalMultTotal}`;
  }

  return notation;
}

// const emit = defineEmits(['notifyRoll'])
// const roll = (req) => emit('notifyRoll', req)

const requestRoll = inject('requestRoll')

  // {
  //   base:1,
  //   faces:20,
  //   baseAbilitySum:['Physical'], //(Phys+1)d20
  //   baseRankSum:['Agility'], //(Agi+1)d20
  //   baseAbilityMultiplier:['Physical','Intellectual'], //(Phys*Int*1)d20
  //   baseRankMultiplier:['Agility','Cast'], //(Agi*Cast*1)d20
  //   abilitySumModifier:['Physical','Social'], //1d20 + Phys + Social
  //   rankSumModifier:['Agility', 'Cast'], //1d20 + Agi + Cast
  //   abilityMultiplier:['Physical', 'Intellectual'], //1d20 * Phys * Int
  //   rankMultiplier:['Agility', 'Melee'], //1d20 * Agi * Melee
  // }

// Game constants (70px is standard VTT sizing representing a 5ft space)
const GRID_SIZE = 70
const TOKEN_RADIUS = 30
const MAP_WIDTH = 2000
const MAP_HEIGHT = 2000


// Token Data Config Model
// Safe Initialization: Wait for player profiles to load before calculating movement

const selectedTokenStats = ref({ maxMovement: 30, meleeRange: 5, archeryRange: 60, spellRange: 120 })
const remainingMovement = ref(30)

watch(() => playerProfiles.value[uid.value], (profile) => {
  if (profile && profile.movement) {
    selectedTokenStats.value.maxMovement = profile.movement * 12

    //Need to update our meleeRange, rangedRange, and spellRange according to each available item equipped

    remainingMovement.value = profile.movement * 12
  }
}, { immediate: true })


//const playerProfiles = [
// {id:'player_1',name:'Hero',color:'#1976D2'},
// {id:'player_2',name:'Mage',color:'#9C27B0'},
// {id:'gm_profile',name:'Goblin',color:'#E53935'}
//]

const stageRef = ref(null)
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

const lootConfig = ref({ x: GRID_SIZE * 5 + (GRID_SIZE / 2), y: GRID_SIZE * 3 + (GRID_SIZE / 2), radius: 15, fill: '#FFB300', stroke: '#333', strokeWidth: 2 });
const tokenPos = ref({ x: GRID_SIZE * 2 + (GRID_SIZE / 2), y: GRID_SIZE * 2 + (GRID_SIZE / 2) });
const enemyPos = ref({ x: GRID_SIZE * 6 + (GRID_SIZE / 2), y: GRID_SIZE * 5 + (GRID_SIZE / 2) });
const selectedAction = ref('none')
let dragStartCoords = {x:0, y:0}



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

//This should depend on a player either taking all of their possible actions or electing to "Pass" or "End Turn"
const nextTurn = () => {
  let nextIndex = combatState.value.currentTurnIndex + 1;
  
  // Wrap around back to the top of the queue to trigger a new round
  if (nextIndex >= sortedInitiativeQueue.value.length) {
    nextIndex = 0;
    // Note: To truly update state, you need to push this to Firebase, not just locally
    // combatState.value.currentRound += 1;
  }
  // combatState.value.currentTurnIndex = nextIndex;
  replenishCurrentActorMovement();
};

//TODO
//Need to utilize playerData to ensure their movement value is populated correctly
const replenishCurrentActorMovement = () => {
  remainingMovement.value = selectedTokenStats.value.maxMovement; // Fresh 30ft of move allowance allocated
};



const showToast = ref(false)
const toastMessage = ref('')
const toastColor = ref('success')

//This needs to actually show the equipped/available items/spell range
//Also need to only show the attack buttons for the selectedAction
const currentActionRangeRadius = computed(()=>{
  let feet = 0
  if (selectedAction.value === 'melee') feet = selectedTokenStats.value.meleeRange;
  else if (selectedAction.value === 'ranged') feet = selectedTokenStats.value.rangedRange;
  else if (selectedAction.value === 'spell') feet = selectedTokenStats.value.spellRange;
  
  return (feet / 5) * GRID_SIZE; // Convert: every 5 feet represents one full grid tile length

})

const proximityMessage = ref('');

// Step 1: Preload boilerplate grid image asset safely
onMounted(() => {
  watch(mapData, (newMap) => {
    if (newMap?.imageUrl && !mapImageElement.value) {
      const img = new Image();
      img.src = newMap.imageUrl;
      img.onload = () => { mapImageElement.value = img; };
    }
  }, { immediate: true })

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
  await updateDoc(doc(db,'campaigns',campaignId.value, 'maps', mapId, 'tokens', tokenId), { x: snappedX, y: snappedY });

}

const revertToken = (target, coords) => {
  target.position({ x: coords.x, y: coords.y });
  updateTokenLocalCoordinates(target.id(), coords.x, coords.y);
};

const updateTokenLocalCoordinates = (id, x, y) => {
  const idx = tokens?.value.findIndex(t => t.id === id);
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
    allowedRangeFeet = selectedTokenStats.value.rangedRange
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
  //increment the currentTurnIndex (and when appropriate current round) field(s)
  triggerNotification("🔄 Turn reset! Movement pools replenished.", 'success')
}

const triggerNotification = (msg, color='success') => {
  toastMessage.value = msg
  toastColor.value = color
  showToast.value = true
}



//Only GM should spawn tokens into a map
// const spawnNewToken = async () => {
//   const activeProfile = playerProfiles.find(p=>p.id==userProfile.value.uid)
//   try{
//     const tokenSubcollection = collection(useFirestore(), 'campaigns', campaignId.value, 'maps', mapId, 'tokens')
//     await addDoc(tokenSubcollection, {
//       name:activeProfile.name,
//       ownerId:userProfile.value.uid, //google says use activeProfile.id here
//       color: activeProfile.color, //this doesn't exist yet and I probably want to use token images instead
//       x: GRID_SIZE /2,
//       y: GRID_SIZE / 2,
//       initiativeRoll: null, //1d20+Agility
//     })
//   } catch (err) {
//     console.error("Token deployment error:",err)
//   }
// }


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

//TODO
//Need a similar function in the GmSandboxCanvas so the GM can attack players using monster tokens
const handleTokenClick = (target) => {
  // If we aren't in targeting mode, ignore the click
  if (!pendingAction.value) return;

  // A. Calculate Distance (in grid units)
  // Assumes GRID_SIZE = 70
  const dx = Math.abs(target.x - sourceToken.value.x) / GRID_SIZE;
  const dy = Math.abs(target.y - sourceToken.value.y) / GRID_SIZE;
  const distance = Math.max(dx, dy); 

  // B. Check range (e.g., Melee is 1)
  if (distance <= 1) {
    const rollReq = {
      roll: [pendingAction.value.damage],
      user: sourceToken.value.name,
      reason: `Melee Attack against ${target.name}`,
      pub: true,
      // Target the enemy token's health field
      location: `campaigns/${campaignId}/maps/${mapId.value}/tokens/${target.id}`,
      field: 'health' 
    };
    
    // Trigger the global roll function
    requestRoll(rollReq);
    
    // Clear state
    pendingAction.value = null;
  } else {
    alert("Target is out of range!");
  }
}

//TODO
//Need another watcher that displays a skull token when a token's health reaches 0
//For players, we will need some dying actions (player can take no actions  except maybe some kind of stabilize feature if we want to do that, party members can heal the dying player until the player's health reaches -Physical or something, at which point the player will permanently die and the whole character gets deleted from firestore so the player can make a new one)



//Watcher for rollRequests for THIS USER
const isNavigating = ref(false)

router.beforeEach(() => { isNavigating.value = true })
router.afterEach(() => { isNavigating.value = false })
// const latestRoll = computed(()=>campaignData.value?.rolls)

// watch(latestRoll,(newRoll,oldRoll)=>{
//   if(!newRoll || isNavigating.value) return
//   if(oldRoll&&newRoll.timestamp === oldRoll.timestamp) return
//   displayRoll(newRoll)
// })


// watch(rollRequests[userProfile.value.uid],(newRequest,oldRequests)=>{
//   if(!newRequest || isNavigating.value) return
//   if(oldRequests&&newRequest.timestamp === oldRequests.timestamp) return
//   dialog.value = true
// })

watch(() => rollRequests.value[uid.value], (newRequest, oldRequest) => {
  if (!newRequest || isNavigating.value) return
  if (oldRequest && newRequest.timestamp === oldRequest.timestamp) return
  dialog.value = true
})

</script>

<style scoped>
.token-hud {
  z-index: 10; /* Keep floating HUD text layers elevated securely over canvas spaces */
  pointer-events: auto;
}
</style>