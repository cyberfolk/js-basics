// 1. Inserisco un prompt per chiedere all'utente il nome, salvandolo in una variabile
const userName = prompt("Inserisci il tuo nome");
// Visualizzo a console.log il risultato del prompt
console.log(`userName = ${userName}`);

// 2. Inserisco un prompt per chiedere all'utente il nome, salvandolo in una variabile
const userSurname = prompt("Inserisci il tuo cognome");
// Visualizzo a console.log il risultato del prompt
console.log(`userName = ${userSurname}`);

// 3. Inserisco un prompt per chiedere all'utente il nome, salvandolo in una variabile
const color = prompt("Inserisci il tuo colore preferito");
// Visualizzo a console.log il risultato del prompt
console.log(`color = ${color}`);

// 3. Inserisco i dati per genrare la password
const pwd = `${userName}${userSurname}${color}23`;
// Visualizzo a console.log la password insicurissima
console.log(`pwd = ${pwd}`);

// Seleziono e salvo in una varibaile l'elemento della dom con getElementById
const pwd_box = document.getElementById("pwd_box");
// Visualizzo a console.log il risultato di document.getElementById
console.log(`pwd_box = ${pwd_box}`);

// 4. Visualizzo sulla pagina la password
pwd_box.innerHTML = pwd;
