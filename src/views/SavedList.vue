<template>
 
 <div v-if="items.length > 0">
    <v-card
    max-width="600"
    class="mx-auto"
  >
    <List
      :items="items"
      :type="'del'"
       @del = "onDel"
      @watch = "onWatch"
    />
    </v-card>
   </div> 
  <div v-else class="emptyData">
      No Data
  </div>  
   
  
</template>

<script>

import List from '../components/List'
  export default {
    components:{
      List
    },
    data: () => ({
     
      items: [
        {  title: 'JQuery', subtitle: 'Version 1.4.5' },
        {  title: 'JQuery', subtitle: 'Version 4.5.6' },
        { title: 'JQuery', subtitle: 'Version 7.6.5' },
      ],
      
    }),
    methods:{
      onDel(item){
        console.log('onDel ',item)

      },
      onWatch(item){
        console.log('onWatch ',item.subtitle)
      }

    }
  }
</script>
<style lang="scss">
    .emptyData{
      text-align: center;
    }
</style>