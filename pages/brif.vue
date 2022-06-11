<template>
  <section id="brif">
    <div class="container">
      <div class="row">
        <div class="col-3">
            <h1 class="page-title">
              Заполните<br />пожалуйста<br /><span>бриф</span>
            </h1>
            <p class="subtitle">
              При заказе проекта базовая <b>SEO оптимизация</b> в подарок
            </p>
        </div>
        <div class="col-3">
          <form class="brif-form">
            <div class="form-block">
              <FormLabel :title="'Название продукта*'" />
              <FormTextInput
                :placeholder="'Например продаем одежду, создаем сервис знакомств...'"
              />
            </div>

            <div class="form-block">
              <FormLabel :title="'Выберите тип работ*'" />
              <div class="chekbox-block">
                <FormCheckbox :name="'Веб-сервис'" />
                <FormCheckbox :name="'Сайт'" />
                <FormCheckbox :name="'Интернет-магазин'" />
                <FormCheckbox :name="'Frontend Разработка'" />
              </div>
            </div>

            <div class="form-block">
              <div class="inputs-block">
                <div class="item">
                  <FormLabel :title="'Ваше имя*'" />
                  <FormTextInput :placeholder="'Введите имя'" />
                </div>
                <div class="item">
                  <FormLabel :title="'Ваше контакт*'" />
                  <FormTextInput :placeholder="'+7(___)___-__-__'" />
                </div>
                <div class="item">
                  <FormLabel :title="'Описание проекта*'" />
                  <FormTextArea
                    :name="'Описание проекта'"
                    :placeholder="'Опишите кратко проект'"
                  />
                </div>
              </div>
            </div>

            <div class="form-block">
              <FormLabel :title="'Техническое задание'" />
              <FormFile />
            </div>
            <div class="send-form-block">
              <FormBtn :name="'Отправить'" />
              <FormAgree />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss">
#brif {
  padding-top: var(--section-bottom);
  .subtitle {
    font-size: 1.5rem;
    margin-top: 3rem;
    width: 50%;
  }
  .brif-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3.5rem;
    padding-bottom: 10rem;
    .form-agree {
      margin-top: 2rem;
    }
    .form-block {
      .form-label {
        margin-bottom: 1rem;
      }
      .chekbox-block {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }
      .inputs-block {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        .item:last-child {
          grid-column: 1/3;
        }
      }
    }
    .form-block:after {
      content: "";
      width: 100%;
      height: 1px;
      background: rgba($color: #000, $alpha: 0.5);
      display: block;
      margin-top: 3rem;
    }
  }
}
</style>