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
            this.root.value = node;
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
    insertRecursive(val) {

    }
}