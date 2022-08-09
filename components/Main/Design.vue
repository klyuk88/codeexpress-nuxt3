<template>
  <section id="design" class="lower-indent">
    <div class="container">
      <div class="decor-line"></div>
      <div class="design-grid">
        <div class="col-4">
          <h2 class="section-title">
            Уделяем дизайну<br /><span>особое</span> внимание
          </h2>
        </div>
        <div class="col-2">
          <p class="text">
            Делаем продуманные интерфейсы, опираясь на
            <b>целевую аудиторию</b> продукта.
          </p>
          <nuxt-link to="/brif">
          <FormBtn :name="'Заполнить бриф'" />
          </nuxt-link>
          
        </div>
      </div>
      <div id="interactive-design">
        <client-only>
          <Compare />
        </client-only>
        <!-- <client-only>
          <ImageCompare :before="before" :after="after"></ImageCompare> 
        </client-only> -->
      </div>
    </div>
  </section>
</template>
<script setup>
import ImageCompare from "@/components/Main/ImageCompare.vue";

import { ref, onMounted } from "vue";
// const before = ref("demo-screen.webp");
// const after = ref("proto-demoX4.webp");
</script>

<style lang="scss">
#design {
  .decor-line {
    margin-bottom: var(--section-top);
  }
}
#design .text {
  margin-bottom: 1rem;
}

#interactive-design {
  margin-top: 5rem;
  @media (max-width: 576px) {
    margin-top: 3rem;
  }
}

#design {
  .design-grid {
    display: grid;
    grid-template-columns: 1fr 33%;
    gap: 20px;
    width: 100%;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
    }
  }
}
</style>