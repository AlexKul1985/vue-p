import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchList from '../views/SearchList.vue'
import SavedList from '../views/SavedList.vue'
import E404 from '../views/NotFound'
import DetailLib from '../views/DetailLib.vue'
import store from '../store/index'
import { sendInfoFunction } from './../mixins/sendInfoUser';





Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
            component:SearchList,
            path:"/",
            name:'search',
           
            
        },
        {
            component:SavedList,
            path:"/saved",
            name:'saved',
            beforeEnter(to, from, next){
                store.dispatch('saved/getSavedLibs').then((res) => {
                    
                    if(!res){
                       
                        sendInfoFunction('setError',`You have no saved libraries! 
                                                        Add at least one library!`,store)
                        
                    }
                    else{

                        next()
                    }
                })
                
               
            }
        },

        {
            
            component:DetailLib,
            path:"/detail/:name",
            name:'detail',
            beforeEnter(to, from, next){
                if(from.name == 'saved'){
                    store.dispatch('setLoading',true)
                    store.dispatch('saved/getDetailLib',to.params.name).then(() => {
                      store.dispatch('setLoading',false)
                    })
                }
                else {
                    store.dispatch('setLoading',true)
                    store.dispatch('detail/getDetailLib',to.params.name).then(() => {
                      store.dispatch('setLoading',false)
                    })
                }
              
               
                next()
            }
        },
    
        {
            path: '*',
            component: E404
        }
        
    ],
    mode:'history'
})
       
        
    

