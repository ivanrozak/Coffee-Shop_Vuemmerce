<template>
  <nav>
    <button class="link-router" @click="getCat()">Favourite & Promo</button>
    <button class="link-router" @click="getCat1()">Coffee</button>
    <button class="link-router" @click="getCat2()">Non Coffee</button>
    <button class="link-router" @click="getCat3()">Foods</button>
    <button class="link-router" @click="getCat4()">Add-on</button>

    <div>
      <b-dropdown id="dropdown-1" text="Sort by" class="m-md-2">
        <b-dropdown-item @click="changeSortHP()">Highest Price</b-dropdown-item>
        <b-dropdown-item @click="changeSortLP()">Lowest Price</b-dropdown-item>
        <b-dropdown-item @click="changeSortLU()"
          >Recently Updated</b-dropdown-item
        >
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
      category: '',
      sortBy: ''
    }
  },
  methods: {
    ...mapActions(['getProducts']),
    ...mapMutations(['changePage', 'changeCategory', 'changeSortBy', 'search']),
    getCat() {
      this.changeCategory('')
      this.search('')
      this.changePage(1)
      this.getProducts()
    },
    getCat1() {
      this.changeCategory(1)
      this.changePage(1)
      this.getProducts()
    },
    getCat2() {
      this.changeCategory(2)
      this.changePage(1)
      this.getProducts()
    },
    getCat3() {
      this.changeCategory(3)
      this.changePage(1)
      this.getProducts()
    },
    getCat4() {
      this.changeCategory(4)
      this.changePage(1)
      this.getProducts()
    },
    changeSortHP() {
      this.changeSortBy('product_price DESC')
      this.changePage(1)
      this.getProducts()
    },
    changeSortLP() {
      this.changeSortBy('product_price')
      this.changePage(1)
      this.getProducts()
    },
    changeSortLU() {
      this.changeSortBy('product_created_at DESC')
      this.changePage(1)
      this.getProducts()
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
  justify-items: center;
  padding: 20px;
  height: 95px;
}

.link-router {
  padding-bottom: 7px;
  color: #4f5665;
  text-decoration: none;
  border: none;
  background-color: white;
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
