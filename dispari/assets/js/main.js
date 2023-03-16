/* CONSEGNA: PARI E DISPARI
* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
* Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
* Dichiariamo chi ha vinto.
*/

let userChoice = prompt("Scegli pari o dispari?").toLowerCase();
let userNumber = Number(prompt("Inserisci un numero da uno a 5"));
let aiNumber = randomNumber1_5();

if (isUserWinner(userChoice, userNumber, aiNumber)) {
    console.log(`VINCE UTENTE. Utente sceglie ${userChoice}. Numero Utente ${userNumber}. Numero PC ${aiNumber}`);
} else {
    console.log(`VINCE PC. Utente sceglie ${userChoice}. Numero Utente ${userNumber}. Numero PC ${aiNumber}`);
}

function randomNumber1_5() {
    return Math.floor((Math.random() * 5) + 1);
}

function isUserWinner(userChoice, userNumber, aiNumber) {
    let restChoice = 0
    const sumNumber = userNumber + aiNumber;
    console.log(`la somma dei numeri è ${sumNumber}`);
    if (userChoice == 'dispari') {
        restChoice = 1;
    }
    console.log(`L'utente ha scelto ${userChoice} quindi il resto è ${restChoice}`);

    if (sumNumber % 2 == restChoice) {
        return true;
    } else {
        return false;
    }
}