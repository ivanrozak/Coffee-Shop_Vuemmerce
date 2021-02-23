import axios from 'axios'

export default {
  state: {
    cart: [],
    history: [],
    histories: [],
    invoice: '',
    page: 1,
    limit: 30
  },
  mutations: {
    setCart(state, payload) {
      state.cart = payload
    },
    setAllHistory(state, payload) {
      state.history = payload
    },
    setUserHistory(state, payload) {
      state.history = payload
    },
    deleteCart(state) {
      state.cart = []
    },
    setInvoice(state, payload) {
      state.invoice = payload
    },
    deleteInvoice(state) {
      state.invoice = ''
    }
  },
  actions: {
    postDetailHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}history_details/`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteDetailHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}history_details/${payload}`)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    postHistories(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}history/`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}history/${payload}`)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    patchHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_URL}history/${payload}`)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    },
    getHistoryUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}history/user/${payload}`)
          .then(response => {
            context.commit('setUserHistory', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getAllHistory(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}history/?page=1&limit=${context.state.limit}`
          )
          .then(response => {
            context.commit('setUserHistory', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getCartData(state) {
      return state.cart
    },
    getDataUserHistory(state) {
      return state.history
    },
    getAllDataHistory(state) {
      return state.history
    },
    getInvoice(state) {
      return state.invoice
    }
  }
}
