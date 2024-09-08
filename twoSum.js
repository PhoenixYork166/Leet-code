/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// nums = [1, 5, 9]
// target = 10
// [0, 2]

// i = 0
// j = 1
// 1 + 5 ? 10 No

// i = 0
// j = 2
// 1 + 9 ? 10 Yes
// if (i != j) continue

// time complexity: 0(N^2)
// space complexity: 0(1) - constant

// time complexity: 0(N)
// space compleity: 0(N)
// Hashmap


// map = { 
//    1: 0, 
//    5: 1, 
//    9: 0
// }

// i = 2
// value = 9
// complement_pair = 10 - 9 = 1
// [0, 2]

// const nums = [2,7,11,15]
// const target = 9;

const nums = [3,2,4]
const target = 6;

var twoSum = function(nums, target) {
    var map = {}; // O(1) - Initializing a map is a constant time operations

    for (let i=0; i < nums.length; i++) { // O(n) - The loop runs n times where n = nums.length
        var value = nums[i]; // O(1) - Accessing an array element by index is a constant time operation
        var complementPair = target - value; // O(1) - Calculating the complement is a constant time arithmetic operation

        if (map[complementPair] !== undefined) { // O(1) - Checking for a property in a hashMap is a constant time operation
            return [map[complementPair], i]; // O(1) - Return array elements is a constant time operation
        } else {
            map[value] = i; // O(1) - Setting a property in a hashMap is a constant time operation
        }
    }
}
console.log(twoSum(nums, target)); // O(1) - console.log is outside the loop & runs in constant time
// O(n + 7) => O(7n)

/* O(n^2) performance */
// const twoSum = (nums, target) => {
//     for (let i=0; i < nums.length; i++) {
//         for (let j=i+1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 console.log(`sum to 6: array[${[i]}] + array[${[j]}]`);
//                 // return [i, j];
//             }
//         }
//     }    
// };
// twoSum(nums, target);