
import { acceptHMRUpdate, defineStore, skipHydrate } from 'pinia'
// import { useLocalStorage } from '@vueuse/core'
import { useLocalStorage } from '@vueuse/core'


const defaultData = ref({
  theme:process.env.DEFAULT_THEME,
  userInfo: {
    displayName:'',
    firstName: '',
    lastName: '',
    email:'',
    phone:'',
    uid:'',
    inVault: false,
    // anon:true
  }
  //should we put some campaign id's here?
})
// const user = useCurrentUser()
export const useUserDataStore = defineStore('userData', () => {
  const userData = useLocalStorage("userData", defaultData.value)
  // const userData = await useStorage().setItem('userData',defaultData)
  return { userData: skipHydrate(userData) }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserDataStore, import.meta.hot))
}