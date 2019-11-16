
<template>
  <Container>
      <HeaderTop>
            <Title>
               <router-link to="/"><span class="title"> JS Libraries</span></router-link>
            </Title>
              
            <TextField
            v-if="name == 'search'"
              @input = "onInput"
              :value="currentTextName"
            />
            <v-spacer />
           
            <router-link to="/saved">
               <v-btn class="ma-2" outlined fab color="white">
                <v-icon>mdi-format-list-bulleted-square</v-icon>
              </v-btn>
            </router-link>
      </HeaderTop>
      <Content>
         <Loading
           :loading="loading"
          />
          <router-view/>
      </Content>
      <SnackBar :text="text" :snackbar="flag" :color="color"/>
  </Container>
</template>
                  
            
         



   


  
      
  
      
    
        
      
    
  

<script>
import Container from './components/Container'
import HeaderTop from './components/HeaderTop'
import Content from './components/Content'
import TextField from './components/TextField'
import SnackBar from './components/SnackBar'

import Title from './components/Title'
import Loading from './components/Loading'

let ctx = null;
let idTimer = null;
let idTimedOut = null;

  export default {
    name:'App',
    components:{
      TextField,Title,HeaderTop,Container,Content,Loading,SnackBar
    },
    data(){
      return {
        name:'search',
        currentTextName:''
        
      }
    },
    methods:{
     
       onInput(v=""){
         this.currentTextName = v;
         if(idTimer) 
          
           clearTimeout(idTimer)
         
         
           idTimer = setTimeout(() => {

               if(!!v){
                 if(/^[a-zA-Z0-9\-\_\.]+/.test(ctx.currentTextName)){
                    this.$store.dispatch('setLoading',true)
                    this.$store.dispatch('search/setLibs',v.toLowerCase())
                    this.$store.dispatch('search/setFlagTimed',false)
                    if(idTimedOut) clearTimeout(idTimedOut)
                  idTimedOut = setTimeout(() => {
                    
                    if(this.$store.getters['search/flagTimed'] || !ctx.currentTextName) {
                      this.$store.dispatch('search/setFlagTimed',false)
                      clearTimeout(idTimedOut)
                      return;  
                    }                     
                    this.$store.dispatch('setError',{
                                                    error: true,
                                                    textError: 'Timed out, try to enter data differently'
                                                  })
                      this.$store.dispatch('setLoading',false)
                      setTimeout(() => {
                          this.$store.dispatch('setError',{
                          error: false,
                        
                        })
                        },3000)    
                   },7000)
                }
                else{
                  console.log('asdsad')
                   this.$store.dispatch('setLoading',false)
                       this.$store.dispatch('setError',{
                                                    error: true,
                                                    textError: 'Input format error'
                                                  })
                        setTimeout(() => {
                          this.$store.dispatch('setError',{
                          error: false,
                        
                        })
                        },3000)
                        }
                
               }
               else{
                 this.$store.commit('search/setLibs',{})
               }
             
           },1000)
         
       
            
         
      }
    },
    computed:{
      
      loading(){
        return this.$store.getters.loading
      },
      flag(){
        return this.$store.getters.infoShow
      },
      text(){
        return this.$store.getters.infoText
      },
      color(){
        return this.$store.getters.color
      },
      
      

    },
    watch:{
      $route:(to,from) => {
       ctx.name = to.name
       if(from.name == 'search')
          
          if(ctx.currentTextName && /^[a-zA-Z0-9\-\_\.]+/.test(ctx.currentTextName)){
            ctx.$store.dispatch('setCurrentName',ctx.currentTextName)
           
          }
          
      },
      currentTextName(v){
         if(!(/^[a-zA-Z0-9\-\_\.]+/.test(ctx.currentTextName))){
                    this.$store.dispatch('setLoading',false)
                   
                   
                }
      },
    
     

    },
  
     created(){
       ctx = this;
    }


    
   
  
    
  }
</script>
<style lang="scss">
  .title{
    color:#fff;
  }
</style>


