<template>
  <div>
    <div>
      <div class="content-top centered">
        <h1>Forgot your password?</h1>
        <h6>Don't worry, we got your back</h6>
        <div class="form-email">
          <b-form>
            <input
              type="text"
              placeholder="Enter your email address to get link"
            />
            <button class="yellow">Send</button>
          </b-form>
        </div>
        <h5>Click here if you didn't receive any link</h5>
        <h5>in 2 minutes</h5>
        <button class="brown">Resend Link</button>
        <h5>01.54</h5>
      </div>
    </div>

    <Foooter />
  </div>
</template>

<script>
import Foooter from '../components/_base/Footer.vue'

export default {
  name: 'ForgotPwd',
  component: {
    Foooter
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.content-top {
  color: white;
  background-image: url('../assets/img/forgot-bg.png');
  font-family: 'Poppins';
  background-size: cover;
  padding: 70px 80px 80px;
}
h1 {
  padding: 50px 0px 10px;
  font-weight: bold;
  text-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
h3 {
  margin: 30px 0px 35px;
  font-weight: bold;
  text-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
h6 {
  font-weight: bold;
  text-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
h5 {
  font-weight: 400;
  text-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.form-email {
  margin: 80px 0px;
}
form input {
  border-radius: 10px;
  padding: 20px 20px;
  width: 400px;
}

button {
  margin: 10px 0px 20px;
  padding: 20px 60px;
  border-radius: 10px;
  border: 0px;
  font-weight: 500;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.yellow {
  margin-left: 40px;
  background-color: #ffba33;
  color: #6a4029;
  font-weight: bold !important;
}
.brown {
  background-color: #6a4029;
  color: white;
}

.centered {
  text-align: center;
}
</style>
