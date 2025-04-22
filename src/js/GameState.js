export default class GameState {
  constructor() {
    this.positionedCharacters = [];
    this.courseOfGame = 0;
    this.cellWithActiveCharacter = null;
    this.level = 1;
  }

  static from(object) {
    // TODO: create object
    console.log(object);
    return null;
  }

  saveGameData(data) {
    // console.log(this);
    // console.log(data);
    this.saveGame = {      
      characters: data.gameState.positionedCharacters,
      level: data.gameState.level,
      cellWithActiveCharacter: data.gameState.cellWithActiveCharacter,
    };
  }
}
