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
