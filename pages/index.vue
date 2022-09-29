<template>
  <div class="main-page" :class="{ dark: darkMode }">
    <Head v-if="data.data.attributes.seo">
      <Title>{{ data.data.attributes.seo.metaTitle }}</Title>
      <Meta
        name="description"
        :content="data.data.attributes.seo.metaDescription"
      />
      <Meta name="keywords" :content="data.data.attributes.seo.keywords" />
    </Head>
    <MainTop />
    <MainAbout />
    <MainServices />
    <MainBenifits />
    <MainTechnologies />
    <MainDesign />
    <MainPortfolio />
    <MainReviews />
    <MainCTA />
  </div>
</template>
<script setup>
import { useDarkMode } from "@/composables/states.ts"
import { ref, onMounted } from "vue";
import qs from "qs";

const darkMode = useDarkMode();
const videoElem = ref(null);
const runtimeConfig = useRuntimeConfig();

const query = qs.stringify({
  populate: "*",
});
const { data } = await useFetch(
  `${runtimeConfig.public.apiURL}/api/main-page?${query}`
);

</script>

<style lang="scss">
.main-page {
  overflow-x: hidden;
  transition: background 0.4s ease;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    transition: color 0.4s ease;
  }
}
.main-page.dark {
  background: var(--black);
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: #fff;
  }
  .decor-line {
    background: #fff;
  }
}
</style>
