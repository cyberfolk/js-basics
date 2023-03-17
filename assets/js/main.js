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
const el_btnPlay = document.querySelector("#btn_play");
const el_difficulty = document.querySelector("#difficulty");

el_btnPlay.addEventListener("click", function (e) {
    /* Calculate difficulty and numCell from the select button in DOM */
    let difficulty = readDifficulty(el_difficulty);
    let numCell = calculateNumCell(difficulty)

    /* Delete the previous grid to prevent the following ones from being added in cascade by clicking on play */
    el_row.innerHTML = "";

    createGrid(numCell, difficulty);
});

// ===== FUNCTION ============================================= /
function readDifficulty() {
    return Number(el_difficulty.value);
}

function calculateNumCell(difficulty) {
    /* This function allow to change the logic of calculate the number cell */
    return difficulty * difficulty;
}

function createGrid(numCell, difficulty) {
    for (let i = 0; i < numCell; i++) {
        const el_cell = createCell(i, difficulty)
        el_row.append(el_cell);
    }
}

function createCell(index, difficulty) {
    const el_cell = document.createElement("div");
    el_cell.classList.add("ms_cell", `ms_line_${difficulty}`)
    el_cell.value = index + 1;
    el_cell.onclick = clickCell;
    return el_cell;
}

function clickCell() {
    this.classList.toggle("bg-primary")
    console.log(this.value)
}