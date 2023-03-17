/* CONSEGNA: PALINDROMO
 * Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
 */

/* CONSEGNA
 * 1. L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
 * 2. Ogni cella ha un numero progressivo, da 1 a 100.
 *    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
 * 3. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
 * 
 * BONUS
 * Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
 * con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
 * con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
 * con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
 */


const el_row = document.querySelector(".row");

let numCell = 49;

// ===== POPOLATION LOOP ================================== /
for (let i = 0; i < numCell; i++) {
    const el_cell = document.createElement("div");
    el_cell.classList.add("ms_cell", "ms_cell_line_7")
    el_cell.value = i + 1;

    el_cell.addEventListener("click", function () {
        el_cell.classList.toggle("bg-primary")
        console.log(el_cell.value)
    })

    el_row.append(el_cell);
}
