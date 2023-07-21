<template>
  <div>
    <a
      v-if="external"
      :href="href"
      target="_blank"
      :class="cssClass ? cssClass : 'bg-primary hover:bg-dark'"
      class="py-3 px-6 flex items-center transition-all justify-center text-sm-17 text-white rounded-lg overflow-hidden max-w-max"
    >
      {{ label }}
      <slot name="icon" />
    </a>
    <nuxt-link
      v-else
      :to="href"
      :class="cssClass ? cssClass : 'bg-primary hover:bg-dark'"
      class="py-3 px-6 flex items-center transition-all justify-center text-sm-17 rounded-lg overflow-hidden max-w-max"
    >
      {{ label }}
      <slot name="icon" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    cssClass: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: false,
      default: "#",
    },
    external: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style></style>
