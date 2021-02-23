import axios from 'axios'

export default {
  state: {
    coupons: [],
    couponsById: {},
    cardCoupon: '',
    currentPage: 1,
    totalRows: null,
    limit: 1,
    page: 1,
    promo: {}
  },
  mutations: {
    setCoupon(state, payload) {
      state.coupons = payload.data
      state.totalRows = payload.pagination.totalData
    },
    changePages(state, payload) {
      state.page = payload
    },
    setCouponById(state, payload) {
      state.couponsById = payload
    },
    setPromo(state, payload) {
      state.promo = payload
    },
    clearPromo(state) {
      state.promo = {}
    }
  },
  actions: {
    getCoupons(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}coupon/?page=${context.state.page}&limit=${context.state.limit}`
          )
          .then(response => {
            context.commit('setCoupon', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    postCoupons(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}coupon/`, payload)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getCouponsById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}coupon/${payload}`)
          .then(response => {
            context.commit('setCouponById', response.data.data[0])
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    updateCoupons(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}coupon/${payload.id}`,
            payload.dataSet
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    deleteCoupons(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}coupon/${payload}`)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    }
  },
  getters: {
    getPageCoupon(state) {
      return state.page
    },
    getLimitCoupon(state) {
      return state.limit
    },
    getDataCoupon(state) {
      return state.coupons
    },
    getTotalRowsCoupon(state) {
      return state.totalRows
    },
    getDataCouponById(state) {
      return state.couponsById
    },
    getDataPromo(state) {
      return state.promo
    }
  }
}
