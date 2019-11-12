import VueRouter from 'vue-router'
import Vue from 'vue';
import SearchList from '../views/SearchList.vue'
import SavedList from '../views/SavedList.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
            component:SearchList,
            path:"/",
            
        },
        {
            component:SavedList,
            path:"/saved",
            
        }
        
    ],
    mode:'history'
})
       
        
    

