//const nums = [1,1,1,3,3,4,3,2,4,2]
// const nums = [1,1,2];
const nums = [0,0,1,1,1,2,2,3,3,4];

/* .indexOf() */
// const uniqueNums = nums.filter((value, index, self) => {
//     return self.indexOf(value) === index;
// })
// console.log(uniqueNums);

/* .reduce() */
// const uniqueNums = nums.reduce((accumulator, currentValue) => {
//     if (!accumulator.includes(currentValue)) {
//         accumulator.push(currentValue);
//     }
//     return accumulator;
// }, []);
// console.log(uniqueNums);

/* hashMap / dictionary method */
const uniqueNums = Object.keys(nums.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = true;
    return accumulator;
}, {})).map(Number);
console.log(uniqueNums);
