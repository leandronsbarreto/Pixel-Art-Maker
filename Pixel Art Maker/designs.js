sizePicker.addEventListener('submit', makeGrid);

//Call function makeGrid () by user's input submission
function makeGrid(makeit) {
    makeit.preventDefault(); 
    //Remove grid
    while (pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
    //Generate grid
    for (var r = 1; r <= inputHeight.value; r++) {
        var row = document.createElement('tr');
        pixelCanvas.appendChild(row);

        for (var c = 1; c <= inputWidth.value; c++) {
            var cell = document.createElement('td');
            row.appendChild(cell);
        }
    }
    //Height and width inputs
    var height = document.querySelector('#inputHeight');
    var width = document.querySelector('#inputWidth');

    //console.log(tableCell)
    var tableCell = document.querySelectorAll('td');
    
    //Cell color
    tableCell.forEach(function (cell) { 
        cell.addEventListener('click', function (makeit) {
            //Background color
            if (makeit.target.style.backgroundColor === "") {
                makeit.target.style.backgroundColor = colorPicker.value;
            } else {
                makeit.target.style.backgroundColor = "";
            }
        });
    });
}