// // requiring our Classroom module exported from classroom.js
// var Classroom = require("./Classroom.js");
//
// // creating and storing a new classroom object
// var firstClass = new Classroom("Ahmed", 3187);
//
// // calling the addStudent method on our firstClass object
// firstClass.addStudent("Jacob", "Coding", 3.87);
//
// console.log(firstClass);
var Word = require('./word.js');
var prompt = require('prompt');

console.log("Welcome!");
console.log("Let's play!");
console.log("Goodluck!");
console.log("-----------------------------");
prompt.start();



game = {
 	wordBank: ['brownie', 'cookie', 'cake', 'waffle', 'pancake', 'muffin', 'souffle'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,

 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				self.guessesRemaining--;

 			} else {
 				console.log("CORRECT");
 					if(self.currentWrd.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWrd.target);
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});

 	}


};

game.startGame();
