/* Snack 1
 * Crea un array composto da 10 automobili.
 * Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
 * 
 * Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 * 
 * Infine stampa separatamente i 3 array.
 */

let cars = [
    {
        marca: "BMW",
        modello: "X5",
        alimentazione: "gpl"
    },
    {
        marca: "BMW",
        modello: "serie 3",
        alimentazione: "metano"
    },
    {
        marca: "Suzuki",
        modello: "Swift",
        alimentazione: "benzina"
    },
    {
        marca: "Suzuki",
        modello: "Vitara",
        alimentazione: "diesel"
    },
    {
        marca: "Citroen",
        modello: "C3",
        alimentazione: "diesel"
    },
    {
        marca: "Citroen",
        modello: "C4",
        alimentazione: "gpl"
    },
    {
        marca: "Ford",
        modello: "Mustang",
        alimentazione: "elettrico"
    },
    {
        marca: "Ford",
        modello: "Bronco",
        alimentazione: "metano"
    },
    {
        marca: "Ferrari",
        modello: "Roma",
        alimentazione: "benzina"
    },
    {
        marca: "Ferrari",
        modello: "Purosangue",
        alimentazione: "diesel"
    },
]

const benzina_cars = cars.filter(car => car.alimentazione === "benzina");
const diesel_cars = cars.filter(car => car.alimentazione === "diesel");
//const other_cars = cars.filter(car => (car.alimentazione != "diesel" && car.alimentazione != "benzina"));
let other_cars = cars.filter(car => !benzina_cars.includes(car));
other_cars = other_cars.filter(car => !diesel_cars.includes(car));


console.log(benzina_cars);
console.log(diesel_cars);
console.log(other_cars);

console.log(cars);


