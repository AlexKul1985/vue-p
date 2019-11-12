<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
 

    <v-list two-line subheader>
     

      <v-list-item
        v-for="item in items"
        :key="item.subtitle"
      >
       <Item 

       /> 
     
      
      </v-list-item>

     
    </v-list>
  </v-card>
</template>
<script>

import { mdiCryengine } from '@mdi/js';
import { mdiPlusCircle } from '@mdi/js';
import { mdiBasketFill } from '@mdi/js';
import Item from './Item'


export default {
    components:{
        Item
    },
    data: () => ({
     
      items: [
        {  title: 'JQuery', subtitle: 'Version 1.4.5' },
        {  title: 'JQuery', subtitle: 'Version 4.5.6' },
        { title: 'JQuery', subtitle: 'Version 7.6.5' },
      ]
      
    }),
  }
</script>