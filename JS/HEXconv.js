function odwrotny(hex){
    if (hex.indexOf('#')===0) {
        hex=hex.slice(1);
    }
    if (hex.length===3){
        hex=hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
    }
    if (hex.length!==6) {
        alert('Wrong hex color');
    }
    var r = (255-parseInt(hex.slice(0,2),16)).toString(16),
        g = (255-parseInt(hex.slice(2,4),16)).toString(16),
        b = (255-parseInt(hex.slice(4,6),16)).toString(16);
    return '#'+rev(r)+rev(g)+rev(b);
}

function rev(str, len) {
    len = len || 2;
    var zero = new Array(len).join('0');
    return (zero + str).slice(-len);
}
console.log(odwrotny("#999999"));
console.log(odwrotny("#000000"));
