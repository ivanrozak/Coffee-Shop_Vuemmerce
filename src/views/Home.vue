<template>
  <div class="home">
    <Mainheader />
    <div class="homePage">
      <div class="banner">
        <b-container>
          <div>
            <b-input-group class="input">
              <b-input-group-prepend>
                <span class="input-group-text"
                  ><b-icon icon="search"></b-icon
                ></span>
              </b-input-group-prepend>
              <b-form-input placeholder="Search"> </b-form-input>
            </b-input-group>
          </div>
          <h1>
            Start Your Day with <br />
            Coffee and Good Meals
          </h1>
          <br />
          <p>
            We provide high quality beans, good taste, and healthy <br />
            meals made by love just for you. Start your day with us <br />
            for a bigger smile!
          </p>
          <br />
          <b-button class="btn-start">Get Started</b-button>
        </b-container>
      </div>
      <b-container>
        <div class="statistic">
          <div class="stat">
            <img src="../assets/img/1.png" alt="" />
            <div>
              <h5>90+</h5>
              <p>Staff</p>
            </div>
          </div>
          <div class="vl"></div>
          <div class="stat">
            <img src="../assets/img/2.png" alt="" />
            <div>
              <h5>30+</h5>
              <p>Store</p>
            </div>
          </div>
          <div class="vl"></div>
          <div class="stat">
            <img src="../assets/img/3.png" alt="" />
            <div>
              <h5>800+</h5>
              <p>Customers</p>
            </div>
          </div>
        </div>
        <div class="home-details">
          <b-img
            :src="require('../assets/img/teamwork.png')"
            fluid
            alt="Responsive image"
          ></b-img>
          <div class="details-right">
            <h4>We Provide Good Coffee and Healthy Meals</h4>
            <br />
            <p>
              You can explore the menu we provide with fun and have their own
              taste and makeyour day better.
            </p>
            <li>High quality beans</li>
            <li>Healthy meals, you can request the ingredients</li>
            <li>Chat with oru staff to get better esperience for ordering</li>
            <li>Free member card with minimum purchase of IDR 200.000.</li>
          </div>
        </div>
        <div class="centered">
          <h4>Here is People's Favourite</h4>
          <br />
          <p>
            Let's choose and have a bit taste of people's favourite. It might be
            yours too!
          </p>
          <div class="card-product mt-5">
            <div class="card">
              <div class="mb-5">
                <b-img
                  :src="require('../assets/img/float.png')"
                  v-bind="mainProps"
                  rounded="circle"
                ></b-img>
              </div>
              <h5><strong>Hazelnut Latte</strong></h5>
              <ul style="text-align: left;">
                <li>Hazelnut Syrup</li>
                <li>Vanilla Whiped Cream</li>
                <li>Ice / Hot</li>
                <li>Sliced Banana on Top</li>
              </ul>
              <h4><strong>IDR. 25.000</strong></h4>
              <div>
                <b-button class="order mt-3" variant="outline-warning"
                  ><strong>Order Now</strong></b-button
                >
              </div>
            </div>
            <div class="card">
              <div class="mb-5">
                <b-img
                  :src="require('../assets/img/float.png')"
                  v-bind="mainProps"
                  rounded="circle"
                ></b-img>
              </div>
              <h5><strong>Hazelnut Latte</strong></h5>
              <ul style="text-align: left;">
                <li>Hazelnut Syrup</li>
                <li>Vanilla Whiped Cream</li>
                <li>Ice / Hot</li>
                <li>Sliced Banana on Top</li>
              </ul>
              <h4><strong>IDR. 25.000</strong></h4>
              <div>
                <b-button class="order mt-3" variant="outline-warning"
                  ><strong>Order Now</strong></b-button
                >
              </div>
            </div>
            <div class="card">
              <div class="mb-5">
                <b-img
                  :src="require('../assets/img/float.png')"
                  v-bind="mainProps"
                  rounded="circle"
                ></b-img>
              </div>
              <h5><strong>Hazelnut Latte</strong></h5>
              <ul style="text-align: left;">
                <li>Hazelnut Syrup</li>
                <li>Vanilla Whiped Cream</li>
                <li>Ice / Hot</li>
                <li>Sliced Banana on Top</li>
              </ul>
              <h4><strong>IDR. 25.000</strong></h4>
              <div>
                <b-button class="order mt-3" variant="outline-warning"
                  ><strong>Order Now</strong></b-button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="store-map centered">
          <h4>Visit Our Store in the</h4>
          <h4>Spot on the Map Below</h4>
          <br />
          <p>
            See our storein every city on the spot and spend your good day
            there. See you soon!
          </p>
          <br />
          <img src="../assets/img/map.png" alt="" />
        </div>
        <div class="partnership centered">
          <h4>Our Partner</h4>
          <br />
          <div class="partner-img">
            <img src="../assets/img/spotify.png" alt="" />
            <img src="../assets/img/spotify.png" alt="" />
            <img src="../assets/img/spotify.png" alt="" />
            <img src="../assets/img/spotify.png" alt="" />
          </div>
        </div>
        <div class="feedback centered">
          <h4>Loved by Thousands of Happy Customer</h4>
          <p>
            These are the stories ofour customer who have visited us with great
            pleasure.
          </p>
          <vue-glide class="demo" :bullet="true">
            <vue-glide-slide v-for="i in 10" :key="i">
              Slide {{ i }}
            </vue-glide-slide>
          </vue-glide>
        </div>
        <div class="promo">
          <div>
            <h4>Check our promo today!</h4>
            <p>Lets see the deals and pick yours!</p>
          </div>
          <b-button class="btn-promo">See Promo</b-button>
        </div>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
