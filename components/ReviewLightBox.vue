<template>
  <div class="review-lightbox" ref="lightboxWrap">
    <div class="image-block">
      <img src="@/assets/images/reviews/mangata.jpg" alt="" class="image">
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import {useStore} from '@/stores/store.js'
const store = useStore()
const emit = defineEmits(['playSwiper'])
const lightboxWrap = ref(null)
if(process.client) {
  document.addEventListener('click', (e) => {
    if(e.target === lightboxWrap.value) {
      store.lightBox = false
      emit('playSwiper')
    }
  })
}
</script>
<style lang="scss">
  .review-lightbox {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba($color: #000000, $alpha: 0.1);
    z-index: 99;
    backdrop-filter: blur(20px);
    .image-block {
      .image {
        max-width: 37rem;
        max-height: 90vh;
      }
    }
  }
</style>