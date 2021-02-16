<template>
  <header>
    <b-container class="mainheader">
      <div @click="toHome()" class="home-icon col-xl-3">
        <img
          style="margin-right: 10px;"
          src="../../assets/img/coffee1.png"
        />Coffee Shop
      </div>
      <div class="header-menu col-xl-5">
        <router-link class="link-router" to="/">Home</router-link>
        <router-link class="link-router" to="/product">Product</router-link>
        <router-link class="link-router" to="/yourcart">Your Cart</router-link>
        <router-link class="link-router" to="/history">History</router-link>
        <router-link
          v-if="user.user_role === 1"
          class="link-router"
          to="/dashboard"
          >Dashboard</router-link
        >
      </div>
      <div class="header-icon col-xl-4">
        <div class="search-icons">
          <b-input-group class="input">
            <b-input-group-prepend>
              <span class="input-group-text"
                ><b-icon icon="search"></b-icon
              ></span>
            </b-input-group-prepend>
            <b-form-input
              v-model="searchProduct"
              placeholder="Search"
              @keyup.enter="searchs()"
            >
            </b-form-input>
          </b-input-group>
        </div>
        <!-- <router-link to="#"><img src="../../assets/img/chat.png"/></router-link> -->
        <b-dropdown
          size="sm"
          variant="link"
          toggle-class="text-decoration-none"
          no-caret
        >
          <template #button-content>
            <img
              style="border-radius: 50%"
              src="../../assets/img/prof.png"
            /><span class="sr-only">Search</span>
          </template>
          <b-dropdown-item href="#">Login</b-dropdown-item>
          <b-dropdown-item @click="handleProfile"
            >Update Profile</b-dropdown-item
          >
          <b-dropdown-item @click="handleLogout">Logout</b-dropdown-item>
        </b-dropdown>
      </div>
    </b-container>
    <hr />
  </header>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  data() {
    return {
      searchProduct: ''
    }
  },
  computed: {
    ...mapGetters({ user: 'setUser' })
  },
  methods: {
    ...mapActions(['logout', 'getProducts']),
    ...mapMutations(['changePage', 'search']),
    handleLogout() {
      console.log('anda berhasil logout')
      this.logout()
    },
    searchs() {
      this.search(this.searchProduct)
      this.changePage(1)
      this.getProducts()
      this.searchProduct = ''
    },
    handleProfile() {
      this.$router.push('profile')
    },
    toHome() {
      this.$router.push('/')
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
  align-items: center;
  cursor: pointer;
}
.header-menu {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.header-icon {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
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
input {
  width: 140px !important;
  margin-right: 10px;
}

.search-icons img {
  height: 20px;
  margin-right: 20px;
}
</style>
