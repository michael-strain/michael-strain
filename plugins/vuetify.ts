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
    primary: '#e15c4f', //dark
    secondary: '#fcffcd', //light
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

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'myPastelTheme',
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 1,
        darken: 2,
      },
      themes: {
        myPastelTheme,
        myGreenYellowTheme,
        myBluePinkTheme,
        myLavaTheme,
      }
    }
  });

  nuxtApp.vueApp.use(vuetify);
})

// export default createVuetify({
//   theme: {
//     defaultTheme: 'myPastelTheme',
//     variations: {
//       colors: ['primary', 'secondary'],
//       lighten: 1,
//       darken: 2,
//     },
//     themes: {
//       myPastelTheme,
//       myGreenYellowTheme,
//       myBluePinkTheme,
//     }
//   }
// })

//ORG EXPORT
// export default defineNuxtPlugin(nuxtApp => {
//   const vuetify = createVuetify({
//     components,
//     directives,
//     theme: {
//       defaultTheme: 'myCustomLightTheme',
//       themes: {
//         myCustomLightTheme,
//         myCustomDarkTheme,
//         myTestTheme,
//       },
//     }
//   });

//   nuxtApp.vueApp.use(vuetify);
// })

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
// const myCustomLightTheme: ThemeDefinition = {
//   dark: false,
//   colors: {
//     background: '#FFFFFF',
//     surface: '#FFECEE',
//     'surface-darken-1': '#F0F0F0',
//     'surface-normal-1': '#FFECEE',
//     primary: '#A683B1',
//     'primary-darken-1': '#4C1973',
//     secondary: '#bef67a', //ONLY THIS WORKS???
//     'secondary-darken-1': '#8bc34a',
//     error: '#FB8C00',
//     something: '#c60000',
//   },
// }

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

// const myCustomDarkTheme = {
//   dark: true,
//   colors:{
    // background: '#505050',
    // surface: '#151515',
    // primary: '#70FF70',
    // 'primary-darken-1': '#3700B3',
    // secondary: '#03DAC6',
    // 'secondary-darken-1': '#018786',
    // error: '#B00020',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
    // custcard: '#252525',
//   }
// }
