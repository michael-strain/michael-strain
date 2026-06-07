<template>
  <div id="dice-box" />
</template>

<script setup>
import { doc, updateDoc } from 'firebase/firestore';
import DiceBox from '@3d-dice/dice-box'

const route = useRoute()
const campaignId = computed(()=>route.params.id)
const campaignDoc = computed(()=> doc(db,'campaigns',campaignId.value))
const rollData = ref({})
const isPublic = ref(false)
let box = null
// let initialLoad = true

// const isHost = computed(()=> campaignData.value?.host==userProfile.value.uid ? true : false)


const router = useRouter()
const isNavigating = ref(false)
router.beforeEach(()=>{
  isNavigating.value = true
})
router.afterEach(()=>{
  isNavigating.value = false
})

onMounted(async()=>{

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
    let rollValue = 0
    for (const dice of rollResult) {
      rollValue+=dice.value
    }
    rollData.value.total = rollValue
    
    if(isPublic.value){
      updateDoc(doc(campaignDoc.value), {
        rolls: rollData.value
      });
    } else{
      let rollText = ""
      if(rollData.value.reason.length>0){
        rollText = "Rolled " + rollValue + " for " + rollData.value.reason
      }else{
        rollText = "Rolled " + rollValue
      }
      return {
        id:`${Date.now()}`,
        text: rollText,
        color:'info',
      }
    }
  }
})

const rollDice = (dice, description, username, pub) => {
  rollData.value = {
    total: 0,
    reason: description,
    user: username,
    timestamp: Date.now()
  }
  isPublic.value = pub
  if(box){
    box.show()
    box.roll(dice)
  }
}

const clearDice = ()=>{
  if(box){ box.clear() }
}

const showDice = ()=>{
  if(box){
    box.show()
  }
}

const hideDice = ()=>{
  if(box){
    box.hide()
  }
}

defineExpose({
  rollDice,
  clearDice,
  showDice,
  hideDice
})
</script>

<style>
#dice-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  /* 💡 CRITICAL: Allows clicks to pass through the invisible box container to the UI below */
  pointer-events: none; 
}

#dice-box canvas {
  width: 100%;
  height: 100%;
  /* 💡 Ensures the 3D canvas layer itself doesn't trap mouse clicks either */
  pointer-events: none; 
}
</style>