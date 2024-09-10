function linkedListToArray(node) {
    const result = new Array();

    while (node) {
        result.push(node.value);
        node = node.next;
    }

    console.log(`linkedListToArray result:\n${result}\n`);
    return result;
}

module.exports = linkedListToArray;