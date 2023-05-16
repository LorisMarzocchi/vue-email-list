/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

*/ 





const app = Vue.createApp({
    data() {
        return {

            randomMail: "",

        }
    },



    methods: {

        rndMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
              .then(serverResponse => this.randomMail = serverResponse.data.response);
      
          },
        
    },
    created() {
        this.rndMail();
      }

});
app.mount('#app');