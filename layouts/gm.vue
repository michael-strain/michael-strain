<template>
  <!-- Expandable Side Menu Bar with links to all gm management pages
  If page!=index include back arrow to return to index page -->
  <v-card>
    <v-layout>
    <v-hover v-slot="{ isHovering, props }">
      <v-navigation-drawer
        expand-on-hover
        permanent
        rail
        v-bind="props"
      >
        <v-list>
          <v-list-item
            :prepend-avatar="useCurrentUser().value.photoURL"
            :subtitle="useCurrentUser().value.email"
            :title="useCurrentUser().value.displayName"
          ></v-list-item>
        </v-list>

        <v-row v-if="isHovering" class="mb-2 mt-1">
            <NuxtLink class="ml-5" to="/trpg/account"><v-btn size="small" variant="outlined" right>Campaigns</v-btn></NuxtLink>
            <v-spacer></v-spacer>
            <NuxtLink class="mr-5" to="/trpg/logout"><v-btn size="small" variant="outlined" right>Sign Out</v-btn></NuxtLink>
          </v-row>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <!-- <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item> -->
          
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/'"><v-list-item prepend-icon="mdi-home" title="GM Dashboard" value="home" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/races'"><v-list-item prepend-icon="mdi-cat" title="Races" value="races" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/skills'"><v-list-item prepend-icon="mdi-star" title="Skills" value="skills" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/character-creation'"><v-list-item prepend-icon="mdi-account-cog" title="New Player Configuration" value="character-creation" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/players'"><v-list-item prepend-icon="mdi-account-group" title="Players" value="players" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/npcs'"><v-list-item prepend-icon="mdi-robot" title="NPCs" value="npcs" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/bestiary'"><v-list-item prepend-icon="mdi-rabbit" title="Bestiary" value="bestiary" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/items'"><v-list-item prepend-icon="mdi-bottle-tonic-skull" title="Items" value="items" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/weapons'"><v-list-item prepend-icon="mdi-sword" title="Weapons" value="weapons" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/armor'"><v-list-item prepend-icon="mdi-shield" title="Armor" value="armor" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/accessories'"><v-list-item prepend-icon="mdi-necklace" title="Accessories" value="accessories" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/spells'"><v-list-item prepend-icon="mdi-auto-fix" title="Spells" value="spells" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/maps'"><v-list-item prepend-icon="mdi-map" title="Maps" value="maps" /></NuxtLink>
          <div v-if="useRoute().path=='/trpg/'+useRoute().params.id+'/gm/'">
            <v-divider color="primary" content-offset="-16" opacity="1" thickness="5">
              <p v-if="isHovering">GAMEPLAY ACTIONS</p>
            </v-divider>
            <!---->
            <v-list-item prepend-icon="mdi-dice-d20" title="Roll" value="roll" @click="showHideDice()"/>
            <NuxtLink :to="'/trpg/'+useRoute().params.id+'/gm/billboard'"><v-list-item prepend-icon="mdi-notebook" title="Billboard" value="billboard"/></NuxtLink>
            <v-list-item prepend-icon="mdi-flask-plus" title="Give Items" value="give" />
            <v-list-item prepend-icon="mdi-account" title="Add Characters to Battlefield" value="battlefield" />
            <!-- <v-list-item prepend-icon="" title="" value="" @click=""/> -->
            
          </div>
        </v-list>
      </v-navigation-drawer>
    </v-hover>
    <v-main>
      <v-snackbar-queue
        v-model="rollMessages"
        item-key="id"
        :collapsed="false"
        :total-visible="8"
        location="bottom end"
        display-strategy="overflow"
        closable
        contained
      >
        <template v-slot:actions="{ props }">
          <v-icon-btn
            aria-label="Close"
            icon="$close"
            size="small"
            variant="text"
            v-bind="props"
          ></v-icon-btn>
        </template>
      </v-snackbar-queue>
      <NuxtPage />
      <v-card class="p-2" v-if="showDice" style="position:fixed; bottom:0%; width:100%">
        <v-row class="mr-20 ml-5 mt-5">
          <!--Need to make these handle input better and cap the total die rolled around 1999 -->
          <v-text-field label="d4" v-model="d4" />
          <v-text-field label="d6" v-model="d6" />
          <v-text-field label="d8" v-model="d8" />
          <v-text-field label="d10" v-model="d10" />
          <v-text-field label="d12" v-model="d12" />
          <v-text-field label="d20" v-model="d20" />
          <v-text-field label="d100" v-model="d100" />
        </v-row>
        
        <v-text-field class="mr-20 ml-5" label="Roll Description" v-model="rollDescription" maxlength="82"/>
        <v-btn class="ml-5" @click="rollDice">Roll</v-btn>
        <!-- <v-btn @click="clearDice" style="z-index:20; position:fixed; top:120px; left:70px;">Clear</v-btn> -->
        <v-switch
            v-model="publicRoll"
            color="primary"
            :prepend-icon="publicRoll?'mdi-dice-d20':'mdi-dice-d20-outline'"
            :label="publicRoll?'Public Roll':'Private Roll'"
            inset
            class="ml-5"
          />
      </v-card>
      <div id="dice-box" />
      <v-btn v-if="showDice" @click="clearDice" style="z-index:20; position:fixed; bottom:40px; right:40px;">Clear</v-btn>
      
      
    </v-main>
    <!-- <v-overlay class="align-center justify-center"> -->
      
    <!-- </v-overlay> -->
    </v-layout>
  </v-card>
