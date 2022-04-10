<template>
  <div>
    <DocsHeader :data="global.header" v-if="global && global.header"/>
    <nuxt />
    <Newsletter :data="global.newsletter" v-if="global && global.newsletter"/>
    <Footer :data="global.footer" v-if="global && global.footer"/>
  </div>
</template>

<script>
import Footer from "../components/Footer/Footer.vue";
import SocialLink from "../components/SocialLink.vue";
import GLOBAL_QUERY from '~/graphql/global'
import Newsletter from "../components/Newsletter.vue";
import DocsHeader from "../components/Header/DocsHeader.vue";

export default { 
  components: { Footer, SocialLink, Newsletter, DocsHeader },
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
    this.loadData();
  }
};
</script>
