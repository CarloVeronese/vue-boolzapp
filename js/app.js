const { createApp } = Vue;
const { DateTime } = luxon;
createApp({
    data(){
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: DateTime.local(2020, 1, 10, 15, 30, 55),
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 50, 0),
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 16, 15, 22),
                            message: 'Tutto fatto!',
                            status: 'received',
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: DateTime.local(2020, 3, 20, 16, 30, 0),
                            message: 'Ciao come stai?',
                            status: 'sent',
                        },
                        {
                            date: DateTime.local(2020, 3, 20, 16, 30, 55),
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                        },
                        {
                            date: DateTime.local(2020, 3, 20, 16, 35, 0),
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: DateTime.local(2020, 3, 28, 10, 10, 40),
                            message: 'La Marianna va in campagna',
                            status: 'received',
                        },
                        {
                            date: DateTime.local(2020, 3, 28, 10, 20, 10),
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                        },
                        {
                            date: DateTime.local(2020, 3, 28, 16, 15, 22),
                            message: 'Ah scusa!',
                            status: 'received',
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: DateTime.local(2020, 1, 10, 15, 30, 55),
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 50, 0),
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: DateTime.local(2020, 1, 10, 15, 30, 55),
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 50, 0),
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: DateTime.local(2020, 1, 10, 15, 30, 55),
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 50, 0),
                            message: 'Non ancora',
                            status: 'received',
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 51, 0),
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: DateTime.local(2020, 1, 10, 15, 30, 55),
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 50, 0),
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: DateTime.local(2020, 1, 10, 15, 30, 55),
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 50, 0),
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 51, 0),
                            message: 'OK!!',
                            status: 'received',
                        }
                    ],
                }
            ],
            activeContactIndex: 0,
            activeContactMessageIndex: -1,
            searchString: '',
            newMessage: '',
        }
    },
    methods: {
        changeActiveContact(index) {
            this.activeContactIndex = index;
            this.activeContactMessageIndex = -1;
        },
        stringLowerCaseAndTrimmed(word){
            return word.toLowerCase().trim()
        },
        sendNewMessage() {
            if(this.newMessage != ''){
                    const newText = {
                        date: DateTime.now(),
                        message: this.newMessage,
                        status: 'sent',
                    }
                    this.contacts[this.activeContactIndex].messages.push(newText);
                    this.newMessage = '';
                    setTimeout(this.automaticResponse, 1000);
            }
        },
        automaticResponse() {
            const newResponse = {
                date: DateTime.now(),
                message: 'ok',
                status: 'received',
            }
            this.contacts[this.activeContactIndex].messages.push(newResponse);
        },
        showTextInfo(index) {
            if(this.activeContactMessageIndex === index) this.hideTextInfo();
            else this.activeContactMessageIndex = index
        },
        hideTextInfo() {
            this.activeContactMessageIndex = -1;
        },
        deleteMessage(index) {
            this.contacts[this.activeContactIndex].messages.splice(index, 1)
        },
        getLastText(index) {
            if(this.contacts[index].messages == 0) return ''
            messagesLength = this.contacts[index].messages.length
            return this.contacts[index].messages[messagesLength - 1].message
        },
        getLastTextTime(index) {
            if(this.contacts[index].messages == 0) return ''
            messagesLength = this.contacts[index].messages.length
            return this.getTimeFromDate(this.contacts[index].messages[messagesLength - 1].date)
        },
        getTimeFromDate(date) {
            const now = DateTime.now();
            if (date.toFormat('yyyy LLL dd') == now.toFormat('yyyy LLL dd')){
                return date.toFormat("HH ':' mm")
            }
            return date.toFormat("dd'/'LLL'/'yyyy ' ' HH ':' mm")
        }
    }
}).mount('#app')