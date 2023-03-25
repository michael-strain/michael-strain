import { acceptHMRUpdate, defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useBlueprintDataStore = defineStore('blueprintData', () => {
  const blueprintData = useLocalStorage("blueprintData", [])
  return { blueprintData: skipHydrate(blueprintData) }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlueprintDataStore, import.meta.hot))
}