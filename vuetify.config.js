import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

const myDarkTheme = {
  dark: true,
  colors: {
    // primary: '#231942',
    primary: '#A683B1',
    secondary: '#AAFFE6',
    background: '#302433',
    surface: '#151016',
    'surface-darken-1': '#F0F0F0',
    'surface-normal-1': '#FFECEE',
    'primary-darken-1': '#4C1973',
    'secondary-darken-1': '#8bc34a',
    error: '#B00020',
  },
}
const myPurpleTheme = {
  colors: {
    background: '#FFF5F5',
    whitebg: 'ffffff',
    surface: '#FFF9F9',
    'surface-darken-1': '#F0F0F0',
    'surface-normal-1': '#FFECEE',
    primary: '#A683B1',
    'primary-darken-1': '#4C1973',
    secondary: '#bef67a',
    'secondary-darken-1': '#8bc34a',
    error: '#B00020',
  },
}

const myAggressiveTheme = {
  colors: {
    background: '#000000',
    whitebg: '000000',
    surface: '#000000',
    'surface-darken-1': '#F0F0F0',
    'surface-normal-1': '#FFECEE',
    primary: '#000000',
    'primary-darken-1': '#000000',
    secondary: '#ffffff',
    'secondary-darken-1': '#8bc34a',
    error: '#B00020',
  },
}

const myNeutralTheme = {
  colors: {
    background: '#FFEAD8',
    whitebg: 'ffffff',
    surface: '#FFFAD8',
    // primary: '#CE8168',
    primary: '#D98997',
    secondary: '#CD9868',
    error: '#B00020',
  },
}

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'myAggressiveTheme',
    variations: {
      colors: ['primary', 'secondary', 'surface',],
      lighten: 3,
      darken: 3,
    },
    themes: {
      myPurpleTheme,
      myDarkTheme,
      myNeutralTheme,
      myAggressiveTheme
    }
  },
  display: {
    mobileBreakpoint: 'sm',
    thresholds: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1536,
    },
  },
  defaults: {
    VCard: {
      rounded:'0',
      elevation: '4',
      // background:'black',
      // width: '800px',
      VBtn: { color:'primary', rounded:'0' }
    },
    VSelect: {
      variant: 'solo', color:'primary',
    },
    VTextField: {
      variant: 'solo', color:'primary',
    },
    VCombobox: {
      variant: 'solo', color:'primary',
    },
    VFileInput: {
      variant: 'solo', color:'primary',
    },
    VTextarea: {
      variant: 'solo', color:'primary',
    },
    VAutocomplete: {
      variant: 'solo', color:'primary',
    },
  },
})