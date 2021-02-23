<template>
  <div class="coupon centered col-xl-3">
    <div>
      <div class="coupon-back1"></div>
      <div class="coupon-back2"></div>
      <div v-for="(item, index) in coupon" :key="index" class="coupon-list">
        <div style="text-align: right;">
          <div class="mb-5"></div>
        </div>
        <img
          style="width: 100px; border-radius: 200px;"
          :src="config + 'coupons/' + item.coupon_image"
          alt=""
        />
        <div class="coupon-title">Discount</div>
        <div class="coupon-title">{{ item.coupon_discount }} % OFF</div>
        <div class="coupon-desc">
          With minimum purchase {{ item.coupon_min_purchase }}
        </div>
        <hr />
        <div class="coupon-code">COUPON CODE</div>
        <div class="coupon-code2">{{ item.coupon_code }}</div>
        <div class="coupon-desc">
          Valid until {{ formatTime(item.coupon_end) }}
        </div>
      </div>
    </div>
    <div class="promo_pagination ml-3">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="limit"
        @change="handlePageChange"
      ></b-pagination>
    </div>
    <div class="promo-button ml-3">
      <button class="mb-3" @click="addPromo()">Apply Coupon</button>
      <b-button style="background-color: gray;" @click="removePromo()">
        Reset Coupon
      </b-button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Coupon',
  computed: {
    rows() {
      return this.totalRows
    },
    ...mapGetters({
      user: 'setUser',
      coupon: 'getDataCoupon',
      page: 'getPageCoupon',
      limit: 'getLimitCoupon',
      rows: 'getTotalRowsCoupon'
    })
  },
  data() {
    return {
      currentPage: 1,
      config: process.env.VUE_APP_URL
    }
  },
  created() {
    this.getPromo()
  },
  mounted() {
    this.getPromo()
  },
  methods: {
    ...mapActions(['getCoupons']),
    ...mapMutations(['changePages', 'setPromo', 'clearPromo']),
    getPromo() {
      this.getCoupons()
    },
    addPromo() {
      // this.setPromo(this.coupon[0])
      this.$emit('setDiscount', this.coupon[0])
    },
    removePromo() {
      // this.clearPromo()
      this.$emit('setDiscount', {})
    },
    handlePageChange(numberPage) {
      this.changePages(numberPage)
      this.getPromo()
    },
    applyCoupon() {},
    formatTime(value) {
      moment.locale('en')
      return moment(String(value)).format('ll')
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
.coupon {
  padding-top: 20px;
}
.coupon-back2 {
  position: absolute;
  width: 200px;
  height: 292px;
  background-color: black;
  margin-top: 70px;
  left: 45px;
  border-radius: 15px;
}
.coupon-back1 {
  position: absolute;
  background-color: #895537;
  width: 200px;
  height: 250px;
  margin-top: 90px;
  left: 53px;
  border-radius: 15px;
}
.coupon-list {
  position: absolute;
  margin-left: 20px;
  margin-top: 40px;
  margin-bottom: 40px;
  width: 200px;
  height: 350px;
  border-radius: 20px;
  background-color: #ffcb65;
}
.coupon-title {
  padding-top: 1px;
  font-size: 15px;
  font-weight: bolder;
}
.coupon-desc {
  font-size: 10px;
  padding: 5px 15px 0px 15px;
}
.coupon-line {
  height: 0px;
  border: 0.2px solid black;
  border-style: dashed;
}
.coupon-code {
  padding-top: 0px;
  font-size: 0.7em;
}
.coupon-code2 {
  padding-top: 5px;
  font-size: 1.2em;
  font-weight: bold;
}
.promo-button button {
  position: relative;
  top: 400px;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  color: antiquewhite;
  background-color: #6a4029;
}
.new-promo button {
  position: relative;
  top: 610px;
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  color: #6a4029;
  background-color: #ffba33;
}
.promo_pagination {
  position: relative;
  top: 400px;
  /* margin-left: 25px; */
}
.box2a3 {
  position: relative;
  top: 500px;
  left: 10px;
  font-size: 14px;
  line-height: 25px;
}
.btn-update {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #6a4029;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
