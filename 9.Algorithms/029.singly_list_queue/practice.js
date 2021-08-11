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
    }
}

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(value) {
        var new_node = new SLNode(value);

        if (this.isEmpty()) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
        this.size++;
        return this;
    }
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        var removed_val = this.head.value;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }
        this.size--;
        return removed_val;

    }
    isEmpty() {
        return !this.head;
    }
    getSize() {
        return this.size;
    }
    front() {
        return this.head ? this.head.value : null;
    }

    printPretty() {
        let runner = this.head;
        let printString = "~ SLQueue ~ HEAD--(";
        while (runner && runner.next) {
            printString += runner === this.tail ? "TAIL " : "";
            printString += `${runner.value})->(`;
            runner = runner.next;
        }
        printString += runner === this.tail ? "TAIL " : "";
        printString += `${runner.value})->null\n`;
        console.log(printString);
    }
    // equals
    // Write a method on the Queue class that, given another queue, 
    // will return whether they are equal (same items in same order).
    // Do not use any extra array or objects as storage.
    // Do not alter (pop from or push into) either queue.
    equals(secondQ) {
        // if the size is different, it's false
        if (this.size != secondQ.size) {
            return false;
        }
        //edge case
        if (this.size == secondQ.size == 0) {
            return true;
        }
        // set up runner to iterate the two queues
        let runner1 = this.head;
        let runner2 = secondQ.head;
        while (runner1 != null) {
            // if the value of runner is different, return false
            if (runner1.value != runner2.value) {
                return false;
            }
            //move runner to the next
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
        // if all the nodes in both queue are same, return true
        return true;
    }

    // isPalindrome
    // Write a method on the Queue class that returns whether or not the queue is a palindrome
    // Use only 1 stack as additional storage (no additional arrays / objects).
    isPalindrome() {
        // create an empty stack
        var stack = new SLStack();
        // edge case
        if (this.size < 2) {
            return true;
        }
        // create a runner and copy the queue to the stack with same order
        var runner = this.head;
        while (runner != null) {
            stack.push(runner.value);
            runner = runner.next;
        }
        // use the FIFO and LIFO to compare whether the queue is palindrome
        while (this.head != null) {
            if (this.dequeue() != stack.pop()) {
                // if not, return false
                return false;
            }
        }
        // if successfully run through all the nodes, return true
        return true;
    }
}



/* 
 _____ _____ ____ _____ ___ _   _  ____ 
|_   _| ____/ ___|_   _|_ _| \ | |/ ___|
  | | |  _| \___ \ | |  | ||  \| | |  _ 
  | | | |___ ___) || |  | || |\  | |_| |
  |_| |_____|____/ |_| |___|_| \_|\____|
*/

var q1 = new SLQueue()
q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3)

var q2 = new SLQueue()
q2.enqueue(3)
q2.enqueue(2)
q2.enqueue(1)
console.log(q1.equals(q2)) // SHOULD RETURN FALSE

var q3 = new SLQueue()
q3.enqueue("a")
q3.enqueue("b")
q3.enqueue("a")
console.log(q3.isPalindrome()) // SHOULD RETURN FALSE

var q4 = new SLQueue()
var q5 = new SLQueue()
console.log(q4.equals(q5))