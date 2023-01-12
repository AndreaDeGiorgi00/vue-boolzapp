console.log("vue Ok " , Vue)


const app = Vue.createApp({
    data(){
        return{
            allInfos : data ,
            
        }},
        methods:{
            getPicture(i){
                let finalText = "";
                finalText +=  `img/avatar${i.avatar}.jpg`
                return finalText
            },
            getName(i){
                return i.name
            }  
        }
    })


app.mount(".background")
console.log(data)


