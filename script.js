const container = document.querySelector('.container');

function createGrid(size) {
   container.innerHTML = ''; 
   const fragmant = document.createDocumentFragment();
   const squareSize = 500 / size;
   const totalSquares = size * size;
   for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}%`;
        square.style.height = `${squareSize}%`;
        fragmant.appendChild(square);
   }
    container.appendChild(fragmant);
}