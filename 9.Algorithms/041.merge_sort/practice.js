/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const sortedA4 = [1, 2, 4, 5, 6, 9];
const sortedB4 = [3, 7, 8, 10];
const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
function merge(left, right) {
    var array = [];
    var i = 0;
    var j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            array.push(left[i]);
            i++;
        } else {
            array.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        array.push(left[i]);
        i++;
    }
    while (j < right.length) {
        array.push(right[j]);
        j++;
    }
    return array;
}

console.log(merge(sortedA4, sortedB4))
console.log(merge(sortedA1, sortedB1))
console.log(merge(sortedA2, sortedB2))
console.log(merge(sortedA3, sortedB3))

// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(n log(n)) linearithmic.
 * Avg: O(n log(n)) linearithmic.
 * Worst: O(n log(n)) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums) {
    if (nums.length == 1) {
        return nums;
    }
    var left = mergeSort(nums.slice(0, nums.length / 2));
    var right = mergeSort(nums.slice(nums.length / 2));
    return merge(left, right);
}

console.log(mergeSort(numsRandomOrder))
console.log(mergeSort(numsReversed))