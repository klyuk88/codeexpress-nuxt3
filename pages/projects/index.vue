<template>
  <div>
    <Head v-if="seoData">
      <Title>{{seoData.metaTitle}}</Title>
      <Meta name="description" :content="seoData.metaDescription" />
      <Meta name="keywords" :content="seoData.keywords" />
    </Head>
    <ProjectsArchive />
  </div>
</template>
<script setup>
import qs from 'qs'
const runtimeConfig = useRuntimeConfig()
const query = qs.stringify({
  populate: ["seo"]
})
const { data: projectsPage } = await useFetch(`${runtimeConfig.public.apiURL}/api/projects-page?${query}`)
const seoData = ref(projectsPage.value.data.attributes.seo)

</script>
