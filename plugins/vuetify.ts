import { createApp } from 'vue'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myLavaTheme = {
  dark: false,
  colors:{
    primary: '#46FFF8', //red
    secondary: '#ff2828', //red
    primarylava: '#ff2828', //red
    secondarylava: '#FFF846', //yellow
  }
}

const myPastelTheme = {
  dark: false,
  colors:{
    primary: '#e15c4f', //red
    secondary: '#fcffcd', //light
    background: '#FFEFEF',
  }
}

const myGreenYellowTheme = {
  colors:{
    primary: '#70FF70', //green
    secondary: '#FFFF70', //yellow
  }
}

const myBluePinkTheme = {
  dark: false,
  colors:{
    primary: '#AAFFE6', //blue
    secondary: '#FFBBAA', //pink
  }
}

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#e2e8f0',
    surface: '#FFFFFF',
    primary: '#6200EE',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    // custcard: '#e2e8f0'
  },
}

const myPurpleTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFF8F8',
    whitebg: 'ffffff',
    surface: '#FFF3F3',
    'surface-darken-1': '#F0F0F0',
    'surface-normal-1': '#FFECEE',
    primary: '#A683B1',
    'primary-darken-1': '#4C1973',
    secondary: '#bef67a', //ONLY THIS WORKS???
    'secondary-darken-1': '#8bc34a',
    error: '#B00020',
    something: '#c60000',
  },
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'myPurpleTheme',
      variations: {
        colors: ['primary', 'secondary', 'surface',],
        lighten: 3,
        darken: 3,
      },
      themes: {
        myPastelTheme,
        myGreenYellowTheme,
        myBluePinkTheme,
        myLavaTheme,
        myCustomLightTheme,
        myPurpleTheme,
      }
    },
    defaults: {
          VCardtitle: {color:'primary'},
          VCard: {
            color: 'whitebg',
            elevation: '2',
            rounded: '0',
            // VBtn: { variant: 'tile', color:'secondary' }
          },
          // VBtn: { color:'primary-darken-3' },
          VToolbar: { 
            color:'surface',
            VBtn: {color:'primary-darken-2'},
            elevation: '2',
          },
          // VTabs: {
          //   color: 'primary-darken-1', 
          // },
        }
  });

  nuxtApp.vueApp.use(vuetify);
})