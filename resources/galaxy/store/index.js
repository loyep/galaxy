import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const requireContext = require.context('./modules', false, /.*\.js$/)

const modules = requireContext
  .keys()
  .map(
    file => [
      file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)
    ]
  )
  .reduce((modules, [name, module]) => {
    if (module.namespaced === undefined) {
      module.namespaced = true
    }
    return { ...modules, [name]: module }
  }, {})

export default new Vuex.Store({
  modules,
  state: {},
  mutations: {},
  actions: {},
  getters
})
