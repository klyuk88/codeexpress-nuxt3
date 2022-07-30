import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/css/styles.scss',
  ],
  build: {
    transpile: ['gsap'],
  },
  modules: [
    ['@nuxtjs/axios', {proxyHeaders:false}],
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_API_URL
   }
  }



})
