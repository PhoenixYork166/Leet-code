var isPalindrome = function(x) {
    let reversed = x.toString().split('').reverse().join('')
    // console.log(typeof(reversed))
    return ( x.toString() === reversed );
};

