<template>
  <div class="p-6 rounded-lg border-2 border-blue-ce build-solution-wrap">
    <div
      class="w-16 h-16 bg-blue-0b rounded-lg flex items-center justify-center mb-6 icon"
    >
      <img :src="icon" alt="" />
    </div>
    <div>
      <h3 class="text-dark-06 text-lg font-normal mb-3">{{ title }}</h3>
      <p class="text-dark-42 text-sm font-light">{{ text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SolutionCard",
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      requied: true,
    },
    text: {
      type: String,
      requied: true,
    },
  },
};
</script>
