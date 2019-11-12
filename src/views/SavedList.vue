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
     
        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
           <v-icon>{{iconWatch}}</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon>
            <v-icon>{{iconDel}}</v-icon>
          </v-btn>
      </v-list-item-action>
      </v-list-item>

     
    </v-list>
  </v-card>
</template>

<script>
import { mdiCryengine  } from '@mdi/js';
import { mdiBasketFill } from '@mdi/js';
  export default {
    data: () => ({
      iconWatch:mdiCryengine,
      iconDel:mdiBasketFill,
      items: [
        {  title: 'JQuery', subtitle: 'Version 1.4.5' },
        {  title: 'JQuery', subtitle: 'Version 4.5.6' },
        { title: 'JQuery', subtitle: 'Version 7.6.5' },
      ],
      
    }),
  }
</script>