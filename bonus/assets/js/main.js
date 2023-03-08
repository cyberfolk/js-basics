/* Il programma dovrà chiedere all'utente
 * 1 Il numero di km che vuole percorrere
 * 2 L'età del passeggero.
 * Sulla base di queste informazioni il prgramma dovrà
 * 3 Calcolare il prezzo totale del viaggio, secondo queste regole:
 * - Il prezzo del biglietto è definito in base ai km (0.21 € al km)
 * - Va applicato uno sconto del 20% per i minorenni
 * - Va applicato uno sconto del 40% per gli over 65.
 * 4 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

// Definisco le costanti fornite dal testo dell'esercizio
const EURO_AT_KM = 0.21;
const AGE_MIN = 18;
const AGE_MIN_DISCOUNT = 0.2;
const AGE_MAX = 65;
const AGE_MAX_DISCOUNT = 0.4;

// 1. Inserisco un prompt per chiedere all'utente il numero di km che vuole percorrere, salvandolo in una variabile
const kmSet = prompt("Quanti km vuoi percorrere");
// Visualizzo a console.log il risultato del prompt
console.log(`kmSet = ${kmSet}`);
// Visualizzo sulla pagina kmSet nel suo apposito elemento della dom
document.getElementById("kmSet_box").innerHTML = kmSet;

// 2. Inserisco un prompt per chiedere all'utente l'età, salvandolo in una variabile
const ageUser = prompt("Quanti anni hai?");
// Visualizzo a console.log il risultato del prompt
console.log(`ageUser = ${ageUser}`);
// Visualizzo sulla pagina ageUser nel suo apposito elemento della dom
document.getElementById("ageUser_box").innerHTML = ageUser;

// Calcolo quanto dovrebbe costare il biglietto a prezzo intero
let ticketBill = kmSet * EURO_AT_KM;
// Visualizzo a console.log il risultato del Calcolo
console.log(`ticketBill = ${ticketBill}€`);
// Visualizzo sulla pagina ticketBill nel suo apposito elemento della dom
document.getElementById("ticketBill_box").innerHTML = ticketBill.toFixed(2) + "€";

// Confronto l'eta dell'utente d applico gli sconti gli sconti
console.log(`Fase di valutazione sconti`);
if (ageUser < AGE_MIN) {
  ticketBill = ticketBill * (1 - AGE_MIN_DISCOUNT);
  console.log(`ageUser: ${ageUser} < 18 ---> Applico Sconto del 20%`);
} else if (ageUser > AGE_MAX) {
  ticketBill = ticketBill * (1 - AGE_MAX_DISCOUNT);
  console.log(`ageUser: ${ageUser} > 65 ---> Applico Sconto del 40%`);
}

// Visualizzo a console.log il prezzo finale del biglietto
console.log(`ticketBill = ${ticketBill.toFixed(2)}€`);
// Visualizzo sulla pagina ticketBill nel suo apposito elemento della dom
document.getElementById("ticketBill_discount_box").innerHTML = ticketBill.toFixed(2) + "€";
