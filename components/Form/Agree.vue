<template>
  <label class="form-agree">
    <input type="checkbox" name="" />
    <div class="checkbox">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_0_389"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="15"
          height="15"
        >
          <rect width="15" height="15" fill="white" />
        </mask>
        <g mask="url(#mask0_0_389)">
          <path
            d="M13.125 4.3749L5.625 11.8749L2.1875 8.4374L3.06875 7.55615L5.625 10.1062L12.2438 3.49365L13.125 4.3749Z"
            fill="white"
          />
        </g>
      </svg>
    </div>
    <span class="label">Согласен(а) с обработкой персональный данных</span>
  </label>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.form-agree {
  display: flex;
  align-items: center;
  cursor: pointer;
  input {
    width: 0;
    height: 0;
    visibility: hidden;
  }
  input:checked + .checkbox {
    background: var(--accent);
    border-color: var(--accent);
    svg {
      display: block;
    }
  }
  .checkbox {
    border: 1px solid rgba($color: #000000, $alpha: 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.8rem;
    height: 0.8rem;
    margin-right: 0.5rem;
    svg {
      display: none;
    }
  }
  .label {
    color: rgba(0, 0, 0, 0.541176);
  }
}
</style>