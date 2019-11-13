<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
  <List
      :items="items"
      :type="'add'"
      @add = "onAdd"
      @watch = "onWatch"
    />

  </v-card>
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
      onAdd(item){
        console.log('onAdd ',item)

      },
      onWatch(item){
        console.log('onWatch ',item)
      }

    }
  }
</script>