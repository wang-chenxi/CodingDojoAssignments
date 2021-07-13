/* 
    Three challenges!

    addToFront: Write a method of the SLList class that accepts a value, and adds a node with that 
    value to the front of the list. 
    
    Steps:
        1. Create a new node
        2. Assign that node's next attribute to the list's current head
        3. Assign the list's current head to the new node

    KEEP IN MIND: What dictates that a node is the first element in the list? Might need to reset that.

    addToBack: Write a method of the SLList class that accepts a value, and adds a node with that
    value to the BACK of the list.

    Steps:
        1. Create a new node
        2. Start at the head of the list
        3. Run to the last node
        4. Set the last node's next attribute to the new node
    EDGE CASE: What if the list is empty? How do we even know if the list is empty?

    contains: Write a method of the SLList class that accepts a value, and returns a boolean based
    on whether or not a node with that value exists in the list

    Steps:
        1. Start at the head of the list
        2. Check if the value of the node we're looking at equals the value passed in
        3. If it does, return true
        4. If not, go to the next node.
        5. If we checked every single node and we're still running the method, the value does not exist in the list.
*/

class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null; // Why??
    }
}

class SLList {
    constructor() {
        this.head = null;
    }

    // need to make a instance for the SLList to make it work



    addToFront(value) {
        // Your Code Here
        var new_node = new SLNode(value);
        // make a new instance of SLNode 
        new_node.next = this.head;
        // shouldn't use SLList.head, but this. this refers to an instance of SLList
        this.head = new_node;
        return this;
    }

    addToBack(value) {
        if (this.head == null) {
            this.addToFront(value);
            return this;
        }

        var new_node = new SLNode(value);
        var runner = this.head;
        while (runner.next != null) {
            runner = runner.next;
        }
        runner.next = new_node;
        return this;
    }

    contains(value) {
        if (this.head == null) {
            return false;
        }
        //it can still work if we don't put the above three lines
        var runner = this.head;
        while (runner.next != null) {
            if (value == runner.value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
}

var newList = new SLList();

newList.addToBack(5).addToBack(1).addToFront(3);

var contains5 = newList.contains(5);
var contains5Expected = true;

var contains2 = newList.contains(2);
var contains2Expected = false;

var contains3 = newList.contains(3);
var contains3Expected = true;

console.log(contains5, contains2, contains3)