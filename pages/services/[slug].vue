<template>
  <div v-if="service">
    <Head v-if="service.data.attributes.seo">
      <Title>{{ service.data.attributes.seo.metaTitle }}</Title>
      <Meta name="description" :content="service.data.attributes.seo.metaDescription" />
      <Meta name="keywords" :content="service.data.attributes.seo.keywords" />
    </Head>
    <section id="service-single-page" :class="{ dark: darkMode }">
      <div class="container">
        <div class="service-single-title-block">
          <div>
            <h2 class="page-title">
              {{ service.data.attributes.title }}
            </h2>
            <p class="service-single-subtitle">
              {{ service.data.attributes.subtitle }}
            </p>
          </div>
          <div>
            <div class="singe-page-arrow">
              <svg
                
                height="1rem"
                viewBox="0 0 27 12.3428955"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <path d="M0 0L27 0L27 12.3429L0 12.3429L0 0Z" id="path_1" />
                  <clipPath id="mask_1">
                    <use xlink:href="#path_1" />
                  </clipPath>
                </defs>
                <g id="arrow-2-Copy">
                  <path
                    d="M0 0L27 0L27 12.3429L0 12.3429L0 0Z"
                    id="Background"
                    fill="none"
                    fill-rule="evenodd"
                    stroke="none"
                  />
                  <g clip-path="url(#mask_1)">
                    <path
                      d="M27 5.9545L27 6.42214C24.3641 6.99787 22.4503 9.67919 21.6636 12.3429C21.6632 12.3446 21.3393 12.2332 21.3298 12.2299C21.32 12.2267 21.3404 12.2316 21.341 12.2296C21.9372 10.1919 22.5918 7.93468 24.2449 6.4653C20.0259 6.56436 17.1347 6.72191 13.6467 6.73975L13.6459 6.73976C9.59472 6.76048 5.54671 6.7812 0.359056 6.92895L0 6.93917L0 5.40953L24.2449 5.87755C22.5918 4.40817 21.9421 2.17339 21.341 0.113285C21.341 0.113285 20.9959 0.227207 21.3296 0.113657C21.6634 0.000107107 21.6633 0 21.6633 0C22.4432 2.66893 24.3636 5.37866 27 5.9545L27 5.9545Z"
                      id="Shape"
                      fill="#000"
                      fill-rule="evenodd"
                      stroke="none"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="service-single-image-block">
          <img
            :src="
              $config.public.apiURL +
              service.data.attributes.cover.data.attributes.url
            "
            alt=""
          />
        </div>

        <div class="service-single-stages-block" ref="stagesElem">
          <div class="decor-line"></div>
          <div class="stages-grid">
            <div>
              <div class="stiky-title-block">
                <h2 class="service-single-section-title">Этапы работ</h2>
              </div>
            </div>
            <div
              class="service-single-stages-items"
              v-if="service.data.attributes.stages"
            >
              <ServicesStageItem
                v-for="(item, idx) in service.data.attributes.stages"
                :key="idx"
                :number="idx"
                :title="item.title"
                :about="item.text"
              />
            </div>
          </div>
          <div class="service-single-projects-block">
            <!-- <div class="decor-line"></div> -->
            <div class="title-grid">
              <h2 class="title">Примеры проектов</h2>
              <NuxtLink to="/projects" class="all-projects-link">
                <EffectWord :title="'Все проекты'" />
              </NuxtLink>
            </div>
            <div class="decor-line"></div>
            <div class="projects-block" v-if="service.data.attributes.projects">
              <PortfolioItem
                v-for="(project, index) in service.data.attributes.projects.data"
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

        <MainCTA />
      </div>
    </section>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useDarkMode } from '@/composables/states.ts';
import { ref } from "vue";
import qs from "qs";

const darkMode = useDarkMode();
const stagesElem = ref(null)
const route = useRoute();
const runtimeConfig = useRuntimeConfig();
const query = qs.stringify({
  populate: {
    cover: {
      populate: "*",
    },
    projects: {
      populate: "*",
    },
    stages: "*",
    seo: "*",
  },
});
const { data: service } = await useFetch(
  `${runtimeConfig.public.apiURL}/api/services/${route.query.id}?${query}`
);

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const callBack = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        darkMode.value = true;
      } else {
        darkMode.value = false;
      }
    });
  };

  const observer = new IntersectionObserver(callBack, options);
  observer.observe(stagesElem.value)
});
</script>
<style lang="scss">
#service-single-page {
  transition: background 0.3s ease;
  padding-top: var(--section-top);
  .service-single-title-block {
    display: grid;
    grid-template-columns: 1fr 33%;
    padding-bottom: 4.5rem;
    position: relative;
    align-items: end;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
    }
    .service-single-subtitle {
      margin-top: 2rem;
    }
    .singe-page-arrow {
      width: 5rem;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 2px solid #000;
      margin-left: auto;
      transform: rotate(90deg);
      @media (max-width: 576px) {
        margin-left: 0;
      }
    }
  }
  .service-single-image-block {
    width: 100%;
    height: 35rem;
    position: relative;
    @media (max-width: 576px) {
      height: 15rem;
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }
  }

  .service-single-stages-block {
    padding-top: var(--section-top);
    padding-bottom: var(--section-top);
    opacity: 0;
    transition: opacity 0.3s ease;
    .decor-line {
      width: 0;
      background: #fff;
      transition: width 1s ease 0.3s;
    }
    .stages-grid {
      display: grid;
      grid-template-columns: 33% 1fr;
      gap: 20px;
      margin-top: var(--section-bottom);
      @media (max-width: 576px) {
        grid-template-columns: 100%;
        row-gap: 40px;
      }
      .stiky-title-block {
        position: sticky;
        position: -webkit-sticky;
        top: 7rem;
        will-change: transform;
      }

      .service-single-section-title {
        text-transform: uppercase;
        font-size: 1.5rem;
        color: #fff;
      }
      .service-single-stages-items {
        display: grid;
        grid-template-columns: 1fr;
        width: 100%;
        gap: 4rem;
      }
    }
    .service-single-projects-block {
      > .decor-line {
        margin-top: var(--section-top);
      }
      > .title-grid {
        display: grid;
        grid-template-columns: 33% 1fr;
        gap: 20px;
        margin-top: var(--section-top);
        width: 100%;
        align-items: flex-end;
        .title {
          text-transform: uppercase;
          font-size: 1.5rem;
          color: #fff;
        }
        .all-projects-link {
          justify-self: end;
        }
      }
      > .title-grid + .decor-line {
        background: rgba($color: #fff, $alpha: 0.5);
        margin-top: 2rem;
      }
      .projects-block {
        margin-top: 4rem;
      }
    }
  }
}

#service-single-page.dark {
  background: var(--black);
  .service-single-stages-block {
    opacity: 1;
  }
  .decor-line {
    width: 100%;
  }
}
</style>