</template>

<script setup>
import { useCurrentUser, useFirestore, useDocument } from 'vuefire';
import { doc, arrayUnion , updateDoc } from 'firebase/firestore'
import DiceBox from '@3d-dice/dice-box'


const campaignDoc = computed(()=> doc(useFirestore(),'campaigns',useRoute().params.id))
const {data:campaignData, pending, error, promise} = useDocument(campaignDoc)

const isHost = computed(()=> campaignData.host==useCurrentUser().uid ? true : false)

//Redirect if not the host :D
if(!isHost){await navigateTo('/trpg/'+useRoute().params.id)}

//Provide campaign data to all our management pages :D
provide('campaignData',campaignData)

const publicRoll = ref(true)
const rollDescription = ref('')
const rollMessages = ref([])
let box = null
let count = 0

onMounted(async () => {
  box = new DiceBox('#dice-box', {
    assetPath: '/assets/', // Path where you copied the dice-box assets
    // Additional configuration...
    container: "#dice-box",
    theme:'default',
    offscreen:true,
    scale:3
  })
  
  await box.init()
  box.hide()
  box.onRollComplete = (rollResult)=>{
    //display the roll result (total)
    //add the roll result to the document rolls field
    //on players screens, popup with a result if the roll was public
    // initialLoad = false
    let rollData = {}
    let rollValue = 0
    for (const dice of rollResult) {
      rollValue+=dice.value
    }
    rollData.total = rollValue
    rollData.reason = rollDescription.value
    rollData.user = "GM" // useCurrentUser().value.displayName
    rollData.timestamp = Date.now()
    
    if(publicRoll.value){
      updateDoc(doc(useFirestore(),'campaigns',useRoute().params.id), {
        rolls: rollData
      });
    } else{
      //manually push a gm-only result notification
      count++
      let rollText = ""
      if(rollDescription.value.length>0){
        rollText = "Rolled " + rollValue + " for " + rollDescription.value
      }else{
        rollText = "Rolled " + rollValue
      }
  
      rollMessages.value.push({
        id:`${Date.now()}-${count}`,
        text: rollText,
        color:'info',
      })
    }
  }

})

const d4 = ref('0')
const d6 = ref('0')
const d8 = ref('0')
const d10 = ref('0')
const d12 = ref('0')
const d20 = ref('0')
const d100 = ref('0')
const dice =ref([])

const rollDice = async()=>{
  d4.value!='0'?dice.value.push(d4.value+'d4'):null
  d6.value!='0'?dice.value.push(d6.value+'d6'):null
  d8.value!='0'?dice.value.push(d8.value+'d8'):null
  d10.value!='0'?dice.value.push(d10.value+'d10'):null
  d12.value!='0'?dice.value.push(d12.value+'d12'):null
  d20.value!='0'?dice.value.push(d20.value+'d20'):null
  d100.value!='0'?dice.value.push(d100.value+'d100'):null
  if(box){
    box.roll(dice.value)
  }
  dice.value.length=0
}

const clearDice = ()=>{
  if(box){ box.clear() }
}

// const diceBox = new DiceBox({
//   assetPath: '/assets/' // include the trailing backslash
// })
const showDice = ref(false)
const showHideDice = ()=>{
  if(box){
    if(showDice.value){
      box.hide()
      showDice.value=false
    }else{
      box.show()
      showDice.value = true
    }
  }
}

const displayRoll = (roll) => {
  //Not sure if this is displaying user and reason and on all gm pages when a player user rolls
  count++
  let rollText = ""
  if(rollDescription.value.length>0){
    rollText = roll.user + " Rolled " + roll.total + " for " + roll.reason
  }else{
    rollText = roll.user + " Rolled " + roll.total
  }
  rollMessages.value.push({
    id:`${Date.now()}-${count}`,
    text: rollText,
    color:'success',
  })
}

const route = useRoute()
const isNavigating = ref(false)

// 1. When the route changes, silence the notification engine for a brief moment
watch(
  () => route.path,
  () => {
    isNavigating.value = true
    
    // Clear out any stale messages from the snackbar queue if you want a clean slate
    rollMessages.value = []

    // Re-enable notifications after the data stream transition settles
    setTimeout(() => {
      isNavigating.value = false
    }, 300) // 300ms is enough to clear the route blip
  }
)

// 2. Watch your data cleanly without fragile clock comparisons
watch(
  () => campaignData.value?.rolls,
  (newValue, oldValue) => {
    // Skip if there's no data, or if we are currently transitioning pages
    if (!newValue || isNavigating.value) return

    // Skip if the new roll is exactly identical to the old roll in memory
    // (This stops the "blip" re-trigger when layout data re-evaluates)
    if (oldValue && newValue.timestamp === oldValue.timestamp) return

    // Display the roll successfully!
    // displayRoll(structuredClone(newValue))
    displayRoll(newValue)

  },
  { deep: true }
)

</script>

<style>
/* #dice-box {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-size: cover;
} */

#dice-box {
  position: fixed;
  top:0;
  left:0;
  z-index:10;
  /* box-sizing: border-box; */
  width:100%;
  height: 100%;
  /* background-image: url(/public/assets/woodgrain2.jpg); */
  /* background-size: cover; */
  pointer-events: none;
}



#dice-box canvas {
  width: 100%;
  height: 100%;
}

#roll {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  cursor: pointer;
}
</style>