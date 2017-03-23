function countChar(str, l){
  licz=0;
  for(var i=0; i<=str.length-1; i++)
    if(str.charAt(i)== l)
      licz+=1;
  return licz;
}
function countBs(str){
  return countChar(str, "B")
}
console.log(countBs("BBSB"));
console.log(countChar("klakier", "k"));