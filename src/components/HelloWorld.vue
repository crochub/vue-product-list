<template>
  <div class="hello">
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.id }} - {{ product.name }} - {{ product.description }}
        <button type="button" @click="removeProduct(product.id)">Remove</button>
      </li>
    </ul>
    <button type="button" @click="createProduct">Create Product</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    products () {
      return this.$store.state.products
    },
  },
  methods: {
    createProduct () {
      this.$store.commit('add', { name: 'Phone', description: 'It is new device' })
    },
    removeProduct (id) {
      this.$store.commit('remove', id)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
