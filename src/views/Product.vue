<template>
  <main>
    <Mainheader />
    <b-container>
      <div class="product">
        <Coupon />
        <div class="vl"></div>
        <div class="product-list col-xl-9">
          <Navbar />
          <b-alert :show="alert">{{ isMsg }}</b-alert>

          <b-container class="bv-example-row">
            <b-row>
              <b-col
                style="margin-bottom: 30px"
                xl="3"
                lg="4"
                md="6"
                sm="12"
                v-for="(item, index) in products"
                :key="index"
              >
                <div class="product-box centered">
                  <div class="square"></div>
                  <div class="image">
                    <img
                      style="border-radius: 50%; width: 120px; height: 120px;"
                      :src="
                        'http://localhost:3000/products/' + item.product_image
                      "
                    />
                    <div
                      @click="detailProduct(item.product_id)"
                      style="padding: 0px 60px; font-weight: 600; font-size: 20px; padding: 5px 5px; "
                    >
                      {{ item.product_name }}
                    </div>
                    <div class="price">IDR {{ item.product_price }}</div>
                    <div v-if="role === 1">
                      <button>Update</button>
                      <button>Delete</button>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="limit"
              @change="handlePageChange"
            ></b-pagination>
            <div class="centered">
              <button @click="toPageAddProduct()" class="btn-brown">
                Add New Product
              </button>
            </div>
          </b-container>
        </div>
      </div>
    </b-container>

    <Footer />
  </main>
</template>

<script>
// [1] step pertama import komponen
import Navbar from '../components/_base/Navbar'
import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'
import Coupon from '../components/_base/Coupon'
// import axios from 'axios'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Product',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Navbar,
    Mainheader,
    Footer,
    Coupon
  },
  computed: {
    ...mapGetters({
      products: 'getDataProduct',
      page: 'getPageProduct',
      limit: 'getLimitProduct',
      rows: 'getTotalRowsProduct'
    })
    // rows() {
    //   return this.totalRows
    // }
  },
  data() {
    return {
      // products: [],
      form: {
        product_name: '',
        category_id: '',
        product_price: '',
        product_status: '',
        product_image: ''
      },
      alert: false,
      isMsg: '',
      product_id: '',
      currentPage: 1,
      role: 1
      // totalRows: null,
      // limit: 12,
      // page: 1
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    ...mapActions(['getProducts']),
    ...mapMutations(['changePage']),
    deleteProduct(product_id) {
      console.log(product_id)
    },
    setProduct(data) {
      console.log(data)
      // this.form = {
      //   product_name: 'data.product_name',
      //   category_id: 'data.category_id',
      //   product_price: 'data.product_price',
      //   product_status: 'data.product_status'
      // }
      this.form = data //cara simplenya
      this.product_id = data.product_id
    },
    patchProduct() {
      console.log(this.product_id)
      console.log(this.form)
    },
    handlePageChange(numberPage) {
      // console.log(numberPage)
      // this.page = numberPage
      this.changePage(numberPage)
      this.getProducts()
      // this.getProducts()
    },
    detailProduct(product_id) {
      console.log(product_id)
      this.$router.push({ name: 'ProductDetail', params: { id: product_id } })
    },
    toPageAddProduct() {
      this.$router.push('addProduct')
    },
    handleFile(event) {
      console.log(event)
      this.form.product_image = event.target.files[0]
    }
  }
}
</script>

<style scoped>
/* font selector */
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.product {
  font-family: 'Rubik';
}
.centered {
  text-align: center;
}
.coupon {
  padding-top: 20px;
}
.coupon-back2 {
  position: absolute;
  width: 200px;
  height: 292px;
  background-color: black;
  margin-top: 70px;
  left: 90px;
  border-radius: 15px;
}
.coupon-back1 {
  position: absolute;
  background-color: #895537;
  width: 200px;
  height: 250px;
  margin-top: 90px;
  left: 103px;
  border-radius: 15px;
}
.product {
  display: flex;
}
.product-box {
  position: relative;
  top: 0px;
  left: 0px;
  border: 3px solid white;
  width: 180px;
  height: 260px;
}
.image {
  position: relative;
}
.price {
  position: absolute;
  text-align: center;
  top: 200px;
  left: 50px;
  font-weight: 600;
}
.vl {
  border-left: 1px solid #c5c5c5;
  height: 100%px;
}
.product-box .square {
  position: absolute;
  margin-left: 8px;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 160px;
  height: 220px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 15px;
}
.product-box .square:hover {
  box-shadow: 0 4px 8px 0 rgba(1, 148, 99, 0.2),
    0 6px 20px 0 rgba(10, 175, 153, 0.19);
}
.coupon-list {
  position: absolute;
  margin-left: 60px;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 200px;
  height: 350px;
  border-radius: 20px;
  background-color: #ffcb65;
}
.btn-brown {
  background-color: #6a4029;
  color: white;
  font-weight: bold;
  padding: 20px;
  width: 100%;
  border-radius: 20px;
  margin: 10px 0px 30px;
}

/* .product-list {
  border-left: 0.5px solid #9f9f9f;
} */
</style>
