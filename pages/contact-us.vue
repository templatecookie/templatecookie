<template>
  <h1>This is the contact page</h1>
</template>

<script>
export default {
  beforeCreate() {
    this.$router.push("/hire-us");
  },
  setup() {
    const route = useRoute()
    useHead({
      link: [
        {
          rel: 'canonical',
          href: 'https://www.templatecookie.com' + route.path,
        },
      ],
    })
  }
};
</script>

<style></style>
