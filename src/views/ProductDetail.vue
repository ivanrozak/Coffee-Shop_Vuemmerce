<template>
  <main>
    <Mainheader />
    <div class="product-details">
      <b-container>
        Favourite & Promo <strong>> Cold Brew</strong>
        <b-row>
          <div class="left centered col-xl-5">
            <img
              style="width: 260px; border-radius: 50%"
              src="../assets/img/image 25.png"
              alt=""
            />
            <div class="product-name">COLD BREW</div>
            <div>price</div>
            <button class="button1">Add to Cart</button>
            <button class="button2">Ask a Staff</button>
          </div>
          <div class="right col-xl-7">
            <div class="box">
              <p>
                Delivery only on <strong>Monday to friday</strong> at
                <strong>1-7pm</strong>
              </p>
              <p>
                Cold brewing is a method of brewing that combines ground coffee
                and cool water and uses time instead of heat to extract the
                flavor. It is brewed in small batches and dleepes for as long as
                48 hours.
              </p>
            </div>
          </div>
        </b-row>
        <b-row>
          <div class="left-bot col-xl-8">
            asdsa
          </div>
          <div class="right-bot col-xl-4">
            assad
          </div>
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
  name: 'DetailProduct',
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

.centered {
  text-align: center;
}

.box {
  padding: 30px;
  background-color: white;
  border-radius: 20px;
}

.button1 {
  margin-bottom: 30px;
  border-radius: 10px;
  font-weight: 800;
  width: 100%;
  height: 60px;
  background-color: #6a4029;
  color: #ffff;
}
.button2 {
  margin-bottom: 30px;
  border-radius: 10px;
  font-weight: 800;
  width: 100%;
  height: 60px;
  background-color: #ffba33;
  color: #6a4029;
}
b-pagination {
  margin-top: 20px;
}
</style>
