<template>
  <div class="callout-block" :class="'callout-'+type">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: 'info',
      type: String
    }
  }
}
</script>

<style lang="scss">
.markdown-body {
  .callout {
    &-info {
      background: var(--primary);
      color: #fff;
    }

    &-success {
      background: #21ac36;
      color: #fff;
    }

    &-warning {
      background: #c56a19;
      color: #fff;
    }

    &-danger {
      background: #c44231;
      color: #fff;
    }

    &-block {
      margin: 30px 0;
      color: white;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 50px 30px;
      border-radius: 4px;
      background-clip: padding-box;
      position: relative;
      h1 {
        font-size: 32px;
      }

      h2 {
        font-size: 28px;
      }

      h1,
      h2,
      h3 {
        margin-top: 0;
        margin-bottom: 15px;
        color: white;
      }

      a {
        color: rgba(black, 0.7);
        text-decoration: underline;
      }

      p {
        font-size: 20px;
        font-weight: 300;
        color: rgba(white, 0.7);
      }

      img {
        max-width: 100%;
      }
    }
  }
}
</style>
