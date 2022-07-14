<template>
  <section class="technologies lower-indent" ref="tech">
    <div class="container">
      <div class="decor-line"></div>
      <div class="technologies-grid">
        <div class="col">
          <h2 class="section-title">
            Следуем<br /><span>передовым</span><br />тенденциям<br />
            в разработке
          </h2>
        </div>
        <div class="col">
          <p>
            Мы разрабатываем проекты на одном из самых популярных языков
            программирования <b>JavaScript</b> и его экосистемах.
          </p>
          <div class="infographics">
            <div
              class="item"
              :class="{ active: isItemActive }"
              v-for="(item, idx) in techItems"
              :key="idx"
            >
              <h4 class="lang-title">{{ item.name }}</h4>
              <div>
                <div class="lang-amount-wrap">
                  <div
                    class="lang-amount"
                    :style="{ width: (100 / 18) * item.percent + '%' }"
                  >
                    <span class="percent">{{ item.percent }}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            Сайты на JavaScript загружаются <b>моментально</b>, без перезагрузки
            страниц. А сопутствующие технологии, при помощи серверного
            рендеринга(SSR), позволяют создавать
            <b>SEO дружественные</b> проекты.
          </p>
        </div>
      </div>
    </div>
    <DecorLogo />
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import DecorLogo from "@/components/Main/DecorLogo.vue";

const tech = ref(null);
const isItemActive = ref(false);
const techItems = ref([
  {
    name: "JavaScript",
    percent: 18,
  },
  {
    name: "C#",
    percent: 14.7,
  },
  {
    name: "Java",
    percent: 14.3,
  },
  {
    name: "Python",
    percent: 11.2,
  },
  {
    name: "PHP",
    percent: 10.6,
  },
  {
    name: "TypeScript",
    percent: 10.4,
  },
  {
    name: "Kotlin",
    percent: 3.4,
  },
  {
    name: "Swift",
    percent: 3.4,
  },
  {
    name: "C++",
    percent: 3.3,
  },
  {
    name: "Go",
    percent: 2.2,
  },
  {
    name: "Ruby",
    percent: 2.1,
  },
  {
    name: "Dart",
    percent: 1,
  },
]);

onMounted(() => {
  //statisctic lines
  function callback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isItemActive.value = true;
      } else {
        isItemActive.value = false;
      }
    });
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(tech.value);
});

onUnmounted(() => {
})

</script>

<style lang="scss">
.technologies .decor-line {
  margin-bottom: var(--section-top);
}
.infographics {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  .item {
    display: grid;
    grid-template-columns: minmax(max-content, 12.4%) 1fr;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
    @media (max-width: 576px) {
      grid-template-columns: minmax(max-content, 25%) 1fr;
    }
    .lang-amount-wrap {
      width: 0%;
      transition: width 1s ease;
    }
  }
  .item.active {
    .lang-amount-wrap {
      width: 100%;
    }
  }
}

.infographics > .item .lang-title {
  font-size: 0.9rem;
  font-family: "Raleway";
  font-weight: 700;
  color: rgba(0, 0, 0, 0.4);
  margin-right: 1rem;

}
.infographics > .item .lang-amount {
  width: 100%;
  height: 1.2rem;
  background: linear-gradient(135deg, #278566 0% 0%, #49efce 100% 100%);
  position: relative;
}
.infographics > .item .lang-amount .percent {
  position: absolute;
  left: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8rem;
  color: #fff;
}

.technologies {
  .technologies-grid {
    display: grid;
    width: 100%;
    grid-template-columns: 50% 50%;
    gap: 20px;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
    }
  }
} 
</style>