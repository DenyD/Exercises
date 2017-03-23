<<<<<<< HEAD
function pierwsza(nr) {
    for(var i = 2; i < nr; i+=2) {
        if(nr % i === 0) {
            return false;
        }
    }
    return nr > 1;
}
=======
function pierwsza(nr) {
    for(var i = 2; i < nr; i+=2) {
        if(nr % i === 0) {
            return false;
        }
    }
    return nr > 1;
}
>>>>>>> bc5edb90a978536c1f5739a23b26fe6e2802ec0e
console.log(pierwsza(7));