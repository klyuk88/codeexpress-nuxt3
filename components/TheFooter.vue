<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="col-3 flex column j-between">
          <div class="row">
            <div class="col-2">
              <img
                src="@/assets/images/logo-white.svg"
                alt=""
                class="foo-logo"
              />
            </div>
            <div class="col-2 flex column foo-contacts">
              <a href="mailto:hello@launchplus.ru" class="link"
                >hello@launchplus.ru</a
              >
              <a href="tel:+79859227045" class="link">+79859227045</a>
              <a href="http://" class="link flex center">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_0_111"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="21"
                  >
                    <rect y="0.992676" width="20" height="20" fill="white" />
                  </mask>
                  <g mask="url(#mask0_0_111)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 1.30518C4.64813 1.30518 0.3125 5.64143 0.3125 10.9927C0.3125 16.3439 4.64875 20.6802 10 20.6802C15.3519 20.6802 19.6875 16.3439 19.6875 10.9927C19.6875 5.64143 15.3512 1.30518 10 1.30518ZM14.7581 7.94219L13.1681 15.4347C13.0506 15.9659 12.7343 16.0947 12.2931 15.8447L9.87121 14.0597L8.70308 15.1847C8.57433 15.3134 8.46496 15.4228 8.21496 15.4228L8.38683 12.9578L12.875 8.90281C13.0706 8.73094 12.8318 8.63344 12.5737 8.80532L7.02683 12.2972L4.63621 11.5509C4.11683 11.3872 4.10496 11.0316 4.74558 10.7816L14.0856 7.17969C14.5193 7.02344 14.8981 7.28532 14.7575 7.94157L14.7581 7.94219Z"
                      fill="#ED7635"
                    />
                  </g>
                </svg>
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
          <div class="foo-decor-text">Launch<span>+</span></div>
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
  }
  .foo-logo {
    width: 80%;
  }
  .foo-decor-text {
    font-size: 11rem;
    color: rgba($color: #fff, $alpha: 0.2);
    font-family: "Raleway";
    font-weight: 700;
    text-transform: uppercase;
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