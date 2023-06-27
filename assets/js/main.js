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