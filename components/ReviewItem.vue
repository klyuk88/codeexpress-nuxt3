<template>

  <div class="review-item">
    <div class="test"></div>
    <div class="ri-header flex start">
      <img :src="apiURL + logo" alt="" class="ri-logo"/>
      <h4 class="ri-title">{{company}}</h4>
    </div>
    <div class="ri-text">
      {{review}}
    </div>
     <EffectWord :title="'Смотреть скан'" @click.prevent="openLightbox"/>
  </div>

</template>

<script setup>
import {useStore} from '@/stores/store.js'
import {apiURL} from '@/composables/useEnv.js'
const store = useStore()
const emit = defineEmits(['blockSwiper','setImage'])
const props = defineProps({
  company: String,
  review: String,
  logo: String,
  scan: String

})
const openLightbox = () => {
    store.lightBox = true
    emit('blockSwiper')
    emit('setImage', apiURL + props.scan)
}
</script>

<style lang="scss">

.review-item {
  .ri-header {
    padding: 2rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5)
  }
  .ri-logo {
    height: auto;
    width: 3.5rem;
    margin-right: 1.5rem;
  }
  .ri-title {
    font-size: 1.5rem;
    font-family: 'Raleway';
    font-weight: 700;
    text-transform: uppercase;
    width: 30%;
    line-height: 1.3;
  }
  .ri-text {
    margin-top: 2rem;
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
}
.main-page.dark .review-item {
  .ri-header {
    border-color: rgba(255, 255, 255, 0.5)
  }
  .ri-text {
    color: #fff;
    opacity: 0.5;
  }
}
</style>