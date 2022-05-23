<template>
  <div class="portfolio-item flex center column j-center">
    <h2 class="pi-title">Личный кабинет охранного предприятия</h2>
    <span class="pi-data">Март 2022</span>
    <nuxt-link to="#" class="pi-btn flex center j-center">
      <svg
        width="27px"
        height="12.3428955px"
        viewBox="0 0 27 12.3428955"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        class="pi-btn-arrow"
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
    </nuxt-link>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.portfolio-item {
  padding: 5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  .pi-title {
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    width: 60%;
    text-align: center;
    line-height: 1.3;
  }
  .pi-data {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 1rem;
  }
  .pi-btn {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    margin-top: 1rem;
    .pi-btn-arrow {
      width: 1.5rem;
      height: auto;
      #Shape {
      fill: #000;
    }
  }
    }
}
</style>