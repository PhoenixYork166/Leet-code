function linkedListToArray(node) {
    const result = [];
    while (node) {
        result.push(node.value);
        node = node.next;
    }
    return result;
}

module.exports = linkedListToArray;