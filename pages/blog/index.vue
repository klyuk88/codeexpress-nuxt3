<template>
  <div>
    <Head v-if="seoData">
      <Title>{{ seoData.metaTitle }}</Title>
      <Meta name="description" :content="seoData.metaDescription" />
      <Meta name="keywords" :content="seoData.keywords" />
    </Head>
    <BlogArchive />
  </div>
</template>
<script setup>
import qs from "qs";
const runtimeConfig = useRuntimeConfig();
const query = qs.stringify({
  populate: ["seo"],
});
const { data: blogPage } = await useFetch(
  `${runtimeConfig.public.apiURL}/api/blog-page?${query}`
);
const seoData = ref(blogPage.value.data.attributes.seo);
</script>