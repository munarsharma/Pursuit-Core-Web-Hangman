class Board {
  constructor(length) {
    this.board = new Array(length).fill("_");
  }

  displayBoard() {
    console.log(this.board);
  }
  addLetter(word, letter) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        this.board[i] = letter;
      }
    }
  }

  isComplete(word) {
    if (word === this.board.join("")) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Board;
