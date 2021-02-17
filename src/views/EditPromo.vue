<template>
  <div class="AddProduct">
    <Mainheader />
    <main>
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="./product">Favourite & Promo</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Edit Promo
            </li>
          </ol>
        </nav>
        <div class="add-promo">
          <div class="sub-box-add-promo">
            <div class="sub-box-add-promo-kiri">
              <div class="image">
                <img
                  v-if="url"
                  style="border-radius: 50%; width: 200px;"
                  :src="url"
                />
                <img
                  v-else-if="form.coupon_image"
                  style="border-radius: 50%; width: 200px;"
                  :src="'http://localhost:3000/coupons/' + form.coupon_image"
                />
                <img
                  v-else
                  style="border-radius: 50%; width: 200px;"
                  src="../assets/img/noimage.jpg"
                />
                <!-- <img
                  v-if="!url"
                  style="border-radius: 50%; width: 200px;"
                  src="../assets/img/noimage.jpg"
                />
                <img
                  v-if="url"
                  style="border-radius: 50%; width: 200px;"
                  :src="url"
                /> -->
              </div>
              <br />

              <input id="fileUpload" type="file" @change="handleFile" hidden />
              <button @click="chooseFile" class="orange">
                Choose from gallery
              </button>
              <div class="spacing"></div>
              <h6 class="centered">Expire date :</h6>
              <p>Start date :</p>
              <b-form-datepicker
                id="datepicker-buttons1"
                v-model="form.coupon_start"
                class="mb-lg-4"
                today-button
                reset-button
                close-button
                locale="en"
              ></b-form-datepicker>
              <p>End date :</p>
              <b-form-datepicker
                id="datepicker-buttons1"
                v-model="form.coupon_end"
                class="mb-lg-4"
                today-button
                reset-button
                close-button
                locale="en"
              ></b-form-datepicker>
            </div>
            <div class="sub-box-add-promo-kanan">
              <div class="add-promo-form-left">
                <h6>Input promo code :</h6>
                <input
                  type="text"
                  class="form-control"
                  v-model="form.coupon_code"
                  placeholder="Type promo code"
                />
                <div class="spacing"></div>
                <h6>Enter the discount :</h6>
                <input
                  type="number"
                  class="form-control"
                  v-model="form.coupon_discount"
                  placeholder="Type the discount in %"
                />
                <div class="spacing"></div>
                <h6>Minimum purchase :</h6>
                <input
                  type="number"
                  class="form-control"
                  v-model="form.coupon_min_purchase"
                  placeholder="Type the minimum Purchase"
                />
                <div class="spacing"></div>
                <h6>Promo limit :</h6>
                <input
                  type="number"
                  class="form-control"
                  v-model="form.coupon_max_limit"
                  placeholder="Type the promo limit"
                />
                <div class="spacing"></div>

                <button @click="updatePromo()" class="brown">Save Promo</button>
                <button @click="toHome()" class="white">Cancel</button>
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
import { mapActions, mapGetters } from 'vuex'
// import FormInput from '../components/_base/FormInput'

export default {
  name: 'Home',
  components: {
    Mainheader,
    Footer
  },
  data() {
    return {
      coupon_id: '',
      url: ''
    }
  },
  created() {
    this.coupon_id = this.$route.params.id
    this.getCouponById()
  },
  computed: {
    ...mapGetters({ form: 'getDataCouponById' })
  },
  methods: {
    ...mapActions(['updateCoupons', 'getCouponsById']),
    getCouponById() {
      this.getCouponsById(this.coupon_id)
    },
    updatePromo() {
      const {
        coupon_code,
        coupon_discount,
        coupon_image,
        coupon_min_purchase,
        coupon_max_limit,
        coupon_start,
        coupon_end
      } = this.form
      const data = new FormData()
      data.append('coupon_code', coupon_code)
      data.append('coupon_discount', coupon_discount)
      data.append('coupon_image', coupon_image)
      data.append('coupon_min_purchase', coupon_min_purchase)
      data.append('coupon_max_limit', coupon_max_limit)
      data.append('coupon_start', coupon_start)
      data.append('coupon_end', coupon_end)

      let dataUpdate = { dataSet: data, id: this.coupon_id }
      this.updateCoupons(dataUpdate)
        .then(result => {
          alert(result.data.msg)
          this.$router.push('/product')
        })
        .catch(err => {
          alert(err.data.msg)
        })
    },
    handleFile(event) {
      console.log(event)
      const file = event.target.files[0]
      this.url = URL.createObjectURL(file)
      this.form.coupon_image = event.target.files[0]
    },
    chooseFile() {
      document.getElementById('fileUpload').click()
    },
    toHome() {
      this.$router.push('/product')
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.breadcrumb {
  background-color: transparent;
  margin-bottom: 5px;
}
.breadcrumb-item {
  padding: 10px 0px;
  color: black !important;
}
.breadcrumb-item a {
  color: black !important;
}
.centered {
  text-align: center;
}
main {
  background-repeat: no-repeat;
  background-size: 100% auto;
  font-family: 'Rubik';
}
.add-promo {
  height: 750px;
}
.sub-box-add-promo {
  margin: 0px 0px;
  height: 970px;
  background-color: #ffff;
  border-radius: 20px;
  display: flex;
}
.sub-box-add-promo-kiri {
  flex: 1;
  padding: 30px 60px;
}
.image {
  text-align: center;
}

.sub-box-add-promo-kanan {
  flex: 2.2;
  margin: 0px 20px;
}

.add-promo-form-left {
  flex: 1.5;
  padding: 20px 50px;
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
  border-bottom: 1px solid rgb(179, 179, 179) !important;
  line-height: 50px;
  padding-left: 20px;
  width: 100%;
}
h2 {
  font-weight: 600;
  color: white;
  padding: 20px 20px;
}
h6 {
  padding-top: 10px;
  font-weight: bold;
  text-align: left;
  color: #6a4029;
}
button {
  font-weight: bold;
  margin: 15px 0px;
  border: none;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
}
.orange {
  background-color: #ffba33;
  color: #6a4029;
  width: 100%;
  border-radius: 10px;
  line-height: 50px;
}
.black {
  background-color: black;
  color: white;
  width: 100%;
  border-radius: 10px;
  line-height: 50px;
}
.round-on {
  background-color: #ffba33;
  color: #6a4029;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 25px;
}
.round-off {
  background-color: #e6e6e6;
  color: #535353;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 25px;
}
h4 {
  font-weight: bold;
}
.btn-on {
  background-color: #ffba33;
  color: #6a4029;
  border-radius: 10px;
  padding: 5px 25px;
  margin-right: 25px;
}
.btn-off {
  background-color: #e6e6e6;
  color: #535353;
  border-radius: 10px;
  padding: 5px 25px;
  margin-right: 25px;
}
.spacing {
  margin: 40px;
}
.brown {
  background-color: #6a4029;
  color: #e6e6e6;
  width: 100%;
  line-height: 60px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
}
.white {
  color: #535353;
  background-color: #e6e6e6;
  width: 100%;
  line-height: 60px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
}
</style>
