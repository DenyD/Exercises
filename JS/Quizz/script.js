// Quiz starts, 0 answers correct

var correct = 0;

// Ask question

var answer1 = prompt('Question 1: What is the name of gem which has the same name as programming language ?');
if ( answer1.toUpperCase() === 'RUBY') {
    correct += 1;
}
var answer2 = prompt('Question 2: What is the name of snake which has the same name as programming language ?');
if ( answer2.toUpperCase() === 'PYTHON') {
    correct += 1;
}
var answer3 = prompt('Question 3: What is the name language uses to style web pages ?');
if ( answer3.toUpperCase() === 'CSS') {
    correct += 1;
}
var answer4 = prompt('Question 4: What is the name language uses to build the structure of web pages ?');
if ( answer4.toUpperCase() === 'HTML') {
    correct += 1;
}
var answer5 = prompt('Question 5: What is the name language uses to add interactivity to a web pages ?');
if ( answer5.toUpperCase() === 'JAVASCRIPT') {
    correct += 1;
}

// Output the results

document.write("<p>You have " + correct + " out of 5 questions correct.</p>");

// Output rank

if ( correct === 5 ) {
    document.write("<p><strong>You earned a maximum correct answers and GOLD Crown !")
} else if (correct >= 3) {
        document.write("<p><strong>You earned a Silver Crown !")
} else if (correct >= 2) {
        document.write("<p><strong>You earned a Bronze Crown !")
} else {
    document.write("<p><strong>You earned an EVEN ONE correct answer ! You need to study !")
}
