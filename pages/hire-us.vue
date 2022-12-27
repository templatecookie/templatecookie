<template>
  <div>
    <hero-section v-if="hubspotLoaded"/>
    <our-services />
    <working-process />
    <our-experties />
    <contact-us v-if="hubspotLoaded"/>
  </div>
</template>
<script>
import ContactUs from '../components/hire/ContactUs.vue'
import HeroSection from '../components/hire/HeroSection.vue'
import OurExperties from '../components/hire/OurExperties.vue'
import OurServices from '../components/hire/OurServices.vue'
import WorkingProcess from '../components/hire/WorkingProcess.vue'
export default {
  components: { HeroSection, OurServices,WorkingProcess, OurExperties, ContactUs},
  data(){
    return {
      hubspotLoaded: false,
    }
  },
  mounted(){
    const script = document.createElement("script");
    script.src="https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      this.hubspotLoaded = true;
    })
  }
}
</script>

<style>
  
</style>
