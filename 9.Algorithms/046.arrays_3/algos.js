/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
  The first element is never considered non-consecutive.
  Return an array of objects where each object contains the number itself
  and it's index.
*/

const nums = [1, 2, 3, 4, 6, 7, 8, 10];
const expected = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */
function allNonConsecutive(sortedNums) {
  var result = [];
  for (var i = 1; i < sortedNums.length; i++) {
    console.log("test")
    if (sortedNums[i] - sortedNums[i - 1] > 1) {
      console.log("find it")
      result.push({ i, n: sortedNums[i] });
    }
  }
  return result;
}

const nonConsec = (sortedNums) => {
  let nonConsecs = [];
  for (let i = 0; i < sortedNums.length - 1; i++) {
    if ((sortedNums[i] + 1) != sortedNums[i + 1]) {
      nonConsecs.push({ i: i + 1, n: sortedNums[i + 1] })
    }
  }
  return nonConsecs
}

console.log(allNonConsecutive(nums))
//console.log(nonConsec(nums))

/*****************************************************************************/

// Interview Algo given to alumni Oct 2019

/* 
  You are given a list of integers. Find all the consecutive sets of 
  integers that adds up to the sum passed in as one of the inputs.
*/

const nums1 = [2, 5, 3, 6, 7, 23, 12];
const sum1 = 16;
const expected1 = [
  [2, 5, 3, 6],
  [3, 6, 7],
];

// Bonus:
const nums2 = [2, 5, 3, 6, 7, 0, 0, 23, 12];
const sum2 = 16;
const expected2 = [
  [2, 5, 3, 6],
  [3, 6, 7],
  [3, 6, 7, 0],
  [3, 6, 7, 0, 0],
];

// Bonus:
const nums3 = [-2, -5, -3, -6, -7, -0, -0, -23, -12];
const sum3 = -16;
const expected3 = [
  [-2, -5, -3, -6],
  [-3, -6, -7],
  [-3, -6, -7, -0],
  [-3, -6, -7, -0, -0],
];

/**
 * Finds all the sets of consecutive numbers that sum to the given target sum.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Unordered nums.
 * @param {number} targetSum
 * @returns {Array<Array<number>>} 2d array where each nested array is a set of
 *    consecutive numbers that add up to the given targetSum. Consecutive in
 *    this context means the numbers whose indexes are one after the other
 *    only.
 */

function findConsqSums2(nums, targetSum) {
  let results = []
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    idx = i;
    while ((targetSum >= 0 && sum <= targetSum) || (targetSum < 0 && sum >= targetSum)) {
      sum += nums[idx];
      if (sum === targetSum) {
        results.push(nums.slice(i, idx + 1));
      }
      idx++;
    }
  }
  return results;
}

console.log(findConsqSums2(nums1, sum1))
console.log(findConsqSums2(nums2, sum2))
console.log(findConsqSums2(nums3, sum3))