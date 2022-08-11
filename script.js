const container = document.getElementById("container");

let button = document.getElementById("newgame");
button.addEventListener("click",startGame);

function startGame () {
clearTable(container)
number = prompt("Enter the number of grids: ",)
if (number <=100 && number > 0) {
    drawGrid(number);
} else {
    alert("Please insert a number between 1 and 100!");
    startGame();
}

}
function drawGrid (number) {
    const gridSize = number * number;
for (i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    container.appendChild(div); 
    
    div.classList.add("grid");
    let gridWidth = 100/number;
    div.style.width = gridWidth+"%";
    div.onmouseover = () => div.style.backgroundColor = "black";
}


}

function clearTable (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}