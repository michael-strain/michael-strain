import { acceptHMRUpdate, defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { ref } from 'vue'

export const useRawBlueprintDataStore = defineStore('rawBlueprintData', () => {
  const rawBlueprintData = ref(useLocalStorage("rawBlueprintData", []))
  return {
    rawBlueprintData,
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRawBlueprintDataStore, import.meta.hot))
}