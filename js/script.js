const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      toDoList: [
        {
          text: "fare la spesa",
          done: false,
        },
        {
          text: "dare da mangiare al cane",
          done: false,
        },
        {
          text: "pulire il giardino",
          done: false,
        },
        {
          text: "andare in banca",
          done: false,
        },
      ],
    };
  },
  computed: {},
  methods: {
    deleteTask(targetIndex) {},
  },
}).mount("#root");

/*
MILESTONE 1

Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2

Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3

Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/
