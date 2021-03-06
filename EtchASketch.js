// main body
const container = document.querySelector('#container');

// smaller left column for buttons
const leftCol = document.createElement('div');
leftCol.classList.add('left');
container.appendChild(leftCol);

// main column for grid
const mainC = document.createElement('div');
mainC.classList.add('main');
container.appendChild(mainC);

//grid
const grid = document.createElement('div');
grid.classList.add('grid');
mainC.appendChild(grid);

// reset button
const reset = document.createElement('input');
reset.type = "button";
reset.className = "btn btn-primary";
reset.value = "Reset";
leftCol.appendChild(reset);



newSize= 16;

createGrid(newSize);

function createGrid(s){
    
    grid.style.gridTemplateColumns = (`repeat(${s}, 1fr`);
    grid.style.gridTemplateRows = (`repeat(${s}, 1fr`);
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
    const validinput = false;
    
    while(true){
        newSize = prompt("Please input new size of square: ");
        //console.log(newSize);
        if (newSize<64 && !isNaN(newSize)&& newSize!=""){
            break;
        }
    }

    //newSize= newSize2;

    return newSize;
}

