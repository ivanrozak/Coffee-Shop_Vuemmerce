<template>
  <main>
    <Mainheader />
    <div class="yourcart">
      <b-container>
        <h5>Favourite & Promo >Add new promo</h5>
        <b-row class="poppins" align-h="between">
          <b-col cols="5">
            <div class="box-left padding-20">
              <img class="centered" src="../assets/logo.png" />
              <button class="button-full" type="submit">Confirm and Pay</button>
              <button class="button-full" type="submit">Confirm and Pay</button>
            </div>
          </b-col>
          <b-col cols="5">
            <h4 class="font-title">Address details</h4>
            <div class="border-white padding-20">
              <p>Delivery to value address</p>
              <hr />
              <p>disini alamat</p>
              <hr />
              <p>contsct user</p>
            </div>
            <h4 class="font-title">Payment method</h4>
            <div class="border-white padding-20">
              <p>Card</p>
              <hr />
              <p>Bank Account</p>
              <hr />
              <p>Cash on Delivery</p>
            </div>
            <button class="button-full" type="submit">Confirm and Pay</button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </main>
</template>

<script>
// [1] step pertama import komponen
import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'
import axios from 'axios'

export default {
  name: 'History',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Mainheader,
    Footer
  },
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      history: [],
      alert: false,
      isMsg: '',
      history_id: '',
      currentPage: 1,
      totalRows: null,
      limit: 12,
      page: 1
    }
  },
  created() {
    this.getHistory()
  },
  methods: {
    getHistory() {
      axios
        .get(
          `http://localhost:3000/history?page=${this.page}&limit=${this.limit}`
        )
        .then(response => {
          console.log(response)
          this.totalRows = response.data.pagination.totalData
          this.history = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteHistory(history_id) {
      console.log(history_id)
    },
    handlePageChange(numberPage) {
      console.log(numberPage)
      this.page = numberPage
      this.getHistory()
    }
  }
}
</script>

<style scoped>
/* font selector */
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.yourcart {
  padding: 30px;
  font-family: 'Rubik';
  background-image: url('../assets/img/coffee-bg2.png');

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.centered {
  text-align: center;
}
.poppins {
  font-family: 'Poppins';
}
.rubik {
  font-family: 'Rubik';
}
.padding-20 {
  padding: 10px 20px;
}
.border-white {
  background-color: white;
  border-radius: 20px;
}
.cards {
  border-radius: 10px;
  padding: 20px 20px;
  margin: 20px 20px;
  display: flex;
  background-color: white;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
}
.cards img {
  border-radius: 50%;
  width: 70px;
  margin-right: 20px;
}
.cards-mid {
  width: 190px;
}
.cards button {
  margin-top: 40px;
  width: 60px;
  height: 30px;
  border-radius: 10px;
}
.font-title {
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  font-weight: bold;
}
.button-full {
  width: 100%;
  border-radius: 20px;
  padding: 20px;
  background-color: #6a4029;
  color: white;
  font-weight: bold;
}
b-pagination {
  padding-top: 20px;
}
</style>
