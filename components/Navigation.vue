<template>
  <div class="navigation-wrap" :class="{ active: store.showNav }">
    <div class="nav-header-block">
      <img src="@/assets/images/logo-white.svg" alt="logo" class="nav-logo" />
      <span class="close-nav" @click="closeNav"> Закрыть </span>
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
          <img
            src="https://assets-global.website-files.com/61c48ad0e69d706fcbc36049/61e69b889d04172d57dd4148_Rectangle%20325.png"
            alt=""
          />
        </div>
        <div class="nav-contacts-block">
          <a href="tel:+79859227045" class="link">+7 985 922 70 45</a>
          <a href="mailto:hello@launchplus.ru" class="link">hello@launchplus.ru</a>
          <a
            href="http://t.me/klyukovskiy"
            target="_blank"
            rel="noopener noreferrer"
            class="link nav-tg"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_0_111"
                style="mask-type: alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="21"
              >
                <rect y="0.992676" width="20" height="20" fill="white" />
              </mask>
              <g mask="url(#mask0_0_111)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 1.30518C4.64813 1.30518 0.3125 5.64143 0.3125 10.9927C0.3125 16.3439 4.64875 20.6802 10 20.6802C15.3519 20.6802 19.6875 16.3439 19.6875 10.9927C19.6875 5.64143 15.3512 1.30518 10 1.30518ZM14.7581 7.94219L13.1681 15.4347C13.0506 15.9659 12.7343 16.0947 12.2931 15.8447L9.87121 14.0597L8.70308 15.1847C8.57433 15.3134 8.46496 15.4228 8.21496 15.4228L8.38683 12.9578L12.875 8.90281C13.0706 8.73094 12.8318 8.63344 12.5737 8.80532L7.02683 12.2972L4.63621 11.5509C4.11683 11.3872 4.10496 11.0316 4.74558 10.7816L14.0856 7.17969C14.5193 7.02344 14.8981 7.28532 14.7575 7.94157L14.7581 7.94219Z"
                  fill="var(--accent)"
                />
              </g>
            </svg>
            Telegram
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "@/stores/store.js";

const store = useStore();
const closeNav = () => {
  store.showNav = false
}
</script>
<style lang="scss">
.navigation-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  background: var(--black);
  left: 0;
  top: 0;
  z-index: 1000;
  display: none;
  padding: 0 2rem;
  .nav-header-block {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
    .line {
      width: 100%;
      height: 1px;
      background: #fff;
      bottom: 0;
      left: 0;
      position: absolute;
    }
    .nav-logo {
      width: 8rem;
    }
    .close-nav {
      font-size: 1rem;
      color: #fff;
      text-transform: uppercase;
      font-weight: 600;
      transition: color .3s ease;
      cursor: pointer;
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
          transition: color .1s ease;
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
      .link {
        display: inline-block;
      }
      .link.nav-tg {
        display: inline-flex;
        align-items: center;
        svg {
          margin-right: 0.5rem;
        }
      }
    }
  }
}
.navigation-wrap.active {
  display: block;
}

.router-link-active {
  color: var(--accent)!important;
}
</style>