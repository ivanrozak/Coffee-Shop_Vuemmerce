<template>
  <main>
    <Mainheader />
    <div class="yourcart">
      <b-container>
        <h2 class="rubik font-title mb-3">
          Checkout your <br />
          item now!
        </h2>
        <b-row class="poppins" align-h="between">
          <b-col cols="5">
            <div class="box-left border-white">
              <h3 style="text-align: center;">
                <strong>Order Summary</strong>
              </h3>
              <p
                v-if="cart[0]"
                style="cursor: pointer; text-align: right;"
                class="mt-4 mb-2"
                @click="delCart()"
              >
                clear cart
              </p>
              <div class="flow">
                <div
                  v-for="(item, index) in cart"
                  :key="index"
                  class="flexs mb-2"
                >
                  <div class="flexs">
                    <img
                      style="border-radius: 10px; width: 60px; height: 60px;"
                      :src="config + 'products/' + item.product_image"
                    />
                    <div class="ml-4">
                      <div>
                        {{ item.product_name }} <br />
                        {{ item.detail_qty }} x
                        <small>({{ item.detail_size }})</small>
                      </div>
                    </div>
                  </div>
                  <div>{{ item.detail_total }}</div>
                </div>
              </div>

              <hr />
              <div class="flex3">
                <div>
                  <p>SUB TOTAL</p>
                  <p>TAX & FEES</p>
                  <p>SHIPPING</p>
                  <p>DISCOUNT</p>
                </div>
                <div style="text-align: right;">
                  <p>{{ form.sub_total }}</p>
                  <p>{{ form.tax_fees }}</p>
                  <p>{{ form.shipping }}</p>
                  <p>- {{ form.discount }}</p>
                </div>
              </div>
              <div class="flexs mt-3">
                <h5><strong>TOTAL</strong></h5>
                <h5>
                  <strong>{{ form.grand_total }}</strong>
                </h5>
              </div>
            </div>
            <b-button
              variant="warning"
              class="mt-3 w-100 py-3"
              style="color: #6A4029"
              v-b-toggle.sidebar-1
              ><strong>Use Coupon</strong></b-button
            >
            <b-sidebar id="sidebar-1" title="Apply Coupon" shadow>
              <div class="px-3 py-2">
                <Coupon @setDiscount="countDiscount" />
              </div>
            </b-sidebar>
          </b-col>
          <b-col cols="5">
            <h4 class="font-title">Address details</h4>
            <div class="border-white">
              <p><strong>Delivery</strong> to {{ user.user_address }}</p>
              <hr />
              <p>
                Jl. Ir. Soekarno Hatta <br />
                Blok M-1 No.119
              </p>
              <hr />
              <p>{{ user.user_contact }}</p>
            </div>
            <h4 class="font-title mt-4">Payment method</h4>
            <div class="border-white mb-3">
              <div class="flex2">
                <b-form-radio
                  v-model="form.payment_method"
                  value="Card"
                ></b-form-radio>
                <img class="img-card mr-3" src="../assets/img/card.png" />
                <div>Card</div>
              </div>
              <hr />
              <div class="flex2">
                <b-form-radio
                  v-model="form.payment_method"
                  value="Bank Account"
                ></b-form-radio>
                <img class="img-bank mr-3" src="../assets/img/bank.png" />
                <div>Bank Account</div>
              </div>
              <hr />
              <div class="flex2">
                <b-form-radio
                  v-model="form.payment_method"
                  value="Cash on delivery"
                ></b-form-radio>
                <img class="img-cash mr-3" src="../assets/img/delivery.png" />
                <div>Cash on Delivery</div>
              </div>
            </div>
            <button class="button-full" @click="postData()">
              Confirm and Pay
            </button>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </main>
</template>

<script>
import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'
import Coupon from '../components/_base/CouponCart'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Alert from '../mixins/Alert'

export default {
  mixins: [Alert],
  name: 'History',
  components: {
    Mainheader,
    Footer,
    Coupon
  },
  computed: {
    ...mapGetters({
      cart: 'getCartData',
      user: 'setUser',
      invoice: 'getInvoice',
      promo: 'getDataPromo'
    })
  },
  data() {
    return {
      form: {
        user_id: '',
        invoice: '',
        sub_total: 0,
        payment_method: '',
        history_status: 0,
        tax_fees: 0,
        shipping: 0,
        discount: 0,
        grand_total: 0
      },
      config: process.env.VUE_APP_URL
    }
  },
  created() {
    this.getUserByEmail()
    this.countTotal()
    this.form.invoice = this.invoice
    this.form.user_id = this.user.user_id
  },
  mounted() {
    this.countGrand()
  },
  methods: {
    ...mapMutations(['deleteCart', 'deleteInvoice']),
    ...mapActions(['getUserByEmails', 'postDetailHistory', 'postHistories']),
    delCart() {
      this.deleteCart()
      this.form.sub_total = 0
      this.form.discount = 0
      this.countGrand()
    },
    postData() {
      this.postDetailHistory(this.cart)
      this.postHistories(this.form)
      this.AlertSucces('Success checkout, please pay your order !')
      this.deleteCart()
      this.deleteInvoice()
      this.form.sub_total = 0
    },
    btnPayment(payment) {
      this.form.payment_method = payment
    },
    getUserByEmail() {
      this.getUserByEmails(this.user.user_email)
    },
    countTotal() {
      this.form.sub_total = this.cart.reduce(
        (n, { detail_total }) => n + detail_total,
        0
      )
    },
    countDiscount(event) {
      if (this.form.sub_total >= event.coupon_min_purchase) {
        let dsc = (this.form.sub_total * event.coupon_discount) / 100
        if (dsc >= event.coupon_max_limit) {
          dsc = event.coupon_max_limit
          this.form.discount = dsc
        } else {
          this.form.discount = dsc
        }
      } else {
        this.form.discount = 0
      }
      this.countGrand()
      console.log(event)
      console.log('discount')
    },
    countGrand() {
      this.form.grand_total =
        this.form.sub_total +
        this.form.tax_fees +
        this.form.shipping -
        this.form.discount
    }
  }
}
</script>

<style scoped>
/* font selector */
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.flex2 {
  display: flex;
  align-items: center;
}
.flex3 {
  display: flex;
  justify-content: space-between;
}
.img-card {
  background-color: #f47b0a;
  border-radius: 10px;
  padding: 10px;
  width: 40px;
  height: 35px;
}
.img-bank {
  background-color: #895537;
  border-radius: 10px;
  padding: 10px;
  width: 40px;
  height: 35px;
}
.img-cash {
  background-color: #ffba33;
  border-radius: 10px;
  padding: 10px;
  width: 40px;
  height: 35px;
}
.flow {
  overflow: auto;
  max-height: 210px;
}
.flexs {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
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

.border-white {
  background-color: white;
  border-radius: 20px;
  padding: 50px 40px;
}

.font-title {
  color: white;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  font-weight: 500;
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
