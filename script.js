

let dt = luxon.DateTime;

const app = Vue.createApp({
    data(){
        return{
            allInfos : data ,
            contacts: [
                {
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Hai portato a spasso il cane?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 16:15:22',
                    text: 'Tutto fatto!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [{
                    date: '20/03/2020 16:30:00',
                    text: 'Ciao come stai?',
                    status: 'sent'
                  },
                  {
                    date: '20/03/2020 16:30:55',
                    text: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                  },
                  {
                    date: '20/03/2020 16:35:00',
                    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [{
                    date: '28/03/2020 10:10:40',
                    text: 'La Marianna va in campagna',
                    status: 'received'
                  },
                  {
                    date: '28/03/2020 10:20:10',
                    text: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                  },
                  {
                    date: '28/03/2020 16:15:22',
                    text: 'Ah scusa!',
                    status: 'received'
                  }
                  ],
                },
                {
                  name: 'Luisa',
                  avatar: '_4',
                  visible: true,
                  messages: [{
                    date: '10/01/2020 15:30:55',
                    text: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                  },
                  {
                    date: '10/01/2020 15:50:00',
                    text: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                  }
                  ],
                },
              ],
              currentIndex: 0,
              newMessage : "",
              findContact : "",
        }},

        computed:{
            getLastAcces(){
                return dt.now().setLocale('it').toLocaleString(dt.TIME_24_SIMPLE)
            },
            contactsFiltered(){
                return this.contacts.filter( element => element.name.toLocaleLowerCase().indexOf(this.findContact.toLocaleLowerCase()) > -1)
            }
            
        },
        
        methods:{
            getCurrentTime(){
                return dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS)
            },
            getPicture(i){
                let finalText = "";
                finalText +=  `img/avatar${i.avatar}.jpg`
                return finalText
            },
            getName(i){
                return i.name
            },
            messageOrigin(messaggi){
                return messaggi.status =="sent" ? "contactMessage" : "userMessage"
            },
            getRealIndex(singlename){

                for (x = 0 ; x < this.contacts.length ; x++ ){
                    
                    if (this.getName(this.contacts[x]) == singlename ){
                        console.log(x)
                        return x 
                    }

                }
            },
            addMessage(testoMessaggio){
                let newDate = this.getCurrentTime;
                let newElement={
                    date : newDate(),
                    text: testoMessaggio,
                    status: "sent"

                }
                this.contacts[this.currentIndex].messages.push(newElement)
                this.newMessage = "";
                setTimeout(this.reciveMessage, 1000);
                


            },
            reciveMessage(){
                let newDate = this.getCurrentTime;
                let newElement={
                    date : newDate(),
                    text: "ok",
                    status: "recived"

                }
                this.contacts[this.currentIndex].messages.push(newElement)
            },
            getLastMessage(element){
                return element.messages[element.messages.length - 1].text 
            },
            getLastMessageAcces(element){
                return element.messages[element.messages.length - 1].date 
            }
        },
        
    })


app.mount(".background")



