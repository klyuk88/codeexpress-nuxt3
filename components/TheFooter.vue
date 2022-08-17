<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="col-3 flex column j-between">
          <div class="row">
            <div class="col-2">
              <Logo :type="'white'"/>
            </div>
            <div class="col-2 flex column foo-contacts">
              <a href="mailto:hello@codeexpress.ru" class="link foo-contact">
                <img src="@/assets/images/email.png" alt="" />
                hello@codeexpress.ru
              </a>
              <a href="tel:+79859227045" class="link foo-contact">
                <img src="@/assets/images/phone.png" alt="" />
                +79859227045
              </a>
              <a href="http://" class="link foo-contact">
                <img src="@/assets/images/telegram.png" alt="" />
                Telegram
              </a>
            </div>
          </div>
          <div class="row">
            <div class="col-2">
              <p class="foo-copyright">2022 ©</p>
            </div>
            <div class="col-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="foo-politic"
              >
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="foo-decor-text">CodeExpress</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang="scss">
.footer {
  background: var(--black);
  padding-top: var(--section-bottom);
  padding-bottom: 2rem;
  overflow: hidden;
  .footer-grid {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 20px;
    @media (max-width: 576px) {
      grid-template-columns: 100%;
    }
  }
  .foo-contacts {
    gap: 1rem;
    .foo-contact {
      display: flex;
      align-items: center;
      img {
        width: 20px;
        height: auto;
        margin-right: 0.5rem;
      }
    }
  }
  .foo-logo {
    width: 80%;
  }
  .foo-decor-text {
    font-size: 8rem;
    color: rgba($color: #fff, $alpha: 0.2);
    font-family: "Raleway";
    font-weight: 700;
    // text-transform: uppercase;
    line-height: 1;
    transform: translateY(1.2rem);
    @media (max-width: 576px) {
      font-size: 5rem;
    }
    span {
      font-weight: 400;
    }
  }
  .foo-copyright,
  .foo-politic {
    color: rgba($color: #fff, $alpha: 0.5);
    font-size: 1rem;
    @media (max-width: 576px) {
      margin-top: 2rem;
      display: block;
    }
  }
}
</style>