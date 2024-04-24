document.addEventListener('DOMContentLoaded', function() {

// Variable Declarations
let drawingOn = false;
// DOM elements
const sketchPad = document.getElementById('pad');
const btnNewGrid = document.getElementById('newPad');
const btnClear = document.getElementById('clear'); 


//Functions
function createPad () {
    for (let i = 0; i < 16; i++)    {
        const divRow = document.createElement('div');
        divRow.classList.add('gridRow');
        sketchPad.appendChild(divRow);

        for (let j = 0; j<16; j++)  {
            const divColumn = document.createElement('div');
            divColumn.classList.add('gridColumn');
            divRow.appendChild(divColumn);
        }
    }
}

function createNewPad(size)   {
    for (let i = 0; i < size; i++)    {
        const divRow = document.createElement('div');
        divRow.classList.add('gridRow');
        sketchPad.appendChild(divRow);

        for (let j = 0; j<size; j++)  {
            const divColumn = document.createElement('div');
            divColumn.classList.add('gridColumn');
            divRow.appendChild(divColumn);
        }
    }
}

function activateDrawing () {
    drawingOn = true;
}


createPad();




//Click Events
sketchPad.addEventListener('mousedown', event => {
    if (event.target.classList.contains('gridColumn')) {
        activateDrawing();
    }
});

sketchPad.addEventListener('mouseover', event => {
    if (drawingOn && event.target.classList.contains('gridColumn'))  {
        event.target.classList.add('onHover');
    }
});

sketchPad.addEventListener('mouseup', () =>   {
    drawingOn = false;
});

btnClear.addEventListener('click', () => {
    const gridColumns = document.querySelectorAll('.gridColumn');
    gridColumns.forEach(column => {
        column.classList.remove('onHover');
    });
});

btnNewGrid.addEventListener('click', () => {
    let newGridSize = prompt('How many squares do you want your new pad to contain?');
    if (newGridSize > 100) {
        alert('You will crash the site if you choose that many, choose again!');
        newGridSize = prompt('How many squares do you want your new pad to contain?');
    } if (newGridSize) {
        const gridColumns = document.querySelectorAll('.gridColumn');
        gridColumns.forEach(column => {
            column.classList.remove('onHover');
        });
        createNewPad(newGridSize);
    }
});






})