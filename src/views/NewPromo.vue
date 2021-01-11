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
              Add new Promo
            </li>
          </ol>
        </nav>
        <div class="add-promo">
          <div class="sub-box-add-promo">
            <div class="sub-box-add-promo-kiri">
              <div class="image">
                <img
                  style="border-radius: 50%;"
                  src="../assets/img/image 39.png"
                />
              </div>
              <br />

              <button class="black">
                Take a picture
              </button>
              <button class="orange">
                Choose from gallery
              </button>
              <div class="spacing"></div>
              <h6>Enter the discount :</h6>
              <input type="text" placeholder="Input discount" />
              <div class="spacing"></div>
              <h6>Expire date :</h6>
              <input type="text" placeholder="Select start date" />
              <input type="text" placeholder="Select end date" />
              <div class="spacing"></div>
              <h6>Input coupon code :</h6>
              <input type="text" placeholder="Input code" />
            </div>
            <div class="sub-box-add-promo-kanan">
              <div class="add-promo-form-left">
                <h6>Name :</h6>
                <input
                  type="text"
                  placeholder="Type product name max 50 characters"
                />
                <div class="spacing"></div>
                <h6>Normal Price :</h6>
                <input
                  class="form-control"
                  placeholder="Type the normal price"
                />
                <div class="spacing"></div>
                <h6>Description :</h6>
                <input
                  class="form-control"
                  placeholder="Describe your promo max 150 characters"
                />
                <div class="spacing"></div>
                <h6>Input product size :</h6>
                <p>Click size you want to use for this product</p>
                <div class="btn-group">
                  <button class="round-on"><h4>R</h4></button>
                  <button class="round-on"><h4>L</h4></button>
                  <button class="round-on"><h4>XL</h4></button>
                  <button class="round-off">250 gr</button>
                  <button class="round-off">300 gr</button>
                  <button class="round-off">500 gr</button>
                </div>
                <div class="spacing"></div>
                <h6>Input delivery methods :</h6>
                <p>Click methods you want to use for this product</p>
                <div class="btn-group">
                  <button class="btn-on"><h6>Home delivery</h6></button>
                  <button class="btn-on"><h6>Dine in</h6></button>
                  <button class="btn-off"><h6>Take Away</h6></button>
                </div>
                <div class="spacing"></div>
                <button class="brown">Save Promo</button>
                <button class="white">Cancel</button>
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
  height: 1050px;
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
  padding: 80px 60px;
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
