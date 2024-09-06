strict = 'true';

const treeSearch = (sortedArray, target) => {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = sortedArray[mid];

        if (midValue === target) {
            return mid; // Target found, return its index
        } else if (midValue < target) {
            left = mid + 1; // Focus on the right half
        } else {
            right = mid - 1; // Focus on the left half
        }
    }

    return -1; // Target not found in the array
}

// Using native JavaScript .find() method
const normalSearch = (sortedArray, target) => {
    const targetIndex = sortedArray.findIndex(element => element === target);
    return targetIndex;
}

const sortedArray = [1, 5, 8, 12, 15, 19, 23, 31, 7, 56];

console.time();
const index15 = normalSearch(sortedArray, 15);
console.log(`normalSearch(sortedArray, 15):\n${index15}`); // indexAt: 4
console.timeEnd(); // default: 1.117ms on a mac mini Apple M2 16GB Memory Ventura 13.2.1
console.log(`\n`);
console.time();
const input15 = treeSearch(sortedArray, 15);
console.log(`treeSearch(sortedArray, 15):\n${input15}`); // indexAt: 4
console.timeEnd(); // default: 0.035ms on a mac mini Apple M2 16GB Memory Ventura 13.2.1

console.log(`\n\n`);

console.time();
const index19 = normalSearch(sortedArray, 19);
console.log(`normalSearch(sortedArray, 19):\n${index19}`); // indexAt: 5
console.timeEnd(); // default: 0.01ms on a mac mini Apple M2 16GB Memory Ventura 13.2.1
console.log(`\n`);
console.time();
const input19 = treeSearch(sortedArray, 19);
console.log(`treeSearch(sortedArray, 19):\n${input19}`); // indexAt: 5
console.timeEnd(); // default: 0.224ms on a mac mini Apple M2 16GB Memory Ventura 13.2.1

console.log(`\n\n`);

console.time();
const index31 = normalSearch(sortedArray, 31);
console.log(`normalSearch(sortedArray, 31):\n${index31}`); // indexAt: 7
console.timeEnd(); // default: 0.018ms on a mac mini Apple M2 16GB Memory Ventura 13.2.1
console.log(`\n`);
console.time();
const input31 = treeSearch(sortedArray, 31);
console.log(`treeSearch(sortedArray, 31):\n${input31}`); // indexAt: 7
console.timeEnd(); // default: 0.016ms on a mac mini Apple M2 16GB Memory Ventura 13.2.1