/* Il programma dovrà chiedere all'utente
 * 2 Il numero di km che vuole percorrere
 * 3 L'età del passeggero.
 * Sulla base di queste informazioni il prgramma dovrà
 * 4 Calcolare il prezzo totale del viaggio, secondo queste regole:
 * - Il prezzo del biglietto è definito in base ai km (0.21 € al km)
 * - Va applicato uno sconto del 20% per i minorenni
 * - Va applicato uno sconto del 40% per gli over 65.
 * 5 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

// Definisco le costanti fornite dal testo dell'esercizio
const EURO_AT_KM = 0.21;
const AGE_MIN = 18;
const AGE_MIN_DISCOUNT = 0.2;
const AGE_MAX = 65;
const AGE_MAX_DISCOUNT = 0.4;

// 1. Inserisco un prompt per chiedere all'utente il suo nome e cognome, salvandolo in una variabile
const id_user = prompt("Inserire nome e cognome utente");
// Visualizzo a console.log il risultato del prompt
console.log(`id_user = ${id_user}km`);
// Visualizzo sulla pagina kmSet nel suo apposito elemento della dom
document.getElementById("id_user_box1").innerHTML = id_user;
document.getElementById("id_user_box2").innerHTML = id_user;

// 2. Inserisco un prompt per chiedere all'utente il numero di km che vuole percorrere, salvandolo in una variabile
const kmSet = prompt("Quanti km vuoi percorrere");
// Visualizzo a console.log il risultato del prompt
console.log(`kmSet = ${kmSet}km`);
// Visualizzo sulla pagina kmSet nel suo apposito elemento della dom
document.getElementById("kmSet_box").innerHTML = kmSet + "km";

// 3. Inserisco un prompt per chiedere all'utente l'età, salvandolo in una variabile
const age_user = prompt("Quanti anni hai?");
// Visualizzo a console.log il risultato del prompt
console.log(`age_user = ${age_user}`);
// Visualizzo sulla pagina ageUser nel suo apposito elemento della dom
document.getElementById("age_user_box").innerHTML = age_user + " anni";

// Calcolo quanto dovrebbe costare il biglietto a prezzo intero
let ticket_bill = kmSet * EURO_AT_KM;
// Visualizzo a console.log il risultato del Calcolo
console.log(`ticket_bill = ${ticket_bill}€`);
// Visualizzo sulla pagina ticket_bill nel suo apposito elemento della dom
document.getElementById("ticket_bill_box").innerHTML = ticket_bill.toFixed(2) + "€";

// Confronto l'eta dell'utente d applico gli sconti gli sconti
console.log(`Fase di valutazione sconti`);
if (age_user < AGE_MIN) {
  ticket_bill = ticket_bill * (1 - AGE_MIN_DISCOUNT);
  console.log(`age_user: ${age_user} < 18 ---> Applico Sconto del 20%`);
  document.getElementById("offer_box").innerHTML = `Biglietto Under ${AGE_MIN}`;
} else if (age_user > AGE_MAX) {
  ticket_bill = ticket_bill * (1 - AGE_MAX_DISCOUNT);
  console.log(`age_user: ${age_user} > 65 ---> Applico Sconto del 40%`);
  document.getElementById("offer_box").innerHTML = `Biglietto Over ${AGE_MAX}`;
}

// Visualizzo a console.log il prezzo finale del biglietto
console.log(`ticket_bill = ${ticket_bill.toFixed(2)}€`);
