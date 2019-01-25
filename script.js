let currentColor = 'black';
let currentSize = 0;

let grid = document.querySelector('.grid');

let btnSizeChange = document.querySelector('.sizeChange')
btnSizeChange.addEventListener('click', function(){
    let size = prompt('Type in side length of square. (16 = 16x16 square)');
    changeSize(size);
})

let btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', clearGrid);

let btnColorBlack = document.querySelector('.black');
let btnColorPurple = document.querySelector('.purple');
let btnColorRed = document.querySelector('.red');
let btnColorYellow = document.querySelector('.yellow');
let btnColorBlue = document.querySelector('.blue');
let btnColorGreen = document.querySelector('.green');
let btnColorRandom = document.querySelector('.random');

btnColorBlack.addEventListener('click', function(){currentColor='black'});
btnColorPurple.addEventListener('click', function(){currentColor='purple'});
btnColorBlue.addEventListener('click', function(){currentColor='blue'});
btnColorGreen.addEventListener('click', function(){currentColor='green'});
btnColorYellow.addEventListener('click', function(){currentColor='yellow'});
btnColorRed.addEventListener('click', function(){currentColor='red'});
btnColorRandom.addEventListener('click', function(){currentColor='random'});

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
        newDiv.addEventListener("mouseover", function () {changeColor(newDiv, currentColor)});  
    }
}

function clearGrid()
{
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    changeSize(currentSize);
}

function random256()
{
    return Math.floor(Math.random() * 256);
}

function changeColor(elementName, color){
    if(currentColor==='random')
    {
        color = `rgb(${random256()}, ${random256()}, ${random256()})`
        elementName.style.backgroundColor = color;
    }
    else
    {
    elementName.style.backgroundColor = color;
    }
}

changeSize(16);