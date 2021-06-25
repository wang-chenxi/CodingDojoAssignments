// Objectives
// Get comfortable with loops: for and while.
// Get comfortable with conditionals: if/else.
// Please work on the following challenges and upload your work when done.

// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

var i = 1;
while (i < 21) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}

// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

for (var i = 100; i > -1; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
}


// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

for (var i = 4; i > -4; i -= 1.5) {
    console.log(i);
}

// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

var x = 0;
for (var i = 1; i < 101; i++) {
    x += i;
}
console.log(x);

// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

var x = 1;
for (var i = 1; i < 13; i++) {
    x *= i;
}
console.log(x);