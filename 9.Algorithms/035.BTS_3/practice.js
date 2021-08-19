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

    size(node = this.root) {
        var count = 0
        // 1. BASE CASE
        if (node == null) {
            return 0;
        }
        // FORWARD PROGRESS
        return this.size(node.left) + this.size(node.right) + 1;
        // RECURSIVE CALLS
    }

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height(node = this.root) {
        if (node == null) {
            return 0
        }
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }

}

//testcase

let binTree = new BST();
let bst1 = new BSTNode(1);
let bst2 = new BSTNode(2);
let bst3 = new BSTNode(3);
let bst4 = new BSTNode(4);
let bst5 = new BSTNode(5);
let bst6 = new BSTNode(6);
let bst7 = new BSTNode(7);
binTree.root = bst4;
bst4.left = bst2;
bst2.left = bst1;
bst2.right = bst3;
bst4.right = bst6;
bst6.left = bst5;
bst6.right = bst7;


console.log(binTree);
console.log(binTree.size());
console.log(binTree.height());