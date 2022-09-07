<template>
<div>
  <section id="projects">
    <div class="container">
      <div class="projects-grid">
        <div class="col-4">
          <h1 class="page-title">
            Проекты, которые мы <span>можем</span> показать
          </h1>
        </div>
        <div class="col-2">
          <p class="subtitle">
            Часть проектов находится под NDA(соглашение о конфеденциальности),
            поэтому мы не можем разместить их в портфолио
          </p>
        </div>
      </div>
      <div class="projects-items-block">
        <div class="filter" v-if="categories.data.length">
          <h2 class="title">Фильтр:</h2>
          <ul class="filters">
            <li>
              <nuxt-link to="/projects">Все</nuxt-link>
            </li>
            <li v-for="(item, idx) in noEmptyCategories" :key="idx">
              <nuxt-link :to="`/projects/category/${item.attributes.slug}`">
                {{ item.attributes.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="decor-line"></div>
        <Spinner v-if="spinner" />
        <div class="items" v-if="projects && !spinner">
          <PortfolioItem
            v-for="(project, index) in projects.data"
            :key="index"
            :title="project.attributes.title"
            :date="project.attributes.project_date"
            :thumb="$config.public.apiURL + project.attributes.thumb.data.attributes.url"
            :category="project.attributes.project_categories.data"
            :slug="project.attributes.slug"
            :id="project.id"
          />
        </div>
      </div>
    </div>
  </section>

</div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import qs from "qs";

const router = useRouter();
const route = useRoute();
const spinner = ref(true);
const runtimeConfig = useRuntimeConfig();

const filter = computed(() => {
  return {
    project_categories: {
      slug: {
        $eq: route.params.slug,
      },
    },
  };
});
const query = qs.stringify({
  pagination: {
    page: 1,
    pageSize: 25,
  },
  populate: "*",
  filters: filter.value,
});

const { data: projects, pending } = await useLazyFetch(
  `${runtimeConfig.public.apiURL}/api/projects?${query}`
);

setTimeout(() => {
  spinner.value = false
}, 1000);

const { data: categories } = await useFetch(
  `${runtimeConfig.public.apiURL}/api/project-categories?${qs.stringify({
    populate: ["projects"],
  })}`
);
const noEmptyCategories = computed(() => {
  return (
    categories.value.data.filter(
      (elem) => elem.attributes.projects.data.length > 0
    ) || null
  );
});
const currentCategory = computed(() => {
  return categories.value.data.find(elem => elem.attributes.slug === route.params.slug) || null
})


</script>
<style lang="scss" scoped>
#projects {
  padding-top: var(--section-bottom);
  overflow-x: hidden;
  .subtitle {
    font-size: 1.2rem;
    width: 80%;
    transform: translateY(-1rem);
    @media (max-width: 576px) {
      font-size: 0.9rem;
    }
  }
  .projects-items-block {
    margin-top: 10rem;
    @media (max-width: 576px) {
      margin-top: 2rem;
    }
    .filter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: 576px) {
        align-items: flex-start;
      }
      .title {
        font-size: 1.5rem;
        text-transform: uppercase;
        @media (max-width: 576px) {
          font-size: 1rem;
        }
      }
      .filters {
        list-style: none;
        padding: 0;
        display: flex;
        align-items: center;
        gap: 30px;
        @media (max-width: 576px) {
          flex-direction: column;
          gap: 10px;
          align-items: flex-end;
        }
        li {
          font-size: 1.1rem;
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          transition: color 0.1s ease;
          @media (max-width: 576px) {
            font-size: 1rem;
          }
          a {
            color: rgba(0, 0, 0, 0.4);
          }
          .router-link-active.router-link-exact-active {
            color: var(--accent);
          }
        }
        li:hover {
          a {
            color: var(--accent);
          }
        }
      }
    }
    .decor-line {
      margin-top: 3rem;
      background: rgba($color: #000000, $alpha: 0.3);
    }
    .items {
      margin-top: 3rem;
      padding-bottom: 10rem;
      @media (max-width: 576px) {
        margin-top: 0;
      }
    }
  }
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 33%;
    gap: 20px;
    width: 100%;
    align-items: end;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
    }
  }
}
</style>
