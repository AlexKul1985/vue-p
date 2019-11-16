<template>
    
        <v-text-field
            flat
            solo-inverted
            hide-details
            @input="$emit('input',$event)"
            :value="value"
            prepend-inner-icon="mdi-magnify"
            label="Library Name"
            class="hidden-sm-and-down"
      />
   
</template>
<script>

export default {
      props:['value']
}


</script>