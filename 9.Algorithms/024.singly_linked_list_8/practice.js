let head = new SLNode(1);
let runner_temp = head;
for (let i of [7, 3, 5, 2]) {
    let new_node = new SLNode(i);
    runner_temp.next = new_node;
    runner_temp = new_node;
}

console.log(head.val); //1
console.log(head.next.val); //7
console.log(head.next.next.next.val); //5