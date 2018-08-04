import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { GETTERS, MUTATIONS } from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
  },
  getters: {
    [GETTERS.FIND_BY_ID] (state) {
      return id => state.products.find(p => p.id === id)
    },
  },
  mutations: {
    [MUTATIONS.ADD] (state, { name, description }) {
      const count = state.products.length
      const id = count ? state.products[count - 1].id + 1 : 1

      state.products.push({ id, name, description })
    },
    [MUTATIONS.UPDATE] () {},
    [MUTATIONS.REMOVE] (state, id) {
      const index = state.products.findIndex(p => p.id === id)

      if (index > -1) {
        state.products.splice(index, 1)
      }
    },
  },
  plugins: [createPersistedState()],
})
