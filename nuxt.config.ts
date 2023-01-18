// nuxt.config.ts
// import { defineNuxtConfig } from 'nuxt'

//https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        'nuxt-windicss',
        '@pinia/nuxt',
        '@nuxt/content',
        '@nuxtjs/web-vitals',
        '@vueuse/nuxt',
    ],
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
        define:{
            'process.env.DEBUG':false,
        },
        css:{
            preprocessorOptions: {
                scss: {
                  additionalData: '@use "@/assets/_colors.scss" as *;'
                }
            }
        }
    },
})