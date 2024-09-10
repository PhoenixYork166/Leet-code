// importing the arrayToLinkedList custom function from ./arrayToLinkedList.js
const arrayToLinkedList = require('./arrayToLinkedList');
// importing the model of class ListNode {} from ./model-ListNode.js
const ListNode = require('./model-ListNode');

const linkedListToArray = require('./linkedListToArray');

// The 2 arrays representing 2 sorted lists
const list1 = [1,2,4];
let linkedList1 = arrayToLinkedList(list1);
const list2 = [1,3,4];
let linkedList2 = arrayToLinkedList(list2);

const mergeTwoLists = (list1, list2) => {
    // Create a new dummy ListNode having instantiated, acting as a non-data starting point for the new list
    let dummy = new ListNode();
    // 'current' starts at the dummy node & is used to build the new linked list
    let current = dummy;

    // Loop as long as neither list has been completely looped through
    while (list1 && list2) {
        // Compare current nodes of both lists & append the smaller one to 'current'
        if (list1.value < list2.value) {
            current.next = list1; // Point 'current.next' to 'list1' because it has the smaller head
            list1 = list1.next; // Move the 'list1' pointer to its next node
        } else {
            current.next = list2; // Point 'current.next' to 'list2' because it has the smaller or equal head
            list2 = list2.next; // Move 'list2' pointer to its next node
        }
        current = current.next; // Move 'current' pointer forward in the newly created list
    }

    // If one list is exhausted, link the remainder of the other list to 'current'
    current.next = list1 || list2;

    // console.log(`JSON.stringify(dummy):\n${JSON.stringify(dummy)}`);
    // Return the start of the new linked list, skipping the dummy node
    const mergeListArray = linkedListToArray(dummy.next);
    console.log(`Merged LinkedList as Array:\n${mergeListArray}\n`);

    return dummy.next;
}

console.log(mergeTwoLists(linkedList1, linkedList2));