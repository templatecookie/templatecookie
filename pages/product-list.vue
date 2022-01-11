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

          <!-- Templates Tabs Menu  -->
          <div
            class="grid grid-cols-2 lg:grid-cols-3 items-center bg-white relative rounded px-6"
          >
            <!-- Tab menu  -->
            <div class="col-span-full lg:col-span-2">
              <ul
                class="flex items-center justify-center lg:justify-start feature relative"
              >
                <li>
                  <router-link
                    to="#"
                    class="flex flex-col items-center feature-box group"
                  >
                    <!-- icon  -->
                    <span class="feature-box__icon inline-block mb-3">
                      <img
                        src="~assets/images/versions/bootstrap.png"
                        alt="version"
                      />
                    </span>
                    <h6
                      class="feature-box__title text-body-16 capitalize text-gray-61 text-gray-6a group-hover:text-dark-06"
                    >
                      Bootstrap
                    </h6>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="flex flex-col items-center feature-box group"
                  >
                    <!-- icon  -->
                    <span class="feature-box__icon inline-block mb-3">
                      <img
                        src="~assets/images/versions/vue.png"
                        alt="version"
                      />
                    </span>
                    <h6
                      class="feature-box__title text-body-16 capitalize text-gray-61 text-gray-6a group-hover:text-dark-06"
                    >
                      Vue JS
                    </h6>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="flex flex-col items-center feature-box group"
                  >
                    <!-- icon  -->
                    <span class="feature-box__icon inline-block mb-3">
                      <img
                        src="~assets/images/versions/html.png"
                        alt="version"
                      />
                    </span>
                    <h6
                      class="feature-box__title text-body-16 capitalize text-gray-61 text-gray-6a group-hover:text-dark-06"
                    >
                      Html
                    </h6>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="flex flex-col items-center feature-box group"
                  >
                    <!-- icon  -->
                    <span class="feature-box__icon inline-block mb-3">
                      <img
                        src="~assets/images/versions/figma.png"
                        alt="version"
                      />
                    </span>
                    <h6
                      class="feature-box__title text-body-16 capitalize text-gray-61 text-gray-6a group-hover:text-dark-06"
                    >
                      Figma
                    </h6>
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="#"
                    class="flex flex-col items-center feature-box group"
                  >
                    <!-- icon  -->
                    <span class="feature-box__icon inline-block mb-3">
                      <img src="~assets/images/versions/xd.png" alt="version" />
                    </span>
                    <h6
                      class="feature-box__title text-body-16 capitalize text-gray-61 text-gray-6a group-hover:text-dark-06"
                    >
                      Adobe XD
                    </h6>
                  </router-link>
                </li>
              </ul>
            </div>
            <!-- Sort List  -->
            <div class="col-span-full lg:col-span-1 py-4 lg:py-0">
              <!-- dropdown wrapper  -->
              <div
                class="flex items-center justify-center lg:justify-end space-x-3 sort-filter"
              >
                <h5 class="whitespace-nowrap text-body-14 leading-5">
                  Sort by :
                </h5>
                <div class="w-200">
                  <v-select
                    label="name"
                    :clearable="false"
                    placeholder="Select Sort"
                    :options="sortList"
                  />
                </div>
              </div>
            </div>
          </div>
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
      sortList: ["Popular", "Mosit Viewed"],
    };
  },
};
</script>
