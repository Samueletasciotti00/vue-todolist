// Dichiarazione app Vue;
const { createApp } = Vue;

createApp({
  data() {
    return {

      // Input vuoto per il salvataggio dell'input
      inputUser: '',

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
      // Innestare alla lista
      if(this.inputUser.trim() !== '') { // Verifica che l'input non sia vuoto
        this.toDoList.unshift({
          text: this.inputUser,
          done: false
        });
        this.inputUser = ''; // Resetta l'input dopo aver aggiunto l'elemento
      }
    }
  }
}).mount('#app');
