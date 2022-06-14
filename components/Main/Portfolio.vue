<template>
  <section
    id="portfolio"
    class="upper-indent lower-indent"
    :class="{ 'before-dark-mode': !store.darkMode }"
    ref="portfolioElem"
  >
    <div class="container">
      <div class="section-header flex end j-between">
        <h2 class="section-title">
          Работаем с <span>разными</span><br />
          сферами бизнеса
        </h2>
        <nuxt-link to="/portfolio" class="link"> Все проекты </nuxt-link>
      </div>
      <div class="decor-line"></div>

      <div class="portfolio-items">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "@/stores/store.js";
import { ref, onMounted } from "vue";
const store = useStore();
const portfolioElem = ref(null);

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };
  const callBack = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        store.darkMode = true;
      } else {
        store.darkMode = false;
      }
    });
  };
  const observerPortfolio = new IntersectionObserver(callBack, options);
  observerPortfolio.observe(portfolioElem.value)
});
</script>

<style lang="scss">
#portfolio {
  transition: opacity 0.4s ease;
  // background: var(--black);
  .section-title {
    color: #fff;
  }
  .decor-line {
    background: #fff;
    margin-top: 3rem;
  }
}
#portfolio.before-dark-mode {
  opacity: 0;
}
</style>