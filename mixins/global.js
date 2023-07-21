// import Vue from 'vue';
const marked = require("marked");

import Vue from "vue";

export const mixin = {
  methods: {
    parseMarkdown(markdown) {
      return marked.parse(markdown);
    },
  },
};

Vue.mixins(mixin);
