<template>
   <v-list-item>
         <v-list-item-content>
          <v-list-item-title v-text="item[fields[0]]"></v-list-item-title>
          <v-list-item-subtitle v-text="item[fields[1]]"></v-list-item-subtitle>
        </v-list-item-content>
         <v-list-item-action>
          <v-btn icon @click="watch(item)">
           <v-icon>{{iconWatch}}</v-icon>
          </v-btn>
        </v-list-item-action>
         <v-list-item-action>
          <v-btn icon  @click="method(item)">
           <v-icon>{{icon}}</v-icon>
          </v-btn>
        </v-list-item-action>
    </v-list-item>
      
        
   
</template>
<script>
import { mdiCryengine } from '@mdi/js';
import { mdiPlusCircle } from '@mdi/js';
import { mdiBasketFill } from '@mdi/js';    
        
export default {
    inject:['add','del','watch'],
    data(){
        return{
            iconWatch:mdiCryengine,
            iconAdd:mdiPlusCircle,
            iconDel:mdiBasketFill,
        }
    },
     props:{
        item:{
            required: true,
            type: Object
        },
       
        type:{
            type:String,
            required:true
        },
        fields:{
            type:Array,
            required:true
        }
    },
    computed:{
        icon(){
            return this.type == 'add' ? this.iconAdd : this.iconDel
        },
        method(){
             return this.type == 'add' ? this.add : this.del
        }
    },
    
}
            

    
</script>