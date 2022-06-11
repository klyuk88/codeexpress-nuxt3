<template>
  <div class="main-page" :class="{'dark': store.darkMode}">
    <MainTop />
    <MainAbout />
    <MainServices />
    <MainBenifits />
    <MainTechnologies />
    <MainDesign />
    <MainPortfolio />
    <MainReviews />
    <MainCTA />
  </div>
</template>

<script setup>
import {useStore} from '@/stores/store.js'
const store = useStore()


</script>

<style lang="scss">
.main-page {
  transition: background .4s ease;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    transition: color .4s ease;
  }
}
.main-page.dark {
  background: var(--black);
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: #fff;
  }
  .decor-line {
    background: #fff;
  }
  .portfolio-item .title {
    opacity: 0.5;
  }
}
</style>