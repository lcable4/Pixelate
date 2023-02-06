// Your code here
let table = document.getElementsByTagName('table')[0];
let button = document.getElementById('add-row');
let select = document.getElementsByTagName('select')[0];
let clearButton = document.getElementById('clear');
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



button.addEventListener('click', makeRow);
table.addEventListener('mouseover', colorize);

select.addEventListener('change', function (event) {
    selectedColor = event.target.value
});

clearButton.addEventListener('click', clearBoard);

