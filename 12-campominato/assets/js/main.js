const el_row = document.querySelector(".row");
const el_btnPlay = document.querySelector("#btn_play");
const el_difficulty = document.querySelector("#difficulty");
const el_countClickedCells = document.querySelector("#count_clicked_cells");
const el_countMissingCells = document.querySelector("#count_missing_cells");
const el_appMain = document.querySelector("#app_main");
const el_endGame = document.querySelector(".endgame");
let count_clickedCells = 0;

// ===== EVENT ======================================================= /
el_btnPlay.addEventListener("click", function () {
    /* Clicking on button play create the grid */
    const totCells = calculateNumCell(el_difficulty.value)
    refreshGrid(totCells);
    createGrid(totCells);
    createCellBombs(totCells);
});

// ===== FUNCTION ==================================================== /
function refreshGrid(totCells) {
    /* Delete the previous grid to prevent the following ones from being added in cascade by clicking on play */
    el_row.innerHTML = "";
    /* Make the el_row recyclable */
    el_row.style.pointerEvents = "auto";
    /* reset the counter to start over  */
    count_clickedCells = 0;
    el_countClickedCells.innerText = 0;
    el_countMissingCells.innerText = totCells - 16;
    el_appMain.classList.remove("exploded");
    el_endGame.style.display = "none";
}

function calculateNumCell(difficulty) {
    /* This function allow to change the logic of calculate the number cell */
    /* Calculate totCells from the select button in DOM */
    return difficulty * difficulty;
}

function createGrid(totCells) {
    for (let i = 0; i < totCells; i++) {
        const el_cell = document.createElement("div");
        el_cell.classList.add("ms_cell", createClassCell(totCells))
        el_cell.value = i + 1;
        el_cell.onclick = function () { clickCell(this, totCells); }
        el_row.append(el_cell);
    }
}

function createClassCell(totCells) {
    return `ms_line_${Math.sqrt(totCells)}`;
}

function clickCell(e, totCells) {
    const cellContainsBomb = e.classList.contains("ms_cell_bomb");
    if (cellContainsBomb) {
        loseGame(e)
    } else {
        notBomb(e, totCells);
    }
}

function loseGame(e) {
    console.log(`Col clik numero ${count_clickedCells} hai cliccato la cella numero ${e.value} --> BOMBBBBBAAAA!!!`)
    e.style.backgroundColor = 'red';
    el_appMain.classList.add("exploded");
    showAllBombs();
    console.log(`ENDGAME!! Hai cliccato ${count_clickedCells} celle prima di esplodere`);
    el_row.style.pointerEvents = "none";
    el_endGame.style.display = "block";
    el_endGame.style.color = "black";
    el_endGame.innerText = "💀Hai perso💀"
}

function notBomb(e, totCells) {
    e.classList.toggle("bg-primary")
    count_clickedCells++;
    el_countClickedCells.innerText = count_clickedCells;
    el_countMissingCells.innerText = totCells - 16 - count_clickedCells;
    console.log(`Col clik numero ${count_clickedCells} hai cliccato la cella numero ${e.value} --> Not Bomb`);
    /* Make not reclickable the safe cell */
    e.style.pointerEvents = "none";
    e.innerText = countBombAxis(e);
    if (count_clickedCells == (totCells - 16)) {
        wingGame();
    }
}

function wingGame() {
    console.log("HAI VINTO");
    el_row.style.pointerEvents = "none";
    el_endGame.style.display = "block";
    el_endGame.style.color = "green";
    el_endGame.innerText = "🎺Hai vinto🎺"
}

function createCellBombs(totCells) {
    const el_cells = document.querySelectorAll(".ms_cell");
    const bombIndex = generateRandomArray(16, 1, totCells);
    console.log(`Posizione delle bombe: ${bombIndex}`);
    for (let i = 0; i < bombIndex.length; i++) {
        /* Use (bombIndex[i] - 1)  as index in el_cells[] to individuate the cell bomb 
         * when i = 0  --> bombIndex give the index of first bomb in the array bombIndex
         * when i = 15 --> bombIndex give the index of last bomb in the array bombIndex
         * cellBomb isn - t ordered */
        const cellBomb = el_cells[bombIndex[i] - 1];
        cellBomb.classList.add("ms_cell_bomb")
    }
}

function generateRandomArray(count, min, max) {
    /* Generate random Array without duplicate */
    const rands = [];
    while (rands.length < count) {
        const r = Math.floor((Math.random() * max) + min);
        /* rands.indexOf(r) == -1 --> in the only case where r isn't contained in thre aray */
        rands.indexOf(r) == -1 ? rands.push(r) : null;
        /* if condition is true ---> push r in the arry */
        /* if condition is false --> do nothing */
    }
    return rands;
}

function countBombAxis(e) {
    const el_cells = document.querySelectorAll(".ms_cell");
    const gridRow = Math.sqrt(el_cells.length);
    let count = 0;
    count += countBombX(e, el_cells, gridRow);
    count += countBombY(e, el_cells, gridRow);
    return count;
}

function countBombX(e, el_cells, gridRow) {
    const cellStart = e.value - ((e.value - 1) % (gridRow)) - 1;
    let count = 0;
    for (let i = cellStart; i < (cellStart + gridRow); i++) {
        if (el_cells[i].classList.contains("ms_cell_bomb")) {
            count++;
        }
    }
    return count;
}

function countBombY(e, el_cells, gridRow) {
    const cellStart = ((e.value - 1) % (gridRow));
    let count = 0;
    for (let i = cellStart; i < el_cells.length; i = i + gridRow) {
        if (el_cells[i].classList.contains("ms_cell_bomb")) {
            count++;
        }
    }
    return count;
}

function showAllBombs() {
    const el_cellsBomb = document.querySelectorAll(".ms_cell_bomb");
    for (let i = 0; i < el_cellsBomb.length; i++) {
        el_cellsBomb[i].style.backgroundColor = "red";
    }
}