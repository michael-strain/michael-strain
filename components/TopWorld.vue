<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <!-- A less functional world for the topbar on the home page-->
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
      :auto-rotate="autoRotate"
      :auto-rotate-speed="0.75"
    />
    <Sky :elevation="0.8" />
    <Stars :size="0.2" />
    <Suspense>
      <Ocean :position="[0,-10,0]" />
    </Suspense>


    <Suspense>
      <Sphere
        :args="[rad]"
        :rotation="[0,-6,23.5 / 360 * 2 * Math.PI-0.3]"
      >
        <TresMeshMatcapMaterial
          :map="pbrTexture"
        />
        <!--
          :aoMap="aTexture"
          :aoMapIntensity="0.5"
          :displacementMap="dTexture"
          :displacementScale="0.03"
          :bumpMap="dTexture"
          :bumpScale="0.3" 
          -->
      </Sphere>
    </Suspense>
  </TresCanvas>
</template>

<script setup>
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

const showMe = ref(false)
// const showSparkles = ref(false)
const autoRotate = ref(true)


const rad = ref(6)

const fov = ref(80)
const aspect = ref(1)
const near = ref(0.1)
const far = ref(2000)
const zoom = ref(3)

const dodecaEnter = async() => {
  autoRotate.value=false
  // showSparkles.value=true
}

const dodecaLeave = async() => {
  autoRotate.value = true
  // showSparkles.value = false
}

const dodecaButton = () => {
  showMe.value =! showMe.value
  //move camera position to front and center to show panel better
  // cameraRef.value.position=[1,0,0]
  // cameraRef.value.rotation=[0,0,0]
  //rotate globe to face the targeted location to the camera
}


const pbrTexture = ref()
// const dTexture = ref()
// const aTexture = ref()

;(async()=>{
  try{
    if(useRuntimeConfig().public.WTFAMI=="dev"){
      const txtr = await useTexture(['http://127.0.0.1:3000/img/earth/land_ocean_ice_8192.png'])
      pbrTexture.value = txtr
    } else{
      const txtr = await useTexture(['https://michael-strain.com/img/earth/land_ocean_ice_8192.png'])
      pbrTexture.value = txtr
    }
    
  } catch(e){
    //Should always error on serverside because the document doesn't exist and threejs is a whiner
    //so we are just gonna ignore these document related errors
    // console.log(e)
    let fucksigive=0;
  }
    
  // const txtr = await useTexture(['http://127.0.0.1:3000/img/earth/land_ocean_ice_8192.png'])
  // const dTx = await useTexture(['http://127.0.0.1:3000/img/earth/gebco_08_rev_elev_21600x10800.png'])
  // const aTx = await useTexture(['http://127.0.0.1:3000/img/earth/landmask4K.png'])

  // txtr.minFilter = LinearFilter
  // dTx.minFilter = LinearFilter
  // aTx.minFilter = LinearFilter

  // pbrTexture.value = txtr
  // dTexture.value = dTx
  // aTexture.value = aTx

})()

// const uniforms = {
//   globeTexture: { value: texture }
// }
</script>