<template>
  <small class="small">{{ msg }}</small>
</template>
<script setup>
const props = defineProps({
  msg: String,
});
</script>
<style lang="scss">
.small {
  color: rgba(0, 0, 0, 0.2);
  font-size: 0.8rem;
  margin-top: 0.3rem;
  display: block;
}
</style>