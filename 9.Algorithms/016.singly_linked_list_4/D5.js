/*
    We're rocking 2 algos again today: prepend and append values.

    Prepend => 2 parameters: valueToFind, valueToAdd
    - Find the node with a value of valueToFind, and add a new node with a value of
    valueToAdd before it.

    EXAMPLE: 
    someList = H: 5 -> 4 -> 2 -> 1 ->

    someList.prepend(2, 3) would make someList H: 5 -> 4 -> 3 -> 2 -> 1 ->

    Append => 2 parameters: valueToFind, valueToAdd
    - Find the node with a value of valueToFind, and add a new node with a value of
    valueToAdd after it.

    EXAMPLE:
    someList = H: 7 -> 2 -> 4 -> 8 -> 11 ->

    someList.append(4, 5) would make someList H: 7 -> 2 -> 4 -> 5 -> 8 -> 11 ->

    SOME EDGE CASES:
    - What if the list is empty?
    - What if the value I'm looking for isn't there?
        - You can just return False in that case.
*/

class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLList {
    constructor() {
        this.head = null;
    }

    addToFront(value) {
        var newHead = new SLNode(value);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    addToBack(value) {
        if (this.head == null) {
            this.addToFront(value);
            return this;
        }

        var newNode = new SLNode(value);
        var runner = this.head;

        while (runner.next != null) {
            runner = runner.next;
        }

        runner.next = newNode;
        return this;
    }

    contains(value) {
        if (this.head == null) {
            return false;
        }

        var runner = this.head;

        while (runner != null) {
            if (runner.value == value) {
                return true;
            } else {
                runner = runner.next;
            }
        }

        return false;
    }

    removeFront() {
        if (this.head == null) {
            return false;
        }

        var nodeToRemove = this.head;
        this.head = nodeToRemove.next;
        nodeToRemove.next = null;

        return nodeToRemove;
    }

    removeBack() {
        if (this.head == null) {
            return false;
        } else if (this.head.next = null) {
            return this.removeFront();
        }

        var lagger = null;
        var leader = this.head;
        while (leader.next != null) {
            lagger = leader;
            leader = leader.next;
        }

        lagger.next = null;
        return leader;
    }

    moveMinToFront() {
        if (this.head == null || this.head.next == null) {
            return this;
        }

        var minPrev = null;
        var min = this.head;

        var lagger = null;
        var leader = this.head;

        while (leader != null) {
            if (leader.value < min.value) {
                min = leader;
                minPrev = lagger;
            }

            lagger = leader;
            leader = leader.next;
        }

        if (min != this.head) {
            minPrev.next = min.next;
            min.next = this.head;
            this.head = min;
        }
        return this;
    }

    moveMaxToBack() {
        if (this.head == null || this.head.next == null) {
            return this;
        }
        var maxPrev = null;
        var max = this.head;

        var lagger = null;
        var leader = this.head;

        while (leader != null) {
            if (leader.value > max.value) {
                max = leader;
                maxPrev = lagger;
            }

            lagger = leader;
            leader = leader.next;
        }
        if (max = this.head) {
            this.head = max.next;
        } else {
            maxPrev.next = max.next;
        }
        lagger.next = max;
        max.next = null;
        return this;
    }

    prependValue(valueToFind, newValue) {
        // test if the list is empty
        if (this.head == null) {
            return false;
        }
        // initialize a runner
        var runner = this.head;
        // since I use one runner, so I have an edge case if the value to find is the head of list
        if (valueToFind == this.head.value) {
            var newNode = new SLNode(newValue);
            newNode.next = this.head;
            this.head = newNode;
            return;
        }
        // use one runner to go through the loop
        while (runner.next != null) {
            // if the [value to find] is the node after the current runner 
            if (runner.next.value == valueToFind) {
                // create a new node and assign the desired value
                var newNode = new SLNode(newValue);
                // let the new node point to the [value to find] node (current runner.next)
                newNode.next = runner.next;
                // let the current runner point to the new node
                runner.next = newNode;
                return;
            }
            runner = runner.next;
        }
        // we return false if we cannot find anything
        return false;
    }

    appendValue(valueToFind, newValue) {
        if (this.head == null) {
            return false;
        }
        var runner = this.head;
        // the edge case is when the [value to find] is the last node, so we execute the logic first, and then move the runner
        do {
            if (runner.value == valueToFind) {
                var newNode = new SLNode(newValue);
                newNode.next = runner.next;
                runner.next = newNode;
                return;
            }
            runner++;
        } while (runner.next != null);
        return false;
    }
}

var list = new SLList();
list.addToBack(2).addToBack(1);
console.log("before: ", list);
list.appendValue(24, 3);
console.log(list.appendValue(24, 3));
console.log("after: ", list);