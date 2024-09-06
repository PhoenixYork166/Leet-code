/* Example 1 */
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]); // O(1)

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) { // O(n/2)
        console.log(items[index]);
        index++; 
    }

    for (var i =0; i < 100; i++) { // O(100)
        console.log('hi');
    }
}
// O(n/2 + 101) => 
// Dropping Constants => O(n/2 + 1)
// Dropping Constants => O(n)

/* Example 2 */
function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes) {
        console.log(boxes);
    });

    boxes.forEach(function(boxes) {
        console.log(boxes);
    });
}
// O(n) + O(n) => O(2n) 
// Dropping Constants => O(n)