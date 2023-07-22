/* Snack 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

let numbers = [];
const ITERATION = 6;

/* For loop ............................. */
/* for (let i = 0; i < ITERATION; i++) {
  let num = Number(prompt(`Inseirici un numero. (${i + 1}/${ITERATION})`));
  if (num % 2 === 1) {
    numbers.push(num);
  }
} */

/* While loop ............................ */
let i = 0;
while (i < ITERATION) {
  let num = Number(prompt(`Inseirici un numero. (${i + 1}/${ITERATION})`));
  if (num % 2 === 1) {
    numbers.push(num);
  }
  i++;
}

console.log(numbers);
