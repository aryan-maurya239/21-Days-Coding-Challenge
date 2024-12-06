let favmovi = '12Fail';

let guess = prompt('Guess my favorite movie');

// While the user's guess is not correct and the input is not "quit"
while ((guess != favmovi) && (guess != "quit")) {
  // Ask for another guess or the option to quit
  guess = prompt('Wrong guess, please try again or enter "quit" to quit the game');
}


// If the correct guess is made
if (guess == favmovi) {
  console.log('Congrats!!');  // Output: Congrats!! if the correct movie is guessed
} else {
  console.log('Quit, Goodbye');  // Output: Quit, Goodbye if the user enters "quit"
}



// let favmovi = '12Fail'

// let guess = prompt('guess my favorite movie');

// while ((guess != favmovi) && (guess != "quit")) {
//      guess  = prompt('Worng gess, please try again or enter "quit" for quit game ')

// }

// if(guess == favmovi){
//     console.log('Congrats!!')
// }else (
//     console.log('Quit, Godby')
// )

