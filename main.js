const container = document.getElementById('container');

let color = "black";
let click = true;

function populateBoard(size) {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');
  /*Removes squares of squares not used when indcating size */
  squares.forEach((div) => div.remove());
  /*Simplifies repeating size for each square and says that sie of columns/rows are all same*/
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.addEventListener('mouseover', colorSquare);
    square.style.backgroundColor = 'white';
     /*Inserts square after square inside board*/
    board.insertAdjacentElement('beforeend', square);
  }
}

populateBoard(16);

function changeSize (input) {
    if (input >=2 && input <=100) { 
        populateBoard(input);
    }
    else {
        console.log('Too many squares!');
    }
}

function colorSquare() {
    if (click) {
        if (color == 'random') {
            this.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            /*`hs1(${Math.random()*360}, 100%, 50%)`*/
        }
        else if (color == 'white') {
            this.style.backgroundColor = 'white';
        }
        else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice) {
    color = choice
}

function resetBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => (div.style.backgroundColor = "white"));
  }

  document.querySelector('body').addEventListener('click', () => {
    click = !click;
  })