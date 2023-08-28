// import Vue from 'vue';
// import { DatocmsStructuredTextPlugin, DatocmsImagePlugin, StructuredText, Image } from 'vue-datocms';

// Vue.use(DatocmsImagePlugin, DatocmsStructuredTextPlugin);
// Vue.component('structured-text', StructuredText)
// Vue.component('dato-image', Image)

import {
  DatocmsStructuredTextPlugin,
  DatocmsImagePlugin,
  StructuredText,
  Image,
} from "vue-datocms";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(DatocmsImagePlugin, DatocmsStructuredTextPlugin);
  nuxtApp.vueApp.component("structured-text", StructuredText);
  nuxtApp.vueApp.component("dato-image", Image);
});
