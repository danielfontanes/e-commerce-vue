import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[],
    user:{}
  },
  getters: {
  },
  mutations: {
    addProduct(state,product) {
      state.products.push(product);
    },
    loginUser(state, user) {
      state.user = user;
    }
  },
  actions: {
  },
  modules: {
  }
})
