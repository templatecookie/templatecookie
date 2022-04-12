<template>
  <div>
    <div class="text-center py-3 text-base bg-red-300" v-if="notice">
      {{ notice.notice_text }} 
    </div>
    <Header :data="global.header" v-if="global && global.header"/>
    <nuxt />
    <Newsletter :data="global.newsletter" v-if="global && global.newsletter"/>
    <Footer :data="global.footer" v-if="global && global.footer"/>
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import SocialLink from "../components/SocialLink.vue";
import GLOBAL_QUERY from '~/graphql/global'
import Newsletter from "../components/Newsletter.vue";

export default { 
  components: { Header, Footer, SocialLink, Newsletter },
  data () {
    return {
      global: null,
    }
  },
  methods: {
    async loadData(){
      const client = this.$nuxt.$apolloProvider.defaultClient;

      const { data } = await client.query({
        query: GLOBAL_QUERY,
      })
      
      this.global = data?.global?.data?.attributes
      this.$store.commit('SET_GLOBAL_DATA', this.global)
    }
  },
  mounted (){
    if(!this.$store.getters.getGlobalData){
      this.loadData();
    }
  },
  computed: {
    notice() {
      const global = this.$store.getters.getGlobalData;
      return global?.website_notice
    }
  },
};
</script>
