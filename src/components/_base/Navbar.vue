<template>
  <nav>
    <router-link class="link-router" to="/">Favourite & Promo</router-link>
    <button @click="getCat()">cat1</button>
    <router-link class="link-router" to="/">Coffee</router-link>
    <router-link class="link-router" to="/">Non Coffee</router-link>
    <router-link class="link-router" to="/">Foods</router-link>
    <router-link class="link-router" to="/">Add-on</router-link>
    <div>
      <b-dropdown id="dropdown-1" text="Sort by" class="m-md-2">
        <b-dropdown-item>Highest Price</b-dropdown-item>
        <b-dropdown-item>Lowest Price</b-dropdown-item>
        <b-dropdown-item>Recently Updated</b-dropdown-item>
        <b-dropdown-item>A-Z</b-dropdown-item>
        <b-dropdown-item>Z-A</b-dropdown-item>
      </b-dropdown>
    </div>
  </nav>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'Navbar',
  data() {
    return {
      category: ''
    }
  },
  methods: {
    ...mapActions(['getProducts']),
    ...mapMutations(['changePage', 'changeCategory']),
    getCat() {
      this.changeCategory(1)
      this.changePage(1)
      this.getProducts(this.category)
    }
  }
}
</script>

<style scoped>
/* font selector */
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

nav {
  font-family: 'Rubik';
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  height: 70px;
}

.link-router {
  padding-bottom: 7px;
  color: #4f5665;
  text-decoration: none;
}
.link-router:hover {
  text-decoration: none;
  color: #0b132a;
  font-weight: bold;
  border-bottom: 2px solid black;
}
.menu_items {
  cursor: pointer;
}
</style>
