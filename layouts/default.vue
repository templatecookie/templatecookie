<template>
  <div class="relative">
    <div class="text-center py-3 text-base" :class="notice.cssClass" v-if="notice && notice.showNotice" v-html="parseMarkdown(notice.announcement)"></div>
    <!-- <Header :data="global.logo" v-if="global && global.logo"/> -->
    <new-header :data="global.logo" v-if="global && global.logo"/>
    <nuxt />
    <Footer :data="global.footer" :newsletter="global.newsletter" v-if="global && global.footer"/>
  </div>
</template>

<script>
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";
import SocialLink from "../components/SocialLink.vue";
import GLOBAL_QUERY from '~/graphql/global'
import Newsletter from "../components/Newsletter.vue";
import NewHeader from '../components/Header/NewHeader.vue';

export default {
  components: { Header, Footer, SocialLink, Newsletter, NewHeader },
  methods: {
    async loadData(){
      const client = this.$nuxt.$apolloProvider.defaultClient;

      const { data } = await client.query({
        query: GLOBAL_QUERY,
      })

      const global = data?.global
      this.$store.commit('SET_GLOBAL_DATA', global)
    }
  },
  mounted (){
    if(!this.$store.getters.getGlobalData){
      this.loadData();
    }
  },
  computed: {
    global() {
      return this.$store.getters.getGlobalData
    },
    notice() {
      const global = this.$store.getters.getGlobalData;
      return global?.notice[0]
    }
  },
};
</script>
