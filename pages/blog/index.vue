<template>
  <section id="blog">
    <div class="container">
      <div class="blog-title-block">
        <div></div>
        <h1 class="page-title">Мысли,<br /><span>польза</span>, Инсайты</h1>
      </div>

      <marquee-text :repeat="5" :duration="60">
        <div class="marqee">
          • Java script • vue js • node js • nuxt js • webdesign •
          webdevelopment • html • css • sass • scss • figma • coding • Nest js •
          Design
        </div>
      </marquee-text>

      <div class="blog-content-block">
        <div class="sidebar-block">
          <div class="sidebar">
            <h2 class="title">Фильтр:</h2>
            <ul class="filter-block">
              <li class="filter-item">
                <a href="#" class=""> Java Script </a>
              </li>
              <li class="filter-item">
                <a href="#"> Веб-дизайн </a>
              </li>
              <li class="filter-item">
                <a href="#"> SEO </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="articles">
          <BlogItem v-for="(item, index) in storeBlog.articles" :key="index"
          :options = "{
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
  </section>
</template>
<script setup>
import MarqueeText from "vue-marquee-text-component/src/components/MarqueeText.vue";
import { useBlog } from "@/stores/blog.js";
import { ref, onMounted } from "vue";

const storeBlog = useBlog();

onMounted(() => {
  storeBlog.getArticles();
});
</script>
<style lang="scss">
#blog {
  padding-top: var(--section-bottom);
  .blog-title-block {
    display: grid;
    grid-template-columns: 16.7% 1fr;
    padding-bottom: 4.5rem;
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
          // margin-top: 3rem;
          .filter-item {
            margin-bottom: 1rem;
            a {
              font-size: 1rem;
              font-weight: 700;
              text-transform: uppercase;
              color: rgba($color: #000000, $alpha: 0.5);
              transition: color 0.1s ease;
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