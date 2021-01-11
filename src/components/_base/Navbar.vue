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
      category: ''
    }
  },
  methods: {
    ...mapActions(['getProducts']),
    ...mapMutations(['changePage', 'changeCategory', 'changeSortBy']),
    getCat() {
      this.changeCategory('*')
      this.changePage(1)
      this.getProducts(this.category)
    },
    getCat1() {
      this.changeCategory(1)
      this.changePage(1)
      this.getProducts(this.category)
    },
    getCat2() {
      this.changeCategory(2)
      this.changePage(1)
      this.getProducts(this.category)
    },
    getCat3() {
      this.changeCategory(3)
      this.changePage(1)
      this.getProducts(this.category)
    },
    getCat4() {
      this.changeCategory(4)
      this.changePage(1)
      this.getProducts(this.category)
    },
    changeSortHP() {
      this.changeSortBy('product_price DESC')
      this.changePage(1)
      this.getProducts(this.category)
    },
    changeSortLP() {
      this.changeSortBy('product_price')
      this.changePage(1)
      this.getProducts(this.category)
    },
    changeSortLU() {
      this.changeSortBy('product_created_at DESC')
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
