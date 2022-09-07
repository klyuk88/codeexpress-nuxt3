import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: '',
      meta: [
        {
          name: 'description',
          content: 'CodeExpress - разаботка сайтов и приложений'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  css: [
    '@/assets/css/styles.scss',
  ],
  build: {
    transpile: ['gsap'],
  },
  modules: [],
  runtimeConfig: {
    public: {
      apiURL: process.env.NUXT_API_URL
   }
  },
  nitro: {
    preset: 'node-server'
  }

})
