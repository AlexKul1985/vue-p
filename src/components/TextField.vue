<template>
    
        <v-text-field
            flat
            solo-inverted
            hide-details
            @input="$emit('input',$event)"
            prepend-inner-icon="mdi-magnify"
            label="Library Name"
            class="hidden-sm-and-down"
      />
   
</template>