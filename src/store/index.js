import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './modules/user';
import cartStore from './modules/cart';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: userStore,
    cart: cartStore
  }
})