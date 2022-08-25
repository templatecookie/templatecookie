import Vue from 'vue';
import { DatocmsStructuredTextPlugin, DatocmsImagePlugin, StructuredText, Image } from 'vue-datocms';

Vue.use(DatocmsImagePlugin, DatocmsStructuredTextPlugin);
Vue.component('structured-text', StructuredText)
Vue.component('dato-image', Image)
