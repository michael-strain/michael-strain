<template>
  <h1>Welcome Traveler.</h1>
  <p>Create your character.</p>

  <v-form ref="formRef" @submit.prevent="saveCharacter">
    <v-text-field v-model="characterName" label="Character Name" :rules="[rules.required]"/>
    <v-select v-model="characterRace" label="Race" :rules="[rules.required]" :items="races" @update:model-value="raceChanged" />
    <v-textarea v-model="characterDescription" label="Character Description/Bio"/>
    
    <v-card v-if="characterRace" :title="characterRace" :subtitle="campaignData.races.find(r=>r.name==characterRace)?.description">
      <v-card-text class="my-1 py-1"><strong>Size: </strong>{{ campaignData.races.find(r=>r.name==characterRace)?.size }}</v-card-text>
      
      <v-card-text class="my-1 py-1"><strong>Age: </strong>{{ campaignData.races.find(r=>r.name==characterRace)?.age[0] }}-{{ campaignData.races.find(r=>r.name==characterRace)?.age[1] == Infinity ? 'Infinite' : campaignData.races.find(r=>r.name==characterRace)?.age[1] }}</v-card-text>

      <v-card-text class="my-1 py-1"><strong>Height: </strong>{{ campaignData.races.find(r=>r.name==characterRace)?.height }}</v-card-text>
      <v-card-text class="my-1 py-1"><strong>Weight: </strong>{{ campaignData.races.find(r=>r.name==characterRace)?.weight }}</v-card-text>
      <v-card-text class="my-1 py-1"><strong>Movement Speed (5ft Squares): </strong>{{ campaignData.races.find(r=>r.name==characterRace)?.movement }}</v-card-text>
      

      <v-card-text class="my-1 py-1"><strong>Ability Score Modifiers</strong></v-card-text>
      <v-card-text class="my-0 py-0" v-for="(score, key) in campaignData.races.find(r=>r.name==characterRace)?.abilityScoreModifiers">{{ key }}: {{ score }}</v-card-text>
      
      <v-card-text class="mb-1 pb-1"><strong>Item Slots</strong></v-card-text>
      <v-card-text class="my-0 py-0" v-for="(slot, key) in campaignData.races.find(r=>r.name==characterRace)?.itemSlots">{{ key }}: {{ slot }}</v-card-text>
    
      <v-card-text class="mb-1 pb-1"><strong>Special Features</strong></v-card-text>
      <v-card-text class="my-0 py-0" v-for="(feat, key) in campaignData.races.find(r=>r.name==characterRace)?.specialFeatures">{{ key }}: {{ feat }}</v-card-text>
      
    </v-card>

    <v-card title="Ability Scores">
      <v-row>
        <template v-for="(score, key) in abilityScores">
          <v-col cols="12" md="4" sm="4">
            <h5 class="my-0">{{ key }}</h5>
            <v-number-input :key="scoreKeys[key]" control-variant="split" :model-value="abilityScores[key]" @update:model-value="(newValue)=>calculateAbilityScores(key, newValue)" :min="minPoints[key]" />
          </v-col>
        </template>
      </v-row>
      <v-card-text>Points Remaining: {{ maxAbilityPoints - abilityPoints }}</v-card-text>
    </v-card>

    <v-card title="Skills">
      <v-row v-if="rankKeys && skills">
        <template v-for="skill in skills" :key="skill.name">
          <v-col cols="12" md="4" sm="4">
            <h5 class="my-0">{{ skill.name }} {{ abilityScores[skill.abilityScore]>0?'+'+abilityScores[skill.abilityScore]:'' }}</h5>
            <v-number-input :key="rankKeys[skill.name]" control-variant="split" :model-value="skill.rank" @update:model-value="(newValue)=>calculateSkillRanks(skill, newValue)" :min="minRanks[skill.name]" />
          </v-col>
        </template>
      </v-row>
      <v-card-text :key="skillKey">Ranks Remaining: {{ maxSkillRanks - skillRanks }}</v-card-text>
    </v-card>

    <v-card title="Age Height & Weight" v-if="characterRace">
      <v-number-input :label="campaignData.races.find(r=>r.name==characterRace)?.age[0]+'-'+campaignData.races.find(r=>r.name==characterRace)?.age[1]" v-model="age" control-variant="hidden" :rules="[rules.required,rules.minimum]" /><v-btn @click="roll('age', campaignData.races.find(r=>r.name==characterRace)?.age)">Roll</v-btn>
      <v-text-field :label="campaignData.races.find(r=>r.name==characterRace)?.height" v-model="height" :rules="[rules.required]" /><v-btn @click="roll('height',campaignData.races.find(r=>r.name==characterRace)?.height.split('-'))">Roll</v-btn>
      <v-text-field :label="campaignData.races.find(r=>r.name==characterRace)?.weight" v-model="weight" :rules="[rules.required]" />  <v-btn @click="roll('weight',campaignData.races.find(r=>r.name==characterRace)?.weight.split('-'))">Roll</v-btn>
    </v-card>

    <p>Start off knowing a number of spells equal to your ranks in caster + Intellectual Score</p>
    <!--Something is wrong here when you have no ranks in cast but you have 2 points in intellectual-->
    <v-card title="Spells" v-if="skills?.find(s=>s.name=='Cast')?.rank>0 || abilityScores?.Intellectual > 0">
      <template v-for="spell in paginatedSpellbook">
        <v-row>
          <v-checkbox 
            v-model="spells" 
            :value="spell" 
            :disabled="spells.length >= (Number(skills.find(skill=>skill.name=='Cast')?.rank || 0) + Number(abilityScores?.Intellectual || 0)) && !spells.includes(spell)" 
          />
          <v-card :title="spell.name" :subtitle="spell.description" elevation="1" variant="tonal">
            {{ spell.category }}
            {{ spell.castingDifficulty }}
            {{ spell.category=="Attack" ? 
            'Normal Damage: ' + spell.damage.Normal + 
            'Effective Damage: ' + spell.damage.Effective +
            'Exceptional Damage: ' + spell.damage.Exceptional +
            'Masterful Damage: ' + spell.damage.Masterful
            : '' }}
            {{ spell?.range }}
            {{ spell?.duration }}
          </v-card>
        </v-row>
      </template>
      <v-pagination
        v-model="page"
        :length="totalPages"
        class="mt-4"
      ></v-pagination>
      Remaining Starting Spells: {{ (skills.find(skill=>skill.name=='Cast')?.rank + abilityScores.Intellectual) - spells.length }}
    </v-card>

    <v-card title="Weapons">

      <template v-for="weapon in campaignData?.weapons" :key="weapon.name">
        <v-row class="align-center my-2">
          <!-- 1. Numeric quantity selector instead of checkbox -->
          <v-col cols="3" sm="2">
            <v-number-input
              v-model="weapons[weapon.name]"
              :min="0"
              :max="maxAffordable(weapon)"
              placeholder="0"
              density="compact"
              hide-details
              @update:model-value="(newVal) => handleQuantityChange(weapon, newVal, 'weapon')"
            />
            <!--@update:model-value=""-->
          </v-col>

          <!-- 2. Weapon Details Display Card -->
          <v-col cols="9" sm="10">
            <v-card 
              :title="weapon.name" 
              :subtitle="weapon.description" 
              elevation="1" 
              variant="tonal"
            >
              <v-card-text>
                Damage: {{ weapon.damage }}
                Item Slot: {{ formatObj(weapon.itemSlot) }}
                Range: {{ weapon.range }}
                Skill Type: {{ weapon.type }}
                Cost: {{ formatObj(weapon.cost) }} 
                <!-- <span v-if="weapons[weapon.name] > 0" class="text-success ml-2">
                  (Subtotal: {{ moneyToCopper(weapon.cost, campaignData.currencies) * weapons[weapon.name] }} Copper)
                </span> -->
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>

      Remaining Money: {{ formatObj(money) }}
    </v-card>

    <v-card title="Armor">

      <template v-for="arm in campaignData?.armor" :key="arm.name">
        <v-row class="align-center my-2">
          <!-- 1. Numeric quantity selector instead of checkbox -->
          <v-col cols="3" sm="2">
            <v-number-input
              v-model="armor[arm.name]"
              :min="0"
              :max="maxAffordable(arm)"
              placeholder="0"
              density="compact"
              hide-details
              @update:model-value="(newVal) => handleQuantityChange(arm, newVal, 'armor')"
            />
            <!--Warn players if the armor agility cost > player agility.rank + abilityScore.Physical-->
          </v-col>

          <!-- 2. Weapon Details Display Card -->
          <v-col cols="9" sm="10">
            <v-card 
              :title="arm.name" 
              :subtitle="arm.description" 
              elevation="1" 
              variant="tonal"
            >
              <v-card-text>
                Agility Cost: {{ arm.agilityCost }}
                Damage Reduction: {{ arm.damageReduction }}
                Item Slot: {{ formatObj(arm.itemSlot) }}
                Cost: {{ formatObj(arm.cost) }} 
                <!-- <span v-if="weapons[weapon.name] > 0" class="text-success ml-2">
                  (Subtotal: {{ moneyToCopper(weapon.cost, campaignData.currencies) * weapons[weapon.name] }} Copper)
                </span> -->
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>

      Remaining Money: {{ formatObj(money) }} <!--Could be cool to put this in a floating box that only appears once a user scrolls down to/past weapons-->
    </v-card>

    <v-card title="Items">

      <template v-for="item in campaignData?.items" :key="item.name">
        <v-row class="align-center my-2">
          <!-- 1. Numeric quantity selector instead of checkbox -->
          <v-col cols="3" sm="2">
            <v-number-input
              v-model="items[item.name]"
              :min="0"
              :max="maxAffordable(item)"
              placeholder="0"
              density="compact"
              hide-details
              @update:model-value="(newVal) => handleQuantityChange(item, newVal, 'item')"
            />
            <!--Warn players if the armor agility cost > player agility.rank + abilityScore.Physical-->
          </v-col>

          <!-- 2. Weapon Details Display Card -->
          <v-col cols="9" sm="10">
            <v-card 
              :title="item.name" 
              :subtitle="item.description" 
              elevation="1" 
              variant="tonal"
            >
              <v-card-text>
                Consumable: {{ item.consumable }}
                Permanent: {{ item.permanent }}
                Effect: {{ formatObj(item.effect) }}
                Cost: {{ formatObj(item.cost) }} 
                <!-- <span v-if="weapons[weapon.name] > 0" class="text-success ml-2">
                  (Subtotal: {{ moneyToCopper(weapon.cost, campaignData.currencies) * weapons[weapon.name] }} Copper)
                </span> -->
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </template>

      Remaining Money: {{ formatObj(money) }} <!--Could be cool to put this in a floating box that only appears once a user scrolls down to/past weapons-->
    </v-card>

    <!--Token Color Picker-->
    <v-color-picker v-model="color" :modes="['hex']" title="Token Color"></v-color-picker>

    <v-btn type="submit">Save Character and Roll Health</v-btn>

  </v-form>
  <v-dialog v-model="dialog" persistent>
    <v-snackbar-queue
      v-model="rollMessages"
      :collapsed="false"
      :total-visible="3"
      location="top end"
      display-strategy="overflow"
      contained
    />
  </v-dialog>

  <div id="dice-box" />

  Hidden Fields Include
  -uid
  -createDate
  -notes

