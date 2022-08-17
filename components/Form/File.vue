<template>
<div class="fileInput-block">
  <label class="form-file">
    <client-only>
      <img src="@/assets/images/attach-icon.svg" alt="" class="icon" />
    </client-only>
    <input
      type="file"
      name="техническое задание"
      id=""
      accept="application/pdf, application/msword"
      ref="fileInput"
      @change="fileHeandler"
    />
    <span class="label">Выбрать файл</span>
  </label>
  <p class="fileInput-name" v-if="fileName">
    {{fileName}}
    <span class="clearFileInput" @click="clearFileInput">X</span>
  </p>
</div>
  
</template>
<script setup>
import { ref } from 'vue'
const emit = defineEmits(['newFile','clearFile'])
const fileInput = ref(null)
const fileName = ref(null)
const fileHeandler = () => {
  fileName.value = fileInput.value.files[0].name;
  emit('newFile', fileInput.value.files[0])
}
const clearFileInput = () => {
  fileInput.value.value = null
  fileName.value = null
  emit('clearFile')
}

</script>
<style lang="scss" scoped>
.form-file {
  display: flex;
  background: #e4e4e4;
  align-items: center;
  justify-content: center;
  border: 1px solid #d3d3d3;
  height: 3.5rem;
  width: 15rem;
  cursor: pointer;
  transition: all 0.1s ease;
  input {
    display: none;
  }
  .icon {
    margin-right: 16px;
    width: 2rem;
  }
  .label {
    color: rgba(0, 0, 0, 0.2);
  }
}
.form-file:hover {
  border-color: var(--accent);
  background: rgba($color: #ed7635, $alpha: 0.07);
}

.fileInput-block {
  display: flex;
  align-items: center;
  gap: 1rem;
  .fileInput-name {
    font-size: 1rem;
  }
  .clearFileInput {
    cursor: pointer;
    color: var(--accent)
  }
}
</style>