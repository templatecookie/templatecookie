<template>
  <div>
    <hire-hero v-if="hubspotLoaded" />
    <our-services />
    <working-process />
    <our-experties />
    <contact-us v-if="hubspotLoaded" />
  </div>
</template>

<script>
import ContactUs from "../components/hire/ContactUs.vue";
import HireHero from "~/components/hire/HireHero.vue";
import OurExperties from "../components/hire/OurExperties.vue";
import OurServices from "../components/hire/OurServices.vue";
import WorkingProcess from "../components/hire/WorkingProcess.vue";
export default {
  components: {
    HireHero,
    OurServices,
    WorkingProcess,
    OurExperties,
    ContactUs,
  },
  setup() {
    useHead({
      title: "Hire Expert Designer & Developers | Templatecookie",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "Get premium ",
          name: "description",
          content:
            "We have expert developers and designers to help you build your next dream project. Our team composed with experts in various industry",
        },
      ],
    });
  },
  data() {
    return {
      hubspotLoaded: false,
    };
  },
  mounted() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      this.hubspotLoaded = true;
    });
  },
};
</script>
