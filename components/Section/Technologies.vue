<template>
  <section class="technologies lower-indent">
    <div class="container">
        <div class="decor-line"></div>
      <div class="row">
        <div class="col-3">
          <h2 class="section-title">
            Следуем<br><span>передовым</span><br>тенденциям<br> в разработке
          </h2>
        </div>
        <div class="col-3">
            <p>Мы разрабатываем проекты на одном из самых популярных языков программирования <b>JavaScript</b> и его экосистемах.</p>
            <div class="infographics">
              <div class="item">
                <h4 class="lang-title">JavaScript</h4>
                <div class="lang-amount">
                  <span class="percent">18%</span>
                </div>
              </div>
              <div class="item">
                <h4 class="lang-title">JavaScript</h4>
                <div class="lang-amount">
                  <span class="percent">18%</span>
                </div>
              </div>
              <div class="item">
                <h4 class="lang-title">JavaScript</h4>
                <div class="lang-amount">
                  <span class="percent">18%</span>
                </div>
              </div>
            </div>
            <p>
              Сайты на JavaScript загружаются <b>моментально</b>, без перезагрузки страниц. А сопутствующие технологии, при помощи серверного рендеринга(SSR), позволяют создавать <b>SEO дружественные</b> проекты.
            </p>
        </div>
      </div>
    </div>
    <div class="decorative-name">Launch<span>+</span></div>
  </section>
</template>

<script setup>
</script>

<style>
.technologies .decor-line {
    margin-bottom: var(--section-top);
}
.infographics {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.infographics > .item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.infographics > .item .lang-title {
  font-size: 0.8rem;
  font-family: 'Raleway';
  font-weight: 700;
  color: rgba(0, 0, 0, 0.4);
  margin-right: 1rem;
}
.infographics > .item .lang-amount {
  width: 100%;
  height: 1.2rem;
  background: linear-gradient(135deg, #278566 0% 0%, #49EFCE 100% 100%);
  position: relative;
}
.infographics > .item .lang-amount .percent {
  position: absolute;
  left: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.8rem;
  color: #fff;
}
.technologies .decorative-name {
  font-family: 'Raleway';
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20rem;
  color: #fff;
  margin-top: 8rem;
  transform: translateX(20%);
}
.technologies .decorative-name span {
  font-weight: 400;
}
</style>