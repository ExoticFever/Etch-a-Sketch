//Variables
let gridSize = 56;
const gridContainer = document.querySelector(".gridContainer");
let mouseDown = false;
let rainbowMode = false;
const gridSizeBtn = document.getElementById("gridSizeBtn");
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

gridSizeBtn.addEventListener("click", () => {
    let newGridSize = Number(window.prompt("Please enter the size of the grid (Max is 100) : "));
    if(newGridSize = NaN) {
        newGridSize = prompt("Please enter a number for the grid size (Max is 100) : ")  
    } else if(newGridSize > 100) {
        newGridSize = prompt("Please enter lower number for the grid size (Max is 100) : ")
    }
})

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
//Detect if mouse touching the cells.
                cell.addEventListener("click", () => {
                    cell.style.backgroundColor = "black";
                })
                cell.addEventListener("mouseover", () => {
                        if(mouseDown) {
//Change the color of cell to black
                        cell.style.backgroundColor = "black";
                        }
                    })

                cell.addEventListener("touchstart touchend", () => {
                    cell.style.backgroundColor = "black"})       
        }
    }
}







