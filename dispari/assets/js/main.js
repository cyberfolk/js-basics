/* CONSEGNA: PARI E DISPARI
* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
* Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
* Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
* Dichiariamo chi ha vinto.
*/

// ===== VARIABLE DECLARATION ============================================================= //
let userChoice = prompt("Scegli pari o dispari?").toUpperCase();
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
let aiNumber = randomNumber1_5();

// ===== MAIN ============================================================================= //
check_userChoice(userChoice);
check_userNumber(userNumber);
let restChoice = findRest(userChoice);
let winner = isUserWinner(restChoice, userNumber, aiNumber)


// ===== OUTPUT =========================================================================== //
console.log(`L'utente ha scelto ${userNumber}`);
console.log(`L'utente ha scelto "${userChoice}" --> %2 = ${restChoice}`);
console.log(`Il PC ha scelto ${aiNumber}`);
console.log(`Somma = ${userNumber} + ${aiNumber} = ${aiNumber + userNumber}`);

if (winner) {
    console.log(`La somma è "${userChoice}" quindi VINCE UTENTE`);
} else {
    console.log(`La somma NON è "${userChoice}" quindi VINCE PC`);
}

// ===== FUNCTION ========================================================================= //
function check_userChoice(userChoice) {
    while (userChoice !== 'PARI' && userChoice !== 'DISPARI') {
        userChoice = prompt(`Prompt errato. Reinserisci pari o dispari?`).toLowerCase();
    }
}

function check_userNumber(userNumber) {
    while (userNumber < 1 || userNumber > 5) {
        userNumber = prompt(`Prompt errato. Reinserisci un numero da 1 a 5?`);
    }
}

function randomNumber1_5() {
    return Math.floor((Math.random() * 5) + 1);
}

function findRest(userChoice) {
    if (userChoice == 'DISPARI') {
        return 1;
    } else {
        return 0;
    }
}

function isUserWinner(restChoice, userNumber, aiNumber) {
    const sumNumber = userNumber + aiNumber;

    if (sumNumber % 2 == restChoice) {
        return true;
    } else {
        return false;
    }
}
