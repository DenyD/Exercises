function isSquare(n) {
    return n>0&&Math.sqrt(n)%1===0;
}
function Fib(N){
    return isSquare(5*(N*N)-4)||isSquare(5*(N*N)+4)
}
console.log(Fib(3));
console.log(Fib(4));