//  TUESDAY -------------------------------------------------------------------//
/**
 * Prints all the nodes in the list to the console.
 * of this list.
 * - Time: (?).
 * - Space: (?).
 * @returns {SinglyLinkedList} This list.
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


    printValues() {
        if (this.head == null) {
            console.log("LIST EMPTY")
            return
        }
        // IF THE LIST IS NOT EMPTY
        var runner = this.head
        while (runner != null) {
            console.log(runner.value)
            runner = runner.next
        }
    }
    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: (?).
     * - Space: (?).
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
     */
    insertAtBack(data) {
        var node = new SLNode;
        SLNode.value = data;
        // 1. SLL IS EMPTY
        if (this.head == null) {
            this.head = node;
        }
        // 2. SLL IS NOT EMPTY
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = node;
        return this;
    }

    /**
     * Adds each item of the given array to the back of this list.
     * - Time: (?).
     * - Space: (?).
     * @param {Array<any>} vals The data for each new node.
     * @returns {SinglyLinkedList} This list.
     */
    seedFromArr(vals) {
        for (value in vals) {
            this.insertAtBack(value);
        }
        return this;
    }
}