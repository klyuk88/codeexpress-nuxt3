<template>
  <section id="reviews">
    <div class="container">
      <div class="reviews-grid">
        <div class="col-3">
          <h2 class="section-title">
            <span>Отзывы</span><br />о нашей<br />работе
          </h2>
        </div>
        <div class="col-3">
          <Swiper
            :modules="[Autoplay]"
            :slides-per-view="1"
            :space-between="50"
            :loop="true"
            :pauseOnMouseEnter="true"
            @swiper="onSwiper"
            :autoplay="{
              delay: 5000,
            }"
          >
            <SwiperSlide v-for="(item, idx) in 5" :key="idx">
              <ReviewItem @blockSwiper="blockSwiper"/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="decor-line"></div>
    </div>
  </section>
  <ReviewLightBox v-if="store.lightBox" @playSwiper="playSwiper"/>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import { useStore } from "@/stores/store.js";
import "swiper/css";
import "swiper/css/autoplay";

const store = useStore();
const slider = ref(null)
const onSwiper = (swiper) => {
  slider.value = swiper
};

const blockSwiper = () => {
  slider.value.autoplay.stop()
}

const playSwiper = () => {
  slider.value.autoplay.start()
}


</script>

<style lang="scss">
#reviews {
  padding-top: var(--section-top);
  .decor-line {
    margin-top: var(--section-bottom);
  }
  .reviews-grid {
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    gap: 20px;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
    }
  }
}
</style>