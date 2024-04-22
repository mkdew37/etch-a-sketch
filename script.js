// Variable Declarations


// DOM elements
const sketchPad = document.getElementById('pad');

//Functions

function createSketchPad () {
    for (let i = 0; i < 16; i++)    {
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        sketchPad.appendChild(divRow);

        for (let j = 0; j<16; j++)  {
            const divColumns = document.createElement('div');
            divColumns.classList.add('column');
            divRow.appendChild(divColumns);
        }
    }
}

createSketchPad();