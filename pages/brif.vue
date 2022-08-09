<template>
  <section id="brif">
    <div class="container">
      <div class="brif-grid">
        <div class="col">
          <div class="fixed-sidebar">
            <h1 class="page-title">
              Заполните<br />пожалуйста<br /><span>бриф</span>
            </h1>
            <p class="subtitle">
              При заказе проекта базовая <b>SEO оптимизация</b> в подарок
            </p>
          </div>
        </div>
        <div class="col">
          <form class="brif-form" @submit.prevent="sendBrif">
            <div class="form-block">
              <FormLabel :title="'Название продукта*'" />
              <FormTextInput
                :placeholder="'Например продаем одежду, создаем сервис знакомств...'"
                v-model="brifForm.product"
                :name="'Название продукта'"
              />
            </div>

            <div class="form-block">
              <FormLabel :title="'Выберите тип работ*'" />
              <div class="chekbox-block">
                <FormRadio
                  :name="'Тип проекта'"
                  :modelValue="'Веб-сервис'"
                  v-model="brifForm.projectType"
                />
                <FormRadio
                  :name="'Тип проекта'"
                  :modelValue="'Сайт'"
                  v-model="brifForm.projectType"
                />
                <FormRadio
                  :name="'Тип проекта'"
                  :modelValue="'Интернет-магазин'"
                  v-model="brifForm.projectType"
                />
                <FormRadio
                  :name="'Тип проекта'"
                  :modelValue="'Frontend Разработка'"
                  v-model="brifForm.projectType"
                />
              </div>
            </div>

            <div class="form-block">
              <div class="inputs-block">
                <div class="item">
                  <FormLabel :title="'Ваше имя*'" />
                  <FormTextInput
                    :placeholder="'Введите имя'"
                    v-model="brifForm.name"
                  />
                </div>
                <div class="item">
                  <FormLabel :title="'Ваше контакт*'" />
                  <FormTextInput
                    :placeholder="'+7(___)___-__-__'"
                    v-model="brifForm.phone"
                  />
                </div>
                <div class="item">
                  <FormLabel :title="'Описание проекта*'" />
                  <client-only>
                    <FormTextArea
                      :placeholder="'Опишите ваш проект'"
                      v-model="brifForm.about"
                    />
                  </client-only>
                </div>
              </div>
            </div>

            <div class="form-block">
              <FormLabel :title="'Техническое задание'" />
              <FormFile
                @newFile="getNewFile"
                @clearFile="brifForm.file = null"
              />
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
import { ref, reactive } from "vue";
import { serialize } from "object-to-formdata";
import axios from "axios";

const getNewFile = (file) => {
  brifForm.file = file;
};

const brifForm = reactive({
  product: null,
  projectType: null,
  name: null,
  phone: null,
  about: null,
  file: "",
  agree: true,
});

const sendBrif = async () => {
  const formData = serialize(brifForm);
  console.log(formData);
  try {
    const res = await axios.post("/api/send", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  } catch (error) {
    console.log(error);
  }
};
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