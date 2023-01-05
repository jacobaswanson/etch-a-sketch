const container = document.querySelector('#container')
const button = document.querySelector('#btn')

button.addEventListener('click', () => {
  makeRows(resetGame())
});

function makeRows(rows) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', rows);
  for (c = 0; c < (rows * rows); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', () => {
      cell.setAttribute('style', 'background-color: black');
    });
    container.appendChild(cell).className = "grid-item";
  };
};

function resetGame() {
  while(container.firstChild)[
    container.removeChild(container.firstChild)
  ]
  cells = prompt('How many cells would you like per side?');
  return cells;
}

makeRows(16);