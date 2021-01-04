<template>
  <div class="home">
    <Mainheader />
    <main>
      <div class="container">
        <div class="user-profile">
          <h2>
            User Profile
          </h2>
          <div class="sub-box-user-profile">
            <div class="sub-box-user-profile-kiri">
              <img
                style="border-radius: 50%;"
                src="../assets/img/image 39.png"
              />
              <br />
              <h6>Zulaikha</h6>
              <p>zulaikha17@gmail.com</p>
              <button class="orange btn-sm">
                Choose photo
              </button>
              <button class="brown btn-sm">
                Remove photo
              </button>
              <button class="white">
                Edit Password
              </button>
              <h6 style="padding-top: 20px">
                Do you want to save <br />
                the change ?
              </h6>
              <button class="brown">
                Save Change
              </button>
              <button class="orange">
                Cancel
              </button>
              <button class="white">
                Log Out
              </button>
            </div>
            <div class="sub-box-user-profile-kanan">
              <div class="user-profile-form">
                <div class="user-profile-form-left">
                  <h4 style="font-weight: 900;">Contacts</h4>
                  <div style="margin-bottom: 50px; margin-top: 30px;">
                    <label for="exampleInputEmail1">Email address :</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="zulaikha@gmail.com"
                    />
                  </div>
                  <div style="margin-bottom: 50px;">
                    <label>Delivery address :</label>
                    <input
                      class="form-control"
                      placeholder="Enter delivery address"
                    />
                  </div>
                  <h4 style="font-weight: 900;">Details</h4>
                  <div style="margin-top: 30px; margin-bottom: 50px;">
                    <label>Display name :</label>
                    <input class="form-control" placeholder="Zulaikha" />
                  </div>
                  <div style="margin-bottom: 50px;">
                    <label>First name :</label>
                    <input class="form-control" placeholder="Zulaikha" />
                  </div>
                  <div style="margin-bottom: 50px;">
                    <label>Last name :</label>
                    <input class="form-control" placeholder="Nirmala" />
                  </div>
                </div>
                <div class="user-profile-form-right">
                  <div style="margin-top: 60px; margin-bottom: 50px;">
                    <label>Mobile number :</label>
                    <input class="form-control" placeholder="+6285934958547" />
                  </div>
                  <div style="margin-top: 230px; margin-bottom: 50px;">
                    <label>DD/MM/YY :</label>
                    <input class="form-control" placeholder="03/04/09" />
                  </div>
                </div>
              </div>
              <div class="selector">
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1"
                    >Male</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2"
                    >Female</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
// [1] step pertama import komponen

import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'
// import FormInput from '../components/_base/FormInput'

export default {
  name: 'Home',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Mainheader,
    Footer
    // FormInput
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.centered {
  text-align: center;
}
main {
  background: url('../assets/img/coffee-bg.png');
  background-repeat: no-repeat;
  background-size: 100% auto;
  font-family: 'Rubik';
}
.user-profile {
  height: 1200px;
  /* border: 3px solid blanchedalmond; */
}
.sub-box-user-profile {
  margin: 15px 15px;
  height: 970px;
  background-color: #ffff;
  border-radius: 20px;
  display: flex;
  border: 3px solid blanchedalmond;
}
.sub-box-user-profile-kiri {
  flex: 1;
  padding: 80px 60px;
  text-align: center;
  /* border: 3px solid rgb(49, 37, 19); */
}

.sub-box-user-profile-kanan {
  flex: 2.2;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
  background-color: #ffff;
  border-radius: 20px;
  margin: 20px 20px;
  border-bottom: 10px solid#6a4029;
}
.user-profile-form {
  display: flex;
}
.user-profile-form-left {
  flex: 1.5;
  padding: 20px 20px;
}
.user-profile-form-right {
  flex: 1;
  padding: 20px 20px;
}
.selector {
  display: flex;
  justify-content: space-evenly;
  font-size: 1.5em;
  margin-bottom: 60px;
  margin-top: 40px;
}
input {
  border: none;
  border-bottom: 1px solid black !important;
  border-radius: 0px !important;
}
h2 {
  font-weight: 600;
  color: white;
  padding: 20px 20px;
}
h6 {
  padding-top: 10px;
  font-weight: bold;
}
button {
  font-weight: bold;
  margin: 15px 0px;
  width: 100%;
  border-radius: 10px;
  line-height: 50px;
  border: none;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
}
.brown {
  background-color: #6a4029;
  color: #ffff;
}
.orange {
  background-color: #ffba33;
  color: #6a4029;
}
.white {
  color: #6a4029;
}
.btn-sm {
  line-height: 35px;
}
</style>
