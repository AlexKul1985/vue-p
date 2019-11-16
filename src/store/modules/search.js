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
        flagTimed:false,
        libs:{},
       
    },
    getters:{
       
        libs(state){
            return state.libs
        },
        flagTimed(state){
            return state.flagTimed
        }

    },
    mutations:{
      
        setLibs(state,payload){
            state.libs = payload
           
        },
        setFlagTimed(state,payload){
            state.flagTimed = payload
           
        }
    },
   
    actions:{
        
        async setLibs({commit},payload){
           commit('setLibs',{});
        // debugger;
            let res_names = await fetch(`https://api.cdnjs.com/libraries/?search=${payload}&fields=version`)
            let data_names = await res_names.json()
            if(data_names.total !== 0){
                
                commit('setFlagTimed',true)
            }
          
            
            let libs = {};
           data_names.results.forEach((obj) => {
                libs[obj.name] = {};
                libs[obj.name]['latest_version'] = obj.version;
            })
            isLibraryAdd(localStorage.getItem('libs'),libs)
            commit('setLibs',libs)
           
        //    await names.forEach(async (name,ind) => {
                
        //         let res_versions = await fetch(`https://api.cdnjs.com/libraries/${name}/?fields=assets`)
        //         let data_versions = await res_versions.json()
        //         libs[name] = {};
        //         let latest_version = null;
        //         libs[name]['version'] = data_versions.assets.map((asset,ind) => {
        //             if(ind == 0) latest_version = asset.version.trim()
        //             return asset.version
        //         })
        //         libs[name]['latest_version'] = latest_version
        //         if(ind == names.length - 1){
        //             
                   
        //             commit('setLibs',libs)
                    
        //         }
        //     });
            return true;
           
             
        },
        setFlagTimed({commit},payload){
            
            commit('setFlagTimed',payload)
            
        }

               
               
               
                
                 
                
           
      
    }

}