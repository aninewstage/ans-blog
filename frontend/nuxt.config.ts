export default defineNuxtConfig({
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: [
                '/',
            ]
        }
    },
    imports: {
        dirs: ['./stores'],
    },
    app: {
        head: {
            bodyAttrs: {
                class: 'home-8 has-block-heading-line-around has-site-header-8'
            },
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { "http-equiv": 'Content-Security-Policy', content: 'upgrade-insecure-requests' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: 'https://aninewstage.org/images/favicon/favicon.ico' },
                // <link rel="stylesheet" href="https://myawesome-lib.css">
                { rel: 'stylesheet', href: '/css/vendors.css' },
                { rel: 'stylesheet', href: '/css/style.css' },
            ],
            script: [
                // <script src="https://myawesome-lib.js"></script>
                { src: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js', async: true },
                { src: 'https://kit.fontawesome.com/2f51628552.js', crossorigin: "anonymous" },
                { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js', body: true },
                { src: '/js/vendors.js', body: true },
                { src: '/js/scripts.js', body: true },


            ],
            noscript: [
                // <noscript>Javascript is required</noscript>
                { children: 'Javascript is required' }
            ]
        }
    },
    modules: ['@nuxtjs/apollo', '@pinia/nuxt', 'nuxt-simple-sitemap'],

    pinia: {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
    },

    sitemap: {
        hostname: 'https://blogs.aninewstage.org',
    },
    apollo: {
        autoImports: true,
        clients: {
            default: {
                connectToDevTools: true,
                httpEndpoint: 'https://graphql.aninewstage.org/graphql'
            },
        },
    },
})