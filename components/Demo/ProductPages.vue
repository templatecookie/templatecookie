<template>
  <div class="py-20 lg:py-124">
    <div class="container">
      <div class="text-center mb-8 lg:mb-12">
        <h2 class="text-dark-06 text-body-32px md:text-4xl lg:text-5xl font-semibold mb-6 tracking-01">
          45+ Beautiful hand-crafted pages
        </h2>
      </div>
      <div class="grid grid-cols-12 gap-6">
        <div v-for="(item, itemIndex) in linkThumb" :key="itemIndex"
          class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
          <LinkThumb :img="item.img" :title="item.title" :url="item.url" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkThumb from "~/components/LinkThumb.vue";
export default {
  components: {
    LinkThumb,
  },
  data (){
    return {
      linkThumb: [{
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/z3lpl2i.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/btnaKPg.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/WeNt6qZ.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/aXNiPxi.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/LrX4y5U.png",
        },

        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/7A80zMR.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/nnXHQ9w.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/OkWf1Gj.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/BRCMvYp.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/Z3NJCTN.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/2kaiEQa.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/HLreajz.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/mbarwY4.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/8g0dDml.png",
        },
        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/YMm1zRS.png",
        },

        {
          url: "https://www.google.com/",
          title: "Admin Dashboard",
          img: "https://i.imgur.com/gE2RT42.png",
        },
      ],
    }
  }
}
</script>

<style>

</style>
