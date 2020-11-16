// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data
// Altro possibile Bonus:
// gestire una funzione con un evento nel modo Vue.
var root = new Vue({
  el: '#root',
  data: {
    message: 'Cane Lupo Cecoslovacco',
    myClass: 'invisibile',
    immagine: "https://www.lifegate.it/app/uploads/primo-piano-faccia-clc-e1548079110876.jpg"
  },
  methods: {
    mostra: function () {
      if (this.myClass === 'invisibile') {
        this.myClass = 'visibile'
      } else {
        this.myClass = 'invisibile'
      }
    }
  }
});
