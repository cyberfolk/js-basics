/* 
* GIOCO DEI DADI
* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
* Stabilire il vincitore, in base a chi fa il punteggio più alto.
* Prima di partire a scrivere codice poniamoci qualche domanda:
* Che ci sia un array da qualche parte?
* Se dobbiamo confrontare qualcosa che "cosa" ci serve?

* CONSIGLI DEL GIORNO:
* scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
* javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
* si ma noi cosa vogliamo fare?
* torniamo a scrivere in italiano
* proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
* Buon divertimento e confermate lettura come al solito :baby-yoda:
*/

const btnRollEl = document.querySelector("#btn_roll");
const winnerEl = document.querySelector("#winner");
const myDiceEl = document.querySelector("#my_dice");
const aiDiceEl = document.querySelector("#ai_dice");

btnRollEl.addEventListener("click", function () {
  let myDice = Math.floor(Math.random() * 6 + 1);
  let aiDice = Math.floor(Math.random() * 6 + 1);
  myDiceEl.innerText = myDice;
  aiDiceEl.innerText = aiDice;

  if (myDice > aiDice) {
    winnerEl.innerText = "Hai vinto tu";
  } else if (myDice == aiDice) {
    winnerEl.innerText = "C'è stato un pareggio";
  } else {
    winnerEl.innerText = "Ha vinto l'AI";
  }
});
