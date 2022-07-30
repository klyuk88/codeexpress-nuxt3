export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: () => `Hello world`
    }
  }
})