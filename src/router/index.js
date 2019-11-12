import VueRouter from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import Added from '../components/Added.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    routes:[
        {
            component:HelloWorld,
            path:'/'
        },
        {
            component:Added,
            path:'/added'
        },
    ],
    mode:'history'
})
       
        
    

