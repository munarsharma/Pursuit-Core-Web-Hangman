const dictionary = require("./dictionary");

class Referee {
  constructor(referee) {
    this.refree = refree;
    this.secretWord = dictionary[Math.floor(Math.random) * dictionary.length];
  }

  wordLength() {
    return this.secretWord.length;
  }
}

module.exports = Referee;
