<template>
  <section id="reviews">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <h2 class="section-title">
            <span>Отзывы</span><br />о нашей<br />работе
          </h2>
        </div>
        <div class="col-3">
          <Swiper :slides-per-view="1" :space-between="50" @swiper="onSwiper">
            <SwiperSlide>
              <ReviewItem/>
            </SwiperSlide>
            <SwiperSlide>
              <ReviewItem/>
            </SwiperSlide>
            <SwiperSlide>
              <ReviewItem/>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div class="decor-line"></div>
    </div>
    
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
</script>

<style lang="scss">
#reviews {
  padding-top: var(--section-top);
  .decor-line {
    margin-top: var(--section-bottom);
  }
}
</style>