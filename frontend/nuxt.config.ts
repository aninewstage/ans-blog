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
                { src: '/js/jquery.js', body: true },
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
                httpEndpoint: 'http://localhost:4000/graphql'
            },
        },
    },
})