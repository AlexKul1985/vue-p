
<template>
  <v-card
    max-width="1200"
    class="mx-auto"
  >
    <v-list two-line subheader>
     
        <Item v-for="(name,index) in names" :item="name" :key="index" :subItem = "items[name]['latest_version']" :index="index"  :type="type" :mounted="mounted" @mounted="onMountedOneItem"/>
    </v-list>
  </v-card>
</template>
<script>
 

   
     
import Item from './Item'

let ctx = this;

export default {
    components:{
        Item
    },
    data(){
        return {
            mounted:false
        }
    },
    provide:{
        add: async function(val,index){
            
            let res = await ctx.method(val);
            
            return res;
            

           
        },
        del:function(val,index){
           
           
             ctx.$emit('del',val)
            

        },
        watch:function(val){
            
            ctx.$emit('watch',val)
            
        },
        getArraySelect:function(name){
            
            return ctx.items[name]['version']
        }

    },
    
    props:{
        items:{
            type:Object,
           default:() => {
                return {};
            }
        },
        type:{
            type:String
        },
        method:{
            type:Function
        }

    },
  
    computed:{
      
        names(){
            return Object.keys(this.items)
        }
    },
    created(){
        ctx = this;
    },
 
    methods:{
        onMountedOneItem(v){
            this.mounted = v;
        }
    },
   
  }
</script>
     
      

     

