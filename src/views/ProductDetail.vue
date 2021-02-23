<template>
  <main>
    <Mainheader />
    <div class="product-details">
      <b-container>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/product">Favourite & Promo</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ produk.product_name }}
            </li>
          </ol>
        </nav>
        <div class="detail-top">
          <div class="detail-left">
            <div class="img-top">
              <img
                v-if="produk.product_image"
                style="border-radius: 50%; width: 200px; height: 200px;"
                :src="config + 'products/' + produk.product_image"
              />
              <img v-else src="../assets/img/noimage.jpg" alt="" />
            </div>

            <div class="box">
              <h5>Delivery and Time</h5>
              <div class="group-btn" role="group" aria-label="First group">
                <button
                  v-if="produk.product_deliv_dine === 1"
                  @click="btnDeliv('Dine In')"
                  :class="
                    form.detail_delivery === 'Dine In'
                      ? 'btn-select-on active'
                      : 'btn-select'
                  "
                >
                  Dine In
                </button>
                <button
                  v-if="produk.product_deliv_home === 1"
                  @click="btnDeliv('Home Delivery')"
                  :class="
                    form.detail_delivery === 'Home Delivery'
                      ? 'btn-select-on active'
                      : 'btn-select'
                  "
                >
                  Home Delivery
                </button>
                <button
                  v-if="produk.product_deliv_take === 1"
                  @click="btnDeliv('Take Away')"
                  :class="
                    form.detail_delivery === 'Take Away'
                      ? 'btn-select-on active'
                      : 'btn-select'
                  "
                >
                  Pick up
                </button>
              </div>
              <div role="group" aria-label="Second group">
                <h5>Now</h5>
                <div>
                  <button
                    @click="btnNow('Yes')"
                    :class="
                      now === 'Yes'
                        ? 'btn-select-on px-4 active'
                        : 'btn-select px-4'
                    "
                  >
                    Yes
                  </button>
                  <button
                    @click="btnNow('No')"
                    :class="
                      now === 'No'
                        ? 'btn-select-on px-4 active'
                        : 'btn-select px-4'
                    "
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="detail-right">
            <h1 class="centered">{{ produk.product_name }}</h1>
            <p>
              {{ produk.product_desc }}
            </p>
            <br />

            <br />
            <div class="input-price">
              <div class="number-input">
                <button @click="btnMin()" class="button-min">
                  -
                </button>
                <input v-model="form.detail_qty" type="number" />
                <button @click="btnPlus()" class="button-plus">
                  +
                </button>
              </div>
              <h4 class="number-price">IDR {{ form.detail_total }}</h4>
            </div>

            <button @click="postCart()" class="button-add">Add to Cart</button>
            <button @click="postInvoice()" class="button-orange">
              Ask a Staff
            </button>
          </div>
        </div>
        <div class="detail-bottom">
          <div class="size">
            <h5>Choose a size</h5>
            <div class="size-var">
              <button
                v-if="produk.product_sizeR === 1"
                @click="btnSize('Regular')"
                :class="
                  form.detail_size === 'Regular'
                    ? 'btn-size active'
                    : 'btn-size-off'
                "
              >
                <h5>R</h5>
              </button>
              <button
                v-if="produk.product_sizeL === 1"
                @click="btnSize('Large')"
                :class="
                  form.detail_size === 'Large'
                    ? 'btn-size active'
                    : 'btn-size-off'
                "
              >
                <h5>L</h5>
              </button>
              <button
                v-if="produk.product_sizeXL === 1"
                @click="btnSize('Extra Large')"
                :class="
                  form.detail_size === 'Extra Large'
                    ? 'btn-size active'
                    : 'btn-size-off'
                "
              >
                <h5>XL</h5>
              </button>
              <button
                v-if="produk.product_size250 === 1"
                @click="btnSize('250 gr')"
                :class="
                  form.detail_size === '250 gr'
                    ? 'btn-size active'
                    : 'btn-size-off'
                "
              >
                250gr
              </button>
              <button
                v-if="produk.product_size300 === 1"
                @click="btnSize('300 gr')"
                :class="
                  form.detail_size === '300 gr'
                    ? 'btn-size active'
                    : 'btn-size-off'
                "
              >
                300gr
              </button>
              <button
                v-if="produk.product_size500 === 1"
                @click="btnSize('500 gr')"
                :class="
                  form.detail_size === '500 gr'
                    ? 'btn-size active'
                    : 'btn-size-off'
                "
              >
                500gr
              </button>
            </div>
          </div>
          <div class="checkout">
            <div class="c-image">
              <img
                v-if="produk.product_image"
                :src="config + 'products/' + produk.product_image"
              />
              <img v-else src="../assets/img/noimage.jpg" alt="" />
            </div>
            <div class="desc">
              <h4>{{ produk.product_name }}</h4>
              {{ form.detail_qty }} x ({{ form.detail_size }})
            </div>
            <button class="btn-checkout" @click="checkOut()">Checkout</button>
          </div>
        </div>
      </b-container>
    </div>
    <Footer />
  </main>
</template>

<script>
import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Alert from '../mixins/Alert'

