<template>
  <div class="relative">
    <div class="text-center py-3 text-base" :class="notice.cssClass" v-if="notice && notice.showNotice" v-html="parseMarkdown(notice.announcement)"></div>
    <site-header :data="global.logo" v-if="global && global.logo"/>
    <nuxt />
    <site-footer :data="global.footer" :socials="global.socialMedias" v-if="global && global.footer"/>
  </div>
</template>

<script>
import SiteFooter from "../components/SiteFooter.vue";
import SocialLink from "../components/SocialLink.vue";
import GLOBAL_QUERY from '~/graphql/global'
import SiteHeader from '../components/SiteHeader.vue';

export default {
  components: { SiteFooter, SocialLink, SiteHeader },
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