</template>

<script setup>
//TODO
//Need to add a player token image uploader
//Might be nice to let players select a dice theme here from a bunch of options as well


import { useCurrentUser, useFirestore, useDocument } from 'vuefire';
import { doc, arrayUnion , updateDoc } from 'firebase/firestore'
import DiceBox from '@3d-dice/dice-box'

const route = useRoute()
const db = useFirestore()
const campaignId = computed(()=>route.params.id)
const campaignDoc = computed(()=> doc(db,'campaigns',campaignId.value))
const {data:campaignData, pending, error, promise} = useDocument(campaignDoc)

const userProfile = computed(()=>useCurrentUser().value)

const rules = ref({
  required: value => !!value || 'Required.',
  minimum: value => value>0 || 'Value must be greater than 0.'
})

const characterName = ref('')
const characterRace = ref() //On race selected, display a v-card overview of that races' details, then prefill all the necessary shit
const characterDescription = ref('')
const abilityPoints = ref(0)
const maxAbilityPoints = ref(0) //On race selected, let's update this as applicable to allow for bonus points
const abilityScores = ref()
const scoreKeys = ref({'Physical':0,'Intellectual':0,'Social':0})
const minPoints = ref()
const skills = ref()
const skillRanks = ref(0)
const maxSkillRanks = ref(0)
const rankKeys = ref()
const skillKey = ref(0)
const minRanks = ref()
const age = ref(0)
const height = ref('')
const weight = ref('')
const spells = ref([])
const page = ref(1)
const itemsPerPage = ref(1)
const money = ref()
const copperMoney = ref()
const weapons = ref([]) //Google wants this to be a reactive({}) instead of a ref([])
const armor = ref([])
const items = ref([])
const health = ref(0)
const dialog = ref(false)
const color = ref(null)
let count = 0

