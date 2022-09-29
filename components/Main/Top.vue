<template>
  <section class="main-screen" ref="top">
    <div class="container">
      <div class="row">
        <div class="col offset-1">
          <h1 class="title" ref="titleBlock" :class="{ active: topActive }">
            <div class="text-line">Разрабатываем</div>
            <div class="text-line">сайты, веб-сервисы,</div>
            <div class="text-line">интернет-магазины.</div>
          </h1>
        </div>
      </div>
    </div>
    <div class="decor-gallary-wrap">
      <div class="decor-gallery">
        <div class="image-line">
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/cry_2.jpg" alt="" />
          </div>
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/cry_3.jpg" alt="" />
          </div>
          <div
            class="image-box col-even"
            :style="{ transform: `translateY(${-scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/img-1.jpg" alt="" />
          </div>
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/mm.jpg" alt="" />
          </div>
          <div
            class="image-box col-even"
            :style="{ transform: `translateY(${-scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/tessin.jpg" alt="" />
          </div>
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/cry_8.jpg" alt="" />
          </div>
          <div
            class="image-box col-even"
            :style="{ transform: `translateY(${-scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/img-1.jpg" alt="" />
          </div>
        </div>
        <div class="image-line">
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/cry_8.jpg" alt="" />
          </div>
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/cry_5.jpg" alt="" />
          </div>
          <div
            class="image-box col-even"
            :style="{ transform: `translateY(${-scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/mm1.jpg" alt="" />
          </div>
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/mm3.jpg" alt="" />
          </div>
          <div
            class="image-box col-even"
            :style="{ transform: `translateY(${-scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/hstd.jpg" alt="" />
          </div>
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/oddbee.jpg" alt="" />
          </div>
          <div
            class="image-box col-even"
            :style="{ transform: `translateY(${-scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/mm4.jpg" alt="" />
          </div>
        </div>
        <div class="image-line">
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/cry_4.jpg" alt="" />
          </div>
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/mm5.jpg" alt="" />
          </div>
          <div
            class="image-box col-even"
            :style="{ transform: `translateY(${-scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/mm3.jpg" alt="" />
          </div>
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/ktms.jpg" alt="" />
          </div>
          <div
            class="image-box col-even"
            :style="{ transform: `translateY(${-scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/mm6.jpg" alt="" />
          </div>
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/mm7.jpg" alt="" />
          </div>
          <div
            class="image-box col-even"
            :style="{ transform: `translateY(${-scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/tessin2.png" alt="" />
          </div>
        </div>
        <div class="image-line">
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/cry_5.jpg" alt="" />
          </div>
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/mm8.jpg" alt="" />
          </div>
          <div
            class="image-box col-even"
            :style="{ transform: `translateY(${-scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/cry_8.jpg" alt="" />
          </div>
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/mm9.jpg" alt="" />
          </div>
          <div
            class="image-box col-even"
            :style="{ transform: `translateY(${-scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/mm10.jpg" alt="" />
          </div>
          <div
            class="image-box col-odd"
            :style="{ transform: `translateY(${scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/cry_9.jpg" alt="" />
          </div>
          <div
            class="image-box col-even"
            :style="{ transform: `translateY(${-scrollPos}%)` }"
          >
            <img src="@/assets/images/decor-gallery/cry_2.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
const scrollPos = ref(0);
const top = ref(null);
const topActive = ref(false);

const scroll = () => {
  if (window.pageYOffset < top.value.clientHeight) {
    scrollPos.value = window.scrollY * 0.05;
  }
};
if (process.client) {
  window.addEventListener("scroll", scroll);
}

const titleBlock = ref(null);
onMounted(() => {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        topActive.value = true;
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  observer.observe(titleBlock.value);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scroll);
});
</script>
<style lang="scss">
.main-screen .title {
  font-size: 5rem;
  margin-top: 5rem;
  text-transform: uppercase;
  line-height: 1.2;
  @media screen and (max-width: 576px) {
    font-size: 2rem;
    margin-top: 3rem;
  }
}
.main-screen > .decor-gallary-wrap {
  overflow: hidden;
  height: 90vh;
  background: var(--black);
  margin-top: 6rem;
  @media (max-width: 1200px) {
    height: 30rem;
    margin-top: 3rem;
  }
}

.main-screen > .decor-gallary-wrap > .decor-gallery {
  display: flex;
  flex-direction: column;
  transform: rotate(-45deg);
}

.main-screen > .decor-gallary-wrap > .decor-gallery .image-line {
  display: flex;
  flex-wrap: nowrap;
  transform: translateY(-300px) translateX(50px);
}
.main-screen > .decor-gallary-wrap .image-box {
  margin: 30px;
  @media (max-width: 576px) {
    margin: 15px;
  }
}
.main-screen > .decor-gallary-wrap .image-box img {
  height: 510px;
  width: 310px;
  @media (max-width: 576px) {
    height: 390px;
    width: 220px;
  }
}
.main-screen > .decor-gallary-wrap .image-box.col-odd {
  transform: translateY(0);
}
.main-screen > .decor-gallary-wrap .image-box.col-even {
  transform: translateY(-0);
}

.main-screen {
  .title {
    .text-line {
      transform: translateY(100%);
      opacity: 0;
    }

    .text-line:first-child {
      transition: transform 0.4s ease, opacity 0.4s ease;
    }
    .text-line:nth-child(2) {
      transition: transform 0.6s ease, opacity 0.6s ease;
    }
    .text-line:last-child {
      transition: transform 0.7s ease, opacity 0.7s ease;
    }
  }
  .title.active {
    .text-line {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>