<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    name: { required: true },
    selected: { default: false },
    icon: { required: true },
  },
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    this.isActive = this.selected;
  },
};
</script>
<style></style>
