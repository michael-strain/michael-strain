// // nuxt.config.ts
// import { defineNuxtConfig } from 'nuxt'
// import WindiCSS from 'vite-plugin-windicss'

export default defineNuxtConfig({
    runtimeConfig: {
        FIREBASE_API_KEY: 'AIzaSyDv2dJDwn9QNmkNiqB-INMD9EklS-B-Lfk',
        PRINTIFY_API_KEY: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImE2MGI5ZWEyYzRhODliM2VmYWIzNThhNWIyOTE3ZDc5MDNiYjM2NDdmZjIzYTM5NWM4YjM3OGViYzZjMWIwOTNlOTdiOGYxZGM3YWZhZTg3IiwiaWF0IjoxNjczMDUyOTAzLjQ3NTY0MiwibmJmIjoxNjczMDUyOTAzLjQ3NTY0NSwiZXhwIjoxNzA0NTg4OTAzLjQ0ODc0NCwic3ViIjoiMTEzMDIzOTkiLCJzY29wZXMiOlsic2hvcHMubWFuYWdlIiwic2hvcHMucmVhZCIsImNhdGFsb2cucmVhZCIsIm9yZGVycy5yZWFkIiwib3JkZXJzLndyaXRlIiwicHJvZHVjdHMucmVhZCIsInByb2R1Y3RzLndyaXRlIiwid2ViaG9va3MucmVhZCIsIndlYmhvb2tzLndyaXRlIiwidXBsb2Fkcy5yZWFkIiwidXBsb2Fkcy53cml0ZSIsInByaW50X3Byb3ZpZGVycy5yZWFkIl19.AH6QPYSJpX5z7YyO8dW5nTpS_CrorLN3gJDJ_k8v58waX1cBIkQCD5qTPE8hLLFFDr61lNgvUPpcCDXd0-Q',
    },
    modules:[
        'nuxt-windicss',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        // '@nuxt/content',
        '@nuxtjs/web-vitals',
        '@vueuse/nuxt',
        // TODO - Activate and integrate with Algolia
        // ['@nuxtjs/algolia',{
        //     apiKey: process.env.ALGOLIA_API_KEY,
        //     applicationId: process.env.ALGOLIA_APP_ID
        // }]
    ],
    // piniaPersistedstate:{
    //     cookieOptions: {
    //         sameSite: 'strict',
    //     },
    //     storage: 'localStorage'
    // },
    css:[
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
        '~/assets/fonts/Raleway/Raleway.css',
        '~/assets/fonts/Roboto_Slab/Roboto_Slab.css',
        '~/assets/global.scss'

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
        ga: { id: 'G-XT0ME3PLNS' }
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