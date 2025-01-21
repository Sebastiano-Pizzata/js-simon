// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, 
// nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// **NOTA**: 
// non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.


// numeri random
const istruzioni = document.getElementById("instructions")
const lista = document.getElementById("numbers-list")
const form = document.querySelector(".d-none")

const messaggio = document.getElementById("message")
let numbers = []

for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor((Math.random() * 50) + 1));
 }

lista.innerHTML = numbers;


// timer
const countdown = document.getElementById("countdown")
let counter = 10

const setTimer = setInterval( cloack, 1000 );

function cloack(){
    countdown.innerHTML = counter--
    if(counter === 0){
        clearInterval(setTimer)
        istruzioni.remove("Memorizza i numeri entro il tempo limite!");
        lista.remove();
        countdown.remove();
        form.classList.remove ("d-none");
        form.classList.add ("d-block");
    } 
}


const input = document.querySelectorAll("form-control")


