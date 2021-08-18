class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }
    search(val) {
        // BST IS EMPTY
        if (this.root === null) {
            return false;
        }
        // BST IS NOT EMPTY
        var runner = this.root

        while (runner != null) {
            // IS THE VALUE WITHIN THE NODE
            if (runner.value === val) {
                return true
            }
            else if (val < runner.value) {
                runner = runner.left
            }
            else if (val > runner.value) {
                runner = runner.right
            }
        }
        return false
    }

    insertIterative(val) {
        // IS THE BST EMPTY?
        if (this.root == null) {
            var node = new BSTNode(val);
            this.root = node;
        }
        // HAVE YOUR RUNNER END UP IN THE COORECT SPOT
        var runner = this.root;
        while (runner != null) {
            if (val < runner.value) {
                if (runner.left == null) {
                    runner.left = new BSTNode(val);
                    return;
                }
                runner = runner.left;
            } else if (val > runner.value) {
                if (runner.right == null) {
                    runner.right = new BSTNode(val);
                    return;
                }
                runner = runner.right;
            }
        }
    }



    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        if (this.root == null) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min() {

    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
        // 1. BASE CASE - WHEN THE NODE GIVEN IS NULL
        if (current.left == null) {
            return current.value;
        } else {
            return minRecursive(current.left);
        }
        // 2. FORWARD PROGRESS
        // 3. RECURSIVE CALL
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max() {

    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
        if (current.right == null) {
            return current.value;
        } else {
            return this.maxRecursive(current.right);
        }
    }

    ///         WEDNESDAY           ///
    printInOrder(node = this.root) {
        // 1. BASE CASE - CHECK TO SEE IF NODE IS NULL
        if (node == null) {
            return;
        }
        // 2. FORWARD PROGRESS
        else {
            this.printInOrder(node.left);
            console.log(node.value);
            this.printInOrder(node.right);
        }
        // 3. RECURSIVE CALL
    }



    // RETURN A BST TREE GIVEN A SORTED ARRAY
    sortedArrToBST(arr) {
        // this function should only be called once, so we want to make the main logic in a separate helper
        this.root = this.sortedArrToBSTHelper(arr)
    };
    sortedArrToBSTHelper(arr) {
        // 1. BASE CASE
        if (arr.length < 1) {
            return null
        }
        // 2. FORWARD PROGRESS
        // CREATE A BST NODE WITH THE MIDDLE NUMBER OF THE CURRENT ARRAY
        var middle = Math.floor(arr.length / 2)
        var node = new BSTNode(arr[middle])
        node.left = this.sortedArrToBSTHelper(arr.slice(0, middle))
        node.right = this.sortedArrToBSTHelper(arr.slice(middle + 1, arr.length))
        return node
        // 3. RECURSIVE CALL
    };
}

//testcase

let binTree = new BST();
binTree.insertIterative(28);
binTree.insertIterative(45);
binTree.insertIterative(5);
binTree.insertIterative(2);
binTree.insertIterative(14);
binTree.printInOrder();

