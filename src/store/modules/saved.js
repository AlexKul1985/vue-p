export const saved = {

    namespaced: true,
    state:{
        savedData:{},
        savedLibs:{}
    },
    getters:{
        savedData(state){
            return state.savedData
        },
       
        savedLibs(state){
            return state.savedLibs
        }

    },
    mutations:{
        save(state,payload){
            state.savedData = payload
        },
      
        getSavedLibs(state,payload){
            state.savedLibs = payload;
        }
    },
    actions:{
        async save({commit},payload){
            let res = await fetch(`https://api.cdnjs.com/libraries/${payload}?fields=description,homepage,repository,version`);
            let data = await res.json()
            
           
           
            data.homepage = !!data.homepage ? data.homepage : data.repository.url.replace(/^(git\:|git\+https\:)/,'https:')
            data['name'] = payload.toUpperCase();
           
            data['latest_version'] = data.version;
            commit('save',data)
            
        },
        getDetailLib({commit},payload){
            if(localStorage.getItem('libs')){
              
                let libs = JSON.parse(localStorage.getItem('libs'))
                
    
                commit('detail/getDetailLib',libs[payload],{root:true});
                return true;
            }
            return false;
            
        },
         getSavedLibs({commit},payload = {}){
            if(Object.keys(payload).length){
                commit('getSavedLibs',payload);
                
                return true;
            }
            else{
               
                if(localStorage.getItem('libs') && Object.keys(JSON.parse(localStorage.getItem('libs'))).length){
                    commit('getSavedLibs',{});
                    let libs = JSON.parse(localStorage.getItem('libs'))
                    
                    commit('getSavedLibs',libs);
                    return true;
                }
                else{

                    return false;
                }
            }
           
            
            
        }
    }

}