export default {
  mixins: [Alert],
  components: {
    Mainheader,
    Footer
  },
  computed: {
    ...mapGetters({
      produk: 'getDataProductById',
      cart: 'getCartData',
      invoice: 'getInvoice'
    })
  },
  data() {
    return {
      config: process.env.VUE_APP_URL,
      product_id: '',
      form: {
        invoice: '',
        product_id: '',
        product_name: '',
        product_image: '',
        detail_delivery: '',
        detail_size: '',
        detail_qty: 1,
        detail_total: 0
      },
      now: '',
      carts: [],
      data: ''
    }
  },
  created() {
    this.postInvoice()
  },
  mounted() {
    // this.getProductById()
    this.getProductsById(this.$route.params.id).then(result => {
      this.form.product_id = this.$route.params.id
      this.form.product_name = result.product_name
      this.form.product_image = result.product_image
      this.form.detail_total = result.product_price
      this.form.invoice = this.invoice
      console.log(result)
    })
  },
  methods: {
    ...mapMutations(['setCart', 'deleteCart', 'setInvoice']),
    ...mapActions(['getProductsById']),
    ...mapGetters(['getDataProductById']),
    postCart() {
      this.carts = [...this.cart, this.form]
      this.setCart(this.carts)
    },
    delCart() {
      this.deleteCart()
    },
    getProductById() {
      this.getProductsById(this.$route.params.id)
    },
    btnDeliv(deliv) {
      this.form.detail_delivery = deliv
    },
    btnNow(time) {
      this.now = time
    },
    btnSize(size) {
      this.form.detail_size = size
    },
    btnPlus() {
      this.form.detail_qty++
      this.form.detail_total = this.produk.product_price * this.form.detail_qty
    },
    btnMin() {
      this.form.detail_qty--
      this.form.detail_total = this.produk.product_price * this.form.detail_qty
    },
    checkOut() {
      this.$router.push('/yourcart')
    },
    randInvoice() {
      const value = 'CFS'
      const num = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
      if (this.invoice === '') {
        this.data = value + num
      } else {
        return this.invoice
      }
    },
    postInvoice() {
      this.randInvoice()
      if (this.invoice === '') {
        this.setInvoice(this.data)
      }
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
.product-details {
  font-family: 'Poppins';
  padding-bottom: 70px;
}
.breadcrumb {
  background-color: white;
}
.detail-top {
  display: flex;
}
.detail-left {
  flex: 0.45;
}
.img-top {
  border-radius: 50%;
  text-align: center;
  margin: 30px;
}
.btn-select {
  background-color: #f4f4f8;
  color: #9f9f9f;
  margin-right: 20px;
  padding: 0px 10px;
  box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
}
.btn-select-on {
  color: white;
  background-color: #6a4029;
  margin-right: 20px;
  padding: 0px 10px;
  box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
}
.box {
  border-radius: 20px;
  padding: 20px 20px 40px 20px;
  box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
}
h5 {
  font-weight: bold;
  margin: 10px 0px 20px;
}
.group-btn {
  margin: 30px 0px;
  display: flex;
  align-items: center;
  font-weight: bold;
}
.text-input {
  font-weight: bold;
}
.text-input input {
  border: 0.5px solid rgb(161, 161, 161) !important;
  border-radius: 10px;
  margin: 5px 10px;
  font-weight: 200 !important;
  padding-left: 20px;
  text-align: left !important;
  width: 300px !important;
  line-height: 35px;
}
.detail-right {
  flex: 0.55;
  padding: 40px 0px 40px 90px;
}
h1 {
  margin: 30px 0px 50px;
  font-weight: bold;
}
h6 {
  margin-bottom: 20px;
}
h4 {
  font-weight: bold;
}
.button-min {
  border-radius: 10px 0px 0px 10px !important;
  font-weight: bold;
  line-height: 30px;
  width: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.button-plus {
  border-radius: 0px 10px 10px 0px !important;
  font-weight: bold;
  line-height: 30px;
  width: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.input-price {
  display: flex;
  margin: 40px 0px;
}
.number-price {
  margin-left: auto;
}
input {
  width: 40px;
  text-align: center;
  font-weight: bold;
  border: none;
}
button {
  border-radius: 10px;
  line-height: 40px;
  border: none;
}
.button-add {
  font-weight: 500;
  background-color: #6a4029;
  color: white;
  margin: 20px 0px 0px;
  line-height: 50px !important;
  width: 100%;
}
.button-orange {
  font-weight: 500;
  background-color: #ffba33;
  color: #6a4029;
  margin: 20px 0px;
  line-height: 50px !important;
  width: 100%;
}
.detail-bottom {
  display: flex;
  justify-content: space-between;
}
.size {
  text-align: center;
  flex: 0.35;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
}
.size-var {
  display: flex;
  justify-content: space-evenly;
}
.btn-size {
  border-radius: 50%;
  background-color: #ffba33;
  color: #6a4029;
  padding: 10px;
  width: 60px;
  height: 60px;
}
.btn-size-off {
  border-radius: 50%;
  background-color: #f4f4f8;
  color: #9f9f9f;
  padding: 10px;
  width: 60px;
  height: 60px;
}
.checkout {
  margin-left: 40px;
  flex: 0.65;
  display: flex;
  border-radius: 20px;
  padding: 20px 50px;
  align-items: center;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
}
.c-image img {
  border-radius: 50%;
  width: 90px;
  height: 90px;
}
.desc {
  margin-left: 20px;
}
.btn-checkout {
  margin-left: auto;
  padding: 20px 30px;
  background-color: #ffba33;
  color: #6a4029;
  font-weight: bold;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.34);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
