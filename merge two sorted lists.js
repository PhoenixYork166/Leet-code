// You're given the heads of 2 sorted linked lists
// list1 & list2

// Merge 2 lists in a one Sorted list
// The list should be made by splicing together
// the nodes of first 2 lists

// Ex1
// Input:
// list1 = [1,2,4]
// list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Ex2
// Input:
// list1 = []
// list2 = []
// Output: []

// Ex3
// Input:
// list1 = []
// list2 = [0]
// Output: [0]

// Constraints:
// # of nodes in both lists is in range [0, 50]
// -100 <= Node.val <= 100
// Both list1 & list2 are sorted in non-decreasing order

// 1 -> 2 -> 4
// 1 -> 3 -> 4

const list1 = [1,2,4]
const list2 = [1,3,4]
const result = []

const mergeTwoLists = (list1, list2) => {
    let curr = new ListNode();
    const dummy = curr;

    while(list1&&list2) {
        if(list1.val<list2.val) {
            curr.next=list1;
            list1=list1.next;
        } else {
            curr.next=list2;
            list2=list2.next;
        }
    }
    if(list1) {
        curr.next = list1;
    }
    if(list2) {
        curr.next = list2;
    }
    // console.log(JSON.stringify(dummy));
    return dummy.next;
}

mergeTwoLists();