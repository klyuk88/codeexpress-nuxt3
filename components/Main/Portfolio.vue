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
      <div class="portfolio-items" v-if="projectsStore.projects">
        <PortfolioItem
          v-for="(project, index) in projectsStore.projects"
          :key="index"
          :title="project.attributes.title"
          :date="project.attributes.project_date"
          :cover="apiURL + project.attributes.cover.data.attributes.url"
          :category="project.attributes.project_categories.data"
          :slug="project.attributes.slug"
          :id="project.id"
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
import { useProjects } from "@/stores/projects.js";
import { apiURL } from "@/composables/useEnv.js";
import { ref, onMounted, computed } from "vue";

const store = useStore();
const projectsStore = useProjects();
const portfolioElem = ref(null);



onMounted(() => {
  projectsStore.getProjects();

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


