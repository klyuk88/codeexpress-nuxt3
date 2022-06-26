<template>
  <div
    class="portfolio-item flex center column j-center"
    :class="{ light: !store.darkMode }"
    ref="item"
    
  >
  <nuxt-link to="/projects/best_work" class="item-link" @mousemove="moveThumb" @mouseleave="resetCoordinate" @mouseenter="resetScale"></nuxt-link>

    <h2 class="title">Личный кабинет охранного предприятия</h2>
    <div class="meta">
      <span class="data">Март 2022</span>
      <span class="data">Сайт под ключ</span>
    </div>
    <div to="#" class="item-btn flex center j-center">
      <svg
        width="27px"
        height="12.3428955px"
        viewBox="0 0 27 12.3428955"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        class="btn-arrow"
      >
        <defs>
          <path d="M0 0L27 0L27 12.3429L0 12.3429L0 0Z" id="path_1" />
          <clipPath id="mask_1">
            <use xlink:href="#path_1" />
          </clipPath>
        </defs>
        <g id="arrow-2-Copy">
          <path
            d="M0 0L27 0L27 12.3429L0 12.3429L0 0Z"
            id="Background"
            fill="none"
            fill-rule="evenodd"
            stroke="none"
          />
          <g clip-path="url(#mask_1)">
            <path
              d="M27 5.9545L27 6.42214C24.3641 6.99787 22.4503 9.67919 21.6636 12.3429C21.6632 12.3446 21.3393 12.2332 21.3298 12.2299C21.32 12.2267 21.3404 12.2316 21.341 12.2296C21.9372 10.1919 22.5918 7.93468 24.2449 6.4653C20.0259 6.56436 17.1347 6.72191 13.6467 6.73975L13.6459 6.73976C9.59472 6.76048 5.54671 6.7812 0.359056 6.92895L0 6.93917L0 5.40953L24.2449 5.87755C22.5918 4.40817 21.9421 2.17339 21.341 0.113285C21.341 0.113285 20.9959 0.227207 21.3296 0.113657C21.6634 0.000107107 21.6633 0 21.6633 0C22.4432 2.66893 24.3636 5.37866 27 5.9545L27 5.9545Z"
              id="Shape"
              fill="#FFFFFF"
              fill-rule="evenodd"
              stroke="none"
            />
          </g>
        </g>
      </svg>
    </div>
    <div class="thumb-block"
    :style="{
      transform: `translate3d(${coordinates.x * 0.08 }vw, ${coordinates.y * 0.03 }vh, 0) rotateZ(${coordinates.x * 0.02 }deg) scale3d(${scale},1,1)`,
      }">

      <img
        src="https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
        class="thumb"
      />
    </div>
  </div>
</template>

<script setup>
import {useStore} from '@/stores/store.js'
import { ref, reactive } from "vue";
const store = useStore()
const props = defineProps(["light"]);
const item = ref(null);
const coordinates = reactive({
  x: 0,
  y: 0,
});
const scale = ref(1.2)
const moveThumb = (event) => {
  let w = event.currentTarget.clientWidth
  let h = event.currentTarget.clientHeight
  coordinates.x = event.offsetX - w / 2;
  coordinates.y = event.offsetY - h / 2;
};
const resetCoordinate = () => {
  coordinates.x = 0;
  coordinates.y = 0;
  scale.value = 1.1
}
const resetScale = () => {
  scale.value = 1
}
</script>

<style lang="scss">
.portfolio-item {
  padding: 5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  position: relative;
  z-index: 2;
  .title {
    font-size: 2.5rem;
    text-transform: uppercase;
    width: 60%;
    text-align: center;
    line-height: 1.3;
    z-index: 1;
    transition: color 0.2s ease;
  }
  .meta {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .data {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 1rem;
    transition: color 0.2s ease;
  }
  .data:after {
    content: "●";
    margin: 0 10px;
  }
  .data:last-child:after {
    content: "";
    margin: 0;
  }
  .item-btn {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    margin-top: 1rem;
    z-index: 1;
    transition: background 0.2s ease;
    .btn-arrow {
      width: 1.5rem;
      height: auto;
      #Shape {
        fill: #000;
        transition: fill 0.2s ease;
      }
    }
  }
  .thumb-block {
    position: absolute;
    width: 37rem;
    height: 20rem;
    z-index: 0;
    opacity: 0;
    transition: transform 0.3s linear, opacity .5s ease;
    transform-style: preserve-3d;
    will-change: transform;
    .thumb {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      object-fit: cover;
    }
  }
  .item-link {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: transparent;
  }
}
.portfolio-item.light {
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  .title {
    color: rgba(0, 0, 0, 0.498039);
  }
  .data {
    color: rgba(0, 0, 0, 0.498039);
  }
  .item-btn {
    background: #d3d3d3;
  }
}
.portfolio-item:hover {
  cursor: pointer;
  .title {
    color: var(--accent) !important;
  }
  .data {
    color: var(--accent);
  }
  .item-btn {
    background: var(--accent);
    .btn-arrow {
      width: 1.5rem;
      height: auto;
      #Shape {
        fill: #fff;
      }
    }
  }
  .thumb-block {
    opacity: 1;
    transform: scale(1);
  }
}
</style>