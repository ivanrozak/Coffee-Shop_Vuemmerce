import axios from 'axios'
import router from '../../router/index'
export default {
  state: {
    user: {},
    token: localStorage.getItem('token') || null
  },
  // mutation bisa digunakan untuk mengubah state
  mutations: {
    setUser(state, payload) {
      // console.log('proses mutation setUser')
      // console.log(payload)
      state.user = payload
      state.token = payload.token
      // console.log(state.user)
      // console.log(state.token)
    },
    setUserByEmail(state, payload) {
      state.user = payload
    },
    delUser(state) {
      state.user = {}
      state.token = null
    }
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post('http://localhost:3000/user/login', payload)
          .then(result => {
            // console.log(result)
            context.commit('setUser', result.data.data)
            localStorage.setItem('token', result.data.data.token)
            resolve(result)
          })
          .catch(error => {
            console.log(error.response)
            reject(error.response)
          })
        //   console.log('fungsi yang ada di store vuex')
        //   console.log(payload)
        //   console.log(resolve)
        //   console.log(reject)
      })
    },
    getUserByEmails(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/user/${payload}`)
          .then(result => {
            context.commit('setUserByEmail', result.data.data[0])
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    updateProfileUsers(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://localhost:3000/user/${context.state.user.user_email}/update`,
            payload
          )
          .then(result => {
            console.log(result)
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    logout(context) {
      localStorage.removeItem('token')
      localStorage.removeItem('cart')
      context.commit('delUser')
      router.push('/login')
    },
    interceptorRequest(context) {
      console.log('interceptor request works!')
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`
          // Do something before request is sent
          return config
        },
        function(error) {
          // Do something with request error
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      console.log('interceptor request works!')
      axios.interceptors.response.use(
        function(response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return response
        },
        function(error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          if (
            (error.response.data.status === 403 &&
              error.response.data.status === 'invalid token') ||
            error.response.data.status === 'invalid signature' ||
            error.response.data.status === 'jwt expired' ||
            error.response.data.status === 'jwt malformed'
          ) {
            context.dispatch('logout')
            // alert('Sorry your token is not valid')
            alert(error.response.data.msg)
          }
          return Promise.reject(error)
        }
      )
    }
  },
  getters: {
    setUser(state) {
      return state.user
    },
    isLogin(state) {
      return state.token !== null // false
    }
  }
}
