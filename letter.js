// constructor function for creating student objects
var Letters = function(letter) {
  this.letter = letter;
  this.guessed = false;
  this.letterRender = function() {
    return !(this.guessed)
      ? "_"
      : this.letter;

  };
};
// exporting our Student constructor
module.exports = Letters;
