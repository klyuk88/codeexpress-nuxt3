<template>
<div>
  <section id="single-block-page">
    <div class="container">
      <div class="title-block">
        <h1 class="page-title">Разработка в 2022 году, основные направления</h1>
        <div class="meta">
          <p class="meta-data">20.06.2022</p>
          <p class="meta-data">10 минут</p>
        </div>
      </div>
      <div class="cover-block">
        <img src="@/assets/images/blog-article.jpeg" alt="" class="cover" />
      </div>

      <div class="single-block-page-content">
        <div class="sidebar-block">
          <div class="sidebar">
            <div class="sidebar-cta">
              <h4 class="title">Обсудим<br />ваш проект?</h4>
              <a href="tel:+79859227045" class="phone-wrap">
                <EffectWord :title="'+7(985)922 70 45'" />
              </a>
            </div>
          </div>
        </div>
        <div class="main-block">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi magni fugit porro modi in, architecto amet. Suscipit itaque nulla voluptas quidem, fuga quis cupiditate eligendi inventore pariatur quos explicabo neque modi necessitatibus ratione quae repellendus facere assumenda expedita voluptatibus cumque repellat? Nulla, eius? Possimus doloribus consectetur doloremque fuga dicta voluptatibus, obcaecati ut exercitationem. Vero sint fuga, nisi eos dicta provident doloremque excepturi ullam modi repellendus reprehenderit consectetur doloribus dolorum odio quaerat architecto quis maxime quae obcaecati. Voluptate iste illum fugiat officiis dolorum dignissimos natus architecto voluptatibus. Corporis rem totam vel inventore! Iure eos, cumque saepe corrupti repudiandae omnis minima blanditiis tempore, voluptas praesentium, pariatur aliquam sed ipsa. Exercitationem assumenda animi similique neque sapiente totam nisi ipsa ipsum dolorum nobis provident at consectetur, in expedita explicabo culpa quidem possimus, odio esse quis voluptate debitis. Fugiat consequatur excepturi consequuntur tempore. Quas commodi nisi iusto voluptatum veritatis voluptas architecto provident animi numquam, accusantium libero sed eveniet! Tempore odit cum quibusdam. Soluta est, illum voluptatum ut commodi, tempora excepturi distinctio repellat esse perspiciatis, sunt cumque. Iure consectetur quasi tempora eius, mollitia nemo quaerat saepe nesciunt eligendi doloribus rem. Nulla, vitae exercitationem velit ex voluptatem, laboriosam perspiciatis iure illo et, magni obcaecati. Magni, laudantium ipsam</p>
        </div>
      </div>

    </div>
  </section>
  <MainCTA/>
</div>

</template>
<script setup>
</script>
<style lang="scss">
#single-block-page {
  .title-block {
    display: grid;
    grid-template-columns: 66.6% 1fr;
    gap: 20px;
    align-items: flex-end;
    padding: 7rem 0;
    .meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .meta-data {
        opacity: 0.5;
      }
    }
  }
  .cover-block {
    position: relative;
    width: 100%;
    height: 90vh;
    margin-bottom: 4rem;
    .cover {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      left: 0;
      top: 0;
    }
  }
  .single-block-page-content {
    display: grid;
    grid-template-columns: 33.3% 1fr;
    gap: 20px;
    padding-bottom: 6rem;
    .sidebar-block {
      .sidebar {
        position: sticky;
        position: -webkit-sticky;
        will-change: transform;
        top: 5rem;
        bottom: auto;
        .sidebar-cta {
          .title {
            font-size: 1.1rem;
            line-height: 1.2;
            color: #000;
            font-weight: 700;
            text-transform: uppercase;
          }
          .phone-wrap {
            display: inline-block;
            margin-top: 2rem;
          }
        }
      }
    }

    .main-block {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>