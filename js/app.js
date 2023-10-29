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
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 50, 0),
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 16, 15, 22),
                            message: 'Tutto fatto!',
                            status: 'received',
                            textInfoStatus: false
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
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 3, 20, 16, 30, 55),
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 3, 20, 16, 35, 0),
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            textInfoStatus: false
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
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 3, 28, 10, 20, 10),
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 3, 28, 16, 15, 22),
                            message: 'Ah scusa!',
                            status: 'received',
                            textInfoStatus: false
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
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 50, 0),
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            textInfoStatus: false
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
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 50, 0),
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            textInfoStatus: false
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
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 50, 0),
                            message: 'Non ancora',
                            status: 'received',
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 51, 0),
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            textInfoStatus: false
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
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 50, 0),
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            textInfoStatus: false
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
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 50, 0),
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            textInfoStatus: false
                        },
                        {
                            date: DateTime.local(2020, 1, 10, 15, 51, 0),
                            message: 'OK!!',
                            status: 'received',
                            textInfoStatus: false
                        }
                    ],
                }
            ],
            activeContactIndex: 0,
            searchString: '',
            newMessage: '',
        }
    },
    methods: {
        changeActiveContact(index) {
            this.activeContactIndex = index
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
                        textInfoStatus: false
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
                textInfoStatus: false
            }
            this.contacts[this.activeContactIndex].messages.push(newResponse);
        },
        showTextInfo(index) {
            if(!this.contacts[this.activeContactIndex].messages[index].textInfoStatus) {
                this.hideTextInfo();
            }
            this.contacts[this.activeContactIndex].messages[index].textInfoStatus = !this.contacts[this.activeContactIndex].messages[index].textInfoStatus;
        },
        hideTextInfo() {
            contactsNumber = this.contacts.length;
            for(let i = 0; i < contactsNumber; i++) {
                messagesNumber = this.contacts[i].messages.length
                for(let j = 0; j < messagesNumber; j++) {
                    this.contacts[i].messages[j].textInfoStatus = false
                }
            }
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
            return date.toFormat("HH ':' mm")
        }
    }
}).mount('#app')