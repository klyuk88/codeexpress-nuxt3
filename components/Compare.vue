<template>
  <ImgComparisonSlider>
    <!-- eslint-disable -->
    <img slot="first" style="width: 100%" src="@/assets/images/cart_design_1.webp" />
    <img slot="second" style="width: 100%" src="@/assets/images/cart_proto.webp" />
    <div slot="handle" class="handle">
      <img src="@/assets/images/handle-left.svg" alt="">
      <img src="@/assets/images/handle-right.svg" alt="">
    </div>
    <!-- eslint-enable -->
  </ImgComparisonSlider>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue';
// import before from "@/assets/images/mm_cover_before.jpg";
// import after from "@/assets/images/mm_cover_after.jpg";
export default defineComponent({
  name: 'App',
  components: {
    ImgComparisonSlider: defineAsyncComponent(() =>
      import('@img-comparison-slider/vue').then(({ ImgComparisonSlider }) => ImgComparisonSlider)
    ),
  },
});
</script>
<style lang="scss">
  img-comparison-slider:focus {
    outline: 1px solid var(--black);
  }
  img-comparison-slider {
    --divider-color: var(--black);
    --default-handle-color: var(--accent);
    .handle {
      background: var(--black);
      width: 3rem;
      height: 3rem;
      padding: 0.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }
  }
</style>
