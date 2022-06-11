import {useStore} from '@/stores/store.js'
export default defineNuxtRouteMiddleware((to, from) => {
  const store = useStore()
  if(store.showNav) {
    store.showNav = false
  }
  
})