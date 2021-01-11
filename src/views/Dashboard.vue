<template>
  <div>
    <Mainheader />

    <b-container>
      <h4>See how your store progress so far</h4>
      <div class="filter-by">
        disini filter dashboard
      </div>
      <div class="main-dashboard">
        <div class="dashboard-left">
          table disini
          <button>Download Report</button>
        </div>
        <div class="dashboard-right">
          <div class="staff-stat">disini staff stat</div>
          <div class="goals-stat">disini goals stat</div>
          <button>Share Report</button>
        </div>
      </div>
    </b-container>

    <Footer />
  </div>
</template>
<script>
import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'

export default {
  components: {
    Mainheader,
    Footer
  }
}
</script>
