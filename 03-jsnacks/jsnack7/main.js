/* Snack 2
 * A partire da un array di stringhe, 
 * crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
 * 
 * Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']
 */

let names = ['pippo', 'PLUTO', 'Paperino']

const justify_names = names.map(name => name.charAt(0).toUpperCase() + name.toLowerCase().slice(1));

console.log(justify_names);



