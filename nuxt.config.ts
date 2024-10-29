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
                // {rel:'dns-prefetch', href:'https://fonts.gstatic.com'},
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
        ['nuxt-gtag',{
            id: JSON.parse(String(process.env.FIREBASE_CONFIG)).measurementId,
            disabled:process.env.WTFAMI=="DEV"?true:false,
        }],
        // ['nuxt-simple-robots',{disallow: ['/admin','/admin/*','/api/*']}],
        '@nuxtjs/device',
        'vuetify-nuxt-module',
        '@nuxtjs/tailwindcss',
        '@tresjs/nuxt',
        ['nuxt-delay-hydration',{mode:'mount'}],
    ],

    css:[
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
            include:['@tresjs/cientos', '@tresjs/core']
        },
    },
    compatibilityDate: '2024-10-28'
})