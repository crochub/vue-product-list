<template>
  <v-layout align-center justify-center>
    <v-card width="600">
      <v-card-title class="headline">Create Product</v-card-title>
      <v-card-text>
        <product-form success-btn-label="Add" @save="add"></product-form>
      </v-card-text>
    </v-card>
  </v-layout>
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
