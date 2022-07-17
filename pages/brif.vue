<template>
  <section id="brif">
    <div class="container">
      <div class="brif-grid">
        <div class="col-3">
          <div class="fixed-sidebar">
            <h1 class="page-title">
              Заполните<br />пожалуйста<br /><span>бриф</span>
            </h1>
            <p class="subtitle">
              При заказе проекта базовая <b>SEO оптимизация</b> в подарок
            </p>
          </div>
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
  .brif-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
    }
  }
  .fixed-sidebar {
    position: -webkit-sticky;
    position: sticky;
    top: 7rem;
  }
  .subtitle {
    font-size: 1.5rem;
    margin-top: 3rem;
    width: 50%;
    @media (max-width: 576px) {
      font-size: 1rem;
      width: 100%;
      margin-top: 1rem;
    }
  }
  .brif-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3.5rem;
    padding-bottom: 10rem;
    @media (max-width: 576px) {
      gap: 2rem;
      padding-bottom: 5rem;
    }
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
        @media (max-width: 576px) {
          grid-template-columns: 100%;
        }
      }
      .inputs-block {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        @media (max-width: 576px) {
          grid-template-columns: 100%;
          gap: 1.5rem;
        }
        .item:last-child {
          grid-column: 1/3;
          @media (max-width: 576px) {
            grid-column: 1/1;
          }
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