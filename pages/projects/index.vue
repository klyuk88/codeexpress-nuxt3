<template>
  <section id="projects">
    <div class="container">
      <div class="projects-grid">
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
        <div class="filter">
          <h2 class="title">Фильтр:</h2>
          <ul class="filters">
            <li>Сайт</li>
            <li>Веб-сервис</li>
            <li>Интернет-магазин</li>
          </ul>
        </div>
        <div class="decor-line"></div>

        <div class="items">
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
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
  overflow-x: hidden;
  .subtitle {
    font-size: 1.2rem;
    width: 80%;
    transform: translateY(-1rem);
    @media (max-width: 576px) {
      font-size: 0.9rem;
    }
  }
  .projects-items-block {
    margin-top: 10rem;
    @media (max-width: 576px) {
      margin-top: 2rem;
    }
    .filter {
      display: grid;
      grid-template-columns: 50% 50%;
      justify-content: space-between;
      .title {
        font-size: 1.5rem;
        text-transform: uppercase;
        @media (max-width: 576px) {
          font-size: 1rem;
        }
      }
      .filters {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 1rem;
        width: 100%;
        li {
          font-size: 1.1rem;
          color: rgba(0, 0, 0, 0.4);
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
          transition: color .1s ease;
          @media (max-width: 576px) {
            font-size: 1rem;
          }
        }
        li:hover {
          color: var(--accent);
        }
      }
    }
    .decor-line {
      margin-top: 3rem;
      background: rgba($color: #000000, $alpha: 0.3);
    }
    .items {
      margin-top: 3rem;
      @media (max-width: 576px) {
        margin-top: 0;
      }
    }
  }
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr 33%;
    gap: 20px;
    width: 100%;
    align-items: end;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
    }
  }
}
</style>