<template>
  <!-- Expandable Side Menu Bar with links to all gm management pages
  If page!=index include back arrow to return to index page -->
  <ClientOnly>
    <DiceRoller ref="diceBoxRef" />
  </ClientOnly>
  <!-- <v-card> -->
    <!-- <v-navigation-drawer
      location="left"
      expand-on-hover
      permanent
      rail
      class="elevation-10" 
      style="z-index: 1000 !important;" 
    > -->
  <v-app>
    <v-layout class="fill-height">
      <v-navigation-drawer
        expand-on-hover
        permanent
        rail
        width="300"
        class="elevation-10"
      >
        <v-list>
          <v-list-item
            :prepend-avatar="userProfile.photoURL"
            :subtitle="userProfile.email"
            :title="userProfile.displayName"
          ></v-list-item>
        </v-list>

        <!-- <v-row class="mb-2 mt-1">
          <NuxtLink class="ml-5" to="/trpg/account"><v-btn size="small" variant="outlined">Campaigns</v-btn></NuxtLink>
          <v-spacer></v-spacer>
          <NuxtLink class="mr-5" to="/trpg/logout"><v-btn size="small" variant="outlined">Sign Out</v-btn></NuxtLink>
        </v-row> -->

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <!-- <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item> -->
          
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/'"><v-list-item prepend-icon="mdi-home" title="GM Dashboard" value="home" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/races'"><v-list-item prepend-icon="mdi-cat" title="Races" value="races" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/skills'"><v-list-item prepend-icon="mdi-star" title="Skills" value="skills" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/character-creation'"><v-list-item prepend-icon="mdi-account-cog" title="New Player Configuration" value="character-creation" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/players'"><v-list-item prepend-icon="mdi-account-group" title="Players" value="players" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/npcs'"><v-list-item prepend-icon="mdi-robot" title="NPCs" value="npcs" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/bestiary'"><v-list-item prepend-icon="mdi-rabbit" title="Bestiary" value="bestiary" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/items'"><v-list-item prepend-icon="mdi-bottle-tonic-skull" title="Items" value="items" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/weapons'"><v-list-item prepend-icon="mdi-sword" title="Weapons" value="weapons" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/armor'"><v-list-item prepend-icon="mdi-shield" title="Armor" value="armor" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/accessories'"><v-list-item prepend-icon="mdi-necklace" title="Accessories" value="accessories" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/spells'"><v-list-item prepend-icon="mdi-auto-fix" title="Spells" value="spells" /></NuxtLink>
          <NuxtLink :to="'/trpg/'+campaignId+'/gm/maps'"><v-list-item prepend-icon="mdi-map" title="Maps" value="maps" /></NuxtLink>
          <div v-if="route.path=='/trpg/'+campaignId+'/gm/'">
            <v-divider color="primary" content-offset="-16" opacity="1" thickness="5">
              <p v-if="isHovering">GAMEPLAY ACTIONS</p>
            </v-divider>
            <!---->
            <v-list-item prepend-icon="mdi-dice-d20" title="Roll" value="roll" @click="showHideDice()"/>
            <NuxtLink :to="'/trpg/'+campaignId+'/gm/billboard'"><v-list-item prepend-icon="mdi-notebook" title="Billboard" value="billboard"/></NuxtLink>
            <v-list-item prepend-icon="mdi-flask-plus" title="Give Items" value="give" />
            <v-list-item prepend-icon="mdi-account" title="Add Characters to Battlefield" value="battlefield" />
            <!-- <v-list-item prepend-icon="" title="" value="" @click=""/> -->
            
          </div>
        </v-list>
      </v-navigation-drawer>
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
      <v-main class="fill-height ml-15">
        <slot />
      </v-main>
      <v-card class="p-2" v-if="showDice" style="position:fixed; bottom:0%; width:100%">
        <v-row class="mr-20 ml-5 mt-5">
          <!--Need to make these handle input better and cap the total die rolled around 1999 -->
          <v-number-input :min="0" control-variant="split" label="d4" :rules="value => !!value || 'Required.'" v-model="d4" />
          <v-number-input :min="0" control-variant="split" label="d6" :rules="value => !!value || 'Required.'" v-model="d6" />
          <v-number-input :min="0" control-variant="split" label="d8" :rules="value => !!value || 'Required.'" v-model="d8" />
          <v-number-input :min="0" control-variant="split" label="d10" :rules="value => !!value || 'Required.'" v-model="d10" />
          <v-number-input :min="0" control-variant="split" label="d12" :rules="value => !!value || 'Required.'" v-model="d12" />
          <v-number-input :min="0" control-variant="split" label="d20" :rules="value => !!value || 'Required.'" v-model="d20" />
          <v-number-input :min="0" control-variant="split" label="d100" :rules="value => !!value || 'Required.'" v-model="d100" />
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
      <v-btn v-if="showDice" @click="diceBoxRef.clearDice()" style="z-index:20; position:fixed; bottom:40px; right:40px;">Clear</v-btn>
    
    </v-layout>
  </v-app>
  <!-- </v-card> -->
