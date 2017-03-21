var n = 8;
var output="";
var sp=" ";
var hasz= "#";
var one=sp+hasz;
var two=hasz+sp;

for (i=1; i<=n; i++){
  if (i % 2 == 1){
    output=one.repeat(n/2);
  }
  else if (i % 2 ==0){
    output=two.repeat(n/2);
  };
  console.log(output);
};


var size = 8;
var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x+y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);