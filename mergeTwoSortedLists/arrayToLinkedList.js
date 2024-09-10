const ListNode = require('./model-ListNode');

function arrayToLinkedList(arr) {
    if (arr.length === 0) {
        return null; // Return null if the array is empty
    }

    let head = new ListNode(arr[0]); // Create the head node with 1st element
    let current = head; // This 'current' will be used to traverse & build the list

    for (let i=1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]); // Create & link the next node
        current = current.next; // Move the current node to the next node
    }
    return head; // Return the head of the list
}

module.exports = arrayToLinkedList;