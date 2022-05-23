<template>
  <nuxt-link to="/">
    <button class="btn">
      <span>{{ name }}</span>
      <img src="@/assets/images/btn-arrow.svg" alt="" />
    </button>
  </nuxt-link>
</template>

<script setup>
const props = defineProps(["name"]);
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-transform: uppercase;
  background: var(--accent);
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  cursor: pointer;
  span {
    color: #fff;
  }
}

.btn img {
  width: 1.5rem;
  margin-left: 1rem;
}
</style>