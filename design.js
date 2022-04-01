/*
References used:
 W3Shools
 MDN Documentations
*/
//```
// Select color input
// Select size input
    var height;
    var width;
    var color;
// When size (height and width) is submitted by the user, call makeGrid()
    document.getElementById('sizePicker').onsubmit = function clickSubmit(event) {
        event.preventDefault();
        const height = document.getElementById('inputHeight').value;
        const width = document.getElementById('inputWidth').value;
        makeGrid(height, width);
    //console.log("height is:" + height + " and width is: " + width);
    };
// makeGrid function
    function makeGrid(height, width) {
        const grid = document.getElementById('pixelCanvas');
        var canvas = '';
        for (var x = 1; x <= height; x++) {
            canvas += '<tr class="row"' + x + '>';
        for (var y = 1; y <= width; y++) {
            canvas += '<td class="cell" id="row"' + x + '-cell' + y + '</td>';
        }
        canvas += '</tr>'
    }
    grid.innerHTML = canvas;
    coloredIn();
    }
 // add color to selected square
    function coloredIn() {
        const table = document.getElementById('pixelCanvas');
        const color = document.getElementById('colorPicker');
        
        table.addEventListener('click', function (event) {
            let cell = event.target;
            if (cell.matches('.cell')) {
                if (cell.style.backgroundColor) {
                    cell.removeAttribute('style');
                } else {
                    cell.style.backgroundColor = color.value
                }
            }
        });
    }
//``