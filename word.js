// // requiring our Student module exported from student.js
// var Letter = require("./letter.js");
//
// // constructor function for creating classroom objects
// var Word = function(profName, roomNum) {
//   // this.students will hold all of our student objects
//   this.letters = [];
//   this.profName = profName;
//   this.roomNum = roomNum;
//   // a method that creates a student using our Student constructor.
//   // It then pushes the new student object to this.students and updates this.numStudents
//   this.addStudent = function(name, favoriteSub, gpa) {
//     this.letter.push(new Letter(name, favoriteSub, gpa));
//   };
//   // this method will tell you how many students are in the class
//   this.letterCount = function() {
//     return this.letters.length;
//   };
// };
//
// // exporting our Classroom constructor. We will require it in main.js
// module.exports = Word;
