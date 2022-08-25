import Vue from 'vue';
const marked = require('marked');
import dayjs from 'dayjs';

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
    },
    formateDate(data){
      return dayjs(data).format('D MMMM, YYYY');
    }
  }
};

Vue.mixin(mixin)
