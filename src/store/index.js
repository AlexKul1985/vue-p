import Vue from 'vue'
import Vuex from 'vuex'
import {saved} from './modules/saved.js'
import {search} from './modules/search.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
    textEmptyData:'',
    flagLoaded:false
  },
  getters:{
    
    textEmptyData(state){
      return state.flagLoad ? 'Unknown Data' : 'Not Data'
    },
    loading(state){
      return state.loading
    }
  },

  mutations: {
    setLoading(state,payload){
      state.loading = payload
    },
    setFlagLoaded(state,payload){
      state.flagLoaded = payload;
    }
  
  },
  actions: {
    setLoading({commit},payload){
      commit('setLoading',payload)
    }
   
  },
  modules: {
    saved,search
  }
})
