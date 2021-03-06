/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
  //greedy algo - starting from the largest length
  // the starting two pointers
  var i = 0;
  var j = heights.length - 1;
  // the starting height index from both sides
  var leftIndex = 0;
  var rightIndex = heights.length - 1;
  var height = 0;
  var max = 0;
  while (i < j) {
    // try to update the height to a higher one
    if (heights[leftIndex] < heights[i]) {
      leftIndex = i;
    }
    if (heights[rightIndex] < heights[j]) {
      rightIndex = j;
    }
    // the height will be the lower one between the two
    height = Math.min(heights[leftIndex], heights[rightIndex]);
    // try to update the max area
    max = Math.max(max, height * (rightIndex - leftIndex));
    i++;
    j--;
  }
  return max;
}

console.log(containerWithMostWater(heights1))
console.log(containerWithMostWater(heights2))
console.log(containerWithMostWater(heights3))
console.log(containerWithMostWater(heights4))
/*****************************************************************************/

/* 
https://leetcode.com/problems/compare-version-numbers/
Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
Helpful methods:
  - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
  - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1";
const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2";
const expected4 = 1;

const test5V1 = "1.01";
const test5V2 = "1.001";
const expected5 = 0;
// Explanation: Ignoring leading zeroes, both ???01??? and ???001" represent the same number ???1???

const test6V1 = "1.0.1";
const test6V2 = "1";
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 * - Time: O(?).
 * - Space: O(?).
 */
function compareVersionNumbers(v1, v2) {
  let splitV1 = v1.split('.').map(split => parseInt(split)).join('')
  let splitV2 = v2.split('.').map(split => parseInt(split)).join('')
  console.log(splitV2, splitV1);
  if (splitV2 > splitV1) {
    return -1
  } else if (splitV1 > splitV2) {
    return 1
  } else {
    return 0
  }
}