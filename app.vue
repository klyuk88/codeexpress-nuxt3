<template>
  <div id="app">
    <TheHeader />
    <NuxtPage />
    <TheFooter />
    <Navigation />
  </div>
</template>

<script setup>
useHead({
    titleTemplate: (titleChunk) => {
      if(titleChunk) {
        return `CodeExpress - ${titleChunk}`
      } else {
        return 'CodeExpress - разработка сайтов и приложений'
      }
    },
    
  })


</script>