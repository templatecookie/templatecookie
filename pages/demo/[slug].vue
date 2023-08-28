<template>
  <div>
    <demo-header :product="product" v-if="product" />
    <demo-product-hero :product="product" v-if="product" />
    <demo-why-choose-our-product
      :product="product"
      v-if="product?.whyChooseUs"
    />
    <div v-for="(section, index) in product?.contents" :key="index">
      <div v-if="section.__typename == 'ExclusivefeatureRecord'">
        <demo-exclusive-feature :data="section" />
      </div>
      <div v-if="section.__typename == 'FeaturescreenshotRecord'">
        <demo-product-screenshots :data="section" />
      </div>
      <div v-if="section.__typename == 'TopfeatureRecord'">
        <demo-product-top-features :data="section" />
      </div>
      <div v-if="section.__typename == 'ProductctaRecord'">
        <demo-call-to-action :section="section" :product="product" />
      </div>
      <div v-if="section.__typename == 'PriceplanRecord'">
        <PricingSection
          :plans="section.plans"
          :id="section.sectionId ? section.sectionId : section.id"
          :info="section.info[0]"
          :extra-offer="product.extraOffer"
          :request-customization="product.offerRequestCustomization"
        />
      </div>
      <div v-if="section.__typename == 'TestimonialSectionRecord'">
        <demo-testimonial-section :data="section" />
      </div>
      <div v-if="section.__typename == 'TechnologySectionRecord'">
        <demo-technology-section :data="section" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup>
import PRODUCT_DEMO from "~/graphql/productDemo";

definePageMeta({
  layout: "empty",
});
const product = ref(null);
const route = useRoute();
const { slug } = route?.params;
const { data } = await useGraphqlQuery({
  query: PRODUCT_DEMO,
  variables: { slug },
});
product.value = data?._rawValue?.product;

const title = product?._rawValue?.seo?.title ?? product?._rawValue?.name;
const description =
  product?._rawValue?.seo?.description ?? product?._rawValue?.description;
const image = product?._rawValue?.banner?.url ?? data?._rawValue?.image;

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: image,
});
</script>

<style lang="scss" scoped>
// animation
.slider-full {
  animation: scroll 26s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-250px * 7));
  }
}

// swiper single silder
.single-slider {
  .swiper-button-prev,
  .swiper-button-next {
    top: calc(50% - 15px);
    transform: translateY(-50%);
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    content: none;
  }
}

.tab-content-wrap {
  &.active {
    background-color: #0b63e5;

    h3,
    p {
      color: white;
    }
  }
}
</style>
