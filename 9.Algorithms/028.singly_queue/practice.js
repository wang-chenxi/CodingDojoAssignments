class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value) {
        var newNode = new SLNode(value);
        //no chance to only have head but no tail
        if (this.size == 0) {
            // set both head and tail pointing to the same node
            this.head = this.tail = newNode;
        }
        // set tail pointer to new node, and set the new node to the new tail
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
        return;
    }
    dequeue() {
        // check if the list is empty
        if (this.head == null) {
            console.log("empty list!");
            return;
        }
        // set temp equal to head to pop off
        let temp = this.head;
        // check if there's only one node in the queue
        if (this.head.next == null) {
            this.head = null;
            this.tail = null;
        }
        this.head = this.head.next;
        this.size--;
        return temp.value; //return the value was poped
    }
    isEmpty() {
        if (this.size == 0) {
            return true;
        } else {
            return false;
        }
    }
    getSize() {
        return this.size;
    }
    front() {
        if (this.head == null) {
            console.log("empty list!");
            return;
        }
        return this.head.value;
    }

    printPretty() {
        if (this.head == null) {
            console.log("LIST EMPTY")
            return
        }
        // IF THE LIST IS NOT EMPTY
        var runner = this.head
        let newString = "";
        while (runner != null) {
            newString += runner.value + " ";
            runner = runner.next
        }
        console.log(newString);
    }
}

var newQueue = new SLQueue();
newQueue.enqueue(10);
newQueue.enqueue(20);
newQueue.enqueue(30);
newQueue.enqueue(40);
newQueue.enqueue(50);
newQueue.printPretty();
console.log(newQueue.dequeue());
newQueue.printPretty();

console.log(newQueue.isEmpty());
console.log(newQueue.getSize());
console.log(newQueue.front());
