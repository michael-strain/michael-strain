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
        SITE_DOMAIN: process.env.SITE_DOMAIN,
        public:{
            // STRIPE_PUBLIC_KEY: process.env.NODE_ENV==="development" ? "pk_test_Ks0hhsz15BuwjmJ50MBRqKOk" : process.env.STRIPE_PUBLIC_KEY,
            WTFAMI: process.env.NODE_ENV==="development" ? "DEV" : process.env.WTFAMI,
        },
        private:{
            // STRIPE_SECRET_KEY: process.env.NODE_ENV==="development" ? "sk_test_TWFt8bOX2Lj37qnSZJXL8a73" : process.env.STRIPE_SECRET_KEY
        }

    },
    modules:[
        ['nuxt-gtag',{
            id: 'G-T92C2EE8PR',
            disabled:process.env.NODE_ENV=="development"?true:false
        }],
        'nuxt-windicss',
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
        ['nuxt-simple-robots',{disallow: ['/admin','/admin/*','/api/*']}],
        ['nuxt-delay-hydration',{debug:process.env.NODE_ENV==='development',mode:'mount'}], //mount or init seem like the right options to test
        '@nuxtjs/device',
        'vuetify-nuxt-module',
    ],

    css:[
        '~/assets/fonts/Raleway/Raleway.css',
        '~/assets/fonts/Roboto_Slab/Roboto_Slab.css',
    ],
    routeRules:{
        //Need to change this to make the whole site SSG
        '/':{
            prerender: true,
            swr: 120,
            cache: {
                staleMaxAge: 120
            }
        },
    },
    sourcemap: {
        server: true,
        client: true
    }
})