import { defineStore } from 'pinia'

export const useStore = defineStore('mainStore', {
  state: () => {
    return {
      showNav: false,
      darkMode: false
    }
  },
})