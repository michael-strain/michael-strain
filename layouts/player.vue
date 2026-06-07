<template>
  <!--App bar to include links to a characters
   inventory stats skills level ups equipment etc-->

  <ClientOnly>
    <DiceRoller ref="diceBoxRef" />
  </ClientOnly>

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
            :prepend-avatar="userProfile.photoURL"
            :subtitle="userProfile.email"
            :title="userProfile.displayName"
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
          
          <v-list-item prepend-icon="mdi-dice-d20" title="Roll" value="roll" @click="showHideDice()"/>
          <NuxtLink :to="'/trpg/'+campaignId+'/billboard'"><v-list-item prepend-icon="mdi-notebook" title="Billboard" value="billboard"/></NuxtLink>
          <v-list-item prepend-icon="mdi-account" title="Character Sheet" @click="dialog=true" />
        </v-list>
      </v-navigation-drawer>
    </v-hover>
    <v-main>
      <v-snackbar-queue
        v-model="rollMessages"
        :collapsed="false"
        :total-visible="3"
        location="bottom end"
        display-strategy="overflow"
        closable
        attach="body"
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
        <v-number-input :min="0" control-variant="split" label="d4" :rules="[value => value!=null || 'Required.']" v-model="d4" />
        <v-number-input :min="0" control-variant="split" label="d6" :rules="[value => value!=null || 'Required.']" v-model="d6" />
        <v-number-input :min="0" control-variant="split" label="d8" :rules="[value => value!=null || 'Required.']" v-model="d8" />
        <v-number-input :min="0" control-variant="split" label="d10" :rules="[value => value!=null || 'Required.']" v-model="d10" />
        <v-number-input :min="0" control-variant="split" label="d12" :rules="[value => value!=null || 'Required.']" v-model="d12" />
        <v-number-input :min="0" control-variant="split" label="d20" :rules="[value => value!=null || 'Required.']" v-model="d20" />
        <v-number-input :min="0" control-variant="split" label="d100" :rules="[value => value!=null || 'Required.']" v-model="d100" />
      </v-row>
        
        <v-text-field class="mr-20 ml-5" label="Roll Description" v-model="rollDescription" maxlength="82"/>
        <v-btn class="ml-5" @click="rollDice">Roll</v-btn>
        <!-- <v-btn @click="clearDice" style="z-index:20; position:fixed; top:120px; left:70px;">Clear</v-btn> -->
      </v-card>

      <v-btn v-if="showDice" @click="diceBoxRef.clearDice()" style="z-index:20; position:fixed; bottom:40px; right:40px;">Clear</v-btn>
      
      
    </v-main>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card class="elevation-3 border-thin fill-height d-flex flex-column">
          <!-- Card Header Banner -->
          <v-card-item class="text-white py-3" :style="'background-color: ' + player.color +';'">
            <v-card-title class="text-h6 font-weight-bold d-flex justify-space-between align-center">
              <span>{{ player.name || 'Unnamed Adventurer' }}</span>
              
              <v-chip size="small" color="amber-accent-3" variant="flat" class="text-black font-weight-bold">
                Lvl {{ player.level || 1 }}
              </v-chip>

            </v-card-title>
            <v-card-subtitle class="text-grey-lighten-2 pt-1">
              Race: {{ player.race || 'Unknown' }} &bull; Size: {{ player.size || 'Medium' }} &bull; UID: {{ userProfile.uid }}...
            </v-card-subtitle>
          </v-card-item>

          <!-- Core Stat Metadata Strip -->
          <v-card-text class="py-3 bg-grey-lighten-4 border-bottom">
            <v-row dense text-center>
              <!-- HEALTH -->
              <v-col cols="4">
                <div class="text-caption text-grey-darken-1 text-uppercase font-weight-bold mb-1">Health</div>
                <div class="text-body-1 font-weight-black text-red-darken-2">❤️ {{ player.health || 0 }}</div>
              </v-col>

              <!-- MOVEMENT -->
              <v-col cols="4">
                <div class="text-caption text-grey-darken-1 text-uppercase font-weight-bold mb-1">Movement</div>
                <div class="text-body-1 font-weight-black text-blue-darken-2">👣 {{ player.movement*5 || 0 }}ft</div>
              </v-col>
              
              <!-- ABILITY POINTS -->
              <!-- Need to make this editable if player.abilityPoints > 0 but don't allow players to decrease scores below their initial values, also need to ensure skill ranks updated accordingly -->
              <v-col cols="4">
                <div class="text-caption text-grey-darken-1 text-uppercase font-weight-bold mb-1">Ability Pts</div>
                <div class="text-body-1 font-weight-black text-purple-darken-2">⚡ {{ player.abilityPoints || 0 }}</div>
              </v-col>
            </v-row>
          </v-card-text>

          <!-- Biography / Description Summary Block -->
          <!--We could make this editable... no harm updating your character bio-->
          <v-card-text class="py-3 text-body-2 text-grey-darken-3 italicized-desc flex-grow-1">
            <strong>Description:</strong> {{ player.description || 'No character background notes provided.' }}
          </v-card-text>

          <v-divider></v-divider>

          <!-- Nested Expandable Sections Submenus -->
          <v-expansion-panels variant="accordion" class="custom-expansion-group">
            
            <!-- 1. SKILLS SECTION -->
            <v-expansion-panel title="📊 Learned Character Skills" eager>
              <v-expansion-panel-text class="pa-0">
                <div v-if="!player.skills || player.skills.length === 0" class="text-caption text-grey pa-2">
                  No explicit skills found.
                </div>
                <v-list v-else lines="two" density="compact" class="pa-0 bg-transparent">
                  <v-list-item v-for="(skill, sIdx) in player.skills" :key="sIdx" class="px-2 border-bottom-dashed">
                    <template v-slot:title>
                      <div class="d-flex justify-space-between align-center font-weight-bold text-subtitle-2 text-blue-grey-darken-3">
                        <span>{{ skill.name }}</span>

                        <!-- SKILL RANKS -->
                        <!-- Need to make this editable if player.skillRanks > 0 but don't allow players to decrease ranks below their initial values -->
                        <v-chip size="x-small" color="blue-grey-lighten-4" variant="flat" class="font-weight-bold">
                          Rank {{ skill.rank || 0 }}
                        </v-chip>
                      </div>
                    </template>
                    <template v-slot:subtitle>
                      <div class="text-caption mt-1">
                        <span class="font-weight-bold text-primary text-uppercase font-mono">[{{ skill.abilityScore }}]</span> — 
                        <span class="text-grey-darken-2">{{ skill.description }}</span>
                      </div>
                    </template>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- 2. EQUIPMENT SECTION -->
            <v-expansion-panel title="🛡️ Active Wardrobe & Equipment" eager>
              <v-expansion-panel-text>
                <pre class="formatted-json-view">{{ formatDataValue(player.equipment) }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- 3. INVENTORY SECTION -->
            <!--Need to make this interactable so players can use or equip items.-->
            <v-expansion-panel title="🎒 Main Vault & Carrying Inventory" eager>
              <v-expansion-panel-text>
                <pre class="formatted-json-view">{{ formatDataValue(player.inventory) }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

            <!-- 4. SPELLS SECTION -->
            <!--  Need to ensure player has the appropriate cast level for any spells added, should also accept checkbox list input from the list of available spells in the campaignData.value.masterSpellbook -->
            <!-- Need to make this semi-editable if a player increases their cast rank on levelup so they can add an appropriate number of new spells that they can cast -->
            <v-expansion-panel title="🪄 Prepared Arcane Spells Matrix" eager>
              <v-expansion-panel-text>
                <pre class="formatted-json-view">{{ formatDataValue(player.spells) }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>


            <!-- 5. DETAILED ATTRIBUTES SUMMARY MAP -->
             <!--Need to make this look better-->
            <v-expansion-panel title="⚙️ Core Sheet Attribute Scores" eager>
              <v-expansion-panel-text>
                <pre class="formatted-json-view">{{ formatDataValue(player.abilityScores) }}</pre>
              </v-expansion-panel-text>
            </v-expansion-panel>

          </v-expansion-panels>

          <v-card-actions class="px-0">
            <v-btn :color="'primary'" variant="outlined" @click="createCharacterSheetPdf">
              Make PDF
            </v-btn>
          </v-card-actions>
        </v-card>
    </v-dialog>

    </v-layout>
  </v-card>
</template>

<script setup>
import { useCurrentUser, useFirestore, useDocument } from 'vuefire';
import { doc, updateDoc } from 'firebase/firestore'

const route = useRoute()
const db = useFirestore()
const campaignId = computed(()=> route.params.id)
const campaignDoc = computed(()=> doc(db,'campaigns',campaignId.value))
const { data:campaignData, pending, error } = useDocument(campaignDoc)
const userProfile = computed(()=>useCurrentUser().value)
const rollDescription = ref('')
const rollMessages = ref([])
const isHost = computed(()=> campaignData.value?.host==userProfile.value.uid ? true : false)
const rollRequested = (req) => {
  diceBoxRef.value?.rollDice(req) // Don't forget .value here!
}

provide('campaignData',campaignData)
provide('campaignPending',pending)
provide('requestRoll',rollRequested)

const dialog = ref(false)
const player = campaignData.value.players[userProfile.uid]



onMounted(async () => {
  if(!userProfile){
    //player is not logged in, redirect
    await navigateTo('/login?campaign='+campaignId.value)
  }
  if(!pending.value && campaignData.value?.playerIds.includes(userProfile.uid)){
    //player needs a character
    await navigateTo('/trpg/'+campaignId.value+'/join')
  }
  //Redirect if host :D
  if(!pending.value && isHost.value){await navigateTo('/trpg/'+campaignId.value+'/gm/')}

})

const d4 = ref('0')
const d6 = ref('0')
const d8 = ref('0')
const d10 = ref('0')
const d12 = ref('0')
const d20 = ref('0')
const d100 = ref('0')
const dice =ref([])
const diceBoxRef = ref(null)

const rollDice = async()=>{
  d4.value!='0'?dice.value.push(d4.value+'d4'):null
  d6.value!='0'?dice.value.push(d6.value+'d6'):null
  d8.value!='0'?dice.value.push(d8.value+'d8'):null
  d10.value!='0'?dice.value.push(d10.value+'d10'):null
  d12.value!='0'?dice.value.push(d12.value+'d12'):null
  d20.value!='0'?dice.value.push(d20.value+'d20'):null
  d100.value!='0'?dice.value.push(d100.value+'d100'):null
  const req = {
    roll:[...dice.value],
    reason:rollDescription.value,
    user:campaignData?.value.players[userProfile.value.uid].name,
    pub:true
  }
  console.log(req)
  diceBoxRef.value?.rollDice(req)
  dice.value.length=0
}


const showDice = ref(false)
const showHideDice = ()=>{
  if(showDice.value){
    diceBoxRef.value?.hideDice()
    showDice.value=false
  }else{
    diceBoxRef.value?.showDice()
    showDice.value = true
  }
}
let count = 0
const displayRoll = (roll) => {
  count++
  let rollText = ""
  if(rollDescription.value.length>0){
    rollText = roll.user + " Rolled " + roll.total + " for " + roll.reason
  }else{
    rollText = roll.user + " Rolled " + roll.total
  }
  rollMessages.value.push({
    text: rollText,
    zIndex: count,
    color:'info',
  })
  
}

const createCharacterSheetPdf = () => {
  console.log("Someday I'll make a PDF character sheet here.")
}

// Utility to handle JSON serialization formatting directly on screen
const formatDataValue = (val) => {
  if (!val || (typeof val === 'object' && Object.keys(val).length === 0)) return 'Empty / Unassigned'
  if (typeof val === 'string') return val
  try {
    return JSON.stringify(val, null, 2)
  } catch (e) {
    return String(val)
  }
}


const router = useRouter()
const isNavigating = ref(false)

router.beforeEach(()=>{
  isNavigating.value = true
})
router.afterEach(()=>{
  isNavigating.value = false
})


const latestRoll = computed(()=> campaignData.value?.rolls)
//watch campaignData.rolls to push little roll result notifications to the snackbar
watch(latestRoll,(newRoll,oldRoll) => {
  if (!newRoll||isNavigating.value) return
  if (oldRoll && newRoll.timestamp === oldRoll.timestamp) return
  displayRoll(newRoll)
})
</script>

<style scoped>

/* Make sure your "Clear" button stays clickable over the overlay */
.v-btn {
  pointer-events: auto !important;
}
</style>