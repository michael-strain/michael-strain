import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  nitro:{
      preset:'firebase',
      firebase:{
          nodeVersion: '20',
          gen:2,
          httpsOptions:{
              region: 'us-central1'
          }
      },
      compressPublicAssets: true,
  },
  postcss:{
      plugins:{
          tailwindcss:{},
          autoprefixer:{},
      }
  },

  app:{
      head:{
          charset:'utf-8',
          viewport:'width=device-width, initial-scale=1',
          link: [
              {rel:'preconnect', href:'https://googletagmanager.com', crossorigin:''}, //gtag
              {rel:'dns-prefetch', href:'https://fonts.gstatic.com'},
              // {rel:'dns-prefetch', href:'https://m.stripe.network'},
          ]
      }
  },

  devtools:{enabled:false},

  runtimeConfig: {
      GOOGLE_APPLICATION_CREDENTIALS:process.env.GOOGLE_APPLICATION_CREDENTIALS,
      STRIPE_SECRET_KEY: process.env.NODE_ENV==="development" ? "sk_test_TWFt8bOX2Lj37qnSZJXL8a73" : process.env.STRIPE_SECRET_KEY,
      BREVO_KEY: process.env.BREVO_KEY,
      public:{
          STRIPE_PUBLIC_KEY: process.env.NODE_ENV==="development" ? "pk_test_Ks0hhsz15BuwjmJ50MBRqKOk" : process.env.STRIPE_PUBLIC_KEY,
          WTFAMI: process.env.NODE_ENV==="development" ? "DEV" : process.env.WTFAMI,
          SITE_DOMAIN: process.env.SITE_DOMAIN,
          SHOP_NAME: "MichaelStrain"
      },
  },

  modules:[
      //We don't need vuefire/firestore/auth for this site...
      ['nuxt-vuefire',{
          auth: {
              enabled: true,
              // sessionCookie: true
          },
          // appCheck: {
          //     debug: process.env.NODE_ENV !== 'production',
          //     isTokenAutoRefreshEnabled: true,
          //     provider: 'ReCaptchaV3',
          //     // Find the instructions in the Firebase documentation, link above
          //     key: '6LedeDgpAAAAAKvcjuEuaZzbUikw5j6XyiQemNYz'
          // },
          config: JSON.parse(String(process.env.FIREBASE_CONFIG)),
      }],
      //Don't have the id just yet
      // ['nuxt-gtag',{
      //     id: '',
      //     disabled:process.env.NODE_ENV=="development"?true:false
      // }],
      // 'nuxt-windicss',
      // ['@unlok-co/nuxt-stripe',{
      //     server:{
      //         key:process.env.STRIPE_SECRET_KEY,
      //         options:{
      //             apiVersion:'2023-10-16',
      //         }
      //     },
      //     client:{
      //         key:process.env.STRIPE_PUBLIC_KEY,
      //         options:{}
      //     }
      // }],
      ['nuxt-gtag',{
          id: JSON.parse(String(process.env.FIREBASE_CONFIG)).measurementId,
          disabled:process.env.WTFAMI=="DEV"?true:false,
      }],
      // ['nuxt-simple-robots',{disallow: ['/admin','/admin/*','/api/*']}],
      '@nuxtjs/device',
      'vuetify-nuxt-module',
      '@nuxtjs/tailwindcss',
      '@tresjs/nuxt'
  ],

  css:[
      '~/assets/fonts/Raleway/Raleway.css',
      '~/assets/fonts/Roboto_Slab/Roboto_Slab.css',
      '~/assets/css/main.css'
  ],

  // routeRules:{
  //     //Need to change this to make the whole site SSG
  //     '/':{
  //         prerender: true,
  //         swr: 120,
  //         cache: {
  //             staleMaxAge: 120
  //         }
  //     },
  // },
  sourcemap: {
      server: true,
      client: true
  },

  vite:{
      build:{
          sourcemap:true,
          manifest:true,
      },
      optimizeDeps:{
          include:['lodash-es','@stripe/stripe-js','@tresjs/cientos', '@tresjs/core']
      },
  },

  compatibilityDate: '2024-08-23'
})