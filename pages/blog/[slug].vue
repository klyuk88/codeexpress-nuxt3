<template>
  <div>
      <Head v-if="seoData">
      <Title>{{seoData.metaTitle}}</Title>
      <Meta name="description" :content="seoData.metaDescription" />
      <Meta name="keywords" :content="seoData.keywords" />
    </Head>
     
    <section id="single-block-page" v-if="article">
      <div class="container">
        <div class="title-block">
          <h1 class="page-title">{{ article.data.attributes.title }}</h1>
          <div class="meta">
            <p class="meta-data">{{ publishDate }}</p>
            <p class="meta-data" v-if="article.data.attributes.read_time">
              На чтение {{ article.data.attributes.read_time }} минут
            </p>
          </div>
        </div>
        <div class="cover-block">
          <img
            :src="
              $config.public.apiURL + article.data.attributes.cover.data.attributes.url
            "
            :alt="
              article.data.attributes.cover.data.attributes.alternativeText
            "
            class="cover"
          />
        </div>

        <div class="single-block-page-content">
          <div class="sidebar-block">
            <div class="sidebar">
              <div class="sidebar-cta">
                <h4 class="title">Обсудим<br />ваш проект?</h4>
                <nuxt-link to="/brif" class="phone-wrap">
                  <EffectWord :title="'Заполнить бриф'" />
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="main-block" v-html="articleContent" />
        </div>
      </div>
    </section>
    <MainCTA />
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import MarkdownIt from "markdown-it";
import { ref } from "vue";
import qs from 'qs'

const route = useRoute();
const publishDate = ref("");
const articleContent = ref("");
const seoData = ref(null)

const runtimeConfig = useRuntimeConfig()
const query = qs.stringify({
  populate: '*'
})
const { data:article } = await useFetch(`${runtimeConfig.public.apiURL}/api/articles/${route.query.id}?${query}`)
seoData.value = article.value.data.attributes.seo
const date = new Date(article.value.data.attributes.publishedAt);
publishDate.value = date.toLocaleDateString();
const md = new MarkdownIt();
articleContent.value = md.render(article.value.data.attributes.content);

</script>
<style lang="scss">
#single-block-page {
  .title-block {
    display: grid;
    grid-template-columns: 66.6% 1fr;
    gap: 20px;
    align-items: flex-end;
    padding: 7rem 0;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
      padding: 3rem 0;
    }
    .meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .meta-data {
        opacity: 0.5;
        // font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
  .cover-block {
    position: relative;
    width: 100%;
    height: 90vh;
    margin-bottom: 4rem;
    @media (max-width: 576px) {
      height: 15rem;
    }
    .cover {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      left: 0;
      top: 0;
    }
  }
  .single-block-page-content {
    display: grid;
    grid-template-columns: 33.3% 1fr;
    gap: 20px;
    padding-bottom: 6rem;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
      padding-bottom: 0;
    }
    .sidebar-block {
      @media (max-width: 576px) {
        display: none;
      }
      .sidebar {
        position: sticky;
        position: -webkit-sticky;
        will-change: transform;
        top: 6rem;
        bottom: auto;
        .sidebar-cta {
          .title {
            font-size: 1.1rem;
            line-height: 1.2;
            color: #000;
            font-weight: 700;
            text-transform: uppercase;
          }
          .phone-wrap {
            display: inline-block;
            margin-top: 2rem;
          }
        }
      }
    }

    .main-block {
      width: 100%;
      p {
        margin-top: 2rem;
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>