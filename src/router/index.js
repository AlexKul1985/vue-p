import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchList from '../views/SearchList.vue'
import SavedList from '../views/SavedList.vue'
import E404 from '../views/NotFound'
import DetailLib from '../views/DetailLib.vue'
import store from '../store/index'



Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
            component:SearchList,
            path:"/",
            name:'search',
            // beforeEnter(to, from, next){
            //     store.dispatch('setLoading',true)
            //     console.log(store.getters.currentName)
            //     store.dispatch('search/setLibs',store.getters.currentName);
            //     next()
                
                
            // },
           
            
        },
        {
            component:SavedList,
            path:"/saved",
            name:'saved',
            beforeEnter(to, from, next){
                store.dispatch('saved/getSavedLibs').then((res) => {
                    
                    if(!res){
                        store.dispatch('setError',{
                            error:true,
                            textError: `You have no saved libraries! 
                                          Add at least one library!`
                        })
                        setTimeout(() => {
                            store.dispatch('setError',{
                                error:false,
                                
                            })
                        },3000)
                       
                        
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
       
        
    

