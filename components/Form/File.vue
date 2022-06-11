<template>
    <label class="form-file">
      <img src="@/assets/images/attach-icon.svg" alt="" class="icon">
      <input type="file" name="техническое задание" id="" accept="application/pdf, application/msword">
      <span class="label">Выбрать файл</span>
    </label>
    <small class="small">необязательное поле</small>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.form-file {
  display: flex;
  background: #E4E4E4;
  align-items: center;
  justify-content: center;
  border: 1px solid #D3D3D3;
  height: 3.5rem;
  width: 15rem;
  cursor: pointer;
  transition: all .1s ease;
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
  background: rgba($color: #ED7635, $alpha: 0.07);
}
.small {
  color: rgba(0, 0, 0, 0.2);
  font-style: 0.9rem;
  margin-top: 0.3rem;
  display: block;
}
  
</style>