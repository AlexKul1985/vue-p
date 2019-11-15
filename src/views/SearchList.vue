<template>
  <div v-if="Object.keys(libs).length">
  <v-card
    max-width="980"
    class="mx-auto"
  >
    <List
      :items="libs"
      :type="'search'"
      :method = "save"
      @watch = "onWatch"
      :arrayValues="[]"
    />

  </v-card>
  </div>
  <div v-else></div>

</template>
<script>


import List from '../components/List'
import {addLibMixin} from '../mixins/addLib.js'

export default {
  components:{
    List
  },
    mixins:[addLibMixin],
 
    methods:{
      async save(item){
        
        let res = await this.onAdd(item)
        
      
        return res;
      },
      onWatch(item){
       
       
        this.$router.push(`/detail/${item}`)
      }

    },
    computed:{
    
      libs(){
        return this.$store.getters['search/libs']
      }
    },
   
   
  }
</script>