<template>
    
        <v-select
          :items="versions"
          label="Version"
           flat
        solo-inverted
        hide-details
        
        @change="$emit('change',$event)"
          
        ></v-select>
    
</template>
<script>
export default {
    props:['versions'],
   
}
</script>