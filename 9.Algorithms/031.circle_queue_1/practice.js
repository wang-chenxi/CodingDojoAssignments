class CircleQueue {
    constructor(capacity) {
        this.size = 0
        this.head_index = -1
        this.tail_index = -1

        // Items is an array with length == capacity 
        // where all values are undefined
        this.items = new Array(capacity)

        this.capacity = capacity

    }

    // Adds a new element into the list.
    enqueue(val) {
        // CIRCLE QUEUE IS FULL
        if (this.size == this.capacity) {
            return "the circle is full";
        }

        // CIRCLE QUEUE IS EMPTY
        else if (this.head_index === -1) {
            this.head_index = 0;
            this.tail_index = 0;
            this.items[this.head_index] = val;
            this.size++;
        }
        // CIRCLE QUEUE IS PARTIALY FULL
        else {
            this.tail_index++;
            if (this.tail_index == this.capacity) {
                this.tail_index = 0;
            }
            // we can also do with one step directly:
            //this.tail_index = (this.tail_index+1)% capacity

            this.items[this.tail_index] = val;
            size++;
        }
        return;
    }

    dequeue() {
        // CIRCLE QUEUE IS EMPTY SO NOTHING TO DQUEUE
        if (this.size == 0) {
            return "this queue is empty, nothing to dequeue";
        }
        // CRICLE QUEUE IS EMPTY AFTER DEQEUEE
        if (this.size == 1) {
            var item = this.items[this.head_index];
            this.items[this.head_index] == null;
            this.head_index = -1;
            this.tail_index = -1;
            size--;
            return item;
        }
        // CIRCLE QUEUE IS PARTIALLY AFTER DEQUEUE
        else {
            var item = this.items[this.head_index];
            this.items[this.head_index] == null;
            this.size--;
            this.head_index = (this.head_index + 1) % this.capacity;
            return item;
        }

    }

}

