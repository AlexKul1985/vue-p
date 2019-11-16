
export const sendInfoFunction = function(type,info,store=this.$store){
    store.dispatch(type,{
        flag:true,
        text: info
    })
    setTimeout(() => {
        store.dispatch(type,{
            flag:false,
        })
    },3000)
            
}

export const sendInfoMixin = {
    methods:{
        sendInfoFunction
    }
}