<template>
  <div>
    <site-header :data="data?.global" v-if="data?.global?.logo" />
    <slot></slot>
    <site-footer
      :data="data?.global?.footer[0]"
      :social="data?.global?.socialMedias"
      v-if="data?.global && data?.global?.footer"
    />
  </div>
</template>

<script setup>
import Global from "../graphql/global";

const { data } = await useGraphqlQuery({ query: Global });
</script>
