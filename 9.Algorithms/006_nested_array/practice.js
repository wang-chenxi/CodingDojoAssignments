var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7]
];


function isPrensent2d(arr2d, value) {
    for (var i = 0; i < arr2d.length; i++) {
        for (var j = 0; i < arr2d[i].length; j++) {
            if (arr2d[i][j] == value) {
                return true;
            }
        }
    }
    return false;
}

// Flatten an array

/*
Given a 2 dimensional array (an array containing arrays), return a new array containing 
just the values from inside the sub-arrays. Don't assume the array will always be the 
same size, or that the sub-arrays are all the same length (the array might be jagged). 
Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) 
and/or .pop() where needed.
*/

// complete the following function
function flatten(arr2d) {
    var flat = [];
    for (var i = 0; i < arr2d.length; i++) {
        for (var j = 0; j < arr2d[i].length; j++) {
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}

var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]