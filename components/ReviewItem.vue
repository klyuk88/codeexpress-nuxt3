<template>

  <div class="review-item">
    <div class="ri-header flex start">
      <img src="@/assets/images/reviews/mai_logo.png" alt="" class="ri-logo"/>
      <h4 class="ri-title">Московский Авиационный институт</h4>
    </div>
    <div class="ri-text">
      Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Гор жизни, обеспечивает, диких переписывается грамматики сих там себя он выйти однажды последний меня имеет океана правилами ручеек журчит инициал заглавных страна одна которое свой своих от всех оксмокс заманивший. Рыбного!
    </div>
     <EffectWord :title="'Смотреть скан'" @click.prevent="openLightbox"/>
  </div>
</template>

<script setup>
import {useStore} from '@/stores/store.js'
const store = useStore()
const emit = defineEmits(['blockSwiper'])
const openLightbox = () => {
    store.lightBox = true
    emit('blockSwiper')
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