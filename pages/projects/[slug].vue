<template>
  <div>
    <Head v-if="project.data.attributes.seo">
      <Title>{{ project.data.attributes.seo.metaTitle }}</Title>
      <Meta name="description" :content="project.data.attributes.seo.metaDescription" />
      <Meta name="keywords" :content="project.data.attributes.seo.keywords" />
    </Head>
    <div id="single-project-page" v-if="project">
      <div class="container">
        <div class="title-block">
          <h1 class="page-title">
            {{ project.data.attributes.title }}
          </h1>
          <p class="subtitle">
            {{ project.data.attributes.subtitle }}
          </p>
        </div>
        <div class="cover-block">
          <img
            :src="
              $config.public.apiURL +
              project.data.attributes.cover.data.attributes.url
            "
            alt=""
            class="cover"
          />
        </div>
        <div class="single-project-header">
          <a
            :href="project.data.attributes.link"
            target="_blank"
            class="sp-link"
          >
            <EffectWord :title="'Перейти на сайт'" />
          </a>
          <div class="decor-line"></div>
        </div>
        <div class="single-project-content">
          <div class="sidebar-block">
            <div class="sidebar">
              <h3 class="title">Услуги:</h3>
              <ul class="services-list">
                <li
                  class="item"
                  v-for="(item, idx) in project.data.attributes.services.data"
                  :key="idx"
                >
                  {{ item.attributes.title }}
                </li>
              </ul>
              <div class="sidebar-cta">
                <h4 class="title">Обсудим<br />ваш проект?</h4>
                <nuxt-link to="/brif" class="sidebar-link">
                  <EffectWord :title="'Заполнить бриф'" />
                </nuxt-link>
                <!-- <FormBtn :name="'Заполнить бриф'"/> -->
              </div>
            </div>
          </div>

          <div class="main">
            <div class="content-block" v-html="content" />
          </div>
        </div>
      </div>
    </div>
    <MainCTA />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import qs from "qs";
const route = useRoute();
import MarkdownIt from "markdown-it";

const content = ref("");
const runtimeConfig = useRuntimeConfig();
const query = qs.stringify({
  populate: {
    content: {
      populate: {
        image: {
          fields: ["url"],
        },
        text: {
          fields: "*",
        },
      },
    },
    services: {
      fields: ["title"],
    },
    project_categories: {
      fields: "*",
    },
    cover: {
      fields: ["url"],
    },
    seo: {
      fields: "*",
    },
  },
});
const { data: project } = await useFetch(
  `${runtimeConfig.public.apiURL}/api/projects/${route.query.id}?${query}`
);
const md = new MarkdownIt();
content.value = md.render(project.value.data.attributes.content);

</script>
<style lang="scss">
#single-project-page {
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
  }
  .cover-block {
    position: relative;
    width: 100%;
    height: 90vh;
    @media (max-width: 576px) {
      height: 15rem;
    }
    // margin-bottom: 4rem;
    .cover {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      left: 0;
      top: 0;
    }
  }
  .single-project-header {
    text-align: right;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-top: 1.2rem;
    will-change: transform;
    position: sticky;
    position: -webkit-sticky;
    top: 0.5rem;
    z-index: 200;
    background: var(--light);
    @media (max-width: 576px) {
      margin: 2rem 0 2rem 0;
    }
    .sp-link {
      padding: 1rem 0;
      display: inline-block;
    }
  }
  .single-project-content {
    display: grid;
    grid-template-columns: 33.3% 1fr;
    gap: 20px;
    padding-bottom: 6rem;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
      padding-bottom: 0;
    }
    .sidebar-block {
      .sidebar {
        position: sticky;
        position: -webkit-sticky;
        will-change: transform;
        top: 7.5rem;
        bottom: auto;
        .title {
          font-size: 1.5rem;
          color: #000;
          font-weight: 700;
          text-transform: uppercase;
          @media (max-width: 576px) {
            font-size: 1rem;
          }
        }
        .services-list {
          list-style: none;
          padding: 0;
          margin-top: 2rem;
          @media (max-width: 576px) {
            margin-top: 1rem;
          }
          .item {
            text-transform: uppercase;
            font-weight: 700;
            font-size: 1rem;
            color: rgba($color: #000000, $alpha: 0.5);
            margin-bottom: 1rem;
            @media (max-width: 576px) {
              margin-bottom: 0.5rem;
            }
          }
        }
        .sidebar-cta {
          margin-top: 15rem;
          @media (max-width: 576px) {
            display: none;
          }
          .title {
            font-size: 1.1rem;
            line-height: 1.2;
          }
          .sidebar-link {
            display: inline-block;
            margin-top: 2rem;
          }
        }
      }
    }
    .main {
      width: 100%;
      .content-text {
        margin-bottom: 2rem;
      }
      img {
        width: 100%;
        height: auto;
        margin-bottom: 2rem;
      }
    }
  }
}
</style>

