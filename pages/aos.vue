<template>
  <button @click.prevent="clickFunc()">
    Click
  </button>
</template>
<script>
export default {
  methods: {
    clickFunc() {
      alert("Hi");
    },
  },
};
</script>
