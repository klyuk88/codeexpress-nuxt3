<template>
  <div class="link-wrap">
    <div :data-word="title" class="link effect-link" >
      {{title}}
    </div>
  </div>
</template>
<script setup>
const prop = defineProps(['title'])
</script>
<style lang="scss">
.link-wrap {
  display: inline-block;
  overflow: hidden;
}

.link.effect-link {
  position: relative;
  display: inline-block;
  transition: transform 0.3s ease;
}
.link.effect-link:after {
  content: attr(data-word);
  position: absolute;
  top: 100%;
  left: 0;
  text-align: left;
  white-space: nowrap;
}
.link-wrap:hover {
  .link.effect-link {
    transform: translateY(-100%);
  }
}
</style>