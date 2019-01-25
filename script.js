let grid = document.querySelector('.grid');

let btnSizeChange = document.querySelector('.sizeChange')
btnSizeChange.addEventListener('click', function(){
    let size = prompt('Type in side length of square. (16 = 16x16 square)');
    changeSize(size);
})

let btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', clearGrid);

let currentSize = 0;

function changeSize(size)
{
    currentSize = size;
    let squareCount = size**2;
    let squareCalculatedSize = 100 / size;

    //remove all elements from grid
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }    

    for(let i=0; i<squareCount; i++)
    {
        let newDiv = grid.appendChild(document.createElement('div'));
        newDiv.classList.add('drawSquare');

        //set size of squares to equally fill the area
        newDiv.setAttribute("style","height: "+squareCalculatedSize +"%;"+"width: "+ squareCalculatedSize+"%;");
        newDiv.addEventListener("mouseover", function () {changeColor(newDiv)});  
    }
}

function clearGrid()
{
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    changeSize(currentSize);
}

function changeColor(elementName){
    elementName.style.backgroundColor = 'red';
}

changeSize(16);