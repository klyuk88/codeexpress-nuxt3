import type { RouterConfig } from '@nuxt/schema'
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // const regexpCategory = /projects\/category/i;
    // const regexpProject = /projects/i;
    // let toCategory = regexpCategory.test(to.path)
    // let fromCategoryToProjects = regexpCategory.test(from.path)
    // let toProjects = regexpProject.test(to.path)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 300)
    })
  },
}