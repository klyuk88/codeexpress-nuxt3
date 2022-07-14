<template>
  <div class="blog-item">
    <nuxt-link to="/blog/atricle" class="image-link">
      <div class="image-block">
        <img
          src="@/assets/images/blog-article.jpeg"
          alt=""
        />
      </div>
    </nuxt-link>

    <div class="title-block">
      <nuxt-link to="/blog/atricle" class="title-link"
        ><h3 class="title">Разработка в 2022 году</h3></nuxt-link>
      <span class="meta">10 минут</span>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="scss">
.blog-item {
  margin-bottom: 4rem;
  .image-block {
    position: relative;
    height: 30rem;
    cursor: pointer;
    @media (max-width: 576px) {
      height: 15rem;
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      left: 0;
      top: 0;
    }
  }
  .title-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .title {
      font-size: 1rem;
      text-transform: uppercase;
      color: var(--accent);
      font-weight: 700;
      cursor: pointer;
    }
    .meta {
      font-size: 1rem;
      font-weight: 400;
      color: rgba($color: #000000, $alpha: 0.5);
    }
  }
}
</style>