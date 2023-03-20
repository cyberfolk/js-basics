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

// ===== EVENT ======================================================= /
el_btnPlay.addEventListener("click", function () {
    /* Clicking on button play create the grid */
    /* Calculate numCell from the select button in DOM */
    let numCell = calculateNumCell(el_difficulty.value)

    /* Delete the previous grid to prevent the following ones from being added in cascade by clicking on play */
    el_row.innerHTML = "";

    createGrid(numCell);
});

// ===== FUNCTION ==================================================== /
function calculateNumCell(difficulty) {
    /* This function allow to change the logic of calculate the number cell */
    return difficulty * difficulty;
}

function createGrid(numCell) {
    for (let i = 0; i < numCell; i++) {
        const el_cell = document.createElement("div");
        el_cell.classList.add("ms_cell", createClassCell(numCell))
        el_cell.value = i + 1;
        el_cell.onclick = clickCell;
        el_row.append(el_cell);
    }
}

function createClassCell(numCell) {
    return `ms_line_${Math.sqrt(numCell)}`;
}

function clickCell() {
    this.classList.toggle("bg-primary")
    console.log(this.value)
}