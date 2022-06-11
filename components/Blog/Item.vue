<template>
  <div class="blog-item">
    <a href="http://" class="image-link">
      <div class="image-block">
        <img
          src="https://images.unsplash.com/photo-1583321500900-82807e458f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          alt=""
        />
      </div>
    </a>

    <div class="title-block">
      <a href="http://" class="title-link"
        ><h3 class="title">Разработка в 2022 году</h3></a
      >
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