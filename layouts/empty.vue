<template>
  <Nuxt />
</template>

<script>
import GLOBAL_QUERY from '~/graphql/global'

export default {
  methods: {
    async loadData(){
      const client = this.$nuxt.$apolloProvider.defaultClient;

      const { data } = await client.query({
        query: GLOBAL_QUERY,
      })
      const global = data?.global
      this.global = global;
      this.$store.commit('SET_GLOBAL_DATA', global)
    }
  },
  mounted (){
    if(!this.$store.getters.getGlobalData){
      this.loadData();
    }
  }
}
</script>
