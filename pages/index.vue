<template>
  <div class="main-page" :class="{ dark: store.darkMode }">
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
import { useStore } from '@/stores/store.js';
const store = useStore();
</script>

<style lang="scss">
.main-page {
  overflow-x: hidden;
  transition: background 0.4s ease;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    transition: color 0.4s ease;
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
}
</style>
