// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const app = new Vue(
    {
        el: "#app",
        data: {
            text: 'Ciao, piacere di averti nella mia pagina',
        }
    }

);

// BONUS
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
const img = new Vue(
    {
        el: "#img",
        data: {
            Image: 'https://www.netfarm.it/web/image/4973/vuejs.png',
        }
    }

);