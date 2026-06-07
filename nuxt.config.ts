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
                {rel:'preconnect', href:'https://apis.google.com', crossorigin:''}
            ]
        }
    },

    devtools:{enabled:true},

    runtimeConfig: {
        BREVO_KEY: process.env.BREVO_KEY,
        public:{
            WTFAMI: process.env.NODE_ENV==="development" ? "DEV" : process.env.WTFAMI,
            SITE_DOMAIN: process.env.SITE_DOMAIN,
            SHOP_NAME: "MichaelStrain",
            DEFAULT_THEME: "cyberpunk"
        },
    },

    modules:[// ['nuxt-simple-robots',{disallow: ['/admin','/admin/*','/api/*']}],
    ['nuxt-gtag',{
        id: JSON.parse(String(process.env.FIREBASE_CONFIG)).measurementId,
        disabled:process.env.WTFAMI=="DEV"?true:false,
    }], ['nuxt-vuefire',{
        auth: {
            enabled: true,
            sessionCookie: true
        },
        config: JSON.parse(String(process.env.FIREBASE_CONFIG)),
    }], '@nuxtjs/device', 'vuetify-nuxt-module', '@nuxtjs/tailwindcss', '@tresjs/nuxt', ['nuxt-delay-hydration',{mode:'mount'}], '@pinia/nuxt', 'nuxt-tiptap-editor'],

    css:[
        '~/assets/css/main.css'
    ],
    tiptap: {
        prefix: 'Tiptap', //prefix for Tiptap imports, composables not included
    },

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
        // optimizeDeps:{
        //     include:['@tresjs/cientos', '@tresjs/core']
        // },
    },
    compatibilityDate: '2024-10-28'
})