<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="">
    <v-item-group
      v-model="selection"
      multiple
      class="flex gap-10 flex-wrap justify-center"
    >
      <div
        v-for="(item, i) in items"
        :key="i"
      >
        <v-item v-slot="{ isSelected, toggle }">
          <v-img
            :src="`https://cdn.vuetifyjs.com/images/${item.src}`"
            cover
            class="text-right pa-2 flex h-350px w-350px"
            @click="toggle"
          >
            <v-btn :icon="isSelected ? 'mdi-heart' : 'mdi-heart-outline'" />
          </v-img>
        </v-item>
      </div>
    </v-item-group>
  </div>
</template>

<script setup>
  const items = ref([])
  const selection=ref([])

  const props = defineProps(['category'])

  onMounted(async()=>{
    if(props.category=="photography"){
      items.value = [{src:'backgrounds/bg.jpg'}]
      console.log("I'm on the photography category")
    }
    if(props.category=="handDrawn"){
      items.value = [{src:'backgrounds/md.jpg'}]
      console.log("I'm on the handDrawn category")
    }
    if(props.category=="favorites"){
      items.value = [{src:'backgrounds/md2.jpg'}]
      console.log("I'm on the favorites category")
    }
  })
</script>