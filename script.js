const container = document.querySelector('#container')
const sizeButton = document.querySelector('#size-button')
const resetButton = document.querySelector('#reset-button')

sizeButton.addEventListener('click', () => {
  makeRows(resizeGame())
});

resetButton.addEventListener('click', () => {
  clearBoard()
});

function makeRows(rows) {
  container.style.gridTemplateRows =  `repeat(${rows}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
  for (c = 0; c < (rows * rows); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', () => {
      cell.setAttribute('style', 'background-color: black');
    });
    container.appendChild(cell).className = "grid-item";
  };
};

function resizeGame() {
  while(container.firstChild)[
    container.removeChild(container.firstChild)
  ]
  cells = prompt('How many cells would you like per side?');
  if(cells > 100){
    cells = 100;
  }
  return cells;
}

function clearBoard() {
  cells = document.querySelectorAll('.grid-item');
  cells.forEach((item) => {
    item.setAttribute('style', 'background-color: white');
  });
}

makeRows(16);