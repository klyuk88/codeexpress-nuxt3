<template>
  <div class="review-item">
    <div class="ri-header flex start">
      <img src="@/assets/images/reviews/mai_logo.png" alt="" class="ri-logo"/>
      <h4 class="ri-title">Московский Авиационный институт</h4>
    </div>
    <div class="ri-text">
      Далеко-далеко за словесными горами в стране гласных и согласных живут, рыбные тексты. Гор жизни, обеспечивает, диких переписывается грамматики сих там себя он выйти однажды последний меня имеет океана правилами ручеек журчит инициал заглавных страна одна которое свой своих от всех оксмокс заманивший. Рыбного!
    </div>
    <a href="#" target="_blank" rel="noopener noreferrer" class="link">Смотреть скан</a>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.review-item {
  .ri-header {
    padding: 2rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5)
  }
  .ri-logo {
    height: auto;
    width: 3.5rem;
    margin-right: 1.5rem;
  }
  .ri-title {
    font-size: 1.5rem;
    font-family: 'Raleway';
    font-weight: 700;
    text-transform: uppercase;
    width: 30%;
    line-height: 1.3;
  }
  .ri-text {
    margin-top: 2rem;
    font-size: 1rem;
    line-height: 1.5;
  }
  .link {
    margin-top: 1.5rem;
    display: inline-block;
  }
}
</style>