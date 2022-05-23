<template>
  <section class="call-to-action">
    <div class="container">
      <div class="row">
        <div class="col-3">
          <h2 class="section-title">
            Рассчитайте<br>стоимость<br>проекта за<br><span>пару минут</span>
            <p class="cta-offer">
              При заказе проекта <b>SEO оптимизация</b> в подарок
            </p>
            <FormBtn :name="'Заполнить бриф'"/>
          </h2>
        </div>
        <div class="col-3">
          <div class="cta-brif-demo-wrap">
            <img src="@/assets/images/cta-demo.jpg" alt="" class="brif-demo-content">
          </div>
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
    .brif-demo-content {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      border: 0.8rem solid #000;
      border-radius: 1.2rem;
    }
  }
}

</style>