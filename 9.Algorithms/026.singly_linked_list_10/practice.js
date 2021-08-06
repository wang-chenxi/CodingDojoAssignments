
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

    //  FRIDAY EXTRA
    /**
     * Retrieves the data of the kth to last node in this list.
     * - Time: (?).
     * - Space: (?).
     * @returns {any} The data of the kth to last node or null if there is no
     *    kth to last node.
     */
    kthToLast(k) {
        if (this.head == null) {
            return null;
        }
        var runner = this.head;
        var hash = {};
        var i = 0;
        while (runner.next != null) {
            hash.put(i, runner);
            i++;
            runner = runner.next;
        }
        if (i < k) {
            return null;
        }
        if (i == k) {
            return this.head;
        } else {
            return hash.get(i - k);
        }

    }
}