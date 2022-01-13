<template>
  <div>
    <HeaderTwo />
    <Nuxt />
    <!-- Footer Component goes  -->
    <FooterTwo />
  </div>
</template>
<script>
import HeaderTwo from "../components/HeaderTwo.vue";
import FooterTwo from "../components/FooterTwo.vue";
export default {
  layout: "demo",
  components: { HeaderTwo, FooterTwo },
};
</script>
<style lang=""></style>
