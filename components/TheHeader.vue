<template>
  <header class="header">
    <div class="container">
      <div class="row center">
        <div class="col-1">
          <div class="menu flex center">
            <img src="@/assets/images/menu-icon.svg" alt="" class="menu-icon" />
            <p class="menu-title">Меню</p>
          </div>
        </div>
        <div class="col-1">
          <img src="@/assets/images/logo-black.svg" alt="" class="logo" />
        </div>
        <div class="col">
          <div class="link-wrap">
            <nuxt-link to="/brif" class="link"> Заполнить бриф </nuxt-link>
          </div>
        </div>
      </div>
      <div class="decor-line"></div>
    </div>
  </header>
</template>
<script setup>
</script>
<style>
.header {
  padding: 20px 0;
}
.header .menu-title {
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
}

.header .menu-icon {
  margin-right: 10px;
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
}


</style>