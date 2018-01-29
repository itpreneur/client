import Vue from 'vue'
import Vuex from 'vuex'
import persist from 'vuex-persist'

import * as modules from './modules'

Vue.use(Vuex)

export default () => new Vuex.Store({
  modules,
  plugins: [
    new persist({
      storage: window.localStorage,
      key: 'state'
    }).plugin
  ]
})
