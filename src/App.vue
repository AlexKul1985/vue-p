
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
       <router-view/>
    </v-container>
    </v-content>
  </v-app>
</template>
      
    
        
      
    
  

<script>



  export default {
    name:'App',
  
    
  }
</script>

