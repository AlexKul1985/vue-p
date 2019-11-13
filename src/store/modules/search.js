export const search = {
    namespaced: true,
    state:{
        versions:[],
        nameLib:[],
       
    },
    getters:{
        versions(state){
            return state.versions
        },
        nameLib(state){
            return state.nameLib
        }

    },
    mutations:{
        setVersions(state,payload){
            // console.log('payload',payload)
                state.versions = payload;
            },
        setNameLib(state,payload){
            state.nameLib.push(payload)
           
        }
    },
   
    actions:{
        // setVersions({commit},payload){
        //     commit('setVersions',payload)
        // },
        async setNameLib({commit},payload){
            let res = await fetch(`https://api.cdnjs.com/libraries/${payload}/?fields=name,assets`)
            let data = await res.json()
            let versions = Object.keys(data).length > 0 && !commit('setNameLib',data.name) ?
             data.assets.map((obj) => {
                return obj.version;
             }): [];
             commit('setVersions',versions)
        }
           

               
               
               
                
                 
                
           
      
    }

}