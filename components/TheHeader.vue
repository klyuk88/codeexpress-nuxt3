<template>
  <header class="header" :class="{ dark: store.darkMode }">
    <div class="container">
      <div class="row center">
        <div class="col-1">
          <div class="menu flex center" @click="showNavigation">
            <!-- <img src="@/assets/images/menu-icon.svg" alt="" class="menu-icon" /> -->
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 25 25"
              version="1.1"
              class="menu-icon"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <path d="M0 0L25 0L25 25L0 25L0 0Z" id="path_1" />
                <clipPath id="mask_1">
                  <use xlink:href="#path_1" />
                </clipPath>
              </defs>
              <g id="ui_menu_grid_icon_208820">
                <path
                  d="M0 0L25 0L25 25L0 25L0 0Z"
                  id="Background"
                  fill="none"
                  fill-rule="evenodd"
                  stroke="none"
                />
                <g clip-path="url(#mask_1)">
                  <g id="Group" transform="translate(3.125 3.125)">
                    <path
                      d="M0 1.04167C0 0.46637 0.46637 0 1.04167 0L4.16667 0C4.74198 0 5.20833 0.46637 5.20833 1.04167L5.20833 4.16667C5.20833 4.74198 4.74198 5.20833 4.16667 5.20833L1.04167 5.20833C0.46637 5.20833 0 4.74198 0 4.16667L0 1.04167Z"
                      id="Shape"
                      fill="#333333"
                      fill-rule="evenodd"
                      stroke="none"
                    />
                    <path
                      d="M0 7.81248C0 7.23717 0.46637 6.77081 1.04167 6.77081L4.16667 6.77081C4.74198 6.77081 5.20833 7.23717 5.20833 7.81248L5.20833 10.9375C5.20833 11.5128 4.74198 11.9791 4.16667 11.9791L1.04167 11.9791C0.46637 11.9791 0 11.5128 0 10.9375L0 7.81248Z"
                      id="Shape"
                      fill="#333333"
                      fill-rule="evenodd"
                      stroke="none"
                    />
                    <path
                      d="M0 14.5833C0 14.008 0.46637 13.5417 1.04167 13.5417L4.16667 13.5417C4.74198 13.5417 5.20833 14.008 5.20833 14.5833L5.20833 17.7083C5.20833 18.2836 4.74198 18.75 4.16667 18.75L1.04167 18.75C0.46637 18.75 0 18.2836 0 17.7083L0 14.5833Z"
                      id="Shape"
                      fill="#333333"
                      fill-rule="evenodd"
                      stroke="none"
                    />
                    <path
                      d="M6.77081 1.04167C6.77081 0.46637 7.23717 0 7.81248 0L10.9375 0C11.5128 0 11.9791 0.46637 11.9791 1.04167L11.9791 4.16667C11.9791 4.74198 11.5128 5.20833 10.9375 5.20833L7.81248 5.20833C7.23717 5.20833 6.77081 4.74198 6.77081 4.16667L6.77081 1.04167Z"
                      id="Shape"
                      fill="#333333"
                      fill-rule="evenodd"
                      stroke="none"
                    />
                    <path
                      d="M6.77081 7.81248C6.77081 7.23717 7.23717 6.77081 7.81248 6.77081L10.9375 6.77081C11.5128 6.77081 11.9791 7.23717 11.9791 7.81248L11.9791 10.9375C11.9791 11.5128 11.5128 11.9791 10.9375 11.9791L7.81248 11.9791C7.23717 11.9791 6.77081 11.5128 6.77081 10.9375L6.77081 7.81248Z"
                      id="Shape"
                      fill="#333333"
                      fill-rule="evenodd"
                      stroke="none"
                    />
                    <path
                      d="M6.77081 14.5833C6.77081 14.008 7.23717 13.5417 7.81248 13.5417L10.9375 13.5417C11.5128 13.5417 11.9791 14.008 11.9791 14.5833L11.9791 17.7083C11.9791 18.2836 11.5128 18.75 10.9375 18.75L7.81248 18.75C7.23717 18.75 6.77081 18.2836 6.77081 17.7083L6.77081 14.5833Z"
                      id="Shape"
                      fill="#333333"
                      fill-rule="evenodd"
                      stroke="none"
                    />
                    <path
                      d="M13.5417 1.04167C13.5417 0.46637 14.008 0 14.5834 0L17.7084 0C18.2837 0 18.75 0.46637 18.75 1.04167L18.75 4.16667C18.75 4.74198 18.2837 5.20833 17.7084 5.20833L14.5834 5.20833C14.008 5.20833 13.5417 4.74198 13.5417 4.16667L13.5417 1.04167Z"
                      id="Shape"
                      fill="#333333"
                      fill-rule="evenodd"
                      stroke="none"
                    />
                    <path
                      d="M13.5417 7.81248C13.5417 7.23717 14.008 6.77081 14.5834 6.77081L17.7084 6.77081C18.2837 6.77081 18.75 7.23717 18.75 7.81248L18.75 10.9375C18.75 11.5128 18.2837 11.9791 17.7084 11.9791L14.5834 11.9791C14.008 11.9791 13.5417 11.5128 13.5417 10.9375L13.5417 7.81248Z"
                      id="Shape"
                      fill="#333333"
                      fill-rule="evenodd"
                      stroke="none"
                    />
                    <path
                      d="M13.5417 14.5833C13.5417 14.008 14.008 13.5417 14.5834 13.5417L17.7084 13.5417C18.2837 13.5417 18.75 14.008 18.75 14.5833L18.75 17.7083C18.75 18.2836 18.2837 18.75 17.7084 18.75L14.5834 18.75C14.008 18.75 13.5417 18.2836 13.5417 17.7083L13.5417 14.5833Z"
                      id="Shape"
                      fill="#333333"
                      fill-rule="evenodd"
                      stroke="none"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <EffectWord :title="'Меню'" />
            <!-- <p class="menu-title">Меню</p> -->
          </div>
        </div>
        <div class="col-1">
          <NuxtLink to="/">
            <img src="@/assets/images/logo-black.svg" alt="" class="logo" />
          </NuxtLink>
        </div>
        <div class="col">
          <div class="col-wrap">
            <nuxt-link to="/brif">
              <EffectWord :title="'Заполнить бриф'" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="decor-line"></div>
    </div>
  </header>
