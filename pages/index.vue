<template>
  <div>
    <!-- Featured Card  -->
    <section class="featured py-124">
      <div class="container">
        <!-- section title  -->
        <div class="mb-72 text-center">
          <h2 class="text-title font-semibold capitalize">Featured Product</h2>
        </div>

        <!-- Features Card  -->
        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="(item, itemIndex) in featuredList"
            :key="itemIndex"
            class="flex items-stretch"
          >
            <ProductCard
              :img="item.img"
              :tag="item.tags"
              :title="item.title"
              :text="item.text"
              :price="item.price"
              className="h-296"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Product -->
    <section class="latest py-124 pt-0">
      <div class="container">
        <!-- section title  -->
        <div class="mb-72 text-center">
          <h2 class="text-title font-semibold capitalize">Latest Product</h2>
        </div>
        <!-- Latest Product -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            v-for="(item, itemIndex) in latestProduct"
            :key="itemIndex"
            class="flex items-stretch"
          >
            <ProductCard
              :img="item.img"
              :tag="item.tags"
              :title="item.title"
              :text="item.text"
              :price="item.price"
              className="h-190"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "IndexPage",
  components: { ProductCard },
  data() {
    return {
      featuredList: [
        {
          img: "https://i.imgur.com/YD6WZwi.png",
          tags: "Figma,Html",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
          price: 13,
        },
        {
          img: "https://i.imgur.com/IwfwAGA.png",
          tags: "Figma",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
          price: 18,
        },
      ],
      latestProduct: [
        {
          img: "https://i.imgur.com/0F0qE3V.png",
          tags: "Figma,Html",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
          price: 13,
        },
        {
          img: "https://i.imgur.com/pFuvaJH.png",
          tags: "Figma",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
          price: 18,
        },
        {
          img: "https://i.imgur.com/76niUXz.png",
          tags: "Figma,Html",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
          price: 13,
        },
        {
          img: "https://i.imgur.com/YD6WZwi.png",
          tags: "Figma",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
          price: 18,
        },
        {
          img: "https://i.imgur.com/IwfwAGA.png",
          tags: "Figma,Html",
          title: "Onest - Classified Ad Listing ",
          text: "Onest is a creatively crafted, clean, modern, and classy classifieds ads listing Figma template designed for who want to start selling a product online.",
          price: 13,
        },
        {
          img: "https://i.imgur.com/wGOemD7.png",
          tags: "Figma",
          title: "Relik - Admin Dashboard",
          text: "Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a high-quality UI & well-organized Figma file.",
          price: 18,
        },
      ],
    };
  },
};
</script>
