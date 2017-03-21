var sam=('aeiou');
var sp=('bcdfghjklmnprstqwyz');
function slowo(str) {
  var s1 = str.replace(/\./g, function(y){
   var y = sam[Math.floor(sam.length * Math.random())];
   return y;}).replace(/-/g, function(x){
   var x = sp[Math.floor(sp.length * Math.random())];
   return x;});
  return s1;
}
console.log(slowo('-.-.-'));
