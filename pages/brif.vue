<template>
  <div>
    <Head v-if="seoData">
      <Title>{{ seoData.metaTitle }}</Title>
      <Meta name="description" :content="seoData.metaDescription" />
      <Meta name="keywords" :content="seoData.keywords" />
    </Head>
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
                    :modelValue="'Разработка под ключ'"
                    v-model="brifForm.projectType"
                    :required="true"
                  />
                  <FormRadio
                    :name="'Тип проекта'"
                    :modelValue="'Frontend разработка'"
                    v-model="brifForm.projectType"
                    :required="false"
                  />
                  <FormRadio
                    :name="'Тип проекта'"
                    :modelValue="'HTML верстка'"
                    v-model="brifForm.projectType"
                    :required="false"
                  />
                  <FormRadio
                    :name="'Тип проекта'"
                    :modelValue="'Backend разработка'"
                    v-model="brifForm.projectType"
                    :required="false"
                  />
                  <FormRadio
                    :name="'Тип проекта'"
                    :modelValue="'Другое'"
                    v-model="brifForm.projectType"
                    :required="false"
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
                    <FormLabel :title="'Ваш контакт*'" />
                    <FormTextInput
                      :placeholder="'Укажите удобный способ связи с вами'"
                      v-model="brifForm.phone"
                    />
                    <FormSmall :msg="'(Телефон/WhatsApp/Telegram)'" />
                  </div>
                  <div class="item">
                    <FormLabel :title="'Описание проекта'" />
                    <client-only>
                      <FormTextArea
                        :placeholder="'Опишите ваш проект'"
                        v-model="brifForm.about"
                      />
                      <FormSmall :msg="'Необязательное поле'" />
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
                <FormSmall
                  :msg="`Размер не более ${fileSizeVal / 1024 / 1024}мб`"
                />
                <FormSmall
                  v-if="fileSize"
                  :msg="'Размер вложения превышает допустимое значение'"
                />
              </div>
              <div class="send-form-block">
                <div class="btn-block">
                  <FormBtn :name="'Отправить'" :active="brifForm.agree" />
                </div>

                <FormAgree
                  :agree="brifForm.agree"
                  @change="brifForm.agree = !brifForm.agree"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { serialize } from "object-to-formdata";
import { useRouter } from "vue-router";
import qs from "qs";
import axios from "axios";

const router = useRouter();
const getNewFile = (file) => {
  brifForm.file = file;
};
const fileSizeVal = ref(1024 * 1024 * 3);

const brifForm = reactive({
  product: null,
  projectType: null,
  name: null,
  phone: null,
  about: null,
  file: null,
  agree: true,
});

const fileSize = computed(() => {
  if (brifForm.file && brifForm.file.size > fileSizeVal.value) {
    return true;
  } else {
    return false;
  }
});

const runtimeConfig = useRuntimeConfig();
const query = qs.stringify({
  populate: ["seo"],
});
const { data: brifPage } = await useFetch(
  `${runtimeConfig.public.apiURL}/api/brif-page?${query}`
);
const seoData = ref(brifPage.value.data.attributes.seo);

const sendBrif = async () => {
  if (!fileSize.value) {
    const formData = serialize(brifForm);
    try {
      // await $fetch("/api/send", {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      //   method: "POST",
      //   body: formData,
      // });
      const res = await axios.post("/api/send", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/thanks");
    } catch (error) {
      console.log(error);
    }
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
  .btn-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 576px) {
      flex-direction: column;
    }
  }
  .validate-msg {
    color: var(--accent);
    text-align: center;
    font-size: 1rem;
    padding: 1rem 0;
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>