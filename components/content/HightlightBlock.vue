<template>
  <div
    class="highlight-block rounded-lg"
    :class="type"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      default: "info",
      type: String,
    },
  },
};
</script>