</template>
<script setup>
import { useStore } from "@/stores/store.js";
const store = useStore();
const showNavigation = () => {
  store.showNav = true;
};
</script>
<style lang="scss">
.header {
  padding-top: 1.2rem;
  position: sticky;
  position: -webkit-sticky;
  will-change: transform;
  background: var(--light);
  top: 0;
  z-index: 100;
  transition: background 0.3s ease, color 0.3s ease;
  .menu {
    display: inline-flex;
    .link {
      font-weight: 600;
      color: #000;
    }
  }
  .menu:hover {
    cursor: pointer;
    .menu-title {
      color: var(--accent);
    }
    .link {
      color: var(--accent);
    }
    .menu-icon {
      #Group {
        path {
          fill: var(--accent);
        }
      }
    }
  }
}
.header .menu-title {
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  transition: color 0.1s ease;
}

.header {
  .menu-icon {
    transition: transform 0.2s ease;
    margin-right: 10px;
    #Group {
      path {
        transition: fill 0.1s ease;
      }
    }
  }
}

.header .link-wrap {
  text-align: right;
}

.header .container {
  position: relative;
}

.header .logo {
  width: 7vw;
}

.header .decor-line {
  margin-top: 20px;
  width: 0%;
  animation: widthProgress 1s ease 0.3s 1 normal both;
}

@keyframes widthProgress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}

.col-wrap {
  text-align: right;
}

.header.dark {
  background: var(--black);
  .decor-line {
    background: #fff;
  }
  .menu-title {
    color: #fff;
  }
  .link {
    color: #fff;
  }
  .menu-icon {
    #Group {
      path {
        fill: #fff;
      }
    }
  }
}
</style>