/* Snack 1 Blocco 1
 * L’utente inserisce due numeri in successione, con due prompt.
 * Il software stampa il maggiore. */

const num1 = Number(prompt("Inserisci il primo numero"));
const num2 = Number(prompt("Inserisci il primo numero"));

if (num1 > num2) {
  console.log(`num1 > num2: ${num1}>${num2}`);
} else if (num1 == num2) {
  console.log(`num1 == num2: ${num1}==${num2}`);
} else {
  console.log(`num1 < num2: ${num1}<${num2}`);
}
