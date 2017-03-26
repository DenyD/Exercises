var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( x ) {
    var num = Math.floor(Math.random() * x ) + 1;
    return num;
}

do {
    guess = prompt('About what number from 1 to 10 am I thinking ?');
    guessCount += 1;
    if (parseInt(guess) === randomNumber ) {
        correctGuess = true;
    }
} while ( ! correctGuess )
document.write('<h1>You guessed the number !</h1>');
document.write('<h2>You needed ' + guessCount + 
' attempts to guess the number ' + randomNumber + ' !</h2>');