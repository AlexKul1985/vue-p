
<template>
  <Container>
      <HeaderTop>
            <Title>
              Libraries
            </Title>
            <TextField
              @input = "onInput"
            />
            <v-spacer />
                  
            <Select
              :versions="versions"
              @change="onChange"
            />
         
      </HeaderTop>

      <Content>
         <Loading
           :loading="loading"
          />
          <router-view/>
      </Content>
  </Container>
</template>


   


  
      
  
      
    
        
      
    
  

<script>
import Container from './components/Container'
import HeaderTop from './components/HeaderTop'
import Content from './components/Content'
import TextField from './components/TextField'
import Select from './components/Select'
import Title from './components/Title'
import Loading from './components/Loading'


  export default {
    name:'App',
    components:{
      TextField,Select,Title,HeaderTop,Container,Content,Loading
    },
    methods:{
      onChange(v){
        console.log(v)
      },
       onInput(v){
        // console.log(v)
        // let payload
        // if(v.length > 0){
        //   payload = [1,2,3,4,5,6,7,8,9];
        //    console.log(1)
        // }
           
        // else{
        //   console.log(2)
        //   payload = []
        // }   
        this.$store.dispatch('search/setNameLib',v.toLowerCase())
      }
    },
    computed:{
       versions(){
        return this.$store.getters['search/versions']
      },
      loading(){
        return this.$store.getters.loading
      }
    },
    
   
  
    
  }
</script>


