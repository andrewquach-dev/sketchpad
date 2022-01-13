const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
    container.appendChild(row);
}

function paint(event) {
    event.target.style.color = "blue";
}

const squares = Object.values(document.getElementsByClassName('square'));

squares.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.setAttribute('style', 'background: blue');
        console.log('this is working');
    });
});