<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/attribute-hyphenation -->
<script setup>
import { useTheme } from 'vuetify'
import { OrbitControls, Sky, Ocean, useTexture } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
import { BasicShadowMap, SRGBColorSpace } from 'three'

const { state: texture } = useTexture('/img/earth/earth_min.png')

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
// const textures = ref()


</script>

<template>
  <ClientOnly>
    <TresCanvas
      v-bind="gl"
      render-mode="on-demand"
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
        :make-default="true"
        :enable-zoom="false"
        :enable-pan="false"
        :min-distance="8.5"
        :max-distance="120"
        :enable-damping="true"
        :autoRotate="true"
        :auto-rotate-speed="-2.75"
      />
      <Sky :elevation="0.8" />
      <!-- <Stars :size="0.2" /> -->
      <Suspense>
        <Ocean :position="[0,-10,0]" />
      </Suspense>


      <Suspense>
        <!-- <UseTexture v-slot="{ textures }" :map="!isLoading?texture:''"> -->
          <Sphere
            :args="[rad]"
            :rotation="[0,-1,23.5 / 360 * 2 * Math.PI-0.3]"
          >
            <!-- <ClientOnly> -->
            <TresMeshMatcapMaterial
              :map="texture"
            />
            <!-- </ClientOnly> -->
          </Sphere>
        <!-- </UseTexture> -->
      </Suspense>
    </TresCanvas>
  </ClientOnly>
</template>