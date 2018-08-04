<template>
  <v-card>
    <v-card-title class="headline">Create Product</v-card-title>
    <v-card-text>
      <product-form success-btn-label="Add" @save="add"></product-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { MUTATIONS } from '@/store/types'
import ProductForm from '@/components/product-form'

export default {
  components: { ProductForm },
  methods: {
    add (product) {
      this.$store.commit(MUTATIONS.ADD, product)
    },
  },
}
</script>
