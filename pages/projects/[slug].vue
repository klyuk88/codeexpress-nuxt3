<template>
<div>
  <div id="single-project-page">
    <div class="container">
      <div class="title-block">
        <h1 class="page-title">Личный кабинет охранного предприятия</h1>
        <p class="subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          eligendi eos nobis impedit veniam illo soluta quae facilis repellendus
          corporis.
        </p>
      </div>
      <div class="cover-block">
        <img src="@/assets/images/cover_demo.png" alt="" class="cover" />
      </div>
      <div class="single-project-header">
        <a href="http://" target="_blank" class="sp-link">
          <EffectWord :title="'Перейти на сайт'" />
        </a>
        <div class="decor-line"></div>
      </div>
      <div class="single-project-content">
        <div class="sidebar-block">
          <div class="sidebar">
            <h3 class="title">Услуги:</h3>
            <ul class="services-list">
              <li class="item">Веб дизайн</li>
              <li class="item">Верстка</li>
              <li class="item">Программированике</li>
            </ul>
            <div class="sidebar-cta">
              <h4 class="title">Обсудим<br>ваш проект?</h4>
              <nuxt-link to="/brif" class="sidebar-link">
                <EffectWord :title="'Заполнить бриф'" />
              </nuxt-link>
              <!-- <FormBtn :name="'Заполнить бриф'"/> -->
            </div>
          </div>
        </div>
        <div class="main">
          <img src="@/assets/images/abstract_2.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  <MainCTA/>
</div>

</template>
<script>
export default {};
</script>
<style lang="scss">
#single-project-page {
  .title-block {
    display: grid;
    grid-template-columns: 66.6% 1fr;
    gap: 20px;
    align-items: flex-end;
    padding: 7rem 0;
  }
  .cover-block {
    position: relative;
    width: 100%;
    height: 90vh;
    // margin-bottom: 4rem;
    .cover {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      left: 0;
      top: 0;
    }
  }
  .single-project-header {
    text-align: right;
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-top: 1.2rem;
    will-change: transform;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    z-index: 200;
    background: var(--light);
    .sp-link {
      padding: 1rem 0;
      display: inline-block;
    }
  }
  .single-project-content {
    display: grid;
    grid-template-columns: 33.3% 1fr;
    gap: 20px;
    padding-bottom: 6rem;
    .sidebar-block {
      .sidebar {
        position: sticky;
        position: -webkit-sticky;
        will-change: transform;
        top: 7.5rem;
        bottom: auto;
        .title {
          font-size: 1.5rem;
          color: #000;
          font-weight: 700;
          text-transform: uppercase;
        }
        .services-list {
          list-style: none;
          padding: 0;
          margin-top: 2rem;
          .item {
            text-transform: uppercase;
            font-weight: 700;
            font-size: 1rem;
            color: rgba($color: #000000, $alpha: 0.5);
            margin-bottom: 1rem;
          }
        }
        .sidebar-cta {
          margin-top: 15rem;
          .title {
            font-size: 1.1rem;
            line-height: 1.2;
          }
          .sidebar-link {
            display: inline-block;
            margin-top: 2rem;
          }

         
        }
      }
    }
    .main {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>