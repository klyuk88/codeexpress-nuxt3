<template>
  <client-only>
    <image-compare :before="before" :after="after">
      <!-- <template v-slot:icon-left>
          <img src="@/assets/images/handle-left.svg" alt="" class="handle-left">
      </template>
      <template v-slot:icon-right>
        <img src="@/assets/images/handle-right.svg" alt="" class="handle-right">
      </template> -->
    </image-compare>
  </client-only>
</template>

<script setup>
import { ref } from "vue";
import imageCompare from "vue-image-compare2";

const before = ref("demo-screen.webp");
const after = ref("proto-demoX4.webp");
</script>

<style lang="scss">
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
  background-image: url('../../assets/images/handle-left.svg');
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
  background-image: url('../../assets/images/handle-right.svg');
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


// .handle-left, .handle-right {
//     width: 1rem;
// }

</style>