const totalPages = computed(()=>{
  const castRank = skills.value.find(s=>s.name=='Cast').rank || 0
  const intScore = abilityScores.value.Intellectual || 0
  if(castRank>0 || intScore>0){
    const spellbook = campaignData.value?.masterSpellbook || []
    const available = spellbook.filter(spell=>spell.level<(castRank+intScore+1))
    const pages = Math.ceil(available.length / itemsPerPage.value)
    return pages
  } else{
    return 0
  }
})

const paginatedSpellbook = computed(()=>{
  let masterSpellbook = []
  let castRank = skills.value.find(s=>s.name=='Cast').rank
  let intScore = abilityScores.value.Intellectual
  if(castRank>0 || intScore>0){
    let available = campaignData.value?.masterSpellbook.filter(spell=>spell.level<=skills.value.find(s=>s.name=='Cast').rank+abilityScores.value.Intellectual)
    masterSpellbook = available
  }
  const start = (page.value)-1*itemsPerPage.value
  const end = start + itemsPerPage.value
  return masterSpellbook.slice(start,end)
})

const races = ref([])

const rollMessages = ref([])

async function rollHealth () {

  //Before we go on we need to validate that everything is good to go
  //AKA required fields filled out, all ranks and abilityPoints used, etc.

  dialog.value = true

  await nextTick()

  const box = new DiceBox('#dice-box', {
    assetPath: '/assets/', // Path where you copied the dice-box assets
    // Additional configuration...
    container: "#dice-box",
    theme:'default',
    offscreen:true,
    scale:3
  })


  box.onRollComplete = async(rollResult)=>{
    let rollValue = 0
    for (const dice of rollResult) {
      rollValue+=dice.value
    }
    health.value = rollValue
    const rollData = {
      total: rollValue,
      reason: "Starting Health.  They just joined the campaign!", //welcome to campaignData.value.worldConfig.name
      user: characterName.value
    }

    const dbRef = doc(db, 'campaigns', campaignId.value)
    const currentUid = userProfile.value.uid
    
    try{
      await updateDoc(dbRef, {
        rolls: rollData
      });
      await updateDoc(dbRef, {
        [`players.${currentUid}.health`]: Number(rollValue)
      })

      let rollText = characterName.value + " Rolled " + rollValue + " for Starting Health.  Welcome to " + campaignData.value.worldConfig.name + " 😄"
      count++
      rollMessages.value.push({
        text: rollText,
        color:'info',
        zIndex: count,
      })
      //Wait 3 seconds (for the user to read their result) then save their data and navigate to the campaign
      setTimeout(() => {
        navigateTo(`/trpg/${campaignId.value}`)
      }, 3000) // Delay routing execution block for exactly 12 seconds
    } catch(firestoreError){
      console.error("Critical database save exception caught:",firestoreError)
    }
  }
  await box.init()
  //10+(1+PHYS)d20
  box.roll(String(1+abilityScores.value.Physical)+'d20+10')



}
const formRef = ref(null)
const saveCharacter = async() => {
  const { valid } = await formRef.value.validate()
  if(!valid){
    return
  }

  const pointsRemaining = maxAbilityPoints.value - abilityPoints.value
  if(pointsRemaining>0){
    count++
    rollMessages.value.push({
      text: pointsRemaining + " Ability Score Points Remaining.",
      color:'error',
      zIndex: count,
    })
    return
  }

  const ranksRemaining = maxSkillRanks.value - skillRanks.value
  if(ranksRemaining>0){
    count++
    rollMessages.value.push({
      text:ranksRemaining + " Skill Ranks Remaining.",
      color:'error',
      zIndex: count,
    })
    return
  }

  //add our abilityScoreModifiers to each of our skills here

  const raceData = campaignData.value.races.find(r=>r.name==characterRace.value)

  const finalSkillsToSave = structuredClone(toRaw(skills.value));

  for(const skill of finalSkillsToSave){
    if(abilityScores.value[skill.abilityScore]>0){
      skill.rank = Number(skill.rank) + Number(abilityScores.value[skill.abilityScore]);
  }
  }

  updateDoc(campaignDoc.value,{'playerIds':arrayUnion(userProfile.value.uid)})
  updateDoc(campaignDoc.value,{
    [`players.${userProfile.value.uid}`]:{
      name:characterName.value,
      level: campaignData.value.playerConfig.level,
      race:characterRace.value,
      description:characterDescription.value,
      abilityScores:abilityScores.value,
      skills:finalSkillsToSave,
      spells:spells.value,
      equipment:[],
      inventory:{weapons:weapons.value,armor:armor.value,items:items.value},
      // health: 0,
      age: age.value,
      height: height.value,
      weight: weight.value,
      money:money.value,
      itemSlots:raceData.itemSlots,
      movement:raceData.movement,
      size:raceData.size,
      skillRanks:0,
      abilityPoints:0,
      color:color.value
    }
  })

  await rollHealth()
}

