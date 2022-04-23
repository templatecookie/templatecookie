<template>
  <div class="highlight-block" :class="type">
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
  .highlight {
    // .info {
    // }

    // .success {
    //   background: #188629;
    //   color: #fff;
    // }

    // .warning {
    //   background: #9f5413;
    //   color: #fff;
    // }

    // .danger {
    //   background: #7a2b20;
    //   color: #fff;
    // }

    &-block {
      margin: 30px 0;
      padding: 30px;
      background: var(--primary);
      color: #fff;
      display: flex;
      align-items: center;
      flex-direction: column;
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
