<template>
  <label class="form-checkbox flex center j-between" :class="{'active': check}">
    <span>{{name}}</span>
    <input type="checkbox" :name="name" @input="checkHeandler" />
    <div class="check"></div>
  </label>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps(['name'])
const check = ref(false);

const checkHeandler = () => {
  check.value = !check.value;
};
</script>
<style lang="scss">
.form-checkbox {
  background: #e4e4e4;
  border: 1px solid #d3d3d3;
  height: 3.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  transition: all 0.1s ease;
  cursor: pointer;
  input {
    display: none;
  }

  span {
    font-size: 1rem;
    color: #000;
    font-weight: 600;
    transition: color 0.1s ease;
  }
  .check {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid #000;
    background: transparent;
    transition: all 0.1s ease;
  }
}
.form-checkbox.active {
  border: 1px solid var(--accent);
  background: rgba($color: #ED7635, $alpha: 0.07);
  .check {
    background: var(--accent);
    border-color: var(--accent);
  }
  span {
    color: var(--accent);
  }
}
</style>