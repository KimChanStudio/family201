import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
  meal
} from './meal.js'

export default new Vuex.Store({
  modules: {
    meal
  }
})