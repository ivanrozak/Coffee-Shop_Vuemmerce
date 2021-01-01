<template>
  <div>
    <h1>Halaman Login</h1>
    <h3>{{ dataName }}</h3>
    <h3>{{ name }}</h3>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <input
        type="email"
        v-model="form.user_email"
        placeholder="Input Your Email ..."
      /><br />
      <input
        type="password"
        v-model="form.user_password"
        placeholder="Input Your Password ..."
      />
      <br />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  computed: {
    //   mapState & mapGetters masuk sini
    //   [1] cara 1
    // dataName() {
    //   return this.$store.state.name
    // }
    // [2] cara 2, bisa dipilih salah 1
    ...mapState(['name']),
    ...mapState({ dataName: 'name' })
  },
  methods: {
    //   mapActions & mapMutation masuk sini
    ...mapActions(['login']),
    onSubmit() {
      console.log(this.form)
      this.login(this.form)
        .then(result => {
          console.log(result)
          alert('success login')
          this.$router.push('/')
        })
        .catch(err => {
          alert(err.data.msg)
        })
    },
    onReset() {
      this.form = {
        user_email: '',
        user_password: ''
      }
    }
  }
}
</script>
