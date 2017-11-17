import state from './state'
import getters from './getters'
import mutations from './mutations'

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters
}
