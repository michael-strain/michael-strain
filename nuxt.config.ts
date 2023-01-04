// nuxt.config.ts
// import { defineNuxtConfig } from 'nuxt'

//https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules:[
        'nuxt-windicss',
        '@pinia/nuxt',
        '@nuxt/content',
    ],
    css:[
        // '~/assets/css/tailwind.css',
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
        '~/assets/fonts/Nabla/Nabla.css',
        '~/assets/fonts/Raleway/Raleway.css',
        '~/assets/fonts/Roboto_Slab/Roboto_Slab.css'
    ],
    build:{
        transpile:['vuetify'],
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
    // postcss: {
    //     plugins: {
    //         // tailwindcss: {},
    //         autoprefixer: {},
    //     },
    // },
})