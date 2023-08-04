//Variables
let gridSize = 16;
const gridContainer = document.querySelector(".gridContainer")
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Creating new grid
createGrid(gridSize);

//Create Grid
function createGrid (gridSize) {
//Looping to create the columns
    for(let i = 0;i < gridSize;i++) {
        const columns = document.createElement("div");
        columns.classList.add("columns");
        gridContainer.appendChild(columns);
//Looping to create the cells
        for(let j = 0;j < gridSize;j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            columns.appendChild(cell);
            cell.addEventListener("mouseover", () => {
                cell.style.backgroundColor = "black";
            })
        }
    }
}





