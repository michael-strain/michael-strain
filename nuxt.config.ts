// // nuxt.config.ts
// import { defineNuxtConfig } from 'nuxt'
import WindiCSS from 'vite-plugin-windicss'

export default defineNuxtConfig({
    runtimeConfig: {
        FIREBASE_API_KEY: 'AIzaSyDv2dJDwn9QNmkNiqB-INMD9EklS-B-Lfk',
    },
    modules:[
        'nuxt-windicss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@nuxt/content',
        '@nuxtjs/web-vitals',
        '@vueuse/nuxt',
        // TODO - Activate and integrate with Algolia
        // ['@nuxtjs/algolia',{
        //     apiKey: process.env.ALGOLIA_API_KEY,
        //     applicationId: process.env.ALGOLIA_APP_ID
        // }]
    ],
    piniaPersistedstate:{
        cookieOptions: {
            sameSite: 'strict',
        },
        storage: 'localStorage'
    },
    css:[
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
        '~/assets/fonts/Raleway/Raleway.css',
        '~/assets/fonts/Roboto_Slab/Roboto_Slab.css'
    ],
    build:{
        transpile:['vuetify'],
    },
    // routes:{
    //     '/':{ prerender: true },
    //     '/*':{ cors: true },
    // },
    webVitals: {
        // provider: '', // auto detectd
        debug: true,
        disabled: true,
        // ga: { id: 'UA-XXXXXXXXX-X' }
    },
    vite:{
        // define:{
        //     'process.env.DEBUG':true,
        // },
        // plugins:[
        //     WindiCSS() //not sure this should exist
        // ]
        // css:{
        //     preprocessorOptions: {
        //         scss: {
        //           additionalData: '@use "@/assets/_colors.scss" as *;'
        //         }
        //     }
        // }
    },
})