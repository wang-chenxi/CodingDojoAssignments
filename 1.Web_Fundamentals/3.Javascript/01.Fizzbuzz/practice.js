// Using what we've learned about loops and conditionals, solve this classic coding challenge (it's been a favorite in interviews for years).

// Write code that will go through each number from 1 to 100 and:

// For each number that is a multiple of 3, print "Fizz"
// For each number that is a multiple of 5, print "Buzz"
// For numbers which are a multiple of both 3 and 5, print "FizzBuzz"
// All other numbers should just print normally

var i = 1;
while (i < 101) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log("FizzBuzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
    i++;
}