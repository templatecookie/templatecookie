<template lang="">
  <div>
    <!-- Banner  -->
    <section
      class="realtive overflow-hidden py-14 lg:py-72 bg-no-repeat bg-center bg-cover"
      :style="{ backgroundImage: `url(${bannerImg})` }"
    >
      <div class="container">
        <!-- banner content  -->
        <div class="text-center">
          <h1
            class="text-4xl md:text-heading text-dark-06 mb-8 max-w-680 mx-auto font-semibold"
          >
            UI, HTLM & Laravel Templates
          </h1>
          <p
            class="text-lg md:text-body-20 text-dark-06 mb-8 max-w-680 mx-auto"
          >
            Quisque sed est condimentum, placerat tellus a, dictum diam.
            Praesent volutpat nisl ac ligula lobortis imperdiet.
          </p>
        </div>
      </div>
    </section>

    <!-- Pagination -->
  </div>
</template>
<script>
import bannerImg from "~/assets/images/all-img/img-five.png";
import Pagination from "../components/Pagination.vue";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      bannerImg,
    };
  },
};
</script>
