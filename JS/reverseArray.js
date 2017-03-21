function reverseArray(array){
   array.reverse();
return array;
}
function reverseArrayInPlace(arrayValue){
  return reverseArray(arrayValue)}

console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);