const raceChanged = ref(() => {
  const modifiers = campaignData.value?.races.find(r=>r.name==characterRace.value)?.abilityScoreModifiers
  minPoints.value = modifiers
  maxAbilityPoints.value = campaignData.value.playerConfig.abilityPoints
  
  abilityPoints.value = 0
  for(let score in abilityScores.value){
    abilityPoints.value += abilityScores.value[score]
  }

  for(const [key, score] of Object.entries(modifiers)){
    maxAbilityPoints.value += score
    if(key!="Any"){
      const baseScore = campaignData.value.playerConfig.abilityScores[key]?.value || campaignData.value.playerConfig.abilityScores[key];
      abilityScores.value[key] = Number(baseScore) + Number(score);
      abilityPoints.value += 1
    }
  }

  abilityPoints.value = 0
  for(let score in abilityScores.value){
    abilityPoints.value += abilityScores.value[score]
  }

  //Add points to skills based on the race's specialFeature and set a new min for that skill
  minRanks.value = campaignData.value.skills.reduce((acc,key)=>{
    acc[key.name] = 0
    return acc
  },{})
  skills.value = structuredClone(toRaw(campaignData.value.skills))
  // maxSkillRanks.value = campaignData.value.playerConfig.skillRanks

   // 1. Safely find the current race object
  const currentRace = campaignData.value?.races.find(r => r.name === characterRace.value);

  // 2. Extract specialFeatures with an empty object fallback if it doesn't exist
  const specialFeatures = currentRace?.specialFeatures || {};

  // 3. Reset maxSkillRanks to base config *before* looping
  maxSkillRanks.value = campaignData.value.playerConfig.skillRanks;
  skillRanks.value = 0
  // Used to use campaignData.value?.races.find(r=>r.name==characterRace.value)?.specialFeatures
  for(const [feat,val] of Object.entries(specialFeatures)){
    if(feat=="Bonus Skill Ranks"){
      maxSkillRanks.value+=val
    }else if(skills.value.find(f=>f.name==feat)){
      //set new min val for this skill
      maxSkillRanks.value+=val
      minRanks.value[feat] = val
      // calculateSkillRanks.value(skills.value[skills.value.findIndex(f=>f.name==feat)],val)
    }
    const skillIndex = skills.value.findIndex(f => f.name === feat);
    if (skillIndex !== -1) {
      calculateSkillRanks.value(skills.value[skillIndex], val);
    }
  }
  skillKey.value++
})

