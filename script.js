document.addEventListener('DOMContentLoaded', function() {

// Variable Declarations
let drawingOn = false;
let rainbowMode = false;
let chosenColorMode = false;

// DOM elements
const sketchPad = document.getElementById('pad');
const btnNewGrid = document.getElementById('newPad');
const btnClear = document.getElementById('clear');
const btnColor = document.getElementById('color');
const colorPickerPopup = document.getElementById('colorPickerPopup');
const btnRainbow = document.getElementById('rainbow');
const displayGridInfo = document.getElementById('gridInfo');

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
    displayGridInfo.innerText = `Grid size: ${size} x ${size}`;
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

function activateChosenColor ()     {
    chosenColorMode = true;
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

// Rainbow Mode
sketchPad.addEventListener('mouseover', event => {
    if (drawingOn && rainbowMode && event.target.classList.contains('gridColumn'))   {
        event.target.style.backgroundColor = getRandomColor();
    }
})
// Input color from user
sketchPad.addEventListener('mouseover', event => {
    if (drawingOn && chosenColorMode && event.target.classList.contains('gridColumn'))  {
        event.target.style.backgroundColor = newColor;
    }
});

sketchPad.addEventListener('mouseup', () =>   {
    drawingOn = false;
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

btnClear.addEventListener('click', () => {
    const gridColumns = document.querySelectorAll('.gridColumn');
    gridColumns.forEach(column => {
    column.classList.remove('onHover');
    column.style.backgroundColor = '';
    });
});

btnColor.addEventListener('click', () =>    {
    colorPickerPopup.style.display = 'block';
    colorPicker.click();
});

colorPicker.addEventListener('change', event => {
    newColor = event.target.value;
    colorPickerPopup.style.display = 'none';
    activateChosenColor();
    btnColor.style.backgroundColor= newColor;
});

btnRainbow.addEventListener('click', () =>  {
    if (rainbowMode === true)   {
        btnRainbow.style.backgroundColor = '';
        rainbowMode = false;
    } 
    else {
    btnColor.style.backgroundColor = '';
    btnRainbow.style.backgroundColor = 'violet';
    chosenColorMode = false;
    activateRainbowMode();
    let randomColor = getRandomColor();
    return randomColor;
    }
})

})