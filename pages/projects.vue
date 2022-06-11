<template>
  <section id="projects">
    <div class="container">
      <div class="row end">
        <div class="col-4">
          <h1 class="page-title">
            Проекты, которые мы <span>можем</span> показать
          </h1>
        </div>
        <div class="col-2">
          <p class="subtitle">
            Часть проектов находится под NDA(соглашение о конфеденциальности),
            поэтому мы не можем разместить их в портфолио
          </p>
        </div>
      </div>

      <div class="projects-items-block">
        <div class="filter flex center j-between">
          <h2 class="title">Фильтр</h2>
          <ul class="filters flex center">
            <li>Сайт</li>
            <li>Веб-сервис</li>
            <li>Интернет-магазин</li>
          </ul>
        </div>
        <div class="decor-line"></div>

        <div class="items">
          <PortfolioItem :light="true" />
          <PortfolioItem :light="true" />
          <PortfolioItem :light="true" />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>
<style lang="scss" scoped>
#projects {
  padding-top: var(--section-bottom);
  .subtitle {
    font-size: 1.2rem;
    width: 80%;
    transform: translateY(-1rem);
  }
  .projects-items-block {
    margin-top: 10rem;
    .filter {
      .title {
        font-size: 1.5rem;
        text-transform: uppercase;
      }
      .filters {
        list-style: none;
        padding: 0;
        gap: 40px;
        li {
          font-size: 1.1rem;
          color: rgba(0, 0, 0, 0.4);
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
        }
      }
    }
    .decor-line {
      margin-top: 3rem;
      background: rgba($color: #000000, $alpha: 0.3);
    }
    .items {
      margin-top: 3rem;
    }
  }
}
</style>