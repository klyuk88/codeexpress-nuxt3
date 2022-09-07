<template>
  <section class="projects-nav">
    <div class="container">
      <div class="projects-grid">
        <div>
          <nuxt-link :to="`/projects/${prevProject.attributes.slug}`" class="preview-link" v-if="prevProject">
            <EffectWord :title="'Предыдущий проект'"/>
            <div class="preview-block">
              <img
                :src="$config.public.apiURL + prevProject.attributes.thumb.data.attributes.url"
                alt="Предыдущая работа"
              />
            </div>
          </nuxt-link>
        </div>
        <div>
          <nuxt-link class="preview-link" :to="`/projects/${nextProject.attributes.slug}`" v-if="nextProject">
            <EffectWord :title="'Следующий проект'" />
            <div class="preview-block">
              <img
                :src="$config.public.apiURL + nextProject.attributes.thumb.data.attributes.url"
                alt="Следующая работа"
              />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import qs from 'qs'
import { ref, reactive, isRef, isReactive } from 'vue'

const props = defineProps({
  currentProjectId: Number
})
const runtimeConfig = useRuntimeConfig()
const query = qs.stringify({
  fields: ["title", "slug", "id"],
  populate: {
    thumb: {
      fields: ["url"]
    }
  }
})
const {data: projects} = await useFetch(`${runtimeConfig.public.apiURL}/api/projects?${query}`)
const currentIndex = ref(projects.value.data.findIndex((item, idx) => item.id === props.currentProjectId))
const nextProject = projects.value.data[currentIndex.value + 1]
const prevProject = projects.value.data[currentIndex.value - 1]

</script>
<style lang="scss">
.projects-nav {
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
  .projects-grid {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    @media (max-width: 768px) {
      grid-template-columns: 100%;
      row-gap: 20px;
    }
    .preview-link {
      cursor: pointer;
      .link-wrap {
        margin-bottom: 0.5rem;
      }
    }
    .preview-block {
      position: relative;
      width: 25rem;
      aspect-ratio: 16/9;
      overflow: hidden;
      @media (max-width: 768px) {
        width: 80%;
      }
      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
    }
    .preview-block:hover {
      img {
        transform: scale(1.05);
        @media (max-width: 768px) {
          transform: scale(1)
        }
      }
    }
  }
}
</style>