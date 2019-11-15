export const detail = {

    namespaced: true,
    state:{
        detailLib:{}
    },
    getters:{
        detailLib(state){
            return state.detailLib
        }
    },
    mutations:{
        getDetailLib(store,payload){
            store.detailLib = payload;
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
            
        }
    }

}