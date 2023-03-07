/* Decrizione passaggi:
 * 1. Chiedi all'utente il suo nome,
 * 2. Poi chiedi il suo cognome,
 * 3. Poi chiedi il suo colore preferito
 * 4. Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23 */

// 1. Inserisco un prompt per chiedere all'utente il nome, salvandolo in una variabile
const name = prompt("Inserisci il tuo nome");
// Visualizzo a console.log il risultato del prompt
console.log(name);

// 2. Inserisco un prompt per chiedere all'utente il nome, salvandolo in una variabile
const surname = prompt("Inserisci il tuo cognome");
// Visualizzo a console.log il risultato del prompt
console.log(surname);

// 3. Inserisco un prompt per chiedere all'utente il nome, salvandolo in una variabile
const color = prompt("Inserisci il tuo colore preferito");
// Visualizzo a console.log il risultato del prompt
console.log(color);

// 3. Inserisco i dati per genrare la password
const pwd = `${name}${surname}${color}23`;
// Visualizzo a console.log la password insicurissima
console.log(color);

// seleziono e salvo in una varibaile l'elemento della dom con getElementById
const pwd_box = document.getElementById("pwd_box");
// Visualizzo a console.log il risultato di document.getElementById
console.log(pwd_box);

// 4. Visualizzo sulla pagina la password
pwd_box.innerHTML = pwd;
