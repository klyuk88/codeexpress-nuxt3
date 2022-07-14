<template>
  <div
    class="decorative-name"
    ref="decorLogo"
    :style="{ transform: `translateX(${logoScroll - 20}%)` }"
  >
    Launch<span>+</span>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const decorLogo = ref(null);
const logoScroll = ref(0);

onMounted(() => {
  const logoOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  function scrollLogo(param) {
    logoScroll.value = window.scrollY * 0.02 - param * 0.015;
  }

  let t;
  function logoCallback(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        t = scrollLogo.bind(null, window.scrollY);
        window.addEventListener("scroll", t, false);
      } else {
        window.removeEventListener("scroll", t, false);
      }
    });
  }
  const logoObserver = new IntersectionObserver(logoCallback, logoOptions);
  logoObserver.observe(decorLogo.value);
});

//decor logo
</script>
<style lang="scss">
.technologies .decorative-name {
  font-family: "Raleway";
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20rem;
  color: #fff;
  margin-top: 8rem;
  @media (max-width: 576px) {
    font-size: 5rem;
    margin-top: 3rem;
  }
}
.technologies .decorative-name span {
  font-weight: 400;

}
</style>