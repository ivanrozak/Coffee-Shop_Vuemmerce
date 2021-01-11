import axios from 'axios'

export default {
  state: {
    limit: 12,
    page: 1,
    products: [],
    totalRows: null,
    sortBy: ''
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
    }
  },
  actions: {
    getProducts(context, payload) {
      let name
      if (payload) {
        name = payload
      } else {
        name = ''
      }
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/product?product_name=${name}&page=${context.state.page}&limit=${context.state.limit}&sortBy=${context.state.sortBy}&category_id=${context.state.category}`
          )
          .then(response => {
            console.log(response)
            context.commit('search', payload)
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
    getCategory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/product?page=${context.state.page}&limit=${context.state.limit}&sortBy=${context.state.sortBy}&category_id=${payload}`
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
          .post('http://localhost:3000/product/', payload)
          .then(response => {
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            console.log(error)
            reject(error)
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
    }
  }
}
