let currentSetting = 'hsl';
let currentSize = 0;

let grid = document.querySelector('.grid');

let btnSizeChange = document.querySelector('.sizeChange')
btnSizeChange.addEventListener('click', function(){
    let size = prompt('Type in side length of square. (16 = 16x16 square)');
    changeSize(size);
})

let btnRefresh = document.querySelector('.refresh');
btnRefresh.addEventListener('click', refreshGrid);

let btnHsl = document.querySelector('.hsl');
let btnRgb = document.querySelector('.rgb');
btnHsl.addEventListener('click', function(){currentSetting='hsl'});
btnRgb.addEventListener('click', function(){currentSetting='rgb'});


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
        if(currentSetting==='rgb')
        {
        let color = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)}`;
        newDiv.style.backgroundColor = color;
        }
        else
        {
        let color = `hsl(${randomNumber(360)}, ${randomNumber(100)}%, ${randomNumber(75)}%`;
        newDiv.style.backgroundColor = color;
        }
    }
}

function refreshGrid()
{
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    changeSize(currentSize);
}

function randomNumber(range)
{
    return Math.floor(Math.random() * range+1);
}

changeSize(16);