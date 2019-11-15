<template>
    
        <v-select
          :items="versions"
          label="versions"
          flat
          
          hide-details
          
        
          @change="$emit('change',$event)"
          
        ></v-select>
    
</template>
<script>
export default {
    props:['versions'],
    
   
}
</script>