<template>
  <div class="stage-item">
    <h4 class="stage-item-title">
      <span>{{`0${number + 1}`}}</span>
      {{title}}
    </h4>
    <p class="stage-item-about">
     {{about}}
    </p>
    <div class="stage-item-line"></div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: String,
  about: String,
  number: Number
})
</script>
<style lang="scss">
.stage-item { 
  .stage-item-title {
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #fff;
    span {
      color: var(--accent);
      margin-right: 1rem;
    }
  }
  .stage-item-about {
    margin-top: 1rem;
    width: 80%;
    color: #fff;
  }
  .stage-item-line {
    width: 100%;
    height: 2px;
    margin-top: 4rem;
    background: rgba($color: #fff, $alpha: 0.3);
  }
}
  
</style>