const calculateAbilityScores = ref(async(key,newValue)=>{
  const originalValue = abilityScores.value[key]
  abilityPoints.value = 0
  for(let score in abilityScores.value){
    abilityPoints.value += abilityScores.value[score]
  }
  if(abilityPoints.value-originalValue+newValue>maxAbilityPoints.value){
    abilityScores.value[key]=originalValue
  }else{
    abilityScores.value[key]=newValue
    abilityPoints.value = 0
    for(let score in abilityScores.value){
      abilityPoints.value += abilityScores.value[score]
    }
  }
  scoreKeys.value[key]++
})

const calculateSkillRanks = ref(async(skill,newValue)=>{
  const originalValue = skill.rank
  skillRanks.value = skills.value.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.rank;
  }, 0);
  if(skillRanks.value-originalValue+newValue>maxSkillRanks.value){
    skill.rank=originalValue
  }else{
    skill.rank=newValue
    skillRanks.value = skills.value.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.rank;
    }, 0);
  }
  rankKeys.value[skill.name]++
})

const roll = ref((reference,arr)=>{
  if(arr && typeof(arr[0]=="number")){
    let min = Math.ceil(arr[0])
    let max = Math.floor(arr[1]==Infinity?2000:arr[1])
    let result = Math.floor(Math.random()*(max-min+1))+min
    reference=='age'?age.value = result:null;
  }
  if(arr && typeof(arr[0])=="string"){
    //arr[0] = '3ft6in'
    //arr[0].split("ft") / val1 = ['3','6in']
    //['3ft6in','8ft6in'] ['8ft','10ft6in'] ['3ft6in','8ft'] ['50lbs','100lbs']
    if(arr[0].includes("ft")){
      
       // 1. Parse first measurement (e.g., '3ft6in' or '8ft')
      let val1 = arr[0].split("ft");
      let ft1 = Number(val1[0]);
      // If 'in' exists, split it out. Otherwise, default to 0.
      let in1 = val1[1] && val1[1].includes('in') ? Number(val1[1].split('in')[0]) : 0;
      let totalIn1 = (ft1 * 12) + in1;

      // 2. Parse second measurement (e.g., '8ft6in' or '10ft')
      let val2 = arr[1].split("ft");
      let ft2 = Number(val2[0]);
      // If 'in' exists, split it out. Otherwise, default to 0.
      let in2 = val2[1] && val2[1].includes('in') ? Number(val2[1].split('in')[0]) : 0;
      let totalIn2 = (ft2 * 12) + in2;

      // 3. Generate random integer range between total inches
      let min = Math.ceil(totalIn1);
      let max = Math.floor(totalIn2);
      let result = Math.floor(Math.random() * (max - min + 1)) + min;
      
      // 4. Convert total inches back to standard 'XftYin' string format
      let resultString = String(Math.floor(result / 12)) + 'ft' + String(result % 12) + 'in';
      reference=='height'?height.value = resultString:null;
    }
    if(arr[0].includes("lbs")){
      let val1 = arr[0].split("lbs")
      let val2 = arr[1].split("lbs")
      let min = Math.ceil(Number(val1[0]))
      let max = Math.floor(Number(val2[0]))
      let result = String(Math.floor(Math.random()*(max-min+1)+min)) + "lbs"
      reference=='weight'?weight.value = result:null;
    }
    
    // arr[0].split("ft")[1]? ft.split("in")[1]
  }
})

