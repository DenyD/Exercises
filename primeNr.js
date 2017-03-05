function pierwsza(nr) {
    for(var i = 2; i < nr; i+=2) {
        if(nr % i === 0) {
            return false;
        }
    }
    return nr > 1;
}
console.log(pierwsza(7));