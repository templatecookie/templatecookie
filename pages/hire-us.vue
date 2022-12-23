<template>
  <div>
    <hero-section />
    <our-services />
    <working-process />
    <our-experties />
    <contact-us />
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
}
</script>

<style>
  
</style>