onMounted(async()=>{
  if(useCurrentUser().value == null){
    return navigateTo('/trpg/login?campaign='+campaignId.value)
  }
  if(campaignData.value?.playerIds.includes(userProfile.value.uid)){
    //player already has a character
    await navigateTo('/trpg/'+campaignId.value)
  }
  if(campaignData?.value){
    for(let race of campaignData.value.races){
      races.value.push(race.name)
    }
    // abilityPoints.value = campaignData.value.abilityPoints
    abilityScores.value = structuredClone(toRaw(campaignData.value.playerConfig.abilityScores))
    maxAbilityPoints.value = campaignData.value.playerConfig.abilityPoints
    maxSkillRanks.value = campaignData.value.playerConfig.skillRanks

    skills.value = structuredClone(toRaw(campaignData.value.skills))
    minPoints.value = campaignData.value.playerConfig?.abilityScores

    rankKeys.value = campaignData.value.skills.reduce((acc,key)=>{
      acc[key.name] = 0
      return acc
    },{})
    minRanks.value = campaignData.value.skills.reduce((acc,key)=>{
      acc[key.name] = 0
      return acc
    },{})

    //some of this could be a computed to react to a gm changing the playerConfig
    //more than that I just care about things updating properly when a character wants to select something
    money.value = campaignData.value.playerConfig?.money
    //convert each item in money to it's copper equivalent value
    copperMoney.value = moneyToCopper(money.value,campaignData.value.currencies)
    // copperMoney.value = 0
    // for(const [key,val] of Object.entries(money.value)){
    //   //Lookup the item in the currencies field
    //   copperMoney.value += campaignData.value.currencies.find(c=>c.name==key).copperValueConversion * val
    // }
  }
})

