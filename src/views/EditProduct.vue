<template>
  <div class="AddProduct">
    <Mainheader />
    <main>
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/product">Favourite & Promo</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Edit Product
            </li>
          </ol>
        </nav>
        <div class="add-product">
          <div class="sub-box-add-product">
            <div class="sub-box-add-product-kiri">
              <div class="image">
                <img
                  v-if="url"
                  style="border-radius: 50%; width: 200px; height: 200px;"
                  :src="url"
                />
                <img
                  v-else-if="form.product_image"
                  style="border-radius: 50%; width: 200px; height: 200px;"
                  :src="config + 'products/' + form.product_image"
                />
                <img
                  v-else
                  style="border-radius: 50%; width: 200px; height: 200px;"
                  src="../assets/img/noimage.jpg"
                />
              </div>
              <br />
              <input id="fileUpload" type="file" @change="handleFile" hidden />
              <button @click="chooseFile" class="black">
                Change picture
              </button>

              <div class="spacing"></div>
              <h6>Delivery Hour :</h6>
              <b-form-select
                class="form-select"
                v-model="form.time_start"
                :options="timeStart"
              ></b-form-select>

              <b-form-select
                v-model="form.time_end"
                :options="timeEnd"
              ></b-form-select>
              <div class="spacing"></div>
              <h6>Input stock :</h6>
              <b-form-select
                v-model="form.product_qty"
                :options="stock"
              ></b-form-select>
              <div class="mt-3">
                <h6>Product Category :</h6>
                <b-form-select
                  v-model="form.category_id"
                  :options="category"
                ></b-form-select>
              </div>
            </div>
            <div class="sub-box-add-product-kanan">
              <div class="add-product-form-left">
                <h6>Name :</h6>
                <input
                  type="text"
                  v-model="form.product_name"
                  placeholder="Type product name max 50 characters"
                />
                <div class="spacing"></div>
                <h6>Price :</h6>
                <input
                  type="text"
                  v-model="form.product_price"
                  class="form-control"
                  placeholder="Type the price"
                />
                <div class="spacing"></div>
                <h6>Description :</h6>
                <input
                  type="text"
                  v-model="form.product_desc"
                  class="form-control"
                  placeholder="Describe your product max 150 characters"
                />
                <div class="spacing"></div>
                <h6>Input product size :</h6>
                <p>Click size you want to use for this product</p>
                <div class="btn-group">
                  <button
                    @click="btnR()"
                    :class="
                      form.product_sizeR === 1 ? 'round-on active' : 'round-off'
                    "
                  >
                    R
                  </button>
                  <button
                    @click="btnL()"
                    :class="
                      form.product_sizeL === 1 ? 'round-on active' : 'round-off'
                    "
                  >
                    L
                  </button>
                  <button
                    @click="btnXL()"
                    :class="
                      form.product_sizeXL === 1
                        ? 'round-on active'
                        : 'round-off'
                    "
                  >
                    XL
                  </button>
                  <button
                    @click="btn250()"
                    :class="
                      form.product_size250 === 1
                        ? 'round-on active'
                        : 'round-off'
                    "
                  >
                    250 gr
                  </button>
                  <button
                    @click="btn300()"
                    :class="
                      form.product_size300 === 1
                        ? 'round-on active'
                        : 'round-off'
                    "
                  >
                    300 gr
                  </button>
                  <button
                    @click="btn500()"
                    :class="
                      form.product_size500 === 1
                        ? 'round-on active'
                        : 'round-off'
                    "
                  >
                    500 gr
                  </button>
                </div>
                <div class="spacing"></div>
                <h6>Input delivery methods :</h6>
                <p>Click methods you want to use for this product</p>
                <div class="btn-group">
                  <button
                    @click="btnHome()"
                    :class="
                      form.product_deliv_home === 1
                        ? 'btn-on active'
                        : 'btn-off'
                    "
                  >
                    Home Delivery
                  </button>
                  <button
                    @click="btnDine()"
                    :class="
                      form.product_deliv_dine === 1
                        ? 'btn-on active'
                        : 'btn-off'
                    "
                  >
                    Dine In
                  </button>
                  <button
                    @click="btnAway()"
                    :class="
                      form.product_deliv_take === 1
                        ? 'btn-on active'
                        : 'btn-off'
                    "
                  >
                    <h6>Take Away</h6>
                  </button>
                </div>
                <div class="spacing"></div>
                <button type="button" class="brown" @click="updateProduct()">
                  Save Product
                </button>
                <button @click="toHome()" class="white">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'
