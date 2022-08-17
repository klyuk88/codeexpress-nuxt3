<template>
  <section class="thanks-page">
    <div class="container">
        <div class="thanks-content">
          <h1 class="page-title">Спасибо за обращение 🙂</h1>
          <p class="thanks-subtitle">
            В ближайшее время мы обязательно вам ответим.
          </p>
          <NuxtLink to="/">
          <EffectWord :title="'На главную'" />
          </NuxtLink>
           
        </div>
    </div>
  </section>
</template>
<script setup>
</script>
<style lang="scss">
  .thanks-content {
    padding: 12rem 0;
    text-align: center;
  }
  .thanks-subtitle {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
</style>