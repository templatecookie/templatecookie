// store.js
import { reactive } from 'vue'

const store = reactive({
  global: {},
  setGlobal(data) {
    this.global = data
  }
})

export default store;
