strict = 'true';

const treeSearch = (sortedArray, target) => {
    let t0 = performance.now();
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = sortedArray[mid];

        if (midValue === target) {
            let t1 = performance.now();
            console.log(`Call to find Index took ${(t1 - t0)}ms\n`);
            return mid; // Target found, return its index
        } else if (midValue < target) {
            let t1 = performance.now();
            console.log(`Call to find Index took ${(t1 - t0)}ms\n`);
            left = mid + 1; // Focus on the right half
        } else {
            let t1 = performance.now();
            console.log(`Call to find Index took ${(t1 - t0)}ms\n`);
            right = mid - 1; // Focus on the left half
        }
    }
    let t1 = performance.now();
    console.log(`Call to find Index took ${(t1 - t0)}ms\n`);
    return -1; // Target not found in the array
}

// Using native JavaScript .find() method
const normalSearch = (sortedArray, target) => {
    let t2 = performance.now();
    const targetIndex = sortedArray.findIndex(element => element === target);

    let t3 = performance.now();
    console.log(`Call to find Index took ${(t3 - t2)}ms\n`);
    return targetIndex;
}

const sortedArray = [1, 5, 8, 12, 15, 19, 23, 31, 7, 56];

const index15 = normalSearch(sortedArray, 15);
console.log(`normalSearch(sortedArray, 15):\n${index15}\n`); 

const input15 = treeSearch(sortedArray, 15);
console.log(`treeSearch(sortedArray, 15):\n${input15}\n`); // indexAt: 4

console.log(`\n\n`);

const index19 = normalSearch(sortedArray, 19);
console.log(`normalSearch(sortedArray, 19):\n${index19}\n`); // indexAt: 5
console.log(`\n`);
const input19 = treeSearch(sortedArray, 19);
console.log(`treeSearch(sortedArray, 19):\n${input19}\n`); // indexAt: 5

console.log(`\n\n`);

const index31 = normalSearch(sortedArray, 31);
console.log(`normalSearch(sortedArray, 31):\n${index31}`); // indexAt: 7
console.log(`\n`);
const input31 = treeSearch(sortedArray, 31);
console.log(`treeSearch(sortedArray, 31):\n${input31}`); // indexAt: 7