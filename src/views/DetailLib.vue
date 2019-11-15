<template>

  <div class="detail_wrap" v-if="Object.keys(detailLib).length">
    <v-card
    class="mx-auto"
    max-width="980"
    
  >
    <v-card-text>
      <div>Library</div>
      <p class="display-1 text--primary">
        {{detailLib.name}}
      </p>
      <p> {{detailLib.namespace}}</p>
      <div class="text--primary">
       {{detailLib.description}}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
        :href="detailLib.homepage"
        target="_blank"
      >
        Read more
      </v-btn>
    </v-card-actions>
    
        <v-btn fab  dark  icon class="save_btn" color="white" v-if = "routeName == 'search'" @click="save($route.params.name)">
            <v-icon color="green">{{iconSave}}</v-icon>
        </v-btn>
        <v-btn fab  dark  icon class="save_btn" color="white" v-if = "routeName == 'saved'" @click="del($route.params.name)">
            <v-icon color="green">{{iconDel}}</v-icon>
        </v-btn>
    
  </v-card>
    </div>
</template>
<script>
import { mdiShapeCirclePlus } from '@mdi/js';
import { mdiBasketFill } from '@mdi/js';
import {addLibMixin} from '../mixins/addLib.js'
export default {
    mixins:[addLibMixin],
    data(){
        return {
            routeName:'search',
            iconDel:mdiBasketFill,
            iconSave: mdiShapeCirclePlus
        }
    },
    computed:{
        detailLib(){
            return this.$store.getters['detail/detailLib']
        },
       
    },
    beforeRouteEnter (to, from, next) {
   
   	next(vm => {
           vm.routeName = from.name
       })
  },
    
    methods:{
         save(item){
              
           this.onAdd(item).then((flag) => {
               if(flag){
                    this.$store.dispatch('setInfo',{
                    infoShow: true,
                     infoText: 'Library added!'
                   })
                   setTimeout(() => {
                        this.$store.dispatch('setInfo',{
                            infoShow: false,
                           
                   })
                   },3000)
                  
               }
           })
      },
      del(item){
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

                  this.$router.push('/saved')
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
      }
        
    }
  
   
}

</script>
<style lang="scss">
    .detail_wrap{
        position: relative;
        .save_btn{
            position: absolute;
            top:-8%;
            right:-1%;
        }
    }
</style>