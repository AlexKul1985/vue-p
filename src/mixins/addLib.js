export const addLibMixin = {
    methods:{
        async onAdd(item){
           
            this.$store.dispatch('setLoading',true)
            await this.$store.dispatch('saved/save',item)
            this.$store.dispatch('setLoading',false)
           
            let libs = {};
            let data = this.$store.getters['saved/savedData'];
            if(localStorage.getItem('libs')){
                
                libs = JSON.parse(localStorage.getItem('libs'))
                
                if(!this.noDuplicateData(Object.keys(libs),item)){
  
                    this.$store.dispatch('setError',{
                        error: true,
                        textError: 'Library already exists'
                    })
                    setTimeout(() => {
                        this.$store.dispatch('setError',{
                            error: false
                        })
                    },3000)
                    
                    return false
                }
            }
            else{
                libs = {}
               
            }
            libs[item] = data
            localStorage.setItem('libs',JSON.stringify(libs))
              
              
  
          
        return true;
          
    },
  
              
        noDuplicateData(names,name){
            let newNames = [...names];
            newNames.push(name)
            return (new Set(newNames)).size > (new Set(names)).size
          
          
        },
            
  
    }
}