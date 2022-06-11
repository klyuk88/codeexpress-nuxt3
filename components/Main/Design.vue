<template>
  <section id="design" class="lower-indent">
    <div class="container">
      <div class="decor-line"></div>
      <div class="row">
        <div class="col-4">
          <h2 class="section-title">
            Уделяем дизайну<br /><span>особое</span> внимание
          </h2>
        </div>
        <div class="col-2">
          <p class="text">
            Делаем продуманные интерфейсы, опираясь на
            <b>целевую аудиторию</b> продукта.
          </p>
          <FormBtn :name="'Заполнить бриф'" />
        </div>
      </div>
      <div id="interactive-design">
        <Slider />
      </div>
    </div>
  </section>
</template>
<script>
</script>

<style lang="scss">
#design {
  .decor-line {
    margin-bottom: var(--section-top);
  }
}
#design .text {
  margin-bottom: 1rem;
}

#interactive-design {
  margin-top: 5rem;
}
</style>