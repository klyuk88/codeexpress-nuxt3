<template>
  <div class="compare-images" @mousedown="moveHandle">
    <div class="wrapper" :style="{width: posX}">
      <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612678074_74-p-kartinka-fon-zelenii-lug-125.jpg" alt="" class="after-img">
    </div>
    <img src="https://w-dog.ru/wallpapers/9/17/442003934929824/ssha-shtat-vajoming-nacionalnyj-park-grand-titon-grand-teton-nacionalnyj-park-doroga-v-nebo.jpg" alt="" class="before-img">
    <div class="handle" :style="{left: posX}" ref="handle"></div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const posX = ref('50%')
const handle = ref(null)
const moveHandle = (event) => {
  console.log(event.offsetX);
}

</script>
<style lang="scss" scoped>
  .compare-images {
    width: 100%;
    position: relative;
    .wrapper {
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      width: 500px;
    }
    img {
      width: 90rem;
      height: auto;
    }
    .handle {
      position: absolute;
      top: 50%;
      transform: translateY(-100%) translateX(-50%);
      width: 5rem;
      height: 5rem;
      background: var(--black);
      border-radius: 50%;
      cursor: pointer;
    }
  }
</style>



