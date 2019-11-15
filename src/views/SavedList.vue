<template>
 
 
    <v-card
    max-width="600"
    class="mx-auto"
  >
     <List
      :items="savedLibs"
      :type="'saved'"
      @del = "onDel"
      @watch = "onWatch"
      :arrayValues="[]"
    />
    </v-card>
  
   
  
</template>

<script>

import List from '../components/List'
  export default {
    components:{
      List
    },
    
    methods:{
      onDel(item){
       
        if(localStorage.getItem('libs')){
              
          
              let libs = JSON.parse(localStorage.getItem('libs'))
  
              delete libs[item]
              if(!Object.keys(libs).length){
               
                this.$router.push("/");
                this.$store.dispatch('setInfo',{
                  infoShow:true,
                  infoText:'You have deleted all library data'
                })
                setTimeout(() => {
                  this.$store.dispatch('setInfo',{
                  showInfo:false,
                  
                })
                },3000)
              }
              else{
                this.$store.dispatch('setInfo',{
                  infoShow:true,
                  infoText:'You have successfully deleted the library'
                })
                setTimeout(() => {
                  this.$store.dispatch('setInfo',{
                  showInfo:false,
                  
                })
                },3000)
              }
              localStorage.setItem('libs',JSON.stringify(libs))
              this.$store.dispatch('saved/getSavedLibs',libs)

            }

      },

      onWatch(item){
        
        // this.$store.dispatch('setLoading',true)
        // this.$store.dispatch('saved/getDetailLib',item).then(() => {
        //   this.$store.dispatch('setLoading',false)
        // })
        this.$router.push(`/detail/${item}`)
      }
    },
    computed:{
      savedLibs(){
        return this.$store.getters['saved/savedLibs'];
      }
    },
   
   

  }
</script>
<style lang="scss">
    .emptyData{
      text-align: center;
    }
</style>