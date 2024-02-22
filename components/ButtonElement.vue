<template>
  <div>
    <a
      v-if="external"
      :href="href"
      target="_blank"
      class="text-white opacity-80 hover:opacity-100 transition-all duration-200 ease-linear inline-flex items-center gap-1"
    >
      {{ label }}
      <slot name="icon" />
    </a>
    <nuxt-link
      v-else
      :to="href"
      class="text-white opacity-80 hover:opacity-100 transition-all duration-200 ease-linear inline-flex items-center gap-1"
    >
      <slot name="icon" />
      {{ label }}
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
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
});
</script>

<style></style>
