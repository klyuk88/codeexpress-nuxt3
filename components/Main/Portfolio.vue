<template>
  <section
    id="portfolio"
    class="upper-indent"
    :class="{ 'before-dark-mode': !store.darkMode }"
    ref="portfolioElem"
  >
    <div class="container">
      <div class="section-header flex end j-between">
        <h2 class="section-title">
          Работаем с <span>разными</span><br />
          сферами бизнеса
        </h2>
        <nuxt-link to="/projects">
          <EffectWord :title="'Все проекты'" />
        </nuxt-link>
      </div>
      <div class="decor-line"></div>
      <div class="portfolio-items" v-if="data">
        
        <PortfolioItem
          v-for="(project, index) in data.data"
          :key="index"
          :title="project.attributes.title"
          :date="project.attributes.project_date"
          :thumb="$config.public.apiURL + project.attributes.thumb.data.attributes.url"
          :category="project.attributes.project_categories.data"
          :slug="project.attributes.slug"
        />
      </div>
      <div v-else class="error-mess">
        <h2>Ошибка загрузки данных 😞</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "@/stores/store.js";
import { ref, onMounted, computed } from "vue";
import qs from "qs";

const store = useStore();
const portfolioElem = ref(null);
const runtimeConfig = useRuntimeConfig();

const query = qs.stringify({
  pagination: {
    page: 1,
    pageSize: 3,
  },
  populate: "*",
});

const { data } = await useFetch(
  `${runtimeConfig.public.apiURL}/api/projects?${query}`
);

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
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
  observerPortfolio.observe(portfolioElem.value);
});
</script>

<style lang="scss">
#portfolio {
  transition: opacity 0.4s ease;
  .section-header {
    a {
      @media (max-width: 576px) {
        display: none;
      }
    }
  }
  .decor-line {
    margin-top: 3rem;
  }
}
</style>


