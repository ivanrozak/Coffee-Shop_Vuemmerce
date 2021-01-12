export const toastMixins = {
  methods: {
    successToast(msg) {
      this.$bvToast.toast('Thank You :)', {
        title: msg,
        variant: 'success',
        solid: true
      })
    },
    dangerToast(msg) {
      this.$bvToast.toast('Something wrong !', {
        title: msg,
        variant: 'danger',
        solid: true
      })
    }
  }
}
