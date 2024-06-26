//Dichiarazione app Vue;
const { createApp } = Vue;

createApp({
  data() {
    return {
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
  }
}).mount('#app');