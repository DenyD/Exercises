var html = '';
var rgbColor;

function randomColor() {
    var color = 'rgb(';
    color += randomRgb() + ',' + randomRgb() + ',' + randomRgb() + ')';
    return color;
}

function randomRgb() {
    var color = Math.floor(Math.random() * 256 );
    return color;
}

function print ( msg ) {
    document.write( msg );
}

for ( var i = 0; i < 192; i += 1 ) {
    
    rgbColor = randomColor();
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);