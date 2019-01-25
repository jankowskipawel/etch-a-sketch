let grid = document.querySelector('.grid');

let btnSizeChange = document.querySelector('.sizeChange')
btnSizeChange.addEventListener('click', function(){prompt('Type in side length of square. (16 = 16x16 square)')})

let sideSize = 16;
let squareCount = sideSize**2;
let squareCalculatedSize = 100 / sideSize;

for(let i=0; i<squareCount; i++)
{
    let newDiv = grid.appendChild(document.createElement('div'));
    newDiv.classList.add('drawSquare');

    //set size of squares to equally fill the area
    newDiv.setAttribute("style","height: "+squareCalculatedSize +"%;"+"width: "+ squareCalculatedSize+"%;");
    newDiv.addEventListener("mouseover", function () {changeColor(newDiv)});  
}

function changeColor(elementName){
    elementName.style.backgroundColor = 'red';
}