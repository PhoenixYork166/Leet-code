/* Different terms for inputs */
function compressBoxesTwice(boxes1, boxes2) { 
    // boxes1 can have 100 items
    // boxes2 can have 1000 items
    boxes1.forEach(function(boxes1) {
        console.log(boxes1);
    });

    boxes2.forEach(function(boxes2) {
        console.log(boxes2);
    });
}
// Big-O !== O(n)...