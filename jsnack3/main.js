/* SNACK 3 ........................................................................................
 * Il software deve chiedere per 10 volte all’utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti. */

/* const RANGE_INSERT = 10;
  let sum = 0;
  let numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < RANGE_INSERT; i++) {
    let num = Number(prompt("inseirici un numero"));
    if (isNaN(num)) {
      num = 0;
      alert("Hai inseito qualcosa che non è un numero, la conteremo 0");
    }
    numbers[i] = num;
    sum += num;
  }

  for (let i = 0; i < numbers.length; i++) {
    console.log(`Lo ${i}-esimo numero inserito è ${numbers[i]}`);
  }

  console.log(`La somma dei numeri inseriti è ${sum}`); */

/* SNACK 3 ........................................................................................
 * Rifare con WHILE LOOP:  Il software deve chiedere per 10 volte all’utente di inserire un numero.
 * Il programma stampa la somma di tutti i numeri inseriti. */

const RANGE_INSERT = 10;
let sum = 0;
let i = 0;

while (i < RANGE_INSERT) {
  let num = Number(prompt(`Inseirici un numero. (${i + 1}/${RANGE_INSERT})`));
  while (isNaN(num)) {
    alert("Non hai inserito un numero, riprova");
    num = Number(prompt(`Inseirici un numero. (${i + 1}/${RANGE_INSERT})`));
  }
  sum += num;
  i++;
}
console.log(`La somma dei numeri inseriti è ${sum}`);
