const container = document.querySelector('.container');

function createGrid(size) {
   container.innerHTML = ''; 
   const fragmant = document.createDocumentFragment();
   const totalSquares = size * size;
   for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `calc(100% / ${size})`;
        square.style.height = `calc(100% / ${size})`;
        square.style.flexGrow = '1';
        square.style.flexShrink = '1';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'aqua';
        });
        fragmant.appendChild(square);
   }
    container.appendChild(fragmant);
}

createGrid(16);