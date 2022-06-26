<template>
  <section class="about">
    <div class="container">
      <div class="decor-line" style="margin-bottom: var(--section-bottom)"></div>
      <div class="row">
        <div class="col-3">
          <h2 class="section-title">Работаем <br/>на <span>результат</span></h2>
        </div>
        <div class="col-3">
          <p class="text">
            Мы не большая, но эффективная команда IT специалистов. Сфокусированы
            на разработке веб-сервисов, корпоративных сайтов,
            интернет-магазинов, личных кабинетов.
          </p>
          <nuxt-link to="/">
            <FormBtn :name="'Заполнить бриф'"/>
          </nuxt-link>
        </div>
      </div>
      <div class="decor-line" style="margin-top: var(--section-bottom)"></div>
    </div>
  </section>
</template>
<script>
export default {
    
}
</script>
<style>
.about {
  padding-top: var(--section-top);
}
.about .btn {
  margin-top: 1.5em;
}

    
</style>