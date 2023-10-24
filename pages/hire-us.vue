<template>
  <div>
    <hire-hero-section v-if="hubspotLoaded" />
    <hire-our-services />
    <hire-working-process />
    <hire-our-experties />
    <hire-contact-us v-if="hubspotLoaded" />
  </div>
</template>

<script>
export default {
  setup() {
    const title = "Hire Expert Designer & Developers | Templatecookie";
    const description =
      "We have expert developers and designers to help you build your next dream project. Our team composed with experts in various industry";

    useSeoMeta({
      title: title,
      ogTitle: title,
      description: description,
      ogDescription: description,
      ogImage: "/social-meta.png",
    });
    const route = useRoute();
    useHead({
      link: [
        {
          rel: "canonical",
          href: "https://templatecookie.com" + route.path,
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
