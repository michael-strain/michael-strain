import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// createVuetify({
//   defaults: {
//     VCard: {
//       color: 'button',
//       VBtn: { variant: 'flat', color:'blue' }
//     },
//     VBtn: { variant: 'flat', color:'red' }
//   }
// })

//Purple theme
const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFECEE',
    'surface-darken-1': '#F0F0F0',
    'surface-normal-1': '#FFECEE',
    primary: '#A683B1',
    'primary-darken-1': '#4C1973',
    secondary: '#bef67a', //ONLY THIS WORKS???
    'secondary-darken-1': '#8bc34a',
    error: '#FB8C00',
    something: '#c60000',
    // bgimage: 'https://thumbs.dreamstime.com/b/white-gray-marble-texture-background-detail-structure-high-resolution-abstract-luxurious-seamless-tile-stone-floor-white-134268077.jpg',

  },
  // variables: {
  //   bgimage: 'https://thumbs.dreamstime.com/b/white-gray-marble-texture-background-detail-structure-high-resolution-abstract-luxurious-seamless-tile-stone-floor-white-134268077.jpg',
  // }
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

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomLightTheme',
      themes: {
        myCustomLightTheme,
        myCustomDarkTheme,
      },
    }
  });

  // Found this labeled as primary in an scss/sass file somewhere
  // #cbd5e1

  nuxtApp.vueApp.use(vuetify);
})