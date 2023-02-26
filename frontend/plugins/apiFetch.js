import { defineNuxtPlugin } from "#app"
import Cookies from 'js-cookie'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    nuxtApp.provide('apiFetch', $fetch.create({
        baseURL: config.public.GRAPHQL_URL, credentials: 'include', method: 'POST', headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN')
        }
    }))
})