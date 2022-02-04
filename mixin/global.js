import Vue from 'vue'

let mixin = {
  methods: {
    fixUrl(file){
      return `http://localhost:1337${file}`
    },
    fixImageUrl(image){
      return `http://localhost:1337${image?.data?.attributes?.url}`
    }
  }
};

Vue.mixin(mixin)
