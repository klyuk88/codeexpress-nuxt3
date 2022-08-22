<template>
  <div>
    <Head v-if="category && category.data[0].attributes.seo">
      <Title>
        {{ category.data[0].attributes.seo.metaTitle }}
      </Title>
      <Meta name="description" :content="category.data[0].attributes.seo.metaDescription" />
      <Meta name="keywords" :content="category.data[0].attributes.seo.keywords" />
    </Head>

    <ProjectsArchive />
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import qs from "qs";

const route = useRoute();
const runtimeConfig = useRuntimeConfig();

const { data: category } = await useFetch(`${runtimeConfig.public.apiURL}
/api/project-categories?${qs.stringify({
  populate: ["seo"],
  filters: {
    slug: {
      $eq: route.params.slug,
    },
  },
})}`);
</script>

