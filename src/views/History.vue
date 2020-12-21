<template>
  <main>
    <Mainheader />
    <div class="history">
      <b-container>
        <div
          style="padding: 20px; color: white; text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);"
          class="centered"
        >
          <div style="font-weight: 900; font-size: 2em;">
            Let' see what you have bought!
          </div>
          <p>Select item to delete</p>
        </div>
        <b-row>
          <div
            class="cards col-xl-4 col-lg-4 col-md-6 col-sm-12"
            v-for="(item, index) in history"
            :key="index"
          >
            <img src="../assets/img/float.png" alt="" />
            <div class="cards-mid">
              <div style="font-weight: bolder">{{ item.history_invoice }}</div>
              <div>{{ item.sub_total }}</div>
              <div>{{ item.payment_method }}</div>
            </div>
            <button @click="deleteHistory()">Delete</button>
          </div>
        </b-row>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="limit"
          @change="handlePageChange"
        ></b-pagination>
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

.history {
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
b-pagination {
  padding-top: 20px;
}
</style>
