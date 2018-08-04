<template>
  <v-card>
    <v-card-title class="headline">Update Product</v-card-title>
    <v-card-text>
      <product-form success-btn-label="Update" :product="product" @save="update"></product-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { MUTATIONS, GETTERS } from '@/store/types'
import ProductForm from '@/components/product-form'

export default {
  components: { ProductForm },
  props: {
    id: [String, Number],
  },
  data () {
    return {
      product: null,
    }
  },
  mounted () {
    this.setProduct()
  },
  watch: {
    $route () {
      this.setProduct()
    },
  },
  methods: {
    setProduct () {
      const id = typeof this.id === 'number' ? this.id : parseInt(this.id, 10)
      const product = this.$store.getters[GETTERS.FIND_BY_ID](id)
      
      if (product) {
        this.product = product
      } else {
        this.$router.push({ name: 'products' })
      }
    },
    update (product) {
      this.$store.commit(MUTATIONS.UPDATE, Object.assign(this.product, product))
    },
  },
}
</script>
