// Array Challenges
// Objectives
// Get comfortable with loops: for and while.
// Get comfortable with conditionals: if/else.
// Please work on the following challenges and upload your work when done.

// Always Hungry
// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.
function alwaysHungry(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            count++;
        }
    }
    if (count == 0) {
        console.log("I'm hungry")
    };
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"copy


// High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]copy

// Better than average
// Given an array of numbers return a count of how many of the numbers are larger than the average.
function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length;
    var count = 0
    // count how many values are greated than the average
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4copy


// Array Reverse
// Write a function that will reverse the values an array and return them.
function reverse(arr) {
    // your code here
    var left = 0;
    var right = arr.length - 1;

    while (left < right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]copy


// Fibonacci Array
// Fibonacci numbers have been studied for years and appear often in nature.
// Write a function that will return an array of Fibonacci numbers up to a given length n.Fibonacci numbers are calculated by adding the last two values in the sequence together.
// So if the 4th value is 2 and the 5th value is 3 then the next value in the sequence is 5.

function fibonacci(arr) {
    var newArr = [];
    for (var i = 0; i++; i < arr.length - 1) {
        newArr.push(arr[i] + arr[i + 1]);
    }
}