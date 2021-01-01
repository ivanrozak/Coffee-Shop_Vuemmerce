<template>
  <div class="coupon centered col-xl-3">
    <div>
      <div style="font-size: 2em; font-weight: 600;">Promo Today</div>
      <p>Coupons will be updated every weeks. Check them out!</p>
      <div class="coupon-back1"></div>
      <div class="coupon-back2"></div>
      <div v-for="(item, index) in coupon" :key="index" class="coupon-list">
        <img
          style="margin-top: 30px; width: 100px; border-radius: 200px;"
          src="../../assets/img/float.png"
          alt=""
        />
        <div class="coupon-title">{{ item.product_list }}</div>
        <div class="coupon-title">{{ item.coupon_discount }} % OFF</div>
        <div class="coupon-desc">
          Buy 1 {{ item.product_list }} and get {{ item.coupon_discount }}% off
          for Black Coffee
        </div>
        <hr />
        <div class="coupon-code">COUPON CODE</div>
        <div class="coupon-code2">{{ item.coupon_code }}</div>
        <div class="coupon-desc">Valid until October 10th 2020</div>
      </div>
    </div>
    <div class="promo_pagination">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="limit"
        @change="handlePageChange"
      ></b-pagination>
    </div>
    <div class="promo-button">
      <button>Apply Coupon</button>
    </div>
    <div style="font-weight: bold;" class="box2a3">
      Terms and Condition
      <ul
        style="text-align: left; font-weight: normal; list-style-type: decimal; padding-left: 18px;"
      >
        <li>You can only apply 1 coupon per day</li>
        <li>It only for dine in</li>
        <li>Buy 1 get 1 only for new user</li>
        <li>Should make remember card to apply coupon</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Coupon',
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      cardCoupon: '',
      promo: [],
      currentPage: 1,
      totalRows: null,
      limit: 1,
      page: 1
    }
  },
  created() {
    this.getPromo()
  },
  methods: {
    getPromo() {
      axios
        .get(
          `http://localhost:3000/coupon/?page=${this.page}&limit=${this.limit}`
        )
        .then(res => {
          this.promo = res.data.data
          this.totalRows = res.data.pagination.totalData
        })
        .catch(err => {
          console.log(err)
        })
    },
    handlePageChange(numberPage) {
      this.page = numberPage
      this.getPromo()
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
.promo_pagination {
  position: relative;
  top: 400px;
  margin-left: 70px;
}
.box2a3 {
  position: relative;
  top: 500px;
  left: 20px;
  font-size: 14px;
  line-height: 25px;
}
</style>
