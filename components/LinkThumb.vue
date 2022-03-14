<template>
  <div class=" thumb-link">
    <a :href="url" target="_blank">
      <img :src="img" alt="product-img" class="w-full h-250 object-cover overflow-hidden shadow-bs12" />
      <h3 class="text-white text-base font-medium absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-300 flex w-full justify-center opacity-0">
        {{title}}
        <img class="ml-2" src="~/assets/images/svg/arrow-square-out.svg" alt="">
      </h3>
    </a>
  </div>
</template>
<script>
export default {
  name: "LinkThumb",
  props: {
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .thumb-link a{
    position: relative;
    z-index: 0;
    display: block;
    &:before{
      content: "";
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.4s;
      position: absolute;
      background: linear-gradient(0deg, rgba(6, 28, 61, 0.7), rgba(6, 28, 61, 0.7));
    }
    &:hover:before{
      opacity: 1;
    }
    &:hover h3{
      opacity: 1;
    }
  }
</style>

