<template>
  <div>
    <HeaderTwo />
    <Nuxt />
    <!-- Footer Component goes  -->
    <footer>
      <h2 class="text-center">Footer</h2>
    </footer>
  </div>
</template>
<script>
import HeaderTwo from "../components/HeaderTwo.vue";
export default {
  layout: "demo",
  components: { HeaderTwo },
};
</script>
<style lang=""></style>
