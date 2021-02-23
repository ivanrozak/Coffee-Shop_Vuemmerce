import axios from 'axios'

export default {
  state: {
    cart: [],
    history: [],
    histories: [],
    invoice: '',
    page: 1,
    limit: 30,
    daily: '',
    weekly: '',
    yearly: ''
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
    },
    setDaily(state, payload) {
      state.daily = payload
    },
    setWeekly(state, payload) {
      state.weekly = payload
    },
    setYearly(state, payload) {
      state.yearly = payload
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
    },
    getDailyReport(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}history/total/day`)
          .then(response => {
            context.commit('setDaily', response.data.data[0].total_daily)
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getWeeklyReport(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}history/total/week`)
          .then(response => {
            context.commit('setWeekly', response.data.data[0].total_by_week)
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getYearlyReport(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}history/total/year`)
          .then(response => {
            context.commit('setYearly', response.data.data[0].total_by_year)
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
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
    },
    getDaily(state) {
      return state.daily
    },
    getWeekly(state) {
      return state.weekly
    },
    getYearly(state) {
      return state.yearly
    }
  }
}
