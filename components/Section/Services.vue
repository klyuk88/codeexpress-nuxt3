<template>
   <section class="services">
    <div class="container">
      <div class="row center">
        <div class="col-3">
          <h2 class="section-title">
            Возьмёмся за <br />проект <span>любой</span><br />
            сложности
            <ul class="list">
              <li class="item">
                <div class="header">
                  <h3 class="title">Разработка сайта</h3>
                  <img src="@/assets/images/plus.svg" alt="" class="open-icon"/>
                </div>
                <div class="body">
                  <p class="text">
                    To be quite frank, the example of the major decisions, that
                    lie behind the base configuration becomes a key factor of
                    The Scale of Up-To-Date Challenge (Santo Berg in The Book of
                    the Bilateral Act)
                  </p>
                  <nuxt-link to="/">
                    <button class="btn min-btn">
                      Заполнить бриф
                      <img src="@/assets/images/btn-arrow.svg" alt="" />
                    </button>
                  </nuxt-link>
                </div>
              </li>
              <li class="item">
                <div class="header">
                  <h3 class="title">Разработка веб-сервиса</h3>
                  <img src="@/assets/images/plus.svg" alt="" class="open-icon"/>
                </div>
                <div class="body">
                  <p class="text">
                    To be quite frank, the example of the major decisions, that
                    lie behind the base configuration becomes a key factor of
                    The Scale of Up-To-Date Challenge (Santo Berg in The Book of
                    the Bilateral Act)
                  </p>
                  <nuxt-link to="/">
                    <button class="btn min-btn">
                      Заполнить бриф
                      <img src="@/assets/images/btn-arrow.svg" alt="" />
                    </button>
                  </nuxt-link>
                </div>
              </li>
              <li class="item">
                <div class="header">
                  <h3 class="title">Разработка интернет-магазина</h3>
                  <img src="@/assets/images/plus.svg" alt="" class="open-icon"/>
                </div>
                <div class="body">
                  <p class="text">
                    To be quite frank, the example of the major decisions, that
                    lie behind the base configuration becomes a key factor of
                    The Scale of Up-To-Date Challenge (Santo Berg in The Book of
                    the Bilateral Act)
                  </p>
                  <nuxt-link to="/">
                    <button class="btn min-btn">
                      Заполнить бриф
                      <img src="@/assets/images/btn-arrow.svg" alt="" />
                    </button>
                  </nuxt-link>
                </div>
              </li>
              <li class="item">
                <div class="header">
                  <h3 class="title">Frontend разработка</h3>
                  <img src="@/assets/images/plus.svg" alt="" class="open-icon"/>
                </div>
                <div class="body">
                  <p class="text">
                    To be quite frank, the example of the major decisions, that
                    lie behind the base configuration becomes a key factor of
                    The Scale of Up-To-Date Challenge (Santo Berg in The Book of
                    the Bilateral Act)
                  </p>
                  <nuxt-link to="/">
                    <button class="btn min-btn">
                      Заполнить бриф
                      <img src="@/assets/images/btn-arrow.svg" alt="" />
                    </button>
                  </nuxt-link>
                </div>
              </li>
              <li class="item">
                <div class="header">
                  <h3 class="title">SEO оптимизация</h3>
                  <img src="@/assets/images/plus.svg" alt="" class="open-icon"/>
                </div>
                <div class="body">
                  <p class="text">
                    To be quite frank, the example of the major decisions, that
                    lie behind the base configuration becomes a key factor of
                    The Scale of Up-To-Date Challenge (Santo Berg in The Book of
                    the Bilateral Act)
                  </p>
                  <nuxt-link to="/">
                    <button class="btn min-btn">
                      Заполнить бриф
                      <img src="@/assets/images/btn-arrow.svg" alt="" />
                    </button>
                  </nuxt-link>
                </div>
              </li>

            </ul>
          </h2>
        </div>
        <div class="col-3">
          <div class="screens-block">
            <div class="screen">
              <img src="@/assets/images/screen.png" alt="" class="image">
            </div>
            <div class="screen">
              <img src="@/assets/images/screen.png" alt="" class="image">
            </div>
            <div class="screen">
              <img src="@/assets/images/screen.png" alt="" class="image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    
}
</script>
<style>
.services {
  padding-top: var(--section-top);
  padding-bottom: var(--section-bottom);
  background: #191818;
}
.services .section-title {
  color: #fff;
}

.services .list {
  list-style: none;
  padding: 0;
  margin-top: 2rem;
}

.services .list > .item {
  border-bottom: 1px solid #fff;
  padding-bottom: 1.5rem;
}

.services .list > .item.active .body {
  max-height: 1000px;
}
.services .list > .item.active .header .open-icon {
  transform: rotate(-45deg);
}

.services .list > .item .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.services .list > .item .header .title {
  font-size: 2rem;
  font-family: 'Raleway';
  font-weight: 700;
  text-transform: none;
}

.services .list > .item .header .open-icon {
  width: 1.5rem;
  cursor: pointer;
  transition: all .3s ease-in;
}

.services .list > .item .body {
  max-height: 0;
  transition: all .3s ease-in;
  overflow: hidden;
}


.services .list > .item .body .btn {
  margin-top: 1.5rem;
}

.services .list > .item .body .text {
  width: 85%;
  margin-top: 1.5rem;
}
.services .screen {
  width: 30rem;
  height: 18rem;
  background: #555555;
  border-radius: 1.2rem;
  margin: 0 auto;
  position: relative;
}

.services .screens-block .screen:nth-child(2), .services .screens-block .screen:nth-child(3) {
  margin-top: -5rem;
}

.services .screen .image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  border-radius: 1.2rem;
  border: 0.5rem solid #555555;


}
    
</style>