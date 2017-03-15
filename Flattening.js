var arrays = [[1, 2, 3], [4, 5], [6]];

var flatt = arrays.reduce(function(old, current) {
  return old.concat(current);
});
console.log(flatt);