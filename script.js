document.addEventListener('DOMContentLoaded', function() {

// Variable Declarations
let drawingOn = false;
// DOM elements
const sketchPad = document.getElementById('pad');


//Functions
function createSketchPad () {
    for (let i = 0; i < 16; i++)    {
        const divRow = document.createElement('div');
        divRow.classList.add('gridRow');
     //   const rowId = 'row' + i;
     //   divRow.setAttribute('id', rowId);
        sketchPad.appendChild(divRow);


        for (let j = 0; j<16; j++)  {
            const divColumn = document.createElement('div');
            divColumn.classList.add('gridColumn');
         //   const columnId = 'column' + (i * 16 + j);
          //  divColumn.setAttribute('id', columnId);
            divRow.appendChild(divColumn);
        }
    }
}

function activateDrawing () {
    drawingOn = true;
}

createSketchPad();

//Click Events
sketchPad.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('gridColumn')) {
        activateDrawing();
    }
});

sketchPad.addEventListener('mouseover', function(event) {
    if (drawingOn && event.target.classList.contains('gridColumn'))  {
        event.target.classList.add('onHover');
    }
});

sketchPad.addEventListener('mouseup', function(event)   {
    drawingOn = false;
})
})