/* CONSEGNA: PALINDROMO
 * Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
 */

const word = prompt("Enter a word");
if (isPalindrome(word)) {
    console.log(`${word} è palindroma`);
} else {
    console.log(`${word} NON è palindroma`);
}

function isPalindrome(word) {
    let check = false;
    let i = 0;
    const MIDDLE_WORD = Math.floor(word.length / 2);
    for (let i = 0; i < MIDDLE_WORD; i++) {
        console.log(`${word[i]} - ${word[word.length - i - 1]}`);

        if (word[i] === word[word.length - i - 1]) {
            console.log("UGUALIIIII");


        }
    }

    return check;
}
