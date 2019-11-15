import Vue from 'vue'
import Vuex from 'vuex'
import {saved} from './modules/saved.js'
import {search} from './modules/search.js'
import {detail} from './modules/detail.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
   
    flagLoaded:false,
    infoText:'',
    infoShow:false,
    color:null
  },
  getters:{
  
    infoShow(state){
      return state.infoShow 
    },
    infoText(state){
      return state.infoText 
    },
   
    loading(state){
      return state.loading
    },
    color(state){
      return state.color
    }
  },

  mutations: {
    setLoading(state,payload){
      state.loading = payload
    },
   
    setInfoShow(state,payload){
      state.infoShow = payload
    },
    setInfoText(state,payload){
      state.infoText = payload
    },
    setColor(state,payload){
      state.color = payload
    }
  
  },
  actions: {
    setLoading({commit},payload){
      commit('setLoading',payload)
    },
    setError({commit},{error, textError=""}){
      commit('setColor','red')
      commit('setInfoShow',error)
      commit('setInfoText',textError)
    },
    setInfo({commit},{infoShow,infoText=""}){
      commit('setColor','green')
      commit('setInfoShow',infoShow)
      commit('setInfoText',infoText)
    }
    
    
   
  },
  modules: {
    saved,search,detail
  }
})
