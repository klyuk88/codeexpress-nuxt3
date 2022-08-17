<template>
  <div class="form-textarea">
    <textarea
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    </textarea>
  </div>
  
</template>
<script setup>
const props = defineProps(["modelValue", "placeholder"]);
</script>
<style lang="scss">
.form-textarea {
  position: relative;

  textarea {
    width: 100%;
    height: 8rem;
    border: 1px solid;
    padding-left: 1rem;
    padding-top: 1rem;
    background: #e4e4e4;
    border: 1px solid #d3d3d3;
    font-family: "Raleway";
    font-size: 1rem;
    color: #000;
    position: relative;
    z-index: 0;
  }
  textarea:focus {
    outline: none;
  }
  textarea::placeholder {
    font-family: "Raleway";
    font-size: 1rem;
    color: rgba($color: #000, $alpha: 0.2);
  }
}
.small {
  color: rgba(0, 0, 0, 0.2);
  font-style: 0.9rem;
  margin-top: 0.3rem;
  display: block;
}
.form-textarea:focus-within:after {
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