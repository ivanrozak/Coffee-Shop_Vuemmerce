<template>
  <main>
    <Mainheader />
    <div class="yourcart">
      <b-container>
        <h2 class="rubik font-title">Checkout your item now!</h2>
        <b-row class="poppins" align-h="between">
          <b-col cols="5">
            <div class="box-left padding-20 border-white">
              <h3>Order Summary</h3>
              <b-row>
                <b-col>picture here</b-col>
                <b-col>name here</b-col>
                <b-col>idr here</b-col>
              </b-row>
              <hr />
              <b-row>
                <b-col>
                  <p>SUB TOTAL</p>
                  <p>TAX & FEES</p>
                  <p>SHIPPING</p>
                </b-col>
                <b-col>
                  <p>value 1</p>
                  <p>value 2</p>
                  <div>aaa</div>
                  <p>value 3</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>TOTAL</b-col>
                <b-col>VALUE</b-col>
              </b-row>
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
b-pagination {
  padding-top: 20px;
}
</style>
