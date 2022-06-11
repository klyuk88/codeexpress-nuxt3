<template>
  <label for="" class="form-label">{{title}}</label>
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>

<style lang="scss">
.form-label {
  display: block;
  font-size: 1.2rem;
  font-weight: 700;
}
</style>