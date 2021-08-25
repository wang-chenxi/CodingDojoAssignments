/** NEW CLASS!! MIN HEAP *****
 * 
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2)
 * - left child is located at: 2i
 * - right child is located at: 2i + 1
 */
class MinHeap {
    constructor() {
        /**
         * 0th index not used, so null is a placeholder. Not using 0th index makes
         * calculating the left and right children's index cleaner.
         * This also effectively makes our array start at index 1.
         */
        this.heap = [null];
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    getMin() {

    }

    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) {
        // 1. PUSH THE VALUE INTO THE ARRAY
        // 2. CHECK FOR PARENT VALUES, IS IT GREATER OR SMALLER?
        // 3. SWAP IF NECESSARY
        this.heap.push(num);
        var indexNum = this.heap.length - 1;
        while (indexNum > 1) {
            if (this.heap[Math.floor(indexNum / 2)] > num) {
                var temp = this.heap[Math.floor(indexNum / 2)];
                this.heap[Math.floor(indexNum / 2)] = num;
                this.heap[indexNum] = temp;
                indexNum = Math.floor(indexNum / 2);
            } else {
                return;
            }
        }
        return;
    }
}

let mh = new MinHeap();
mh.insert(2);
mh.insert(7);
mh.insert(9);
mh.insert(3);
mh.insert(1);
mh.insert(5);
console.log(mh);