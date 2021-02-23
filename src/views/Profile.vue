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
                v-if="user.user_image"
                style="border-radius: 50%;"
                :src="config + 'users/' + user.user_image"
              />
              <img
                v-else
                style="border-radius: 50%;"
                src="../assets/img/image 39.png"
              />
              <br />
              <h6>{{ user.user_name }}</h6>
              <p>{{ user.user_email }}</p>
              <input id="fileUpload" type="file" @change="handleFile" hidden />
              <button @click="chooseFile" class="orange btn-sm">
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
              <button class="brown" @click="updateProfile()">
                Save Change
              </button>
              <button class="orange">
                Cancel
              </button>
              <button class="white" @click="logout()">
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
                      v-model="user.user_email"
                      placeholder="zulaikha@gmail.com"
                      readonly
                    />
                    <br />
                    <p><i>*Email address can't be change !</i></p>
                  </div>
                  <div style="margin-bottom: 50px;">
                    <label>Delivery address :</label>
                    <input
                      class="form-control"
                      v-model="user.user_address"
                      placeholder="Enter delivery address"
                    />
                  </div>
                  <h4 style="font-weight: 900;">Details</h4>
                  <div style="margin-top: 30px; margin-bottom: 50px;">
                    <label>Display name :</label>
                    <input
                      class="form-control"
                      v-model="user.user_name"
                      placeholder="Zulaikha"
                    />
                  </div>
                  <div style="margin-bottom: 50px;">
                    <label>First name :</label>
                    <input
                      class="form-control"
                      v-model="user.user_firstname"
                      placeholder="Zulaikha"
                    />
                  </div>
                  <div style="margin-bottom: 50px;">
                    <label>Last name :</label>
                    <input
                      class="form-control"
                      v-model="user.user_lastname"
                      placeholder="Nirmala"
                    />
                  </div>
                </div>
                <div class="user-profile-form-right">
                  <div style="margin-top: 60px; margin-bottom: 50px;">
                    <label>Mobile number :</label>
                    <input
                      class="form-control"
                      user.user_contact
                      placeholder="+6285934958547"
                    />
                  </div>
                  <div style="margin-top: 230px; margin-bottom: 50px;">
                    <label>DD/MM/YY :</label>
                    <input
                      class="form-control"
                      v-model="user.user_birth"
                      placeholder="03/04/09"
                    />
                  </div>
                </div>
              </div>
              <div class="selector">
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-form-radio-group
                    v-model="user.user_gender"
                    :options="options"
                    :aria-describedby="ariaDescribedby"
                    name="radio-inline"
                  ></b-form-radio-group>
                </b-form-group>
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
import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'
import { mapGetters, mapActions } from 'vuex'
import Alert from '../mixins/Alert'

export default {
  mixins: [Alert],
  name: 'Home',
  components: {
    Mainheader,
    Footer
  },
  mounted() {
    this.getUserByEmail()
  },
  computed: {
    ...mapGetters({ user: 'setUser' })
  },
  data() {
    return {
      options: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' }
      ],
      config: process.env.VUE_APP_URL
    }
  },
  methods: {
    ...mapGetters(['setUser']),
    ...mapActions(['getUserByEmails', 'updateProfileUsers']),
    getUserByEmail() {
      this.getUserByEmails(this.user.user_email)
    },
    updateProfile() {
      const {
        user_name,
        user_firstname,
        user_lastname,
        user_gender,
        user_contact,
        user_image,
        user_birth,
        user_address
      } = this.user
      const data = new FormData()
      data.append('user_name', user_name)
      data.append('user_firstname', user_firstname)
      data.append('user_lastname', user_lastname)
      data.append('user_gender', user_gender)
      data.append('user_contact', user_contact)
      data.append('user_image', user_image)
      data.append('user_birth', user_birth)
      data.append('user_address', user_address)
      this.updateProfileUsers(data)
        .then(result => {
          this.AlertSucces(result.data.msg)
        })
        .catch(err => {
          this.AlertError(err.data.msg)
        })
    },
    handleFile(event) {
      this.user.user_image = event.target.files[0]
    },
    chooseFile() {
      document.getElementById('fileUpload').click()
    }
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
