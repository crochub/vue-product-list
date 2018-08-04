<template>
  <div>
    <!--<button type="button" @click="createProduct">Create Product</button>-->
    <v-data-table :headers="headers"
                  :items="products">
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
    <!---->
    <v-toolbar>
      <v-btn color="success" :to="{ name: 'product.create' }">Add Product</v-btn>
    </v-toolbar>
    <!-- Remove product dialog confirmation -->
    <v-dialog v-model="confirmDeleteDialog" width="500">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      confirmDeleteDialog: false,
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
  },
  methods: {
    edit (product) {
      this.$router.push({ name: 'product.update', params: { id: product.id } })
    },
    remove (product) {
      this.productToRemove = product
      this.confirmDeleteDialog = true
    },
    closeDialog (confirmed = false) {
      if (confirmed) {
        this.$store.commit('remove', this.productToRemove.id)
      }
      this.productToRemove = null
      this.confirmDeleteDialog = false
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
