import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


//YELLOW AND GREEN
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#fbfbd0',
    dimsurface: '#fff9c4',
    primary: '#cbc693',
    'primary-darken-1': '#bef67a',
    secondary: '#8bc34a',
    'secondary-darken-1': '#5a9216',
    button: '#ffc266',
    textfield: '#fdfde8',
  },
}

//ORIGINAL
// const myCustomLightTheme = {
//   dark: false,
//   colors: {
//     background: '#FFFFFF',
//     surface: '#cbd5e1',
//     primary: '#6200EE',
//     'primary-darken-1': '#3700B3',
//     secondary: '#03DAC6',
//     'secondary-darken-1': '#018786',
//     error: '#B00020',
//     info: '#2196F3',
//     success: '#4CAF50',
//     warning: '#FB8C00',
//     custcard: '#e2e8f0'
//   },
// }

const myCustomDarkTheme = {
  dark: true,
  colors:{
    background: '#505050',
    surface: '#151515',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    custcard: '#252525',
  }
}

//Pink to Purple: #FEDBD0, #D9B8B0, #B4958F, #8E726F, #694F4E, #442C2E

//PINK AND PURPLE
// const myCustomLightTheme = {
//   dark: false,
//   colors: {
//     background: '#FEDBD0',
//     surface: '#D9B8B0',
//     primary: '#B4958F',
//     'primary-darken-1': '8E726F',
//     secondary: '#694F4E',
//     'secondary-darken-1': '#442C2E',
//   },
// }



export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
        myCustomDarkTheme,
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})