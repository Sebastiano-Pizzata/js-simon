// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, 
// nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// **NOTA**: 
// non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.


const istruzioni = document.getElementById("instructions")
const lista = document.getElementById("numbers-list")
const form = document.querySelector(".d-none")

const messaggio = document.getElementById("message")
const numbers = []

function randomNumbers(min,max){
       return Math.floor(Math.random() * max) + min;
}

 for (let i = 0; numbers.length < 5; i++) {

    let numeroRandom = randomNumbers(1,50)

    if(!(numbers.includes(numeroRandom))){
        numbers.push(numeroRandom)
    }
    console.log(numbers)
 }


 for (let i = 0; i < numbers.length; i++) {
    lista.innerHTML += `<li>${numbers[i]}</li>`;
 }



// timer
const countdown = document.getElementById("countdown")
let counter = 5

const setTimer = setInterval( cloack, 1000 );

function cloack(){
    countdown.innerHTML = counter--
    if(counter < 0){
        clearInterval(setTimer)
        istruzioni.classList.add("d-none");
        form.classList.remove ("d-none");
        lista.classList.add("d-none")
    } 
}

// button
const btn = document.querySelector(".btn-primary");
const inputs = document.querySelectorAll(".form-control")
const arrayUtente = [];

btn.addEventListener("click", function(event){
        event.preventDefault()
        for(let i = 0; i < inputs.length; i++){
                if(numbers.includes(parseInt(inputs[i].value))){
                    arrayUtente.push(inputs[i].value)
                }
        }
        messaggio.innerHTML = `Complimenti hai indovinato : ${arrayUtente.length} e sono ${arrayUtente.join("-")}`

        console.log(arrayUtente)
})




