import { createStore } from 'vuex'
import DataService from '@/services/DataService'

export default createStore({
  state: {
    DataService: new DataService(),
    utilisateur:{},
    medecin:{}
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
