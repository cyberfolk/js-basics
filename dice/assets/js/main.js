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
const myDiceBoxEl = document.querySelector(".my_dice_box");
const aiDiceBoxEl = document.querySelector(".ai_dice_box");

btnRollEl.onclick = function () {
  rollDice();
};

function rollDice() {
  let myDice = Math.floor(Math.random() * 6 + 1);
  let aiDice = Math.floor(Math.random() * 6 + 1);
  myDiceBoxEl.innerText = myDice;
  aiDiceBoxEl.innerText = aiDice;

  if (myDice > aiDice) {
    winnerEl.innerText = "Hai vinto tu";
  } else if (myDice == aiDice) {
    winnerEl.innerText = "C'è stato un pareggio";
  } else {
    winnerEl.innerText = "Ha vinto l'AI";
  }

  console.log(myDice + " " + aiDice);

  for (var i = 1; i <= 6; i++) {
    myDiceEl.classList.remove("show-" + i);
    if (myDice === i) {
      myDiceEl.classList.add("show-" + i);
    }
  }

  for (var k = 1; k <= 6; k++) {
    aiDiceEl.classList.remove("show-" + k);
    if (aiDice === k) {
      aiDiceEl.classList.add("show-" + k);
    }
  }
}
