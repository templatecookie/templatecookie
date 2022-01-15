<template>
  <!-- Faq -->
  <div class="relative overflow-hidden pt-7 lg:pt-124">
    <div class="container">
      <div class="text-center pb-72">
        <h2
          class="text-body-32px sm:text-title tracking-01 text-dark-06 font-semibold mb-6"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Frequently asked questions
        </h2>
        <p class="text-body-18 font-light text-dark-42 max-w-680 mx-auto">
          Aenean quis est erat. Pellentesque pretium convallis ligula, vitae
          euismod nisl vehicula non. In felis leo, faucibus vel sagittis
          pharetra.
        </p>
      </div>
      <VueFaqAccordion :items="faqQuestion" />
    </div>
  </div>
</template>
<script>
import VueFaqAccordion from "vue-faq-accordion";
export default {
  name: "Faq",
  components: {
    VueFaqAccordion,
  },
  data() {
    return {
      faqQuestion: [
        {
          title: "Morbi fringilla metus ac lacus dapibus.",
          value:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis magni placeat eos nihil distinctio mollitia optio. Repudiandae aut, dolor dolores, minima porro, ea aspernatur eveniet esse ad odit eligendi?",
        },
        {
          title: "What we like to do & what we don’t like to do",
          value:
            "Sed nec pharetra felis, in ultrices neque. Phasellus varius semper tellus, ac imperdiet erat commodo id. Aenean lobortis justo et velit ornare malesuada. Nam lacus orci, elementum eu odio ac, molestie venenatis turpis. Mauris ex ipsum, dictum gravida pretium sed, molestie nec ante. Sed ac ullamcorper nisi.",
        },
        {
          title:
            "Fusce fermentum tempus sapien a sagittis tellus mattis id. Cras et enim ex. ",
          value:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis magni placeat eos nihil distinctio mollitia optio. Repudiandae aut, dolor dolores, minima porro, ea aspernatur eveniet esse ad odit eligendi?",
        },
        {
          title: "Nunc aliquam tempus iaculis. Ut eu imperdiet velit. ",
          value:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis magni placeat eos nihil distinctio mollitia optio. Repudiandae aut, dolor dolores, minima porro, ea aspernatur eveniet esse ad odit eligendi?",
        },
        {
          title:
            "Nam sit amet neque auctor, dignissim augue eu, condimentum justo.",
          value:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus debitis magni placeat eos nihil distinctio mollitia optio. Repudiandae aut, dolor dolores, minima porro, ea aspernatur eveniet esse ad odit eligendi?",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.faq {
  &-wrapper {
    max-width: 100%;
  }
}
</style>
