// MON
// LAST IN FIRST OUT
// LIFO - STACKS
class Stack {
    constructor(items = []) {
        this.items = items;
    }
    // Time: O(1)
    // Space: O(1)
    push(item) {
        var length = this.length;
        this[length] = item;
        return;
    }

    // Time: O(1)
    // Space: O(1)
    // Returns undefined if empty
    pop() {
        var length = this.length;
        this[length - 1] = null;
        return;
    }

    // aka top, returns undefined if empty
    // Time: O(1)
    // Space: O(1)
    peek() {
        if (this.length == 0) {
            return undefined;
        }
        return this[this.length - 1];
    }

    // Time: O(1)
    // Space: O(1)
    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    // Time: O(1)
    // Space: O(1)
    size() {
        return this.length;
    }

    // Time: O(n) linear
    // Space: O(n)
    print() {
        for (var i = 0; i < this.length; i++) {
            console.log(i);
        }
    }
}

var stack = new Stack(1, 2, 3, 4);
stack.print();


class SLNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SLStack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    isEmpty() {
        if (this.head == 0) {
            return true;
        } else {
            return false;
        }
    }

    // Adds a new node with the given value in front of the head node.
    push(value) {
        var newHead = new SLNode(value);
        if (this.length != 0) {
            newHead.next = this.head;
        }
        this.head = newHead;
        this.length++;
    }

    // Removes the head node
    // return the popped value -- important!
    pop() {
        if (this.length == 0) {
            return false;
        } else if (this.length == 1) {
            var node = this.head;
            this.head = null;
            this.length = 0;
            return node;
        } else {
            var node = this.head;
            this.head = this.head.next;
            this.length--;
            node.next = null;
            return node.value;
        }
    }

    size() {
        return this.length;
    }

    peek() {
        if (this.head == null) {
            return false;
        }
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        return runner;
    }

    printPretty() {
        if (this.head == null) {
            return false;
        }
        var runner = this.head;
        while (runner.next != null) {
            console.log(runner);
            runner = runner.next;
        }
        return;
    }

    ////  EXTRA  /////
    // Reverses stack with the order of the nodes reversed
    // For this exercise, do NOT try to re-point all the pointers
    // use an extra stack as storage and utilize the pop and push 
    // methods. Hint: you can re-point the head.
    reverse() {
        if (this.head == null) {
            return;
        }
        var newStack = SLStack();
        for (var i = 0; i < this.length; i++) {
            newStack.push(this.pop);
        }
    }
}