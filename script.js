//Dichiarazione app Vue;
const { createApp } = Vue;

createApp({
  data() {
    return {

      // Input vuoto per il salvataggio dell'input
      inputUser: 'as',

      // Lista degli oggetti
      toDoList: [
        {
            text: 'TestTest',
            done: false
        },
        {
            text: 'TestTest',
            done: false
        },
        {
            text: 'TestTest',
            done: false
        }
      ]
    }
  },
  // Funzioni per inserimento nella lista
  methods: {
    plus() {
      //Innestare alla lista
      console.log(this.inputUser);
    }
  }
}).mount('#app');

