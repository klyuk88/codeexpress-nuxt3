<template>
  <section class="call-to-action">
    <div class="container">
      <div class="cta-grid">
        <div class="col-3">
          <h2 class="section-title">
            Рассчитайте<br>стоимость<br>проекта за<br><span>пару минут</span>
            <p class="cta-offer">
              При заказе проекта <b>SEO оптимизация</b> в подарок
            </p>
            <nuxt-link to="/brif">
            <FormBtn :name="'Заполнить бриф'"/>
            </nuxt-link>
            
          </h2>
        </div>
        <div class="col-3">
          <nuxt-link to="/brif">
            <div class="cta-brif-demo-wrap">
            <video src="@/assets/video/brif.mp4" autoplay loop muted playsinline preload="metatada" class="brif-demo-content"></video>
            <!-- <img src="@/assets/images/cta-demo.jpg" alt="" class="brif-demo-content"> -->
          </div>
          </nuxt-link>
         
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss">
.call-to-action {
  padding-top: var(--section-top);
  overflow: hidden;
  .cta-offer {
    margin: 1rem 0;
    width: 50%;
  }
  .cta-brif-demo-wrap {
    position: relative;
    width: 40rem;
    height: 35rem;
    border-radius: 1.2rem;
    transform: translateY(3%);
    @media (max-width: 576px) {
      width: 100%;
      height: 18rem;
      transform: translateY(5%);
    }
    .brif-demo-content {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      border: 0.8rem solid #000;
      border-radius: 1.2rem;
      @media (max-width: 576px) {
        border-width: 0.6rem;
      }
    }
  }
  .cta-grid {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 20px;
    width: 100%;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
    }
  }
}

</style>