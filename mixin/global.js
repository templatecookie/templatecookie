import Vue from 'vue';
const marked = require('marked');
import dayjs from 'dayjs';

let mixin = {
  methods: {
    parseMarkdown(markdown){
      return marked.parse(markdown);
    },
    formateDate(data){
      return dayjs(data).format('D MMMM, YYYY');
    }
  }
};

Vue.mixin(mixin)
