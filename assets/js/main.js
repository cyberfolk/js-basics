/* L'utente dovrà compilare i seguenti campi
 * - 1 Nome e Cognome
 * - 2 Il numero di km che vuole percorrere
 * - 3 L'età del passeggero.
 * Sulla base di queste informazioni il prgramma dovrà
 * Calcolare il prezzo totale del viaggio, secondo queste regole:
 * - Il prezzo del biglietto è definito in base ai km (0.21 € al km)
 * - Va applicato uno sconto del 20% per i minorenni
 * - Va applicato uno sconto del 40% per gli over 65.
 * L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 * Creare 2 bottini
 * - Uno per calcolare e visualizzare i dati relativi al biglietto
 * - Uno per cancellare i dati nei vari campi
 */

//#region Definisco le costanti fornite dal testo dell'esercizio ====
const EURO_AT_KM = 0.21;
const AGE_MIN = 18;
const AGE_MIN_DISCOUNT = 0.2;
const AGE_MAX = 65;
const AGE_MAX_DISCOUNT = 0.4;
//#endregion ========================================================

//#region Prelevo Elementi da HTML e li visualizzo a console ========
const id_inputE = document.getElementById("id_input");
console.log(`id_input = ${id_inputE}`);

const id_outputE = document.getElementById("id_output");
console.log(`id_outputE = ${id_outputE}`);

const km_inputE = document.getElementById("km_input");
console.log(`km_inputE = ${km_inputE}`);

const age_selectE = document.getElementById("age_select");
console.log(`age_selectE = ${age_selectE}`);

const offer_boxE = document.getElementById("offer_box");
console.log(`offer_boxE = ${offer_boxE}`);

const ticket_bill_boxE = document.getElementById("ticket_bill_box");
console.log(`ticket_bill_boxE = ${ticket_bill_boxE}`);

const cp_boxE = document.getElementById("cp_box");
console.log(`ticket_bill_boxE = ${cp_boxE}`);

const carriage_boxE = document.getElementById("carriage_box");
console.log(`carriage_boxE = ${carriage_boxE}`);
//#endregion ========================================================

const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", function () {
  // Prelevo il valore da id_inputE e lo visualizzo sia su console che sull'apposito elemento HTML
  const id = id_inputE.value;
  console.log(`id_input = ${id_input}`);
  id_outputE.innerHTML = id;

  // Prelevo il valore da km_set_boxE e lo visualizzo a console
  const km = km_inputE.value;
  console.log(`km = ${km}`);

  // Prelevo il valore da age_selectE e lo visualizzo a console
  const age = age_selectE.value;
  console.log(`age = ${age}`);

  // Calcolo quanto dovrebbe costare il biglietto a prezzo intero e lo visualizzo a console
  let ticket_bill = km * EURO_AT_KM;
  console.log(`ticket_bill = ${ticket_bill}€`);

  // Confronto l'eta dell'utente e applico gli sconti
  console.log(`Fase di valutazione sconti`);
  if (age < AGE_MIN) {
    ticket_bill = ticket_bill * (1 - AGE_MIN_DISCOUNT);
    console.log(`age: ${age} < 18 ---> Applico Sconto del 20%`);
    offer_boxE.innerHTML = `Biglietto Under ${AGE_MIN}`;
  } else if (age > AGE_MAX) {
    ticket_bill = ticket_bill * (1 - AGE_MAX_DISCOUNT);
    console.log(`age: ${age} > 65 ---> Applico Sconto del 40%`);
    offer_boxE.innerHTML = `Biglietto Over ${AGE_MAX}`;
  } else {
    offer_boxE.innerHTML = `Biglietto Standard`;
  }

  // Visualizzo il prezzo finale del biglietto sia su console che sull'apposito elemento HTML
  console.log(`ticket_bill NOW = ${ticket_bill.toFixed(2)}€`);
  ticket_bill_boxE.innerHTML = ticket_bill.toFixed(2) + "€";

  // Genero random il codice_cp e lo visualizzo sia su console che sull'apposito elemento HTML
  const cp = Math.floor(Math.random() * 100000);
  console.log(`cp = ${cp}`);
  cp_boxE.innerHTML = cp;

  // Genero random il numero della carrozza e lo visualizzo sia su console che sull'apposito elemento HTML
  const carriage = Math.floor(Math.random() * 10 + 1);
  console.log(`carriage = ${carriage}`);
  carriage_boxE.innerHTML = carriage;
});

const cancelBtn = document.getElementById("cancel");
cancelBtn.addEventListener("click", function () {
  id_inputE.value = "";
  id_outputE.innerHTML = "";
  km_inputE.value = "";
  age_selectE.value = "";
  offer_boxE.innerHTML = "";
  ticket_bill_boxE.innerHTML = "";
  cp_boxE.innerHTML = "";
  carriage_boxE.innerHTML = "";
});
