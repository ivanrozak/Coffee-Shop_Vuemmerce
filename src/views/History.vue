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
        <b-row class="flexs">
          <div class="cards" v-for="(item, index) in data" :key="index">
            <img src="../assets/img/float.png" alt="" />
            <div class="cards-mid">
              <div style="font-weight: bolder">{{ item.invoice }}</div>
              <div>IDR {{ item.sub_total }}</div>
              <small v-if="item.history_status === 0" style="color: orange"
                >on process</small
              >
              <small v-if="item.history_status === 1" style="color: green"
                >delivered</small
              >
            </div>
            <b-button variant="danger" @click="deleteHistorys(item.invoice)"
              ><b-icon icon="trash-fill" aria-hidden="true"></b-icon
            ></b-button>
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
import { mapActions, mapGetters } from 'vuex'
import Alert from '../mixins/Alert'

export default {
  mixins: [Alert],
  name: 'History',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Mainheader,
    Footer
  },
  computed: {
    ...mapGetters({ data: 'getDataUserHistory', user: 'setUser' })
  },
  data() {
    return {}
  },
  created() {
    this.getHistory()
    console.log(this.data)
  },
  methods: {
    ...mapActions(['getHistoryUser', 'deleteDetailHistory', 'deleteHistory']),
    getHistory() {
      this.getHistoryUser(this.user.user_id)
    },
    deleteHistorys(invoice) {
      this.deleteHistory(invoice)
      this.deleteDetailHistory(invoice)
        .then(result => {
          this.AlertSucces('Success Delete Item')
          return result
        })
        .catch(err => {
          this.AlertError(err.data.msg)
        })
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
.flexs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cards {
  border-radius: 10px;
  padding: 20px 20px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
}
.cards img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 20px;
}
.cards-mid {
  width: 190px;
}
.cards button {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 3px;
}
</style>
