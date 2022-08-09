<template>
  <div class="form-input flex column start">
   
    <input
      type="text"
      :placeholder="placeholder"
      class="text-input"
      :value="modelValue"
      :name="inputName"
      @input="$emit('update:modelValue', $event.target.value)"
      
    />
  </div>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: 'Подсказка'
  },
  modelValue: {
    type: [String, Number]
  },
  inputName: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])
</script>

<style lang="scss">
.form-input {
  position: relative;
  .text-input {
    width: 100%;
    height: 3.5rem;
    border: 1px solid;
    padding-left: 1rem;
    background: #e4e4e4;
    border: 1px solid #d3d3d3;
    font-family: "Raleway";
    font-size: 1rem;
    color: #000;
    position: relative;
    z-index: 0;
  }
  .text-input:focus {
    outline: none;
  }
  .text-input::placeholder {
    font-family: "Raleway";
    font-size: 1rem;
    color: rgba($color: #000, $alpha: 0.2);
  }
}
.form-input:focus-within:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.2rem;
  background: var(--accent);
  z-index: 1;
}
</style>