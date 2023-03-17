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
const el_form = document.querySelector("form");
const el_difficulty = document.querySelector("#difficulty");
let difficulty;
let numCell;


el_form.addEventListener("submit", function (e) {
    e.preventDefault();

    /* Delete the previous grid to prevent the following ones from being added in cascade by clicking on play */
    el_row.innerHTML = "";

    /* Calculate difficulty and numCell from the select button in DOM */
    difficulty = readDifficulty(el_difficulty);
    numCell = difficulty * difficulty;

    createGrid();

});

// ===== FUNCTION ============================================= /
function readDifficulty() {
    return Number(el_difficulty.value);
}

function createGrid() {
    for (let i = 0; i < numCell; i++) {
        const el_cell = document.createElement("div");
        const cell_line = "ms_cell_line_" + difficulty;
        el_cell.classList.add("ms_cell", cell_line)
        el_cell.value = i + 1;
        el_cell.onclick = clickCell;

        el_row.append(el_cell);
    }
}

function clickCell() {
    this.classList.toggle("bg-primary")
    console.log(this.value)
}