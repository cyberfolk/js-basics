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
    let i = 0;
    const MIDDLE_WORD = Math.floor(word.length / 2);

    while (word[i] === word[word.length - i - 1] && i < MIDDLE_WORD) {
        i++;
    }

    return ((i === MIDDLE_WORD) ? true : false);
}
