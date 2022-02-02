export default {
  head() {},
  methods: {
    fixUrl(file){
      return `http://localhost:1337${file}`
    },
    fixImageUrl(image){
      return `http://localhost:1337${image?.data?.attributes?.url}`
    }
  }
};
