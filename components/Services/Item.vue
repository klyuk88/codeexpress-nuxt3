<template>
<nuxt-link :to="`/services/${slug}?id=${id}`" class="services-item-link">
  <div class="service-item">
      <h3 class="service-item-title">{{title}}</h3>
    <p class="service-item-about">
      {{subtitle}}
    </p>
    <EffectWord :title="'подробнее'"/>
    <div class="line"></div>
  </div>
</nuxt-link>

</template>
<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  slug: String,
  id: Number
})
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