// Dichiarazione app Vue;
const { createApp } = Vue;

createApp({
  data() {
    return {

      // Input vuoto per il salvataggio dell'input
      inputUser: '',

      //Class per sbarrare
      classe: '',

      // Lista degli oggetti
      toDoList: [
        
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

        // DEBUG
        console.log(this.index);
      }
    },
    //Rimuovere elementi dalla lista
    remove(index) { //Assegnazione dell'indice
      //Togliere l'elemento al clik utente su (X);
      this.toDoList.splice(index,1);
    },
    //Creare una funzione per sbarrare la voce di lista
    doneBar(index){ //Passare l'indice come argomento

      //Trovare l'elemento da sbarrare tramite Index
      this.toDoList[index].done = true;
    }
  }
}).mount('#app');
