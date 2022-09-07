<template>
  <div class="loader-wrap">
  </div>
</template>
<script setup>
import { ref } from 'vue'
</script>
<style lang="scss">
  .loader-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
    background: var(--black);
    z-index: 300;
    top: 0;
    left: 0;
  }
</style>