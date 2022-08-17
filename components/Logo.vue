<template>
  <div class="logo-block" :class="type">
    <span class="logo-item">CodeExpress</span>
  </div>
</template>
<script setup>
const props = defineProps({
  type: String
})
</script>
<style lang="scss">
.logo-block {
  padding: 0.5rem;
  background: #000;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  .logo-item {
    font-size: 1.2rem;
    color: #fff;
    font-weight: 600;
  }
}
.logo-block.white {
  background: #fff;
  .logo-item {
    color: #000;
  }
}
</style>