/**
 * Entry point of app: don't change this
 */
import GamePlay from './GamePlay';
import GameController from './GameController';
import GameStateService from './GameStateService';

const gamePlay = new GamePlay();
gamePlay.bindToDOM(document.querySelector('#game-container'));

const stateService = new GameStateService(localStorage);

const gameCtrl = new GameController(gamePlay, stateService);
gameCtrl.init();


// don't write your code here

console.log(gameCtrl);
// console.log(gameCtrl.init());
// console.log(gamePlay.setCursor);

// console.log(this);// пусто
// import themes from "./themes";
// console.log(themes);

// ---
// console.log(document.getElementsByClassName('board'));

// document.getElementsByClassName('board').classList.add(".not-clickable");

// this.gamePlay.drawUi('not-clickable');

// let boArd = document.querySelectorAll('div.board');
// let cells = Array(document.querySelectorAll('.cell'));
// // console.log(document.querySelector());
// console.log(cells[0].length);
// for (let i = 0; i < cells[0].length; i++) {
//     // console.log('cells');
//     // document.removeEventListener('mousemove', resetTimer.bind(null, str));
//     cells[0][i].removeEventListener('mouseenter', event => this.onCellEnter(event));
//     cells[0][i].removeEventListener('mouseleave', event => this.onCellLeave(event));
//     cells[0][i].removeEventListener('click', event => this.onCellClick(event));

//     cells[0][i].classList.add("not-clickable");
//     cells[0][i].classList.add("not-clickable");
//     cells[0][i].classList.add("not-clickable");
//     console.log(cells[0][i]);
// }
// console.log(cells[0]);
// console.log(cells[0][0]);

// ---
// console.log(gamePlay.cells.length);
// console.log(gamePlay.cells[0]);
// for (let i = 0; i < gamePlay.cells.length; i++) {
//     // console.log(gamePlay.cells[i]); // работает
//     gamePlay.cells[i].removeEventListener('click', event => this.onCellClick(event)); // не работает
//     gamePlay.cells[i].onclick = null; // не работает
// }
/// --------- 
// console.log('--- вебинар: 3 и 4 блок ------------------ начало -----------------');
// const board = [];
// for (let i = 0; i < 64; i++) {
//     board.push(i);
// }
// console.log(board);

// let index_V = 55;
// let size = 8;

// const indexTo2D = (index_V, size = 8) => {
//     const x = index_V % size;
//     const y = (index_V - x) / size;

//     return {
//         x,
//         y
//     }
// };
// console.log('например index = 55, то  координаты:');
// console.log(indexTo2D(index_V, size));

// console.log('например {x, y} будут {7, 7} и т.д., то  index:');

// const toIndex = ({x, y}) => x * 8 + y;


// console.log(toIndex({x:7, y:7}));
// console.log(toIndex({x:5, y:5}));
// console.log(toIndex({x:3, y:3}));
// console.log(toIndex({x:1, y:1}));
// console.log('--- вебинар: 3 и 4 блок ------------------- конец -----------------');
/// ---------
let cells_ = document.querySelectorAll('.cell');
// console.log(cells_);
for (let i = 0; i < cells_.length; i++) {
    console.log(i);
    // console.log(cells_[i]);
    // cells_[i].removeEventListener('click', event => this.onCellClick(event)); // не работает
    // cells_[i].removeEventListener('click', event => {
    //     event.preventDefault();
    //     event.stopPropagation();
    // }); // не помогло
    // cells_[i].removeEventListener('click', event => this.onCellClick(event));
    // cells_[i].onclick = null; // не работает
    // cells_[i].preventDefault();
}
// console.log(document.querySelectorAll('.cell')); // ('click', event => this.onCellClick(event));