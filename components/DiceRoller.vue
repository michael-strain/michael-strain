<template>
  <div id="dice-box" />
</template>

<script setup>
import { doc, updateDoc } from 'firebase/firestore';
import { useFirestore } from 'vuefire';
import DiceBox from '@3d-dice/dice-box'

const route = useRoute()
// const db = useFirestore()
const campaignId = computed(()=>route.params.id)

const rollData = ref({})
const isPublic = ref(false)
let box = null

const rollDice = (req) => {
  if(!req||!req.roll) return
  rollData.value = {
    total: 0,
    reason: req.reason || '',
    user: req.user || 'Unknown User',
    timestamp: Date.now(),
    location: req.location || '',
    field: req.field || ''
  }
  isPublic.value = req.pub
  if(box){
    box.show()
    box.roll(req.roll)
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
    

    // rollData.value = {
    //   total: 0,
    //   reason: r.description,
    //   user: username,
    //   timestamp: Date.now(),
    //   location: location,
    //   field: field
    // }
    
    let rollValue = 0
    for (const dice of rollResult) {
      rollValue+=dice.value
    }
    rollData.value.total = rollValue
    
    if(isPublic.value){
      updateDoc(doc(useFirestore(),'campaigns',campaignId.value), {
        rolls: rollData.value
      });
      if(location!=''){
        updateDoc(doc(useFirestore(),location),{
          [rollData.value.field]:rollData.value.total
        })
      }
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