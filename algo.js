const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for (num of numbers) {
    if (num % 15 === 0) {
        console.log(num, 'fizz buzz');

    } else if (num % 5 === 0) {
        console.log(num, 'buzz');
    } else if (num % 3 ===0) {
        console.log(num, 'fizz');
    }
}

