<template>
  <section class="services" :class="{'before-dark-mode': !store.darkMode}" ref="servicesNode">
    <div class="container">
      <div class="row center">
        <div class="col-3">
          <h2 class="section-title">
            Возьмёмся за <br />проект <span>любой</span><br />
            сложности
            <ul class="list">
              <li
                class="item"
                :class="{ active: idx === index ? true : false }"
                v-for="(item, idx) in serviceItems"
                :key="idx"
              >
                <div class="header" @click="openServiceItem(idx)">
                  <h3 class="title">{{ item.title }}</h3>
                  <svg
                    class="open-icon"
                    viewBox="0 0 23 29"
                    version="1.1"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="+" fill="#FFFFFF">
                      <path
                        d="M10.0195 24.2168L10.0195 16.3652L2.22656 16.3652L2.22656 13.084L10.0195 13.084L10.0195 5.29102L13.3398 5.29102L13.3398 13.084L21.1328 13.084L21.1328 16.3652L13.3398 16.3652L13.3398 24.2168L10.0195 24.2168Z"
                      />
                    </g>
                  </svg>
                </div>
                <div class="body">
                  <p class="text">
                    {{ item.body }}
                  </p>
                  <nuxt-link to="/">
                    <button class="btn min-btn">
                      Заполнить бриф
                      <img src="@/assets/images/btn-arrow.svg" alt="" />
                    </button>
                  </nuxt-link>
                </div>
              </li>
            </ul>
          </h2>
        </div>
        <div class="col-3">
          <div class="screens-block">
            <div class="screen">
              <img src="@/assets/images/screen.png" alt="" class="image" />
            </div>
            <div class="screen">
              <img src="@/assets/images/screen.png" alt="" class="image" />
            </div>
            <div class="screen">
              <img src="@/assets/images/screen.png" alt="" class="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {useStore} from '@/stores/store.js'


const store = useStore()
const index = ref(null);
const serviceItems = ref([
  {
    title: "Разработка сайта",
    body: `To be quite frank, the example of the major decisions, that lie behind the base configuration becomes a key factor of The Scale of Up-To-Date Challenge (Santo Berg in The Book of the Bilateral Act)`,
  },
  {
    title: "Разработка веб-сервиса",
    body: `To be quite frank, the example of the major decisions, that lie behind the base configuration becomes a key factor of The Scale of Up-To-Date Challenge (Santo Berg in The Book of the Bilateral Act)`,
  },
  {
    title: "Разработка интернет-магазина",
    body: `To be quite frank, the example of the major decisions, that lie behind the base configuration becomes a key factor of The Scale of Up-To-Date Challenge (Santo Berg in The Book of the Bilateral Act)`,
  },
  {
    title: "Frontend разработка",
    body: `To be quite frank, the example of the major decisions, that lie behind the base configuration becomes a key factor of The Scale of Up-To-Date Challenge (Santo Berg in The Book of the Bilateral Act)`,
  },
  {
    title: "SEO оптимизация",
    body: `To be quite frank, the example of the major decisions, that lie behind the base configuration becomes a key factor of The Scale of Up-To-Date Challenge (Santo Berg in The Book of the Bilateral Act)`,
  },
]);
const servicesNode = ref(null);


const openServiceItem = (idx) => {
  if (index.value === null) {
    index.value = idx;
  } else {
    index.value = null;
  }
};

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const callBack = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        store.darkMode = true
      } else {
        store.darkMode = false
      }
    });
  };

  const observer = new IntersectionObserver(callBack, options);
  observer.observe(servicesNode.value);
  //change dark mode
});
onUnmounted(() => {
})


</script>
<style lang="scss">
.services {
  padding-top: var(--section-top);
  padding-bottom: 10rem;
  // background: var(--black);
  transition: opacity 0.5s ease;
}
.services .section-title {
  color: #fff;
}

.services .list {
  list-style: none;
  padding: 0;
  margin-top: 2rem;
}

.services .list > .item {
  border-bottom: 1px solid #fff;
  padding-bottom: 1.5rem;
}

.services .list > .item.active .body {
  max-height: 1000px;
}
.services .list > .item.active .header .open-icon {
  transform: rotate(-45deg);
}

.services .list > .item .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.services {
  position: relative;
  .list {
    .item {
      .header:hover {
        .title {
          color: var(--accent);
        }
        .open-icon g {
          fill: var(--accent);
        }
      }
    }
    .item.active {
      .header {
        .title {
          color: var(--accent);
        }
        .open-icon g {
          fill: var(--accent);
        }
      }
    }
  }
  .screens-block {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(-40%) translateY(25%);
  }
}

.services .list > .item .header .title {
  font-size: 2rem;
  font-family: "Raleway";
  font-weight: 700;
  text-transform: none;
  color: #fff;
  transition: color 0.1s ease;
}

.services .list > .item .header .open-icon {
  width: 1.5rem;
  cursor: pointer;
  transition: fill 0.1s ease, transform 0.3s ease;
}

.services .list > .item .body {
  max-height: 0;
  transition: all 0.3s ease-in;
  overflow: hidden;
}

.services .list > .item .body .btn {
  margin-top: 1.5rem;
}

.services .list > .item .body .text {
  width: 85%;
  margin-top: 1.5rem;
}
.services .screen {
  width: 30rem;
  height: 18rem;
  background: #555555;
  border-radius: 1.2rem;
  margin: 0 auto;
  position: relative;
}

.services .screens-block .screen:nth-child(2),
.services .screens-block .screen:nth-child(3) {
  margin-top: -5rem;
}

.services .screen .image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  border-radius: 1.2rem;
  border: 0.5rem solid #555555;
}


//before dark mode
.services.before-dark-mode {
  opacity: 0;
}




</style>