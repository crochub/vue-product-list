<template>
  <v-form v-model="valid" ref="form">
    <v-text-field label="Name" v-model="name" :rules="rules" autofocus></v-text-field>
    <v-textarea label="Description" v-model="description" :rules="rules"></v-textarea>
    <div class="mt-2 text-xs-right">
      <v-btn color="success" :disabled="!valid" @click="save">{{ successBtnLabel }}</v-btn>
      <v-btn :to="{ name: 'products' }">Cancel</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  props: {
    successBtnLabel: {
      type: String,
      default: 'Add',
    },
    product: {
      type: Object,
      default: () => null,
    },
  },
  mounted () {
    this.fillData()
  },
  data () {
    return {
      valid: false,
      name: '',
      description: '',
      rules: [v => !!v || 'Field is required'],
    }
  },
  watch: {
    product () {
      this.fillData()
    },
  },
  methods: {
    save () {
      this.$emit('save', { name: this.name, description: this.description })
      
      if (!this.product) {
        this.$refs.form.reset()
      }
    },
    fillData () {
      if (this.product) {
        this.name = this.product.name
        this.description = this.product.description
      }
    },
  },
}
</script>
