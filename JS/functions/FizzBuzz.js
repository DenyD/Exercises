for (var nr=1; nr < 101; nr++){
  if (nr % 3 == 0 && nr % 5 == 0){
    console.log('FizzBuzz');
  }
  else if (nr % 5 ==0 && nr % 3 !==0){
    console.log('Buzz');
  }
  else if (nr % 3 == 0){
    console.log('Fizz');
  }
  else {
    console.log(nr);
  }
};


for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}

