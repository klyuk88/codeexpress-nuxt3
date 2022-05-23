<template>
  <section id="portfolio" class="upper-indent lower-indent">
    <div class="container">
      <div class="section-header flex end j-between">
        <h2 class="section-title">
          Работаем с <span>разными</span><br />
          сферами бизнеса
        </h2>
        <nuxt-link to="/portfolio" class="link">
        Все проекты
        </nuxt-link>
      </div>
      <div class="decor-line"></div>

      <div class="portfolio-items">
        <PortfolioItem/>
        <PortfolioItem/>
        <PortfolioItem/>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss">
#portfolio {
  background: var(--black);
  .section-title {
    color: #fff;
  }
  .decor-line {
    background: #fff;
    margin-top: 3rem;
  }



}
</style>