// [1] step pertama import komponen

import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'
import { mapGetters } from 'vuex'
import VueGlide from '../components/_base/Home/Glide'
import VueGlideSlide from '../components/_base/Home/GlideSlide'

export default {
  name: 'Home',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Mainheader,
    Footer,
    [VueGlide.name]: VueGlide,
    [VueGlideSlide.name]: VueGlideSlide
  },
  data() {
    return {
      mainProps: {
        width: 150,
        height: 150
      },
      rule: 1,
      searchData: 'Sepatu Baru',
      dataProduct: [
        {
          product_name: 'Meja',
          product_price: '50000'
        },
        {
          product_name: 'Kursi',
          product_price: '30000'
        }
      ],
      urlGoogle: 'http://google.com',
      urlYoutube: 'http://youtube.com',
      product_name: 'Sepatu Baru'
    }
  },
  computed: {
    reverseMessage: function() {
      return this.message
        .split(' ')
        .reverse()
        .join(' ')
    },
    ...mapGetters({ user: 'setUser' })
  },
  methods: {
    boom() {
      console.log('Boom !')
      alert('Boom !')
    },
    search() {
      console.log('Process Search !')
      console.log(this.searchData)
    },
    //ini cara ke 2
    changeNameProduct(event) {
      this.product_name = event
    }
  }
}
</script>

<style scoped>
@import '../assets/CSS/main.css';
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.centered {
  text-align: center;
}
.homePage {
  font-family: 'Rubik';
}
.banner {
  background-image: url('../assets/img/home-bg.png');
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  color: white;
  padding-top: 20px;
  padding-bottom: 120px;
}
.input {
  margin-left: auto;
  width: 300px;
}
.btn-start {
  background-color: #ffba33;
  border-radius: 10px;
  border: none;
  width: 250px;
  padding: 15px 0;
  color: #6a4029;
  font-weight: bold;
}
.btn-start:hover {
  background-color: #ffba33;
}
h1 {
  font-weight: bold;
}
.statistic {
  padding: 30px 30px;
  top: -60px;
  position: relative;
  display: flex;
  border-radius: 10px;
  background-color: white;
  justify-content: space-evenly;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.stat {
  display: flex;
  align-items: center;
}
.stat img {
  margin: 0px 30px 0px 0px;
  background-color: #ffba33;
  padding: 9px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.stat h5 {
  font-weight: 900;
  margin: 0;
}
.stat p {
  margin: 0;
}
.vl {
  height: 70px;
  border-left: 0.5px solid rgb(221, 221, 221);
}
.home-details {
  display: flex;
}
.home-details li {
  margin-top: 20px;
  background: url('../assets/img/check li.png') no-repeat left center;
  padding: 3px 0px 3px 30px;
  list-style: none;
}
.home-details img {
  width: 50%;
}
.card-product {
  display: flex;
  justify-content: space-between;
}
.card {
  flex: 1;
  text-align: center;
  padding: 30px 10px;
  margin: 0px 10px;
}
.card li {
  margin-top: 20px;
  background: url('../assets/img/check li2.png') no-repeat left center;
  padding: 3px 0px 3px 30px;
  list-style: none;
}
.card ul {
  height: 280px;
}
.order {
  color: #6a4029;
  border-radius: 20px;
  padding: 10px 40px;
}
h4 {
  font-weight: 900;
}
.details-right {
  padding: 50px 30px;
}
.store-map {
  padding: 60px;
}
.store-map img {
  width: 80%;
}
.partnership {
  padding: 40px 20px;
}
.partner-img {
  display: flex;
  justify-content: space-between;
}
.partner-img img {
  width: 200px;
}
.feedback {
  padding: 20px;
}
.promo {
  position: relative;
  bottom: -40px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 30px 70px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.btn-promo {
  background-color: #ffba33;
  border-radius: 10px;
  border: none;
  height: 50px;
  width: 200px;
  color: #6a4029;
  font-weight: bold;
}
.btn-promo:hover {
  background-color: #ffba33;
}
.glide {
  /* display: flex; */
  border: 2px solid #ccc;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 36px;
  font-weight: 600;
  border-radius: 5px;
  transition: all 0.3s;
  opacity: 0.3;
}
</style>