</template>

<script setup>
import { useCurrentUser, useFirestore, useDocument } from 'vuefire';
import { doc , updateDoc } from 'firebase/firestore'
// import DiceBox from '@3d-dice/dice-box'

const route = useRoute()
const db = useFirestore()
const campaignId = computed(()=>route.params.id||'')
const campaignDoc = computed(()=> doc(db,'campaigns',campaignId.value))
const {data:campaignData, pending, error} = useDocument(campaignDoc)
const userProfile = computed(()=>useCurrentUser().value)
const diceBoxRef = ref()
// const isHovering = ref(false)
//Inject reactive states cleanly down the tree
provide('campaignId', campaignId)
provide('campaignData',campaignData)
provide('campaignPending',pending)
// provide('campaignError',error)


//Redirect if not the host :D
const isHost = computed(()=> campaignData.host==userProfile.value.uid ? true : false)
if(!isHost){await navigateTo('/trpg/'+campaignId.value)}


const publicRoll = ref(true)
const rollDescription = ref('')
const rollMessages = ref([])

let count = 0


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
  if(publicRoll.value){
    const req = {
      roll: dice.value,
      user: 'GM',
      reason: rollDescription.value,
      pub: true,
      // location: 'campaigns/'+campaignId.value,
      // field: 'rolls',
    }
    diceBoxRef.value.rollDice(req)
  } else{
    const req = {
      roll:dice.value,
      user:'GM',
      reason:rollDescription.value,
      pub:false
    }
    rollMessages.value.push(diceBoxRef.value.rollDice(req))
  }
  dice.value.length=0
}

// const diceBox = new DiceBox({
//   assetPath: '/assets/' // include the trailing backslash
// })
const showDice = ref(false)
const showHideDice = ()=>{
  if(showDice.value){
    diceBoxRef.value.hideDice()
    showDice.value=false
  }else{
    diceBoxRef.value.showDice()
    showDice.value = true
  }
}

const displayRoll = (roll) => {
  //Not sure if this is displaying user and reason and on all gm pages when a player user rolls
  count++
  let rollText = ""
  if(roll.reason && roll.reason.length>0){
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

const router = useRouter()
const isNavigating = ref(false)

router.beforeEach(()=>{
  isNavigating.value = true
})
router.afterEach(()=>{
  isNavigating.value = false
})

const latestRoll = computed(()=>campaignData.value?.rolls)

watch(latestRoll,(newRoll,oldRoll)=>{
  if(!newRoll || isNavigating.value) return
  if(oldRoll&&newRoll.timestamp === oldRoll.timestamp) return
  displayRoll(newRoll)
})

// 1. When the route changes, silence the notification engine for a brief moment
// watch(
//   () => route.path,
//   () => {
//     isNavigating.value = true
    
//     // Clear out any stale messages from the snackbar queue if you want a clean slate
//     rollMessages.value = []

//     // Re-enable notifications after the data stream transition settles
//     setTimeout(() => {
//       isNavigating.value = false
//     }, 300) // 300ms is enough to clear the route blip
//   }
// )

// // 2. Watch your data cleanly without fragile clock comparisons
// watch(
//   () => campaignData.value?.rolls,
//   (newValue, oldValue) => {
//     // Skip if there's no data, or if we are currently transitioning pages
//     if (!newValue || isNavigating.value) return

//     // Skip if the new roll is exactly identical to the old roll in memory
//     // (This stops the "blip" re-trigger when layout data re-evaluates)
//     if (oldValue && newValue.timestamp === oldValue.timestamp) return

//     // Display the roll successfully!
//     // displayRoll(structuredClone(newValue))
//     displayRoll(newValue)

//   },
//   { deep: true }
// )

</script>

<style scoped>
/* Force the navigation area to always be on top of the canvas */
.v-navigation-drawer {
  z-index: 2000 !important;
}

/* Ensure the hover-expanded drawer isn't cut off */
.v-navigation-drawer--is-hovering {
  overflow: visible !important;
}
</style>

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