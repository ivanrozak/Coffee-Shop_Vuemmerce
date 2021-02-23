<template>
  <div>
    <Mainheader />
    <b-container class="dashboard mb-5 mt-5 centered">
      <h4>See how your store progress so far</h4>
      <div>
        <b-card-group class="mt-5 mb-5" deck>
          <b-card
            border-variant="primary"
            header="Total Income this Day"
            header-bg-variant="primary"
            header-text-variant="white"
            align="center"
          >
            <b-card-text
              ><h2>{{ dataDaily }}</h2></b-card-text
            >
          </b-card>

          <b-card
            border-variant="warning"
            header="Total Order this Week"
            header-bg-variant="warning"
            header-border-variant="white"
            align="center"
          >
            <b-card-text
              ><h2>{{ dataWeekly }}</h2></b-card-text
            >
          </b-card>

          <b-card
            border-variant="success"
            header-bg-variant="success"
            header-text-variant="white"
            header="Total Income this Year"
            align="center"
          >
            <b-card-text
              ><h2>{{ dataYearly }}</h2></b-card-text
            >
          </b-card>
        </b-card-group>
      </div>
    </b-container>

    <Footer />
  </div>
</template>
<script>
import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    Mainheader,
    Footer
  },
  created() {
    this.getDailyReport()
    this.getWeeklyReport()
    this.getYearlyReport()
  },
  computed: {
    ...mapGetters({
      dataDaily: 'getDaily',
      dataWeekly: 'getWeekly',
      dataYearly: 'getYearly'
    })
  },
  methods: {
    ...mapActions(['getDailyReport', 'getWeeklyReport', 'getYearlyReport'])
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

.dashboard {
  font-family: 'Poppins';
}
.centered {
  text-align: center;
}
</style>
