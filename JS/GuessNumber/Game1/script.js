/* The Random Number Guessing Game Generates 
a number between 1 and 10and gives a player 
two attemps to guess the number. */

// Assume the player didn't guess correctly

var correctGuess = false;

// Generate random number from 1 to 10

var randomNumber = Math.floor(Math.random() * 10 ) + 1;
var guess = prompt('Choose number from 1 to 10')

/* test shows if player is:
1. correct
2. guessed number is to high
3. guessed number is to low
*/

    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
    } else if ( parseInt(guess) < randomNumber ) {
        var guessMore = prompt("Try again. Number is higher !") 
        if ( parseInt(guessMore) === randomNumber ) {
            correctGuess = true;
        }
    } else if ( parseInt(guess) > randomNumber ) {
        var guessLess = prompt("Try again. Number is lower !") 
        if ( parseInt(guessLess) === randomNumber ) {
            correctGuess = true;
        }
    }

    // test if player guess the correct number

    if ( correctGuess ) {
        document.write('<h2>YEAH you guess the number!</h2>');
    } else {
        document.write('<h2>Sorry you don\'t guess the number. The number was ' + randomNumber + '.</h2>');
    }
console.log(randomNumber);