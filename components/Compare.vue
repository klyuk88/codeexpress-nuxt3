<template>
  <ImgComparisonSlider>
    <!-- eslint-disable -->
    <img slot="first" style="width: 100%" src="https://img-comparison-slider.sneas.io/demo/images/before.webp" />
    <img slot="second" style="width: 100%" src="https://img-comparison-slider.sneas.io/demo/images/after.webp" />
    <!-- eslint-enable -->
  </ImgComparisonSlider>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    ImgComparisonSlider: defineAsyncComponent(() =>
      import('@img-comparison-slider/vue').then(({ ImgComparisonSlider }) => ImgComparisonSlider)
    ),
  },
});
</script>
