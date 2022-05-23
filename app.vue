<template>
    <div>
        <TheHeader/>
        <NuxtPage/>
        <TheFooter/>
    </div>
</template>

<script setup>
 const nuxtApp = useNuxtApp()
  nuxtApp.hook("page:finish", () => {
     window.scrollTo(0, 0)
  })
</script>