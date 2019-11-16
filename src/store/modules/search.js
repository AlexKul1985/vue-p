function isLibraryAdd(localDB,dataServer){
    let libs = JSON.parse(localDB)
    
    if(localDB && Object.keys(libs).length){
        for(let key in dataServer){
            if(key in libs){
                dataServer[key]['added'] = true;
            }
            else{
                dataServer[key]['added'] = false;
            }
        }
    }
}

export const search = {
    namespaced: true,
    state:{
      
        libs:{},
       
    },
    getters:{
       
        libs(state){
            return state.libs
        }

    },
    mutations:{
      
        setLibs(state,payload){
            state.libs = payload
           
        }
    },
   
    actions:{
        
        async setLibs({commit},payload){
           commit('setLibs',{});
        // debugger;
            let res_names = await fetch(`https://api.cdnjs.com/libraries/?search=${payload}`)
            let data_names = await res_names.json()
          
            
            let names = data_names.results.map((obj) => {
                return obj.name;
            })
           
            let libs = {};
           await names.forEach(async (name,ind) => {
                
                let res_versions = await fetch(`https://api.cdnjs.com/libraries/${name}/?fields=assets`)
                let data_versions = await res_versions.json()
                libs[name] = {};
                let latest_version = null;
                libs[name]['version'] = data_versions.assets.map((asset,ind) => {
                    if(ind == 0) latest_version = asset.version.trim()
                    return asset.version
                })
                libs[name]['latest_version'] = latest_version
                if(ind == names.length - 1){
                    isLibraryAdd(localStorage.getItem('libs'),libs)
                    console.log(libs)
                    commit('setLibs',libs)
                }
            });
            return true;
           
             
        }
           

               
               
               
                
                 
                
           
      
    }

}