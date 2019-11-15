<template>

    <div class="loading" v-if="loading">
    <v-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></v-progress-circular>
    </div>     
    
</template>
<script>
export default {
  props:['loading']
}
</script>
<style lang="scss">
  .loading{
    position: fixed;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    z-index: 100;
  }
</style>