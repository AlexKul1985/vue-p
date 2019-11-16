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
  <v-row justify="center">
    <v-btn class="watch_version_btn"
      color="primary"
      dark
      @click.stop="onClick"
    >
      View all versions
    </v-btn>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-list-item v-for="version in versions" :key="version"> 
          <v-list-item-content>
            <v-list-item-title>{{version}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
       
      </v-card>
    </v-dialog>
  </v-row>
    </div>
</template>
<script>
import { mdiShapeCirclePlus } from '@mdi/js';
import { mdiBasketFill } from '@mdi/js';
import {addLibMixin} from '../mixins/addLib.js'
import { sendInfoMixin } from './../mixins/sendInfoUser';
export default {
    mixins:[addLibMixin, sendInfoMixin],
    data(){
        return {
            name_natural:'',
            dialog: false,
            routeName:'search',
            iconDel:mdiBasketFill,
            iconSave: mdiShapeCirclePlus
        }
    },
    computed:{
        detailLib(){
            return this.$store.getters['detail/detailLib']
        },
        versions(){
          return this.$store.getters['detail/versions']
        }
       
    },
   
    beforeRouteEnter (to, from, next) {
   
   	next(vm => {
           vm.routeName = from.name
       })
  },
    
    methods:{
         onClick(){
          this.$store.dispatch('setLoading',true)
           this.$store.dispatch('detail/getVersions',this.$route.params.name).then((d) => {
             this.$store.dispatch('setLoading',false)
             
             if(d){
               this.dialog=true
             }
             else{
                this.sendInfoFunction('setError','Unknown error!')
             }
           })
         },
         save(item){
              
           this.onAdd(item).then((flag) => {
               if(flag){
                 
                  this.sendInfoFunction('setInfo','Library added!')
                  
               }
           })
      },
      del(item){
           if(localStorage.getItem('libs')){
              
          
              let libs = JSON.parse(localStorage.getItem('libs'))
  
              delete libs[item]
              if(!Object.keys(libs).length){
               
                this.$router.push("/");
               
                this.sendInfoFunction('setInfo','You have deleted all library data')
              }
              else{

                  this.$router.push('/saved')
               
                 this.sendInfoFunction('setInfo','You have successfully deleted the library')

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
    .watch_version_btn{
      margin-top:20px;
    }
</style>