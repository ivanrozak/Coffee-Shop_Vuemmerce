<template>
  <div class="home">
    <Mainheader />
    <b-container fluid class="centered">
      <Navbar />
    </b-container>
    <Footer />
  </div>
</template>

<script>
// [1] step pertama import komponen
import Navbar from '../components/_base/Navbar'
import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'
// import FormInput from '../components/_base/FormInput'

export default {
  name: 'Home',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Navbar,
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
    }
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
.centered {
  text-align: center;
}
</style>