function moneyToCopper (moneyObj,currencyList) {
    let totalCopper = 0;

  for (const [currencyName, amount] of Object.entries(moneyObj)) {
    // Find the matching currency definition to get its rate
    const currencyDef = currencyList.find(c => c.name === currencyName);
    
    if (currencyDef) {
      totalCopper += amount * currencyDef.copperValueConversion;
    }
  }

  return totalCopper;
}

function copperToMoney (totalCopper, currencyList) {
  const result = {};

  // Sort currencies from highest value to lowest value to break down the total correctly
  const sortedCurrencies = [...currencyList].sort(
    (a, b) => b.copperValueConversion - a.copperValueConversion
  );

  let remainingCopper = totalCopper;

  for (const currency of sortedCurrencies) {
    // Calculate how many coins of this type fit into the remaining copper
    const amount = Math.floor(remainingCopper / currency.copperValueConversion);
    
    // Set the coin count in our result object
    result[currency.name] = amount;
    
    // Update the remainder for the next lower currency
    remainingCopper %= currency.copperValueConversion;
  }

  return result;
}

const formatObj = ref((costObj) => {
  let parts = [];
  
  // Use a standard loop to avoid tricky array syntax errors
  for (const key in costObj) {
    const value = costObj[key];
    if (value > 0) {
      parts.push(value + ' ' + key);
    }
  }
  // let joined = parts.join(', ')
  // Join the pieces together, or return 'Free' if nothing was greater than 0
  return parts.join(', ')
  // return parts.length > 0 ? parts.join(', ') : 'Free';
})

