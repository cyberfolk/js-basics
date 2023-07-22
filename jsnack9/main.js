/* Snack 1:
 * Crea un array di 10 oggetti che rappresentano una zucchina, 
 * indicando per ognuna varietà, peso e lunghezza. 
 * Calcola quanto pesano tutte le zucchine.  */

const zucchinis = [
  {
    variety: "A",
    weight: 1,
    length: 20,
  },
  {
    variety: "B",
    weight: 2,
    length: 20,
  },
  {
    variety: "A",
    weight: 3,
    length: 20,
  }, {
    variety: "C",
    weight: 4,
    length: 20,
  }, {
    variety: "D",
    weight: 5,
    length: 20,
  }, {
    variety: "D",
    weight: 6,
    length: 20,
  }
];

let zucchinis_weight = [];
let sum = 0;

zucchinis.forEach(zucchini => {
  sum += zucchini.weight
})

console.log(sum);

/* function sum(...params) {
  let sum = 0;
  params.forEach(param => {
    sum += param
  })
  return sum;
} */














