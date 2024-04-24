document.addEventListener('DOMContentLoaded', function() {

// Variable Declarations
let drawingOn = false;
let rainbowMode = false;
// DOM elements
const sketchPad = document.getElementById('pad');
const btnNewGrid = document.getElementById('newPad');
const btnClear = document.getElementById('clear'); 
const btnRainbow = document.getElementById('rainbow');


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
    while (sketchPad.firstChild)    {
        sketchPad.removeChild(sketchPad.firstChild);
    }
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

function getRandomColor()   {
    const rainbowColor = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    return rainbowColor[Math.floor(Math.random() * rainbowColor.length)];
}

function activateDrawing () {
    drawingOn = true;
}

function activateRainbowMode ()     {
    rainbowMode = true;
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

//Rainbow Mode
sketchPad.addEventListener('mouseover', (event) => {
    if (drawingOn && rainbowMode && event.target.classList.contains('gridColumn'))   {
        event.target.style.backgroundColor = getRandomColor();
    }
})




sketchPad.addEventListener('mouseup', () =>   {
    drawingOn = false;
});

btnClear.addEventListener('click', event => {
    const gridColumns = document.querySelectorAll('.gridColumn');
    gridColumns.forEach(column => {
    column.classList.remove('onHover');
    column.style.backgroundColor = '';
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

btnRainbow.addEventListener('click', () =>  {
    activateRainbowMode();
    let randomColor = getRandomColor();
    return randomColor;
})





})