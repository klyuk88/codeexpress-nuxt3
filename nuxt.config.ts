import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/css/styles.scss',
  ],
  build: {
    transpile: ['gsap'],
  },
  buildModules: [
    '@pinia/nuxt',
  ],

})
