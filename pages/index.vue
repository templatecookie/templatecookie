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
        <div class="grid grid-cols-2 gap-6">
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
    };
  },
};
</script>
