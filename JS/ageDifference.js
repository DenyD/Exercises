function Person (name, age) {
    this.name = name;
    this.age = age;
}

var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

var diff = ageDifference(alice,billy);
console.log(diff);