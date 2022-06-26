<template>
  <section id="design" class="lower-indent">
    <div class="container">
      <div class="decor-line"></div>
      <div class="row">
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
          <FormBtn :name="'Заполнить бриф'" />
        </div>
      </div>
      <div id="interactive-design">
        <!-- <MainCompare/> -->
        <client-only>
          <ImageCompare :before="before" :after="after"></ImageCompare> 
        </client-only>
        
      </div>
    </div>
  </section>
</template>
<script setup>
import ImageCompare from "@/components/Main/ImageCompare.vue";
import { ref, onMounted } from "vue";
const before = ref("demo-screen.webp");
const after = ref("proto-demoX4.webp");

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
}
#handle {
  position: relative;
  left: 50%;
  top: 50%;
  width: 4rem;
  height: 4rem;
  background: #161616;
  border-radius: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  .decor-round {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background: var(--accent);
  }
}

#handle:before {
  content: "";
  width: 0.7rem;
  height: 0.7rem;
  background-image: url("../../assets/images/handle-left.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%) translateX(50%);
}
#handle:after {
  content: "";
  width: 0.7rem;
  height: 0.7rem;
  background-image: url("../../assets/images/handle-right.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
}

.image-compare {
  .handle {
    background: #161616;
  }
}
</style>