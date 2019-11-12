
<template>
  <v-app id="inspire">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Libraries</span>
      </v-toolbar-title>
    
      <v-text-field
        flat
        solo-inverted
        hide-details
        
        prepend-inner-icon="mdi-magnify"
        label="Library Name"
        class="hidden-sm-and-down"
      />

       
      <v-spacer />
      
        <v-select
          :items="['Item']"
          label="Version"
           flat
        solo-inverted
        hide-details
          
        ></v-select>
    
    </v-app-bar>
    <v-content>
     <v-container>
      
    <!-- view-router -->
    <SearchList/>
        
     </v-container>
      
    </v-content>
    
  
  </v-app>
</template>

<script>
import SearchList from './views/SearchList'


  export default {
    name:'App',
    components:{
      SearchList
    },
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'mdi-contacts', text: 'Contacts' },
        { icon: 'mdi-history', text: 'Frequently contacted' },
        { icon: 'mdi-content-copy', text: 'Duplicates' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'mdi-plus', text: 'Create label' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' },
          ],
        },
        { icon: 'mdi-settings', text: 'Settings' },
        { icon: 'mdi-message', text: 'Send feedback' },
        { icon: 'mdi-help-circle', text: 'Help' },
        { icon: 'mdi-cellphone-link', text: 'App downloads' },
        { icon: 'mdi-keyboard', text: 'Go to the old version' },
      ],
    }),
  }
</script>

