import axios from 'axios'

export default {
  state: {},
  mutations: {},
  actions: {
    registerUser(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://localhost:3000/user/register`, payload)
          .then(result => {
            resolve(result)
          })
          .catch(err => {
            reject(err.response)
          })
      })
    }
  },
  getters: {}
}
