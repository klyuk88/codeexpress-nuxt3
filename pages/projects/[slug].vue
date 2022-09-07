<template>
  <div>
    <Head v-if="project.attributes.seo">
      <Title>{{ project.attributes.seo.metaTitle }}</Title>
      <Meta
        name="description"
        :content="project.attributes.seo.metaDescription"
      />
      <Meta name="keywords" :content="project.attributes.seo.keywords" />
    </Head>
    <div id="single-project-page" v-if="project">
      <div class="container">
        <div class="title-block">
          <h1 class="page-title">
            {{ project.attributes.title }}
          </h1>
          <p class="subtitle">
            {{ project.attributes.subtitle }}
          </p>
        </div>
        <div class="cover-block" v-if="project.attributes.cover.data">
          <video
            v-if="project.attributes.cover.data.attributes.mime === 'video/mp4'"
            :src="
              $config.public.apiURL +
              project.attributes.cover.data.attributes.url
            "
            playsinline
            muted
            loop
            autoplay
            class="cover"
          />

          <img
            v-else
            :src="
              $config.public.apiURL +
              project.attributes.cover.data.attributes.url
            "
            alt=""
            class="cover"
          />
        </div>
        <div class="single-project-header">
          <a :href="project.attributes.link" target="_blank" class="sp-link">
            <EffectWord :title="'Перейти на сайт'" />
          </a>
          <div class="decor-line"></div>
        </div>
        <div class="single-project-content">
          <div class="sidebar-block">
            <div class="sidebar">
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
            <div class="content-block">
              <div class="content-text-block" v-html="content" />
              <div
                class="content-media-block"
                v-if="project.attributes.media_content"
              >
                <div
                  v-for="(item, index) in project.attributes.media_content.data"
                  :key="index"
                >
                  <video
                    v-if="
                      item.attributes.mime ===
                      'video/mp4'
                    "
                    :src="
                      $config.public.apiURL +
                      item.attributes.url
                    "
                    playsinline
                    muted
                    loop
                    autoplay
                  />

                  <img
                    v-else
                    :src="
                      $config.public.apiURL +
                      item.attributes.url
                    "
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div class="info-block">
              <!-- Компания  -->
              <div class="info-block-grid" v-if="project.attributes.company">
                <div>
                  <h3 class="info-block-title">Компания</h3>
                </div>
                <div>
                  <ul class="info-block-items">
                    <li>{{ project.attributes.company }}</li>
                  </ul>
                </div>
              </div>
              <!-- Технологии  -->
              <div
                class="info-block-grid"
                v-if="project.attributes.technologies"
              >
                <div>
                  <h3 class="info-block-title">Технологии</h3>
                </div>
                <div>
                  <ul class="info-block-items">
                    <li
                      v-for="(item, idx) in project.attributes.technologies"
                      :key="idx"
                    >
                      {{ item.title }}
                    </li>
                  </ul>
                </div>
              </div>
              <!-- услуги -->
              <div
                class="info-block-grid"
                v-if="project.attributes.services.data.length"
              >
                <div>
                  <h3 class="info-block-title">Услуги</h3>
                </div>
                <div>
                  <ul class="info-block-items">
                    <li v-for="(item, idx) in project.attributes.services.data">
                      <nuxt-link
                        :to="`/services/${item.attributes.slug}?id=${item.id}`"
                        >{{ item.attributes.title }}</nuxt-link
                      >
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Отзыв  -->
              <div
                class="info-block-grid"
                v-if="project.attributes.review.data"
              >
                <div>
                  <h3 class="info-block-title">Отзыв</h3>
                </div>
                <div>
                  <ul class="info-block-items">
                    <li>
                      <a
                        href="#"
                        @click.prevent="
                          openLightbox(
                            project.attributes.review.data.attributes.scan.data
                              .attributes.url
                          )
                        "
                        >Смотреть скан</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProjectsNav :current-project-id="project.id" />
    <MainCTA />
    <ReviewLightBox v-if="store.lightBox" :image="reviewURL" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "@/stores/store.js";
import qs from "qs";
const route = useRoute();
import MarkdownIt from "markdown-it";

const store = useStore();
const content = ref("");
const reviewURL = ref("");
const runtimeConfig = useRuntimeConfig();

const { data: projects } = await useFetch(
  `${runtimeConfig.public.apiURL}/api/projects?${qs.stringify({
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
      media_content: {
        fields: ["url", "mime", "alternativeText"],
      },
      services: {
        fields: ["title", "slug"],
      },
      project_categories: {
        fields: "*",
      },
      cover: {
        fields: "*",
      },
      seo: {
        fields: "*",
      },
      technologies: {
        fields: "*",
      },
      review: {
        populate: {
          scan: {
            fields: ["url"],
          },
        },
      },
    },
    filters: {
      slug: {
        $eq: route.params.slug,
      },
    },
  })}`
);
const project = projects.value.data[0];
const md = new MarkdownIt({
  html: true,
});

if (project.attributes.content) {
  const p = md.render(project.attributes.content);
  content.value = p.replace(
    /\/uploads/g,
    `${runtimeConfig.public.apiURL}/uploads`
  );
}

const openLightbox = (image) => {
  store.lightBox = true;
  reviewURL.value = runtimeConfig.public.apiURL + image;
};
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
    aspect-ratio: 16/9;
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
          margin-bottom: 15rem;
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
      .content-text-block {
        margin-bottom: 3rem;
      }
      .content-block {
        h2 {
          font-size: 2.5rem;
          line-height: 1.5;
        }
        video {
          width: 100%;
          height: auto;
        }
      }
      .content-text {
        margin-bottom: 2rem;
      }
      video {
        width: 100%;
        height: auto;
      }
      img {
        width: 100%;
        height: auto;
      }
      .info-block {
        margin-top: 4rem;
        position: relative;
      }
      .info-block:after {
        content: "";
        position: absolute;
        height: 1px;
        width: 100%;
        background: #000;
        bottom: 0;
        left: 0;
      }
      .info-block-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        position: relative;
        padding-top: 3rem;
        padding-bottom: 3rem;
        .info-block-title {
          font-size: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;
          @media (max-width: 576px) {
            font-size: 1rem;
          }
        }
        .info-block-items {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          width: 100%;
          li {
            font-size: 1rem;
            color: #919191;
            a {
              transition: all 0.2s ease;
              color: #919191;
            }
          }
          li:hover {
            a {
              color: var(--accent);
            }
          }
          @media (max-width: 576px) {
            grid-template-columns: 100%;
          }
        }
      }
      .info-block-grid:before {
        content: "";
        position: absolute;
        width: 100%;
        display: block;
        height: 1px;
        background: #000;
        top: 0;
      }
    }
  }
}
</style>
