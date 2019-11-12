<template>
    <div v-if="fields.length > 0">
        <v-list-item-content>
          <v-list-item-title v-text="item[fields[0]]"></v-list-item-title>
          <v-list-item-subtitle v-text="item[fields[1]]"></v-list-item-subtitle>
        </v-list-item-content>
    </div>
    <div v-else>
       <v-list-item-action>
          <v-btn icon>
           <v-icon>{{item}}</v-icon>
          </v-btn>
        </v-list-item-action>
    </div>
</template>
<script>
        
        
export default {
    props:{
        item:{
            required: true,
            type: Object
        },
        fields:{
            dafault:[],
            type: Array

        }
    }
    
}
</script>