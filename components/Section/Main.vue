<template>
  <section class="main-screen">
    <div class="container">
      <div class="row">
        <div class="col offset-1">
          <h1 class="title">
            Разрабатываем <br />сайты, веб-сервисы,<br />
            интернет-магазины.
          </h1>
        </div>
      </div>
    </div>
    <div class="decor-gallary-wrap">
      <div class="decor-gallery">
        <div class="image-line">
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/cry_2.jpg" alt="" />
          </div>
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/cry_3.jpg" alt="" />
          </div>
          <div class="image-box col-even">
            <img src="@/assets/images/decor-gallery/img-1.jpg" alt="" />
          </div>
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/mm.jpg" alt="" />
          </div>
          <div class="image-box col-even">
            <img src="@/assets/images/decor-gallery/tessin.jpg" alt="" />
          </div>
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/cry_8.jpg" alt="" />
          </div>
          <div class="image-box col-even">
            <img src="@/assets/images/decor-gallery/img-1.jpg" alt="" />
          </div>
        </div>
        <div class="image-line">
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/cry_8.jpg" alt="" />
          </div>
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/cry_5.jpg" alt="" />
          </div>
          <div class="image-box col-even">
            <img src="@/assets/images/decor-gallery/mm1.jpg" alt="" />
          </div>
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/mm3.jpg" alt="" />
          </div>
          <div class="image-box col-even">
            <img src="@/assets/images/decor-gallery/hstd.jpg" alt="" />
          </div>
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/oddbee.jpg" alt="" />
          </div>
          <div class="image-box col-even">
            <img src="@/assets/images/decor-gallery/mm4.jpg" alt="" />
          </div>
        </div>
        <div class="image-line">
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/cry_4.jpg" alt="" />
          </div>
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/mm5.jpg" alt="" />
          </div>
          <div class="image-box col-even">
            <img src="@/assets/images/decor-gallery/mm3.jpg" alt="" />
          </div>
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/ktms.jpg" alt="" />
          </div>
          <div class="image-box col-even">
            <img src="@/assets/images/decor-gallery/mm6.jpg" alt="" />
          </div>
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/mm7.jpg" alt="" />
          </div>
          <div class="image-box col-even">
            <img src="@/assets/images/decor-gallery/tessin2.png" alt="" />
          </div>
        </div>
        <div class="image-line">
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/cry_5.jpg" alt="" />
          </div>
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/mm8.jpg" alt="" />
          </div>
          <div class="image-box col-even">
            <img src="@/assets/images/decor-gallery/cry_8.jpg" alt="" />
          </div>
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/mm9.jpg" alt="" />
          </div>
          <div class="image-box col-even">
            <img src="@/assets/images/decor-gallery/mm10.jpg" alt="" />
          </div>
          <div class="image-box col-odd">
            <img src="@/assets/images/decor-gallery/cry_9.jpg" alt="" />
          </div>
          <div class="image-box col-even">
            <img src="@/assets/images/decor-gallery/cry_2.jpg" alt="" />
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
.main-screen .title {
  font-size: 5rem;
  margin-top: 5rem;
}
.main-screen > .decor-gallary-wrap {
  overflow: hidden;
  height: 90vh;
  background: #000;
  margin-top: 6rem;
}

.main-screen > .decor-gallary-wrap > .decor-gallery {
  display: flex;
  flex-direction: column;
  transform: rotate(-45deg);
}

.main-screen > .decor-gallary-wrap > .decor-gallery .image-line {
  display: flex;
  flex-wrap: nowrap;
  transform: translateY(-300px) translateX(50px);
}
.main-screen > .decor-gallary-wrap .image-box {
  margin: 30px;
}
.main-screen > .decor-gallary-wrap .image-box img {
  height: 510px;
  width: 310px;
}
.main-screen > .decor-gallary-wrap .image-box.col-odd {
  transform: translateY(15%);
}
.main-screen > .decor-gallary-wrap .image-box.col-even {
  transform: translateY(-15%);
}

    
</style>