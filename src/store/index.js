import Vue from 'vue'
import Vuex from 'vuex'
import {saved} from './modules/saved.js'
import {search} from './modules/search.js'
import {detail} from './modules/detail.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:false,
    currentName:null,
    // flagLoaded:false,
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
    },
    currentName(state){
      return state.currentName
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
    },
    setCurrentName(state,payload){
      state.currentName = payload
    }
  
  },
  actions: {
    setLoading({commit},payload){
      commit('setLoading',payload)
    },
    setError({commit},{flag, text=""}){
      commit('setColor','red')
      commit('setInfoShow',flag)
      commit('setInfoText',text)
    },
    setInfo({commit},{flag, text=""}){
      commit('setColor','green')
      commit('setInfoShow',flag)
      commit('setInfoText',text)
    },
    setCurrentName({commit},payload){
      // debugger
      commit('setCurrentName',payload)
    }
    
    
   
  },
  modules: {
    saved,search,detail
  }
})
