import type { RouterConfig } from '@nuxt/schema'
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 300)
    })
  },
}