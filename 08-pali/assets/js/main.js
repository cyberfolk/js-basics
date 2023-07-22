const word = prompt("Enter a word");
if (isPalindrome(word)) {
    console.log(`${word} è palindroma`);
} else {
    console.log(`${word} NON è palindroma`);
}

function isPalindrome(word) {
    let i = 0;
    /* MIDDLE_WORD is to avoid double-checking the same couple words with the loop. */
    /* Math.floor was inserted to isolate and discard the central character of odd words */
    const MIDDLE_WORD = Math.floor(word.length / 2);

    /* Exit the loop only when you compare two different characters or finish parsing the word */
    while (word[i] === word[word.length - i - 1] && i < MIDDLE_WORD) {
        i++;
    }

    /* If I exited the loop before finishing parsing the word, it means that I found two different characters. */
    /* If i parsed the entire word mean tha the word is a palindrome */
    return ((i === MIDDLE_WORD) ? true : false);
}
