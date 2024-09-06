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

// const nums = [3,2,4]
// target = 6

// var twoSum = function(nums, target) {
//     var map = {};
//     for (let i=0; i < nums.length; i++) {
//         var value = nums[i];
//         var complementPair = target - value;

//         if (map[complementPair] !== undefined) {
//             return [map[complementPair], i];
//         } else {
//             map[value] = i;
//         }
//     }
// }


const nums = [3,2,4,1,2,3,3]
const target = 6

const twoSum = (nums, target) => {
    for (let i=0; i < nums.length; i++) {
        for (let j=i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                console.log(`sum to 6: array[${[i]}] + array[${[j]}]`);
                // return [i, j];
            }
        }
    }
    
};

twoSum(nums, target);