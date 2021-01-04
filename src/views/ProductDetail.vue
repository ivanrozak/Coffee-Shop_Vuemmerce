<template>
  <main>
    <Mainheader />
    <div class="product-details">
      <b-container>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Favourite & Promo</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              Nama Product
            </li>
          </ol>
        </nav>
        <div class="detail-top">
          <div class="detail-left">
            <div class="img-top">
              <img src="../assets/img/google.png" alt="" />
            </div>

            <div class="box">
              <h5>Delivery and Time</h5>
              <div class="group-btn" role="group" aria-label="First group">
                <button type="button" class="btn-select">
                  Dine In
                </button>
                <button type="button" class="btn-select">Door Delivery</button>
                <button type="button" class="btn-select">Pick up</button>
              </div>
              <div class="group-btn" role="group" aria-label="Second group">
                Now
                <button type="button" class="btn-select1">
                  Yes
                </button>
                <button type="button" class="btn-select1">No</button>
              </div>
              <div class="text-input">
                Set Time
                <input type="text" placeholder="Enter time for reservation" />
              </div>
            </div>
          </div>
          <div class="detail-right">
            <h1 class="centered">NAMA PRODUCT</h1>
            <h6>
              Cold brewing is a method of brewing that combines ground coffee
              and cool water and uses time instead of heat to extract the
              flavor. It is brewed in small batches and dleepes for as long as
              48 hours.
            </h6>
            <br />
            <h6>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint,
              facilis?
            </h6>
            <br />
            <div class="input-price">
              <div class="number-input">
                <button
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                  class="button-min"
                >
                  -
                </button>
                <input
                  class="quantity"
                  min="0"
                  name="quantity"
                  value="1"
                  type="number"
                />
                <button
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                  class="button-plus"
                >
                  +
                </button>
              </div>
              <h4 class="number-price">IDR 30.000</h4>
            </div>

            <button class="button-add">Add to Cart</button>
            <button class="button-orange">Ask a Staff</button>
          </div>
        </div>
        <div class="detail-bottom">
          <div class="size">
            <h5>Choose a size</h5>
            <div class="size-var">
              <button class="btn-size"><h5>R</h5></button>
              <button class="btn-size"><h5>L</h5></button>
              <button class="btn-size"><h5>XL</h5></button>
            </div>
          </div>
          <div class="checkout">
            <div class="c-image">
              <img src="../assets/img/hazelnut.png" />
            </div>
            <div class="desc">
              disini size
            </div>
            <button class="btn-checkout">Checkout</button>
          </div>
        </div>
      </b-container>
    </div>
    <Footer />
  </main>
</template>

<script>
// [1] step pertama import komponen
import Mainheader from '../components/_base/Mainheader'
import Footer from '../components/_base/Footer'

export default {
  name: 'DetailProduct',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Mainheader,
    Footer
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
  line-height: 40px;
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
.btn-select1 {
  background-color: #f4f4f8;
  color: #9f9f9f;
  margin: 0px 20px;
  padding: 0px 30px;
  line-height: 40px;
  box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
}
.btn-select:hover {
  color: white;
  background-color: #6a4029;
  box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
}
.btn-select1:hover {
  color: white;
  background-color: #6a4029;
  box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
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
</style>
