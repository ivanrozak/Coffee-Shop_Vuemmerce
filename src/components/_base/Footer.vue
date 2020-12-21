<template>
  <footer>
    <hr />
    <b-container class="mainfooter">
      <div class="footer-content">
        <div class="footer-portfolio col-xl-8">
          <div
            style="font-weight: 800; padding-bottom: 20px"
            class="company-icon"
          >
            <img src="../../assets/img/coffee1.png" alt="coffee" />
            Coffee Shop
          </div>
          <div
            style="width: 250px; padding-bottom: 10px"
            class="company-profile"
          >
            Coffee Shop is a store that sells some good meals, and especially
            coffee. We provide high quality beans
          </div>
          <div style="padding-bottom: 10px;">
            <router-link style="padding-right: 15px" to="#"
              ><img src="../../assets/img/fb.png"
            /></router-link>
            <router-link style="padding-right: 15px" to="#"
              ><img src="../../assets/img/tweet.png"
            /></router-link>
            <router-link to="#"
              ><img style="border-radius: 50%" src="../../assets/img/ig.png"
            /></router-link>
          </div>
          <p style="padding-top: 5px; color: #AFB5C0;">©2020CoffeeStore</p>
        </div>
        <div class="col-xl-2">
          <div class="footer-part">
            <router-link class="link-router" to="/"
              ><strong>Product</strong></router-link
            >
            <router-link class="link-router" to="/">Download</router-link>
            <router-link class="link-router" to="/">Picing</router-link>
            <router-link class="link-router" to="/">Location</router-link>
            <router-link class="link-router" to="/">Countries</router-link>
            <router-link class="link-router" to="/">Blog</router-link>
          </div>
        </div>
        <div class="col-xl-2">
          <div class="footer-part">
            <router-link class="link-router" to="/"
              ><strong>Engage</strong></router-link
            >
            <router-link class="link-router" to="/">Coffee Shop</router-link>
            <router-link class="link-router" to="/">FAQ</router-link>
            <router-link class="link-router" to="/">About Us</router-link>
            <router-link class="link-router" to="/">Privacy Policy</router-link>
            <router-link class="link-router" to="/"
              >Terms of Service</router-link
            >
          </div>
        </div>
      </div>
    </b-container>
  </footer>
</template>

<style scoped>
/* font selector */
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.footer-content {
  display: flex;
}
footer {
  font-family: 'Rubik';
  background: #f8f8f8;
}
.mainfooter {
  padding-top: 40px;
  padding-bottom: 40px;
}
.link-router {
  padding-bottom: 12px;
  color: #4f5665;
  text-decoration: none;
}
.link-router:hover {
  text-decoration: none;
  color: #0b132a;
  font-weight: 600;
}
.footer-part {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}
hr {
  margin-top: 0px;
}
</style>
