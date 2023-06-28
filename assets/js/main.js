//#region Definisco le costanti fornite dal testo dell'esercizio ====
const EURO_AT_KM = 0.21;
const AGE_MIN = 18;
const AGE_MIN_DISCOUNT = 0.2;
const AGE_MAX = 65;
const AGE_MAX_DISCOUNT = 0.4;
//#endregion ========================================================

//#region Prelevo Elementi da HTML e li visualizzo a console ========
const id_inputE = getAndLogElement("id_input");
const id_outputE = getAndLogElement("id_output");
const km_inputE = getAndLogElement("km_input");
const age_selectE = getAndLogElement("age_select");
const offer_boxE = getAndLogElement("offer_box");
const ticket_boxE = getAndLogElement("ticket_box");
const cp_boxE = getAndLogElement("cp_box");
const carriage_boxE = getAndLogElement("carriage_box");
//#endregion ========================================================

const generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click", function () {
  // Prelevo il valore da id_inputE e lo visualizzo sia su console che sull'apposito elemento HTML
  const id = id_inputE.value;
  console.log(`id = ${id}`);
  id_outputE.innerHTML = id;

  // Prelevo il valore da km_set_boxE e lo visualizzo a console
  const km = km_inputE.value;
  console.log(`km = ${km}`);

  // Prelevo il valore da age_selectE e lo visualizzo a console
  const age = age_selectE.value;
  console.log(`age = ${age}`);

  // Calcolo quanto dovrebbe costare il biglietto a prezzo intero e lo visualizzo a console
  let ticket = km * EURO_AT_KM;
  console.log(`ticket_bill = ${ticket}€`);

  // Confronto l'eta dell'utente e applico gli sconti
  console.log(`Fase di valutazione sconti`);
  if (age < AGE_MIN) {
    ticket = ticket * (1 - AGE_MIN_DISCOUNT);
    console.log(`age: ${age} < 18 ---> Applico Sconto del 20%`);
    offer_boxE.innerHTML = `Biglietto Under ${AGE_MIN}`;
  } else if (age > AGE_MAX) {
    ticket = ticket * (1 - AGE_MAX_DISCOUNT);
    console.log(`age: ${age} > 65 ---> Applico Sconto del 40%`);
    offer_boxE.innerHTML = `Biglietto Over ${AGE_MAX}`;
  } else {
    offer_boxE.innerHTML = `Biglietto Standard`;
  }

  // Visualizzo il prezzo finale del biglietto sia su console che sull'apposito elemento HTML
  console.log(`ticket NOW = ${ticket.toFixed(2)}€`);
  ticket_boxE.innerHTML = ticket.toFixed(2) + "€";

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
  ticket_boxE.innerHTML = "";
  cp_boxE.innerHTML = "";
  carriage_boxE.innerHTML = "";
});

//region Function ===================================================
function getAndLogElement(id) {
  const elementE = document.getElementById(id);
  console.log(id + "=" + elementE);
  return elementE;
}
//#endregion ========================================================
