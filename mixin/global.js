import Vue from 'vue'

let mixin = {
  methods: {
    fixUrl(file){
      return `http://localhost:1337${file}`
    },
    fixImageUrl(image, imageUrl = false){
      if (imageUrl) {
        return `http://localhost:1337${image}`
      } else {
        return `http://localhost:1337${image?.data?.attributes?.url}`
      }
    }
  }
};

Vue.mixin(mixin)
