<template>
  <header>
    <b-container class="mainheader">
      <div class="home-icon col-xl-3">
        <img style="margin-right: 10px;" src="../../assets/img/coffee1.png" />
        Coffee Shop
      </div>
      <div class="header-menu col-xl-6">
        <router-link class="link-router" to="/">Home</router-link>
        <router-link class="link-router" to="/product">Product</router-link>
        <router-link class="link-router" to="/yourcart">Your Cart</router-link>
        <router-link class="link-router" to="/history">History</router-link>
      </div>
      <div class="header-icon col-xl-3">
        <input type="text" v-model="searchProduct" @keyup.enter="search()" />
        <!-- <router-link to="#"
          ><img src="../../assets/img/Vector.png"
        /></router-link> -->
        <router-link to="/addCoupon"
          ><img src="../../assets/img/chat.png"
        /></router-link>
        <router-link to="#"
          ><img style="border-radius: 50%" src="../../assets/img/prof.png"
        /></router-link>
        <button @click="handleLogout">logout</button>
      </div>
    </b-container>
    <hr />
  </header>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'Navbar',
  data() {
    return {
      searchProduct: ''
    }
  },
  methods: {
    ...mapActions(['logout', 'getProducts']),
    ...mapMutations(['changePage']),
    handleLogout() {
      console.log('anda berhasil logout')
      this.logout()
    },
    search() {
      this.changePage(1)
      this.getProducts(this.searchProduct)
    }
  }
}
</script>

<style scoped>
/* font selector */
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.mainheader {
  margin-top: 15px;
  display: flex;
  justify-content: space-evenly;
  font-family: 'Rubik';
}
.home-icon {
  font-size: 1.1em;
  font-weight: 600;
  display: flex;
  justify-content: left;
}
.header-menu {
  display: flex;
  justify-content: space-evenly;
}
.header-icon {
  display: flex;
  justify-content: space-evenly;
}
.link-router {
  color: #4f5665;
  text-decoration: none;
}
.link-router:hover {
  text-decoration: none;
  color: #6a4029;
  font-weight: 900;
}
hr {
  margin-bottom: 0px;
}
</style>
