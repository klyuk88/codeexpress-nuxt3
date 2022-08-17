<template>
  <div class="navigation-wrap" :class="{ active: store.showNav }">
    <div class="linesBackground">
      <div class="bg-line"></div>
      <div class="bg-line"></div>
      <div class="bg-line"></div>
    </div>
    <div class="nav-header-block">
      <img src="@/assets/images/logo-white.svg" alt="logo" class="nav-logo" />
      <EffectWord :title="'Закрыть'" class="close-nav" @click="closeNav" />
      <div class="line"></div>
    </div>

    <div class="nav-menu-block">
      <div>
        <ul class="nav">
          <li>
            <nuxt-link to="/">Главная</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/projects">Проекты</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/services">Услуги</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog">Статьи</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <div class="nav-image">
          <img src="@/assets/images/abstract_2.jpg" alt="" />
        </div>
        <div class="nav-contacts-block">
          <a href="mailto:hello@launchplus.ru" class="link foo-contact">
            <img src="@/assets/images/email.png" alt="" />
            hello@codeexpress.ru
          </a>
          <a href="tel:+79859227045" class="link foo-contact">
            <img src="@/assets/images/phone.png" alt="" />
            +79859227045
          </a>
          <a href="http://" class="link foo-contact">
            <img src="@/assets/images/telegram.png" alt="" />
            Telegram
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "@/stores/store.js";
import { useRouter } from "vue-router";

const router = useRouter();

router.afterEach((to, from) => {
  if (store.showNav) {
    setTimeout(() => {
      closeNav();
    }, 300);
  }
});

const store = useStore();
const closeNav = () => {
  store.showNav = false;
};
</script>
<style lang="scss">
.navigation-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
  padding: 0 2rem;
  transform: translateX(-200%);
  transition: transform 0.7s ease;
  @media (max-width: 576px) {
    padding: 0 0.9rem;
  }
  .linesBackground {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    .bg-line {
      width: 0;
      background: var(--black);
    }
    .bg-line:first-child {
      transition: width 1s ease 0.5s;
    }
    .bg-line:nth-child(2) {
      width: 0;
      transition: width 0.5s ease 0.5s;
    }
    .bg-line:last-child {
      width: 0;
      transition: width 0.3s ease 0.5s;
    }
  }
  .nav-header-block {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    z-index: 1;
    position: relative;
    opacity: 0;
    transition: opacity 0.3s ease 1.3s;
    .line {
      width: 0;
      height: 1px;
      background: #fff;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: width 0.3s ease 1.3s;
    }
    .nav-logo {
      width: 8rem;
    }
    .close-nav {
      font-size: 1rem;
      color: #fff;
      text-transform: uppercase;
      font-weight: 600;
      transition: color 0.3s ease;
      cursor: pointer;
      .link {
        color: #fff;
      }
    }
    .close-nav:hover {
      color: var(--accent);
    }
  }
  .nav-menu-block {
    margin-top: 7rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    z-index: 1;
    position: relative;
    opacity: 0;
    transition: opacity 0.3s ease 1.3s;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
      margin-top: 4rem;
    }
    .nav {
      padding: 0;
      list-style: none;
      li {
        a {
          font-size: 6rem;
          color: #fff;
          font-weight: 600;
          font-family: "Artegra";
          text-transform: uppercase;
          transition: color 0.1s ease;
          @media (max-width: 576px) {
            font-size: 3rem;
          }
        }
        a:hover {
          color: var(--accent);
        }
      }
    }
    .nav-image {
      position: relative;
      width: 100%;
      height: 25rem;
      background: #eee;
      @media (max-width: 576px) {
        display: none;
      }
      img {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        object-fit: cover;
      }
    }
    .nav-contacts-block {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      .link.nav-tg {
        display: inline-flex;
        align-items: center;
      }
    }
  }
}
.navigation-wrap.active {
  transform: translateX(0);
  .linesBackground {
    .bg-line {
      width: 100%;
    }
  }

  .nav-header-block {
    opacity: 1;
    .line {
      width: 100%;
    }
  }
  .nav-menu-block {
    opacity: 1;
  }
}
.foo-contact {
  display: flex;
  align-items: center;
  img {
    width: 20px;
    height: auto;
    margin-right: 0.5rem;
  }
}
</style>