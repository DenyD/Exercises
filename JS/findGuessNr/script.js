
function randomNumber ( x, y ) {
    return Math.floor(Math.random() * ( y - x + 1) ) + x;
}

var upper = 10000;
var randomNr = randomNumber( 1, upper );
var guess;
var attempts = 0;

while ( guess !== randomNr ) {
    guess = randomNumber ( 1, upper );
    attempts += 1;
}
    document.write( "<h2>The random nr was: " + randomNr + ".</h2>" );
    document.write("<h3>Computer needs: " + attempts + " attempts to find it.</h3>" );
    
