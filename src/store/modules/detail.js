export const detail = {

    namespaced: true,
    state:{
        detailLib:{},
        versions:[]
    },
    getters:{
        detailLib(state){
            return state.detailLib
        },
        versions(state){
            return state.versions
        }
    },
    mutations:{
        getDetailLib(state,payload){
            
            state.detailLib = payload;
        },
        getVersions(state,payload){
            state.versions = payload
        }
    },
   
    actions:{
        async getDetailLib({commit},payload){
            commit('getDetailLib',{})
            let res = await fetch(`https://api.cdnjs.com/libraries/${payload}?fields=description,homepage,repository`);
            let data = await res.json();
           
            data.homepage = !!data.homepage ? data.homepage : data.repository.url.replace(/^(git\:|git\+https\:)/,'https:')
            data['name'] = payload.toUpperCase();
            
            commit('getDetailLib',data)
            
        },
        async getVersions({commit},payload){
           
            let res_versions = await fetch(`https://api.cdnjs.com/libraries/${payload}/?fields=assets`)
            let data_versions = await res_versions.json()
           
            
            
            let versions = data_versions.assets.map((asset,ind) => {
                
                return asset.version
            })
            // console.log(versions)
            if(versions.length){
               
                commit('getVersions',versions)
                return true;
            }
            return false;
            
        }
    }

}