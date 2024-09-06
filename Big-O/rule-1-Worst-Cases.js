/*
Rule1: Worst Case

We have a very large array, yet the targetElement
is at the end of this large array
*/

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
// Create an Array with nemo 10000 times
const large = new Array(100000).fill('nemo');
function findNemo(array) {
    // let t0 = performance.now();
    for (let i=0; i < array.length; i++) {
        console.log('running')
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
            // Exiting a condition when condition is met
            break;
        }
    }
    // let t1 = performance.now()
    // console.log('Call to find Nemo took ' + (t1-t0) + ' ms')
}

/* Worst case: 'nemo' is everyone.at(-1) */