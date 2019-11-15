<template>
 <v-lazy
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="50"
        transition="fade-transition"
      >
       <v-list-item >
       
        
         <v-list-item-content>
          <v-list-item-title v-text="item"></v-list-item-title>
          <v-list-item-subtitle >Latest version: {{subItem}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
           <v-icon v-if ="flagActiveOk || wasCalledFlag"  class="ok_add" color="green">{{iconOk}}</v-icon>
           
        </v-list-item-content>
            
         <v-list-item-action>
          <v-btn icon @click="watch(item)">
           <v-icon>{{iconWatch}}</v-icon>
          </v-btn>
        </v-list-item-action>
         <v-list-item-action>
          <v-btn icon  @click="onClick">
           <v-icon>{{icon}}</v-icon>
          </v-btn>
        </v-list-item-action>
         <v-list-item-action v-if = "type == 'search'">
             <Select
            :versions="values"
             
             validate-on-blur
             />
        </v-list-item-action>
        
    </v-list-item>
</v-lazy>
   
      
        
   
</template>
<script>
import { mdiCheckBold } from '@mdi/js';
import { mdiCryengine } from '@mdi/js';
import { mdiPlusCircle } from '@mdi/js';
import { mdiBasketFill } from '@mdi/js';
import  Select from './Select.vue'
        
export default {
    components:{Select},
    inject:['add','del','watch','getArraySelect'],
    data(){
        return{
            wasCalledFlag:false,
            flagActiveOk:false,
            isActive:false,
            iconWatch:mdiCryengine,
            iconAdd:mdiPlusCircle,
            iconDel:mdiBasketFill,
            iconOk:mdiCheckBold
        }
    },
     props:{
        item:{
            required: true,
            type: String
        },
        index:{
            type:Number,
            required:true
        },
        subItem:{
             required: true,
            type: String
        },
        type:{
            type:String,
            required:true
        },
        mounted:{
            type:Boolean,
            default: true
        }
        
        
    },
    computed:{
        icon(){
            return this.type == 'search' ? this.iconAdd : this.iconDel
        },
    
       values(){
           return this.getArraySelect(this.item);
       }
    },
   
    methods:{
      
        onClick(){
           
           !(this.type == 'search' && !this.add(this.item,this.index).then((res) => {
              
               if(this.wasCalledFlag){
                    this.flagActiveOk = true;
                }
                else{
                    if(res){
                        this.wasCalledFlag = res;
                    }
                    this.flagActiveOk = res;


                }
               
            })) && this.del(this.item,this.index)
        }
        
    },
    
    updated(){
        if(!this.mounted){
            this.$emit('mounted',true)
            this.$store.dispatch('setLoading',false)
        }
    },
    
    
}
            

    
</script>
<style lang="scss">
  .ok_add{
      display: inline-block;
      margin-right: 8px;
  }
</style>