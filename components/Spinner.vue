<template>
  <div class="spinner-block">
    <img src="@/assets/images/spinner.gif" alt="" class="spinner" />
  </div>
</template>
<script setup>
</script>
<style lang="scss">
.spinner-block {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 0;
  .spinner {
    width: 60px;
    height: 60px;
  }
}
</style>