
<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <v-list two-line subheader>
     
        <Item v-for="(item,index) in items" :item="item" :key="index" :fields = "fields" :type="type"/>
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
    provide:{
        add:function(val){
            
            ctx.$emit('add',val)
            
        },
        del:function(val){
           
             ctx.$emit('del',val)
            

        },
        watch:function(val){
            
            ctx.$emit('watch',val)
            

        }
    },
    props:['items','type'],
   
    computed:{
        fields(){
            return this.items.length > 0 && Object.keys(this.items[0])
        }
    },
    created(){
        ctx = this;
    }
    
  }
</script>
     
      

     

