import Vue from 'vue';
const marked = require('marked');

let mixin = {
  methods: {
    parseMarkdown(markdown){
      return marked.parse(markdown);
    },
    fixUrl(file){
      // return `http://localhost:1337${file}`
      return `https://api.templatecookie.com${file}`
    },
    fixImageUrl(image, imageUrl = false){
      if (imageUrl) {
        // return `http://localhost:1337${image}`
        return `https://api.templatecookie.com${image}`
      } else {
        // return `http://localhost:1337${image?.data?.attributes?.url}`
        return `https://api.templatecookie.com${image?.data?.attributes?.url}`
      }
    }
  }
};

Vue.mixin(mixin)
