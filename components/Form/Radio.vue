<template>
  <div class="form-checkbox">
    <input
      :id="modelValue"
      type="radio"
      :name="name"
      :value="modelValue"
      @change="checkHeandler(event)"
      ref="radioInput"
    />
    <label class="check-block" :for="modelValue">
      <span>{{ modelValue }}</span>
      <div class="check"></div>
    </label>
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
const props = defineProps(["modelValue", "name"]);
const emit = defineEmits(["update:modelValue"]);
const radioInput = ref(null);
const check = ref(false);
const checkHeandler = (event) => {
  emit("update:modelValue", props.modelValue);
};
</script>
<style lang="scss">
.form-checkbox {
  position: relative;
  input {
    display: none;
  }
  input:checked + .check-block {
    border: 1px solid var(--accent);
    background: rgba($color: #ed7635, $alpha: 0.07);
  }
  input:checked + .check-block .check {
    background: var(--accent);
    border-color: var(--accent);
  }

  input:checked + .check-block span {
    color: var(--accent);
  }
  .check-block {
    background: #e4e4e4;
    border: 1px solid #d3d3d3;
    height: 3.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    transition: all 0.1s ease;
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
}
</style>