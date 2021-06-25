// Write a function reverse(arr) to reverse an array.

// If we were given:
// ["a", "b", "c", "d", "e"];
// ["e",                "a" ]
// [     "d"       "b"      ]
// [           c            ]

// we expect to get back:
// ["e", "d", "c", "b", "a"]


//two pointer method
var arr = ["a", "b", "c", "d", "e"];
function reverse(arr) {
    var i = 0;
    var j = arr.length - 1;
    while (i < j) {
        var temp;
        console.log("before: ", arr[i], arr[j]);
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        console.log("after: ", arr[i], arr[j]);
        i++;
        j--;
    }
    console.log(arr);
    return arr;
}

reverse(arr);

//simply version
function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;
    do {
        [arr[left], arr[right]] = [arr[right], arr[left]]
    } while (left++ < right--);
    return arr
}

//push method
var arr = ["a", "b", "c", "d", "e"];
function reverse(arr) {
    var tempArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        //pop:take from the end => arr
        //push:add element at the end => temp
        tempArr.push(arr[i]);
    }
    arr = tempArr;
    console.log(arr);
    return arr;
}

reverse(arr);

