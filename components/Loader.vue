<template>
  <div class="loader-wrap" v-if="store.loading">
  </div>
</template>
<script setup>
import { ref } from 'vue'
import {useStore} from '@/stores/store.js'
const store = useStore()
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