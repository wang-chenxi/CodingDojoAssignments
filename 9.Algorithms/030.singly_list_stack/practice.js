class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLStack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    isEmpty() {
        return this.head == null;
    }
    push(value) {
        var new_node = new SLNode(value);
        new_node.next = this.head;
        this.head = new_node;
        this.length++;
    }
    pop() {
        if (!this.head) {
            return null;
        }
        var removed = this.head.value;
        this.head = this.head.next;
        this.length--;
        return removed;
    }

    size() {
        return this.length;
    }

    peek() {

        return this.head ? this.head.value : null;
    }
    printPretty() {
        let runner = this.head;
        let printString = "~ SLStack ~ HEAD--(";
        while (runner && runner.next) {
            printString += `${runner.value})->(`;
            runner = runner.next;
        }
        printString += `${runner.value})->null\n`;
        console.log(printString);
    }
    reverse() {
        var tempStack = new SLStack();
        while (this.head) {
            tempStack.push(this.pop());
        }
        this.head = tempStack.head;
        this.length = tempStack.length;
        return this;
    }

    /** Methods will be in the STACK class
 * Returns a new stack that is copy of the original stack.
 * Retain the original order. You may create extra temp 
 * SLStacks and/or SLQueues 
 * as storage.
 * - Time: O(?).
 * - Space: O(?).
 * Copy of the original stack
 */
    copy() {
        var stack = new SLStack();
        while (!this.isEmpty()) {
            stack.push(this.pop());
        }
        return stack;
    }

    /**
     * Rearranges the stack so that numbers > 0 are 
     * on the top and any negatives are on the bottom
     * Retain the order of the positives and negatives
     * Use extra stacks and/or queues as storage.
     * - Time: O(?).
     * - Space: O(?).
     */
    partitionPositives() {
        var positiveStack = new SLStack();
        var negativeStack = new SLStack();
        while (this.size()) {
            if (this.peek() >= 0) {
                positiveStack.push(this.pop());
            } else {
                negativeStack.push(this.pop());
            }
        }
        negativeStack.reverse();
        while (negativeStack.size()) {
            positiveStack.push(negativeStack.pop());
        }
        return positiveStack;
    }
}

var s1 = new SLStack();
s1.push(1);
s1.push(2);
s1.push(3);
console.log(s1.copy()); // => [1,2,3]

var s2 = new SLStack();
s2.push(1);
s2.push(-2);
s2.push(-3);
s2.push(5);
s2.push(6);
console.log(s2.partitionPositives()) //=>[-2,-3,1,5,6]