import { mapActions, mapGetters } from 'vuex'
import Alert from '../mixins/Alert'

export default {
  mixins: [Alert],
  name: 'Home',
  components: {
    Mainheader,
    Footer
  },
  computed: {
    ...mapGetters({ form: 'getDataProductById' })
  },
  data() {
    return {
      product_id: '',
      alert: false,
      timeStart: [
        { value: null, text: 'Select start hour' },
        { value: '09:00:00', text: '09.00 AM' },
        { value: '10:00:00', text: '10.00 AM' },
        { value: '11:00:00', text: '11.00 AM' }
      ],
      timeEnd: [
        { value: null, text: 'Select end hour' },
        { value: '20:00:00', text: '20.00 AM' },
        { value: '21:00:00', text: '21.00 AM' },
        { value: '22:00:00', text: '22.00 AM' }
      ],
      stock: [
        { value: null, text: 'Input stock' },
        { value: '10', text: '10' },
        { value: '20', text: '20' },
        { value: '30', text: '30' }
      ],
      category: [
        { value: null, text: 'Select Category' },
        { value: '1', text: 'Coffee' },
        { value: '2', text: 'Non Coffee' },
        { value: '3', text: 'Foods' },
        { value: '4', text: 'Add-on' }
      ],
      checked1: false,
      url: '',
      config: process.env.VUE_APP_URL
    }
  },
  created() {
    this.product_id = this.$route.params.id
    this.getProductById()
  },
  methods: {
    ...mapActions(['getProductsById', 'updateProducts']),
    ...mapGetters(['getDataProductById']),
    getProductById() {
      this.getProductsById(this.product_id)
    },
    updateProduct() {
      const {
        category_id,
        product_name,
        product_desc,
        product_qty,
        product_price,
        product_image,
        product_status,
        time_start,
        time_end,
        product_sizeR,
        product_sizeL,
        product_sizeXL,
        product_size250,
        product_size300,
        product_size500,
        product_deliv_home,
        product_deliv_dine,
        product_deliv_take
      } = this.form
      const data = new FormData()
      data.append('product_name', product_name)
      data.append('product_price', product_price)
      data.append('product_status', product_status)
      data.append('category_id', category_id)
      data.append('product_image', product_image)
      data.append('product_desc', product_desc)
      data.append('product_qty', product_qty)
      data.append('time_start', time_start)
      data.append('time_end', time_end)
      data.append('product_sizeR', product_sizeR)
      data.append('product_sizeL', product_sizeL)
      data.append('product_sizeXL', product_sizeXL)
      data.append('product_size250', product_size250)
      data.append('product_size300', product_size300)
      data.append('product_size500', product_size500)
      data.append('product_deliv_home', product_deliv_home)
      data.append('product_deliv_dine', product_deliv_dine)
      data.append('product_deliv_take', product_deliv_take)

      let dataUpdate = { dataSet: data, id: this.product_id }
      this.updateProducts(dataUpdate)
        .then(result => {
          this.AlertSucces(result.data.msg)
          this.$router.push('/product')
        })
        .catch(err => {
          this.AlertError(err.data.msg)
        })
    },
    handleFile(event) {
      const product_image = event.target.files[0]
      const data = new FormData()
      data.append('product_image', product_image)
      const newData = { dataSet: data, id: this.product_id }
      this.updateProducts(newData)
        .then(result => {
          this.url = URL.createObjectURL(product_image)
          this.AlertSucces(result.data.msg)
        })
        .catch(error => {
          this.AlertError(error.data.msg)
        })
    },
    chooseFile() {
      document.getElementById('fileUpload').click()
    },
    toHome() {
      this.$router.push('/product')
    },
    btnHome() {
      if (this.form.product_deliv_home === 0) {
        this.form.product_deliv_home = 1
      } else {
        this.form.product_deliv_home = 0
      }
    },
    btnDine() {
      if (this.form.product_deliv_dine === 0) {
        this.form.product_deliv_dine = 1
      } else {
        this.form.product_deliv_dine = 0
      }
    },
    btnAway() {
      if (this.form.product_deliv_take === 0) {
        this.form.product_deliv_take = 1
      } else {
        this.form.product_deliv_take = 0
      }
    },
    btnR() {
      if (this.form.product_sizeR === 0) {
        this.form.product_sizeR = 1
      } else {
        this.form.product_sizeR = 0
      }
    },
    btnL() {
      if (this.form.product_sizeL === 0) {
        this.form.product_sizeL = 1
      } else {
        this.form.product_sizeL = 0
      }
    },
    btnXL() {
      if (this.form.product_sizeXL === 0) {
        this.form.product_sizeXL = 1
      } else {
        this.form.product_sizeXL = 0
      }
    },
    btn250() {
      if (this.form.product_size250 === 0) {
        this.form.product_size250 = 1
      } else {
        this.form.product_size250 = 0
      }
    },
    btn300() {
      if (this.form.product_size300 === 0) {
        this.form.product_size300 = 1
      } else {
        this.form.product_size300 = 0
      }
    },
    btn500() {
      if (this.form.product_size500 === 0) {
        this.form.product_size500 = 1
      } else {
        this.form.product_size500 = 0
      }
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.breadcrumb {
  background-color: transparent;
  margin-bottom: 5px;
}
.breadcrumb-item {
  padding: 10px 0px;
  color: black !important;
}
.breadcrumb-item a {
  color: black !important;
}
.centered {
  text-align: center;
}
main {
  background-repeat: no-repeat;
  background-size: 100% auto;
  font-family: 'Rubik';
}
.add-product {
  height: 1100px;
}
.sub-box-add-product {
  margin: 0px 0px;
  height: 970px;
  background-color: #ffff;
  border-radius: 20px;
  display: flex;
}
.sub-box-add-product-kiri {
  flex: 1;
  padding: 20px 60px;
}
.image {
  text-align: center;
}
.image img {
  width: 100%;
}

.sub-box-add-product-kanan {
  flex: 2.2;
  margin: 0px 20px;
}

.add-product-form-left {
  flex: 1.5;
  padding: 10px 50px;
}

.selector {
  display: flex;
  justify-content: space-evenly;
  font-size: 1.5em;
  margin-bottom: 60px;
  margin-top: 40px;
}
input {
  border: none;
  border-bottom: 1px solid rgb(179, 179, 179) !important;
  line-height: 50px;
  padding-left: 20px;
  width: 100%;
}
.form-select {
  padding-left: 20px;
  width: 100%;
  margin: 20px 0px;
}
h2 {
  font-weight: 600;
  color: white;
  padding: 20px 20px;
}
h6 {
  padding-top: 10px;
  font-weight: bold;
  text-align: left;
  color: #6a4029;
}
button {
  font-weight: bold;
  margin: 15px 0px;
  border: none;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
}
.orange {
  background-color: #ffba33;
  color: #6a4029;
  width: 100%;
  border-radius: 10px;
  line-height: 50px;
}
.black {
  background-color: black;
  color: white;
  width: 100%;
  border-radius: 10px;
  line-height: 50px;
}
.round-on {
  background-color: #ffba33;
  color: #6a4029;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 25px;
}
.round-off {
  background-color: #e6e6e6;
  color: #535353;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 25px;
}
h4 {
  font-weight: bold;
}
.btn-on {
  background-color: #ffba33;
  color: #6a4029;
  border-radius: 10px;
  padding: 5px 25px;
  margin-right: 25px;
}
.btn-off {
  background-color: #e6e6e6;
  color: #535353;
  border-radius: 10px;
  padding: 5px 25px;
  margin-right: 25px;
}
.spacing {
  margin: 40px;
}
.brown {
  background-color: #6a4029;
  color: #e6e6e6;
  width: 100%;
  line-height: 60px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
}
.white {
  color: #535353;
  background-color: #e6e6e6;
  width: 100%;
  line-height: 60px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
}
b-form-checkbox {
  background-color: white !important;
  color: #ffba33;
}
</style>
