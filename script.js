function createGrid(size) {
    const container = document.querySelector("#container");

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);
        }
        container.appendChild(row);
    }
    lightBlackSquares();
}

function clear() {
    const btn = document.querySelector("#clear");
    btn.addEventListener("click", () => {
        removeGrid();
        createGrid(promptSize());
    });
}

function removeGrid() {
    let parent;
    const squares = Object.values(document.getElementsByClassName("square"));
    squares.forEach((square) => {
        parent = square.parentNode;
        parent.removeChild(square);
    });
}

function promptSize() {
    let size;
    while (true) {
        size = Number(prompt("Grid size? (Max size of 100):", "16"));
        if (size > 0 && size < 101) {
            break;
        }
    }
    return size;
}

function blackSquares() {
    const squares = Object.values(document.getElementsByClassName("square"));
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.setAttribute("style", `background: black;`);
        });
    });
}

function randomColorSquares() {
    const squares = Object.values(document.getElementsByClassName("square"));
    const randomBetween = (min, max) =>
        min + Math.floor(Math.random() * (max - min + 1));

    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            square.setAttribute("style", `background: rgb(${r},${g},${b});`);
        });
    });
}

function lightBlackSquares() {
    const squares = Object.values(document.getElementsByClassName("square"));

    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            if (square.style.backgroundColor == null) {
                square.style.backgroundColor = `rgba(0, 0, 0, 0.1)`;
            } else {
                if (Number(square.style.backgroundColor.substring(14, 17)) + 0.1 < 1.0) {
                    let value =
                        (Number(square.style.backgroundColor.substring(14, 17)) + 0.1).toFixed(1);
                    square.style.backgroundColor = `rgba(0, 0, 0, ${value})`;
                }

            }
        });
    });
}

function run() {
    createGrid(16);
    clear();
}

run();