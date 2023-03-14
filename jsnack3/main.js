/* Snack 3
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

const RANGE_INSERT = 10;
let sum = 0;

for (let I = 0; I < RANGE_INSERT; I++) {
  sum += Number(prompt("inseirici un numero"));
}

console.log(`La somma dei numeri inseriti è ${sum}`);
