<template>
  <v-flex class="position-relative">
    <v-dialog v-model="confirmRemovingDialog" width="500">
      <v-card>
        <v-card-title class="headline mb-4">
          Do you want to remove product?
        </v-card-title>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="normal" @click="closeDialog(false)">Cancel</v-btn>
          <v-btn color="success" @click="closeDialog(true)">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    
    <v-data-table :headers="headers" :items="products" hide-actions class="product-container">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.description }}</td>
        <td class="text-xs-right">
          <v-icon small class="mr-2" @click="edit(props.item)">edit</v-icon>
          <v-icon small @click="remove(props.item)">delete</v-icon>
        </td>
      </template>
    </v-data-table>
   
    <!-- Tool Bar-->
    <v-toolbar class="nav-bottom">
      <v-layout justify-space-between>
        <v-btn color="success" :to="{ name: 'product.create' }">Add Product</v-btn>
        <v-chip color="green" text-color="white">
          <v-avatar class="green darken-4">{{ count }}</v-avatar>
          {{ count === 1 ? 'Product' : 'Products' }}
        </v-chip>
      </v-layout>
    </v-toolbar>
    <!-- Remove product dialog confirmation -->
  </v-flex>
</template>

<script>
import { MUTATIONS } from '@/store/types'

export default {
  data () {
    return {
      confirmRemovingDialog: false,
      productToRemove: null,
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Description', value: 'description' },
        { sortable: false },
      ],
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    },
    count () {
      return this.products.length
    },
  },
  methods: {
    edit (product) {
      this.$router.push({ name: 'product.update', params: { id: product.id } })
    },
    remove (product) {
      this.productToRemove = product
      this.confirmRemovingDialog = true
    },
    closeDialog (confirmed = false) {
      if (confirmed) {
        this.$store.commit(MUTATIONS.REMOVE, this.productToRemove.id)
      }
      
      this.productToRemove = null
      this.confirmRemovingDialog = false
    },
  },
}
</script>

<style>
  .position-relative {
    position: relative;
  }
  
  .nav-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  
  .product-container {
    position: absolute;
    top: 0;
    bottom: 70px;
    width: 100%;
    overflow: auto;
  }
</style>
