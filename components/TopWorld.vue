<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/attribute-hyphenation -->
<script setup lang="ts">
import { useTheme } from 'vuetify'
import { OrbitControls, Sky, Ocean, Stars } from '@tresjs/cientos'
import { useTexture, TresCanvas } from '@tresjs/core'
import { BasicShadowMap, SRGBColorSpace } from 'three'

const theme = useTheme()

const gl = {
  clearColor: theme.current.value.colors.background,
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  //toneMapping: NoToneMapping, //:tone-mapping-exposure="0.25"
  toneMappingExposure: "0.4"
}


const rad = ref(6)

const fov = ref(80)
const aspect = ref(1)
const near = ref(0.1)
const far = ref(2000)
const zoom = ref(3)

// const img = useImage()
// const earthUrl = computed(() => {
//   const imgUrl = img('/img/earth/land_ocean_ice_8192.png', { width: 100, format: 'png', quality: 50 })
//   return { backgroundImage: `url('${imgUrl}')` }
// })

// console.log(earthUrl.value.backgroundImage)

const pbrTexture = ref()

//Fucking silly that this isn't better documented for nuxt usage

// ;(async()=>{
//   try{
//     if(useRuntimeConfig().public.WTFAMI=="DEV"){
//       const txtr = await useTexture(['http://127.0.0.1:3000/img/earth/land_ocean_ice_8192.png'])
//       pbrTexture.value = txtr
//     } else{
//       const txtr = await useTexture(['https://michael-strain.com/img/earth/land_ocean_ice_8192.png'])
//       pbrTexture.value = txtr
//     }
//   } catch(e){
//     //Might always error on serverside because the document doesn't exist and threejs is a whiner
//     //so we are just gonna ignore these document related errors
//     console.log(e)
//   }
// })()

//This works but seems to throw serverside errors

try{
  useTexture(['/img/earth/earth_min.png']).then((tex)=>{
    pbrTexture.value = tex
  })
}catch(e){
  // console.log(e)
  let fucksigive = 0;
}

//not sure this always works
onMounted(async()=>{
  try{
    await useTexture(['/img/earth/earth_min.png']).then((tex)=>{
      pbrTexture.value = tex
    })
  }catch(e){
    console.log(e)
    let fucksigive = 0;
  }
})

//this was working okay, but sometimes didn't show texture on first load

// onMounted(async()=>{
//   try{
//     if(useRuntimeConfig().public.WTFAMI=="DEV"){
//       const txtr = await useTexture(['http://127.0.0.1:3000/img/earth/land_ocean_ice_8192.png'])
//       pbrTexture.value = txtr
//     } else{
//       const txtr = await useTexture(['https://michael-strain.com/img/earth/land_ocean_ice_8192.png'])
//       pbrTexture.value = txtr
//     }
//   } catch(e){
//     //Might always error on serverside because the document doesn't exist and threejs is a whiner
//     //so we are just gonna ignore these document related errors
//     console.log(e)
//   }
// })

</script>

<template>
  <TresCanvas
    v-bind="gl"
    render-mode="always"
  >
    <!-- <TresPerspectiveCamera
      :args="[45,innerWidth/innerHeight,1,2000]"
      failIfMajorPerformanceCaveat="true"
    /> -->
    
    <TresPerspectiveCamera
      :args="[fov, aspect, near, far]"
      :zoom="zoom"
      :position="[-30,0,0]"
    />
    <!-- <TresAmbientLight
      :color="0xFAD6A5"
      :intensity="0.4"
    />
    <TresDirectionalLight
      :position="[-1,1,-1.5]"
      :color="0xfea7a1"
      :intensity="1.8"
    /> -->
    <OrbitControls
      :enable-zoom="false"
      :enable-pan="false"
      :min-distance="8.5"
      :max-distance="120"
      :enable-damping="true"
      :auto-rotate="true"
      :auto-rotate-speed="-0.75"
    />
    <Sky :elevation="0.8" />
    <Stars :size="0.2" />
    <Suspense>
      <Ocean :position="[0,-10,0]" />
    </Suspense>


    <Sphere
      :args="[rad]"
      :rotation="[0,-1,23.5 / 360 * 2 * Math.PI-0.3]"
    >
      <!-- <ClientOnly> -->
      <TresMeshMatcapMaterial
        :map="pbrTexture"
      />
      <!-- </ClientOnly> -->
    </Sphere>
  </TresCanvas>
</template>
