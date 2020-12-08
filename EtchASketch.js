const container = document.querySelector('#container');

const grid = document.createElement('div');
grid.classList.add('grid');

const reset = document.createElement('input');
reset.type = "button";
reset.className = "btn btn-primary";
reset.value = "Reset";
container.appendChild(reset);

container.appendChild(grid);



createGrid(16);

function createGrid(s){
    for (i = 0; i<s*s; i++){

        const squares = document.createElement('div');
        squares.classList.add('grid-item');
        squares.textContent = ' ';

        grid.appendChild(squares);

        squares.addEventListener("mouseover", function(e){     
            e.target.style.background = 'grey';
        });
    }

    return s;
}

reset.addEventListener('click', resetGrid);


function resetGrid(){

    console.log("check");
     const squaresS = Array.from(document.querySelectorAll('.grid-item'));

     squaresS.forEach(sq => sq.remove());

    createGrid(promptNew());
}

function promptNew(){
    //var txt;
    //newSize = prompt("Please input new size of square: ");
    newSize = prompt("Please input new size of square: ");

    while(newSize!=null && newSize>64){
        newSize = prompt("Please input new size of square: ");
    }

    return newSize;
}

