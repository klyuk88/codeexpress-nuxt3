<template>
  <div>
    <Head v-if="servicesPage && servicesPage.data.attributes.seo">
      <Title>{{ servicesPage.data.attributes.seo.metaTitle }}</Title>
      <Meta
        name="description"
        :content="servicesPage.data.attributes.seo.metaDescription"
      />
      <Meta
        name="keywords"
        :content="servicesPage.data.attributes.seo.keywords"
      />
    </Head>
    <section id="services-page">
      <div class="container">
        <div class="services-title-block">
          <div></div>
          <h2 class="page-title">Наши<br />Компетенции</h2>
          <h1 class="big-title">Услуги</h1>
        </div>

        <marquee-text :repeat="5" :duration="60">
          <div class="marqee">
            • Java script • vue js • node js • nuxt js • webdesign •
            webdevelopment • html • css • sass • scss • figma • coding • Nest js
            • Design
          </div>
        </marquee-text>

        <div class="service-page-content">
          <div class="service-page-sidebar-block">
            <div class="sidebar-cta">
              <h4 class="title">Обсудим<br />ваш проект?</h4>
              <nuxt-link to="/brif" class="sidebar-link">
                <EffectWord :title="'Заполнить бриф'" />
              </nuxt-link>
              <!-- <FormBtn :name="'Заполнить бриф'"/> -->
            </div>
          </div>
          <div class="service-page-items-block" v-if="services.data.length">
            <ServicesItem
              v-for="(item, idx) in services.data"
              :key="idx"
              :title="item.attributes.title"
              :subtitle="item.attributes.subtitle"
              :slug="item.attributes.slug"
              :id="item.id"
            />
          </div>
          <div v-else class="error-mess">
            <h2>Приносим извинения, раздел находится в стадии наполнения 🙂</h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import MarqueeText from "vue-marquee-text-component/src/components/MarqueeText.vue";
import qs from "qs";
import { ref, onMounted } from "vue";
const runtimeConfig = useRuntimeConfig();
const query = qs.stringify({
  fields: ["title", "subtitle", "slug"],
});
const { data: services } = await useFetch(
  `${runtimeConfig.public.apiURL}/api/services?${query}`
);

const { data: servicesPage } = await useFetch(
  `${runtimeConfig.public.apiURL}/api/services-page?${qs.stringify({
    populate: ["seo"],
  })}`
);
</script>
<style lang="scss">
#services-page {
  padding-top: var(--section-top);
  @media (max-width: 576px) {
    overflow: hidden;
  }
  .services-title-block {
    display: grid;
    grid-template-columns: 16.7% 1fr;
    padding-bottom: 4.5rem;
    position: relative;
    // overflow: hidden;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
      padding-bottom: 2rem;
    }
    .big-title {
      position: absolute;
      font-size: 25rem;
      font-weight: 700;
      line-height: 100%;
      left: 0;
      bottom: 0;
      color: rgba($color: #fff, $alpha: 0.5);
      text-transform: uppercase;
      z-index: -1;
      font-family: "Raleway";
      @media (max-width: 576px) {
        font-size: 9rem;
        // display: none;
      }
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
  .service-page-content {
    margin-top: var(--section-top);
    display: grid;
    grid-template-columns: 33% 1fr;
    gap: 20px;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
    }
  }
  .service-page-sidebar-block {
    padding-bottom: 3rem;
    @media (max-width: 576px) {
      display: none;
    }
    .sidebar-cta {
      position: sticky;
      position: -webkit-sticky;
      top: 6rem;
      will-change: transform;
      .title {
        font-size: 1.1rem;
        line-height: 1.2;
        text-transform: uppercase;
      }
      .sidebar-link {
        display: inline-block;
        margin-top: 2rem;
      }
    }
  }
  .service-page-items-block {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    padding-bottom: 5rem;
  }
}
</style>