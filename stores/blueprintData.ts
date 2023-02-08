import { acceptHMRUpdate, defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useBlueprintDataStore = defineStore('blueprintData', () => {
  const blueprintData = ref(useLocalStorage("blueprintData", [],))
  return {
    blueprintData,
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlueprintDataStore, import.meta.hot))
}