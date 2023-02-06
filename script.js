// Your code here
let table = document.getElementsByTagName('table')[0];
let button = document.getElementById('add-row');
let select = document.getElementsByTagName('select')[0];
let clearButton = document.getElementById('clear');
let fillButton = document.getElementById('fillboard');
let fillSelect = document.getElementsByTagName('select')[1];
let fillEmpty = document.getElementById('fillUncolored');
let fillEmptySelect = document.getElementsByTagName('select')[2];
let selectedColor = "red";


function makeRow () {
    let row = document.createElement('tr');
    for (let i = 0; i < 20; i++) {
        let td = document.createElement('td');
        row.appendChild(td);
    }
    table.appendChild(row)
}

function colorize (event) {
    if (event.target.tagName === "TD") {
        let target = event.target
        if (target.className.length) {
            target.className = ''
        } else {
            target.className = selectedColor;
        }
    }
}

function check (event) {
    console.log(event.target.tagName)
}

function clearBoard() {
    let cells = table.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].className = '';
    }
}

function fillBoard () {
    let cells = table.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        cells[i].className = selectedColor;
    }
}

function fillEmptyCells () {
    let cells = table.getElementsByTagName('td');
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].className) {
            cells[i].className = selectedColor;
        }
    }
}
button.addEventListener('click', makeRow);
table.addEventListener('mouseover', colorize);

select.addEventListener('change', function (event) {
    selectedColor = event.target.value
});

clearButton.addEventListener('click', clearBoard);

fillSelect.addEventListener('change', function (event){
    selectedColor = event.target.value
});
fillButton.addEventListener('click', fillBoard);

fillEmptySelect.addEventListener('change', function (event) {
    selectedColor = event.target.value
})

fillEmpty.addEventListener('click', fillEmptyCells);