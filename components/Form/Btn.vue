<template>
  <button class="btn" :class="{'no-active': !active}" :disabled="!active">
    <div class="title-wrap">
      <span class="title" :data-name="name">{{ name }}</span>
    </div>
    <img class="icon" src="@/assets/images/btn-arrow.svg" alt="" />
  </button>
</template>

<script setup>
const props = defineProps(["name", "active"]);
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
  border-radius: 2rem;
  padding: 1rem 2rem;
  cursor: pointer;
  .title-wrap {
    overflow: hidden;
  }
  .title {
    color: #fff;
    position: relative;
    transition: transform 0.3s ease;
    display: inline-block;
    @media (max-width: 576px) {
      font-size: 1rem;
    }
  }
  .title:after {
    content: attr(data-name);
    position: absolute;
    top: 100%;
    left: 0;
  }
}

.btn:hover {
  .title {
    transform: translateY(-100%);
  }
}

.btn .icon {
  width: 1.5rem;
  margin-left: 1rem;
}
.btn.no-active {
  background: rgba($color: #000000, $alpha: 0.5);
}
</style>