function maxAffordable(item) {
  // 1. Guard check: Make sure item and cost objects exist
  if (!item || !item.cost) return 0;
  
  // 2. Guard check: Ensure player money exists
  if (!money || !money.value) return 0;
  
  // 3. Guard check: Ensure currencies layout array exists
  const currencies = campaignData.value?.currencies;
  if (!currencies) return 0;

  // Execute conversions using your native methods safely
  const itemCostCopper = moneyToCopper(item.cost, currencies);
  if (itemCostCopper === 0) return 999; // Prevent division by zero for free items

  const playerTotalCopper = moneyToCopper(money.value, currencies);
  const val = Math.floor(playerTotalCopper / itemCostCopper);
  return val
}

const previousQuantities = {}
function handleQuantityChange(desiredItem, newVal, category) {
  const currencies = campaignData.value?.currencies
  if (!currencies) return
  const currentQty = Number(newVal) || 0
  const oldQty = Number(previousQuantities[desiredItem.name]) || 0
  if(currentQty==oldQty) return
  const unitCostCopper = moneyToCopper(desiredItem.cost,currencies)

  //Positive means buying more, negative means refunding
  const quantityDelta = currentQty - oldQty
  const totalCopperDelta = unitCostCopper * quantityDelta

  const currentWalletCopper = moneyToCopper(money.value, currencies)
  const updatedWalletCopper = Math.max(0,currentWalletCopper - totalCopperDelta)

  money.value = copperToMoney(updatedWalletCopper, currencies)
  previousQuantities[desiredItem.name] = currentQty

  if(category=='weapon'){
    const inventoryMatch = weapons.value.find(item=>item.name==desiredItem.name)
    if(inventoryMatch){
      inventoryMatch.quantity += quantityDelta
      if(inventoryMatch.quantity <= 0){
        const index = weapons.value.indexOf(inventoryMatch)
        weapons.value.splice(index,1)
      }
    } else if (quantityDelta > 0){
      weapons.value.push({...desiredItem,quantity:quantityDelta})
    }
  } else if (category=='armor'){
    const inventoryMatch = armor.value.find(item=>item.name==desiredItem.name)
    if(inventoryMatch){
      inventoryMatch.quantity += quantityDelta
      if(inventoryMatch.quantity <= 0){
        const index = armor.value.indexOf(inventoryMatch)
        armor.value.splice(index,1)
      }
    } else if (quantityDelta > 0){
      armor.value.push({...desiredItem,quantity:quantityDelta})
    }
  } else if (category=='item'){
    const inventoryMatch = items.value.find(item=>item.name==desiredItem.name)
    if(inventoryMatch){
      inventoryMatch.quantity += quantityDelta
      if(inventoryMatch.quantity <= 0){
        const index = items.value.indexOf(inventoryMatch)
        items.value.splice(index,1)
      }
    } else if (quantityDelta > 0){
      items.value.push({...desiredItem,quantity:quantityDelta})
    }
  }
  

  
}

onUnmounted(async()=>{
  //ensure our dice-box is removed and our dialog is closed
  dialog.value = false
})
</script>

<style>

#dice-box {
  position: fixed;
  top:0;
  left:0;
  z-index:9999 !important;
  /* box-sizing: border-box; */
  width:100%;
  height: 100%;
  /* background-image: url(/public/assets/woodgrain2.jpg); */
  /* background-size: cover; */
  pointer-events: none;
}



#dice-box canvas {
  display: block;
  width: 100% !important;
  height: 100% !important;
  pointer-events: auto;
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