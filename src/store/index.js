import Vue from 'vue'
import Vuex from 'vuex'
import Register from './modules/register'
import Auth from './modules/auth'
import Product from './modules/product'
//menambahkan vuex persistance state
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Product, Register },
  state: {
    name: 'Ivan Rozak'
  },
  mutations: {},
  actions: {},
  getters: {},
  //plugins presisted, mengambil data user dari auth
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})
