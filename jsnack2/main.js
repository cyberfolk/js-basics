/* SNACK 2:
 * L’utente inserisce due parole in successione, con due prompt.
 * Il software stampa prima la parola più corta, poi la parola più lunga. */

const str1 = prompt("Inserisci la prima stringa");
const str2 = prompt("Inserisci seconda stringa numero");

if (str1.length > str2.length) {
  console.log(`La s tringa "${str1}" è più lunga della stringa "${str2}"`);
} else if (str1.length == str2.length) {
  console.log(`La s tringa "${str1}" è lunga come la stringa "${str2}"`);
} else {
  console.log(`La s tringa "${str2}" è più lunga della stringa "${str1}"`);
}
