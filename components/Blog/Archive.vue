<template>
  <section id="blog">
    <div class="container">
      <div class="blog-title-block">
        <div></div>
        <h2 class="page-title">Мысли,<br /><span>польза</span>, Инсайты</h2>
        <h1 class="big-title">Статьи</h1>
      </div>
      <marquee-text :repeat="5" :duration="60">
        <div class="marqee">
          • Java script • vue js • node js • nuxt js • webdesign •
          webdevelopment • html • css • sass • scss • figma • coding • Nest js •
          Design
        </div>
      </marquee-text>
      <div class="blog-content-block" v-if="articles.data.length">
        <div class="sidebar-block">
          <div class="sidebar" v-if="noEmptyCategories">
            <h2 class="title">Фильтр:</h2>
            <ul class="filter-block">
              <li class="filter-item">
                <nuxt-link to="/blog" class="">Все записи</nuxt-link>
              </li>
              <li
                class="filter-item"
                v-for="(item, index) in noEmptyCategories"
                :key="index"
              >
                <nuxt-link :to="`/blog/category/${item.attributes.slug}`">
                  {{ item.attributes.title }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="articles">
          <Spinner v-if="spinner" />
          <div class="articles-block" v-if="!spinner">
            <BlogItem
              v-for="(item, index) in articles.data"
              :key="index"
              :options="{
                title: item.attributes.title,
                time: item.attributes.read_time,
                slug: item.attributes.slug,
                id: item.id,
                cover: item.attributes.cover.data.attributes.url,
                altText: item.attributes.cover.data.attributes.alternativeText,
              }"
            />
          </div>
        </div>
      </div>
      <div v-else class="error-mess">
        <h2>Приносим извинения, раздел находится в стадии наполнения 🙂</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import MarqueeText from "vue-marquee-text-component/src/components/MarqueeText.vue";
import { ref, computed, reactive } from "vue";
import { useRoute } from "vue-router";
import qs from "qs";
const route = useRoute();
const spinner = ref(true);

const runtimeConfig = useRuntimeConfig();

const catQuery = qs.stringify({
  populate: ["articles"],
});

const filter = computed(() => {
  return {
    article_categories: {
      slug: {
        $eq: route.params.slug,
      },
    },
  };
});

const articlesQuery = qs.stringify({
  filters: filter.value,
  populate: "*",
  pagination: {
    page: 1,
    pageSize: 25,
  },
});
const { data: categories } = await useFetch(
  `${runtimeConfig.public.apiURL}/api/article-categories?${catQuery}`
);
setTimeout(() => {
  spinner.value = false;
}, 1000);

const noEmptyCategories = computed(() => {
  return (
    categories.value.data.filter(
      (elem) => elem.attributes.articles.data.length > 0
    ) || null
  );
});
const { data: articles } = await useFetch(
  `${runtimeConfig.public.apiURL}/api/articles?${articlesQuery}`
);
</script>

<style lang="scss">
#blog {
  padding-top: var(--section-bottom);
  .error-mess {
    padding-top: 5rem;
    text-align: center;
  }
  .error-image {
    width: 20rem;
  }
  .big-title {
    position: absolute;
    font-size: 25rem;
    font-weight: 700;
    line-height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    color: rgba($color: #fff, $alpha: 0.5);
    text-transform: uppercase;
    z-index: -1;
    font-family: "Raleway";
    transform: translateY(-65%);
    @media (max-width: 576px) {
      font-size: 9rem;
      // display: none;
    }
  }
  .blog-title-block {
    display: grid;
    grid-template-columns: 16.7% 1fr;
    padding-bottom: 4.5rem;
    position: relative;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
      padding-bottom: 2rem;
    }
  }
  .marqee {
    text-transform: uppercase;
    font-size: 1.5rem;
    color: rgba($color: #000000, $alpha: 0.5);
    font-weight: 700;
    @media (max-width: 576px) {
      font-size: 0.9rem;
    }
  }
  .blog-content-block {
    display: grid;
    grid-template-columns: 33.4% 1fr;
    gap: 20px;
    margin-top: 8rem;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
      margin-top: 3rem;
    }
    .sidebar-block {
      .sidebar {
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: sticky;
        position: -webkit-sticky;
        top: 6rem;

        .title {
          font-size: 1.5rem;
          color: var(--black);
          text-transform: uppercase;
          @media (max-width: 576px) {
            font-size: 1rem;
          }
        }
        .filter-block {
          padding: 0;
          list-style: none;
          .filter-item {
            margin-bottom: 1rem;
            a {
              font-size: 1rem;
              font-weight: 700;
              text-transform: uppercase;
              color: rgba($color: #000000, $alpha: 0.5);
              transition: color 0.1s ease;
            }
            .router-link-active.router-link-exact-active {
              color: var(--accent);
            }
            a:hover {
              color: var(--accent);
            }
          }
        }
      }
    }
  }
}
</style>