import Vue from 'vue'
import Vuex from 'vuex'
import Register from './modules/register'
import Auth from './modules/auth'
import Product from './modules/product'
import Coupon from './modules/coupon'
import History from './modules/history'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Product, Register, Coupon, History },
  state: {
    name: 'Ivan Rozak'
  },
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user', 'History.cart', 'History.invoice', 'Coupon.promo']
    })
  ]
})
