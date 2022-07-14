<template>
  <section class="benifits lower-indent">
    <div class="container">
        <div class="decor-line"></div>
      <h2 class="section-title">
        Заботимся<br/>о <span>комфортном</span><br> взаимодействии с нами
      </h2>
      <div class="benifits-grid">
        <div class="col">
          <span class="item-num">01</span>
          <p class="item-text">Поэтапная система оплаты, с этапом от 1 недели</p>
        </div>
        <div class="col">
          <span class="item-num">02</span>
          <p class="item-text">Цены ниже, чем в крупных студиях, на 30-50%</p>
        </div>
        <div class="col">
          <span class="item-num">03</span>
          <p class="item-text">Отчитываемся о процессе работы, не реже чем раз в неделю</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
</script>
<style lang="scss">
.benifits .decor-line {
    margin-bottom: var(--section-bottom);
}
.benifits .item-num {
    font-family: 'Artegra';
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent);
}

.benifits .item-text {
    width: 60%;
}

.benifits > .container > .row {
    margin-top: 3.5rem;
}

.benifits {
  .benifits-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    width: 100%;
    margin-top: 4rem;
    @media (max-width: 1200px) {
      grid-template-columns: 100%;
      margin-top: 2rem;

    }
  }
}
</style>