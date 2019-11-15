<template>

     <v-snackbar
      v-model="active"
      :color="color"
      
      top
     
      
    >
      {{ text }}
      <v-btn
        dark
        text
        @click="active = false"
      >
        Close
      </v-btn>
    </v-snackbar>
</template>
      
      
    <script>
    export default {
        props:['text','snackbar','color'],
        data(){
            return {
                active:false
            }
        },
        watch:{
            snackbar(v){
                this.active = v;
            }
        }
        
    }
    </script>