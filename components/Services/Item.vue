<template>
<nuxt-link to="/services/development" class="services-item-link">
  <div class="service-item">
      <h3 class="service-item-title">Разработка сайта под ключ</h3>
    <p class="service-item-about">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. At luctus proin velit etiam vel. Orci libero mauris proin viverra amet. Quisque mi arcu, feugiat justo adipiscing non neque. Fermentum consequat, morbi cras tellus dictum egestas.
    </p>
    <EffectWord :title="'подробнее'"/>
    <div class="line"></div>
  </div>
</nuxt-link>

</template>
<script setup>
</script>
<style lang="scss">
.services-item-link {
  color: var(--black);
}
.services-item-link:hover {
  .service-item-title, .service-item-about {
    color: var(--accent);
  }
}
.service-item {
  .service-item-title {
    font-size: 2.3rem;
    text-transform: uppercase;
    transition: color .1s ease;
    @media (max-width: 576px) {
      font-size: 1.5rem;
    }
  }

  .service-item-about {
    margin: 2rem 0 2rem 0;
    transition: color .1s ease;
    @media (max-width: 576px) {
      margin: 1rem 0 1rem 0;
    }
  }
  .line {
    width: 100%;
    height: 2px;
    background: rgba($color: #000000, $alpha: 0.5);
    margin-top: 2rem;
  }
}
  
</style>