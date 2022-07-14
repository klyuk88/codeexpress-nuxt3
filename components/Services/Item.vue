<template>
  <div class="service-item">
    <nuxt-link to="/services/development" class="service-item-link">
      <h3 class="service-item-title">Разработка сайта под ключ</h3>
    </nuxt-link>
    <p class="service-item-about">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At luctus proin velit etiam vel. Orci libero mauris proin viverra amet. Quisque mi arcu, feugiat justo adipiscing non neque. Fermentum consequat, morbi cras tellus dictum egestas.
    </p>
    <nuxt-link to="/services/development">
    <EffectWord :title="'подробнее'"/>
    </nuxt-link>
    <div class="line"></div>
  </div>
</template>
<script setup>
</script>
<style lang="scss">
.service-item {
  .service-item-title {
    font-size: 2.3rem;
    text-transform: uppercase;
    transition: color .1s ease;
  }

  .service-item-title:hover {
    color: var(--accent);
  }

  .service-item-about {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .line {
    width: 100%;
    height: 2px;
    background: rgba($color: #000000, $alpha: 0.5);
    margin-top: 2rem;
  }
}
  
</style>