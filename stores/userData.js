
import { acceptHMRUpdate, defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'


const defaultData = ref({
  theme:'cupcake',
  userInfo: {
    displayName:'',
    firstName: '',
    lastName: '',
    email:'',
    phone:'',
    uid:'',
    anon:true
  },
})
export const useUserDataStore = defineStore('userData', () => {
  const userData = useLocalStorage("userData", defaultData.value)
  // const userData = await useStorage().setItem('userData',defaultData)
  return { userData: skipHydrate(userData) }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserDataStore, import.meta.hot))
}