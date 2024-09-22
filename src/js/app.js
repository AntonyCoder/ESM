// TODO: write your code here
import sum from './basic.js';

console.log('App worked');

console.log(sum([1, 2]));

// Задание import/export
import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './game.js';

const game = new Game();
game.start();