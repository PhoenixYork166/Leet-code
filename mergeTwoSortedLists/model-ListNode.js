class ListNode {
    constructor(value, next) {
        this.value = (value === undefined ? 0 : value); // storing the value of the node
        this.next = (next === undefined ? null : next); // if it is the last node => null
    }
}

module.exports = ListNode;