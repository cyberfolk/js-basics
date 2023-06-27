/* Snack5
 * Scrivi una funzione che accetti tre argomenti:
 * un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
 * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b"
 */

const students = [
  "andrea",
  "luca",
  "mattia",
  "lorenzo",
  "mario",
  "alessia",
  "martina"
];

console.log(showContent(students, 1, 4));

function showContent(array, a, b) {
  if (a < 0 || b < 0) {
    return "Entrambi i parametri devono essere positivi"
  }

  if (a >= b) {
    return "Il parametro a deve essere più piccolo di b"
  }

  if (b > array.lenght) {
    return "Il parametro b deve essere grande al massimo quanto il numero di elementi dell'array"
  }

  let result = array.slice(a, b + 1);

  return result;
}






