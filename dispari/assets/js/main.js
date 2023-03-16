/* CONSEGNA: PARI E DISPARI
* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
* Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
* Dichiariamo chi ha vinto.
*/

let usercChoice = prompt("Scegli pari o dispari?").toLowerCase;

function randomNumber1_5() {
    return Math.floor((Math.random() * 5) + 1);
}