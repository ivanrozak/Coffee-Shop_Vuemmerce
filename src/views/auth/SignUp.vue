<template>
  <div class="signUp">
    <div class="content-top">
      <div class="side-image"></div>
      <div class="signup-content">
        <div class="top-header">
          <img src="../../assets/img/coffee1.png" alt="" />Coffee Shop
          <button class="login" @click="toPageLogin()">
            Login
          </button>
        </div>
        <div class="width">
          <h3 class="centered">Sign Up</h3>
          <b-form @submit.prevent="onSubmit">
            <h6>Email Address:</h6>
            <b-form-input
              v-model="form.user_email"
              type="email"
              placeholder="Enter your email address"
              required
              v-focus
            ></b-form-input>
            <h6>Password:</h6>
            <b-form-input
              v-model="form.user_password"
              type="password"
              placeholder="Enter your password"
              required
              v-focus
            ></b-form-input>
            <h6>Phone Number:</h6>
            <b-form-input
              v-model="form.user_contact"
              type="number"
              placeholder="Enter your phone number"
              required
            ></b-form-input>
            <button class="yellow" type="submit">Sign Up</button>
            <button class="google">
              <img src="../../assets/img/google.png" alt="" />Sign up with
              Google
            </button>
          </b-form>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from '../../mixins/Alert'
import Footer from '../../components/_base/Footer.vue'

export default {
  mixins: [Alert],
  name: 'SignUp',
  components: {
    Footer
  },
  data() {
    return {
      form: {
        user_contact: '',
        user_email: '',
        user_password: '',
        user_role: '0'
      }
    }
  },
  methods: {
    ...mapActions(['registerUser']),
    toPageLogin() {
      this.$router.push('login')
    },
    onSubmit() {
      if (
        this.form.user_contact === '' ||
        this.form.user_password === '' ||
        this.form.user_email === ''
      ) {
        return this.dangerToast('Please fill All Data')
      } else {
        this.registerUser(this.form)
          .then(result => {
            this.AlertSucces(result.data.msg)
            this.$router.push('/login')
          })
          .catch(err => {
            this.AlertError(err.data.msg)
          })
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.content-top {
  font-family: 'Rubik';
  display: flex;
  flex-wrap: wrap;
  height: 800px;
}
.side-image {
  background-image: url('../../assets/img/side-signup.png');
  background-size: cover;
  display: flex;
  flex: 0.45;
}
.side-image img {
  width: 100%;
}
.signup-content {
  padding: 20px 20px;
  color: #6a4029;
  font-family: 'Rubik';
  flex: 0.55;
}
.top-header {
  align-items: center;
  font-weight: bold;
  padding: 20px 70px;
  display: flex;
}
.top-header img {
  margin-right: 15px;
}
h3 {
  margin: 30px 0px 35px;
  font-weight: bold;
}
h6 {
  font-weight: bold;
  margin: 30px 0px 15px;
}
form input {
  border-radius: 10px;
  padding-left: 20px;
  height: 50px;
  width: 100%;
}
.login {
  font-weight: bold;
  margin-left: auto;
  border-radius: 20px;
  background-color: #ffba33;
  border: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 5px 30px;
}
.width button {
  margin: 10px 0px 20px;
  padding: 15px 0px;
  width: 100%;
  border-radius: 10px;
  border: 0px;
  font-weight: bold;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.width .yellow {
  margin-top: 40px;
  background-color: #ffba33;
  color: #6a4029;
}
.width .google {
  margin-top: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
}
.width .google img {
  margin-right: 10px;
  width: 20px;
}
.width {
  padding: 0px 70px;
}
.centered {
  text-align: center;
}

@media (max-width: 768px) {
  .side-image {
    display: none;
  }
  .signup-content {
    flex: 1;
  }
  .top-header {
    padding: 20px 20px;
  }
  .width {
    padding: 0px 20px;
  }
}
</style>
