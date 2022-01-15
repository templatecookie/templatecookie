<template>
  <div>
    <HeaderTwo />
    <Nuxt />
    <FooterTwo />
  </div>
</template>
<script>
import HeaderTwo from "../components/Header/HeaderTwo.vue";
import FooterTwo from "../components/Footer/FooterTwo.vue";
export default {
  components: { HeaderTwo, FooterTwo },
};
</script>
