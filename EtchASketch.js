const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

createGrid(16);

function createGrid(s){
    for (i = 0; i<s*s; i++){

        const squares = document.createElement('div');
        squares.classList.add('grid-item');
        squares.textContent = ' ';

        grid.appendChild(squares);

    }
}