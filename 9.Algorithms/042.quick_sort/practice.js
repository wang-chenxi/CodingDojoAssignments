/* 
  Params: nums, left, right
    - left and right are indexes, for now, left will be 0, and right will be
        the last idx.
    - later these params will be used to specify a sub section of the array to
        partition.
  Steps:
  1. Pick an number out of the arr to be your pivot value
    - usually the middle idx but can be any.
  2. Partition the array IN PLACE such that all values less than the pivot
      value are to the left of it and all values greater than the pivot value
      are to the right (not perfectly sorted).
  3. return: the index where the left section of smaller items ends.
  "Choosing a random pivot minimizes the chance that you will encounter
  worst-case O(n^2) performance (always choosing first or last would cause
  worst-case performance for nearly-sorted or nearly-reverse-sorted data).
  Choosing the middle element would also be acceptable in the majority of
  cases."
  https://stackoverflow.com/questions/164163/quicksort-choosing-the-pivot
*/

const nums1 = [11, 8, 14, 3, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [5, 2, 3, 1]
const nums5 = [5, 1, 1, 2, 0, 0]
const nums6 = [1, 2]
const nums7 = [2, 1]

/**
 * Partitions the given array in-place by selecting the number at the middle
 * index to use it as a "pivot" value, then arranges all numbers less than the
 * pivot to be to it's left and all larger numbers to the right of the pivot.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @param {number} left The index indicating the start of the slice of array
 *    being processed.
 * @param {number} right The index indicating the end of the slice of array
 *    being processed.
 * @returns {Array<number>} The idx where left section of smaller items ends.
 */
// function partition(nums = [], left = 0, right = nums.length - 1) {
//     var pivot = nums[Math.floor(nums.length / 2)];
//     console.log(pivot)
//     var i = left;
//     var j = right;
//     while (i < j) {
//         if ((nums[i] < pivot) && (nums[j] > pivot)) {
//             i++;
//             j--;
//         }
//         else if ((nums[i] > pivot) && (nums[j] > pivot)) {
//             j--;
//         }
//         else if ((nums[i] > pivot) && (nums[j] < pivot)) {
//             var temp = nums[i];
//             nums[i] = nums[j];
//             nums[j] = temp;
//             i++;
//             j--;
//         } else {
//             i++;
//         }
//     }
//     var temp = pivot;
//     nums[Math.floor(nums.length / 2)] = nums[i]
//     nums[i] = temp
//     return nums;

// }

function partition(nums = [], left = 0, right = nums.length - 1) {
    var pivot = nums[right];
    var i = left;
    var j = right;
    while (i < j) {
        // find the first invalid nums[i] from the left
        while (i < j && nums[i] < pivot) {
            i++;
        }
        // find the first invalid nums[j] from the right
        while (i < j && nums[j] >= pivot) {
            j--;
        }
        // swap nums[i] and nums[j]
        var temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;

    }
    // swap nums[i] and nums[right]
    var temp = nums[i];
    nums[i] = pivot;
    nums[right] = temp;

    return i;
}

console.log("nums1:", partition(nums1))
console.log("nums2:", partition(nums2))
console.log("nums3:", partition(nums3))
console.log("nums4:", partition(nums4))
console.log("nums5:", partition(nums5))
console.log("nums6:", partition(nums6))
console.log("nums7:", partition(nums7))

module.exports = { partition };


