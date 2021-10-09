// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it

/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
function dropIt(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) break;
    }

    return arr.slice(i);
}

/*****************************************************************************/

/* 
  Given to Instructor Neil in an interview
  Given a string
  return whether or not it's possible to make a palindrome out of the string's characters
  What is it about a string that makes it possible for it to be a palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) { }

var islandPerimeter = function (grid) {
    var side = new Set();
    console.log(grid.length)
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                var hor = j.toString() + (j + 1).toString();
                var ver = i.toString() + (i + 1).toString();
                console.log(hor, ver)
                if (side.has(hor + ":" + i.toString())) {
                    side.delete(hor + ":" + i.toString())
                }
                else {
                    side.add(hor + ":" + i.toString());
                }
                if (side.has(hor + ":" + (i + 1).toString())) {
                    side.delete(hor + ":" + (i + 1).toString())
                } else {
                    side.add(hor + ":" + (i + 1).toString());
                }
                if (side.has(j.toString() + ":" + ver)) {
                    side.delete(j.toString() + ":" + ver)
                } else {
                    side.add(j.toString() + ":" + ver);
                }
                if (side.has((j + 1).toString() + ":" + ver)) {
                    side.delete((j + 1).toString() + ":" + ver)
                } else {
                    side.add((j + 1).toString() + ":" + ver);
                }
            }
        }
    }
    for (let [key, value] of side.entries()) console.log([key, value])
    return side.size
};