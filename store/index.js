export const state = () => ({
  global: null,
})

export const getters = {
  getGlobalData(state){
    return state.global;
  }
}

export const mutations = {
  SET_GLOBAL_DATA(state, data){
    state.global = data
  }
}
