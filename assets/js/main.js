// chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao 'nome utente'"

// inserisco un prompt per chiedere all'utente il nome, salvandolo in una variabile
let username = prompt("inserisci il tuo nome");
// console.log il risultato del prompt
console.log(username);
// inserisco un h1 nell'html

// seleziono e salvo in una varibaile un elemento della dom con getElementById
let nameElement = document.getElementById("name");
console.log(nameElement);
// assegno all'innerHtml un nuovo valore
nameElement.innerHTML = `Ciao ${username}`;
