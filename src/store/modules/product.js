import axios from 'axios'

export default {
  state: {
    limit: 12,
    page: 1,
    products: [],
    totalRows: null,
    sortBy: '',
    category: '',
    search: '',
    productsById: {}
  },
  mutations: {
    setProduct(state, payload) {
      //   payload = response.data
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    changePage(state, payload) {
      state.page = payload
    },
    search(state, payload) {
      state.search = payload
    },
    changeSortBy(state, payload) {
      state.sortBy = payload
    },
    changeCategory(state, payload) {
      state.category = payload
    },
    setProductById(state, payload) {
      state.productsById = payload
    }
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}product?product_name=${context.state.search}&page=${context.state.page}&limit=${context.state.limit}&sortBy=${context.state.sortBy}&category_id=${context.state.category}`
          )
          .then(response => {
            context.commit('setProduct', response.data)
            resolve(response)
          })
          .catch(error => {
            console.log(error.response)
            reject(error)
          })
      })
    },
    getCategory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_URL}product?page=${context.state.page}&limit=${context.state.limit}&sortBy=${context.state.sortBy}&category_id=${payload}`
          )
          .then(response => {
            console.log(response)
            // context.commit('getCat', payload)
            context.commit('setProduct', response.data)
            resolve(response)
            //   console.log(response)
            //   state.totalRows = response.data.pagination.totalData
            //   state.products = response.data.data
          })
          .catch(error => {
            console.log(error.response)
            reject(error)
          })
      })
    },
    postProduct(context, payload) {
      console.log(context)
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_URL}product/`, payload)
          .then(response => {
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    getProductsById(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_URL}product/${payload}`)
          .then(response => {
            console.log(response)
            context.commit('setProductById', response.data.data[0])
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    updateProducts(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_URL}product/${payload.id}`,
            payload.dataSet
          )
          .then(response => {
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    },
    deleteProducts(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_URL}product/${payload}`)
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
    getPageProduct(state) {
      return state.page
    },
    getLimitProduct(state) {
      return state.limit
    },
    getDataProduct(state) {
      return state.products
    },
    getTotalRowsProduct(state) {
      return state.totalRows
    },
    getAllDataState(state) {
      return state
    },
    getDataProductById(state) {
      return state.productsById
    }
  }
}
