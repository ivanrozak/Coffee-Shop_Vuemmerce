<template>
  <div>
    <form>
      <input
        type="text"
        v-model="form.product_name"
        placeholder="Product Name ..."
      />
      <br />
      <input
        type="text"
        v-model="form.product_price"
        placeholder="Product Price ..."
      />
      <br />
      <input
        type="text"
        v-model="form.category_id"
        placeholder="Category Id ..."
      />
      <br />
      <!-- <input type="file" @change="handleFile" /> -->
      <br />
      <input
        type="text"
        v-model="form.product_status"
        placeholder="Product Status ..."
      />
      <br />
      <button type="button" @click="setProduct()">Set</button>
      <button type="button" @click="postProduct()">Save</button>
      <button type="button" @click="patchProduct()">Update</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      products: 'getDataProduct'
    })
  },
  data() {
    return {
      form: {
        product_name: '',
        category_id: '',
        product_price: '',
        product_status: '',
        product_image: ''
      },
      product_id: '55'
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    ...mapActions(['getProducts', 'updateProducts']),
    setProduct(data) {
      console.log(data)
      this.form = data
      //   this.product_id = 54
    },
    updateProduct() {
      console.log(this.product_id)
      console.log(this.form)
    }
  }
}
</script>
