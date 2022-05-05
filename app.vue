<template>
    <div>
        <NuxtPage/>
    </div>
</template>

<script setup>
 const nuxtApp = useNuxtApp()
  nuxtApp.hook("page:finish", () => {
     window.scrollTo(0, 0)
  })
</script>