// ===== VARIABLE DECLARATION ============================================================= //
let userChoice = prompt("Scegli pari o dispari?").toUpperCase();
let userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
let aiNumber = randomNumber1_5();

// ===== MAIN ============================================================================= //
userChoice = check_userChoice(userChoice);
userNumber = check_userNumber(userNumber);
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
        userChoice = prompt(`Prompt errato. Reinserisci pari o dispari?`).toUpperCase();
    }
    return userChoice;
}

function check_userNumber(userNumber) {
    while (userNumber < 1 || userNumber > 5) {
        userNumber = parseInt(prompt(`Prompt errato. Reinserisci un numero da 1 a 5?`));
    }
    return userNumber;
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
    console.log("funzione " + sumNumber);
    if (sumNumber % 2 == restChoice) {
        return true;
    } else {
        return false;
    }
}
