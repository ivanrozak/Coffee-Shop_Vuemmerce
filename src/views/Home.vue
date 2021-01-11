<template>
  <div class="home">
    <Mainheader />
    <div class="homePage">
      <div class="banner">
        <b-container>
          <div class="banner-left">
            <h1>Start Your Day with Coffee and Good Meals</h1>
            <br />
            <p>
              We provide high quality beans, good taste, and healthy meals made
              by love just for you. Start your day with us for a bigger smile!
            </p>
            <br />
            <br />
            <button>Get Started</button>
          </div>
        </b-container>
      </div>
      <b-container>
        <div class="statistic">
          <div class="stat">
            <img src="../assets/img/ig.png" alt="" />
            <div>
              <h5>90+</h5>
              <p>Staff</p>
            </div>
          </div>
          <div class="vl"></div>
          <div class="stat">
            <img src="../assets/img/ig.png" alt="" />
            <div>
              <h5>90+</h5>
              <p>Staff</p>
            </div>
          </div>
          <div class="vl"></div>
          <div class="stat">
            <img src="../assets/img/ig.png" alt="" />
            <div>
              <h5>90+</h5>
              <p>Staff</p>
            </div>
          </div>
        </div>
        <div class="home-details">
          <img src="../assets/img/teamwork.png" alt="" />
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
        <div class="fav centered">
          <h4>Here is People's Favourite</h4>
          <br />
          <p>
            Let's choose and have a bit taste of people's favourite. It might be
            yours too!
          </p>
          <div class="card-product">
            disini perulangan product
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
        <div class="feedback">
          <h4>Loved by Thousands of Happy Customer</h4>
          <p>
            These are the stories ofour customer who have visited us with great
            pleasure.
          </p>
          <div>
            carousel here
          </div>
        </div>
        <div class="promo">
          <div>
            <h4>Check our promo today!</h4>
            <p>Lets see the deals and pick yours!</p>
          </div>
          <button>See Promo</button>
        </div>
      </b-container>
      <h1>Hello {{ user.user_name }}</h1>
    </div>
    <Footer />
  </div>
</template>

<script>
// [1] step pertama import komponen

import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'
import { mapGetters } from 'vuex'
// import FormInput from '../components/_base/FormInput'

export default {
  name: 'Home',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Mainheader,
    Footer
    // FormInput
  },
  data() {
    return {
      name: 'Ivan Rozak',
      message: 'Hello World',
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
}
.banner-left {
  padding: 50px 0px 150px;
  width: 50%;
}
button {
  background-color: #ffba33;
  border-radius: 10px;
  border: none;
  width: 250px;
  padding: 15px 0;
  color: #6a4029;
  font-weight: bold;
}
h1 {
  font-weight: bold;
}
.statistic {
  padding: 30px 30px;
  position: absolute;
  top: 485px;
  display: flex;
  width: 74%;
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
  width: 40px;
  height: 40px;
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
  border-left: 0.5px solid rgb(158, 158, 158);
}
.home-details {
  padding-top: 120px;
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
.partner-img {
  display: flex;
  justify-content: center;
}
</style>
