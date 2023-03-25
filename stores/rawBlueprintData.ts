import { acceptHMRUpdate, defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useRawBlueprintDataStore = defineStore('rawBlueprintData', () => {
  const rawBlueprintData = useLocalStorage("rawBlueprintData", [])
  return { rawBlueprintData: skipHydrate(rawBlueprintData) }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useRawBlueprintDataStore, import.meta.hot))
}