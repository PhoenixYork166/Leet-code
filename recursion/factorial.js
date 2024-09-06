// Recursion approach
function factorial(num) {
  let res

  if (num === 0) {
    return 1;
  }  else if (num < 0) {
    return -1;
  } else {
    return (num * factorial(num - 1));
  }
}
factorial(8);

// ====
// For loop
function fact(num) {
  let result = num
  for (i=num-1; i > 0; i--) {
    console.log(i)
    result = result * i
  }
  return result
}

const print = fact(8);
console.log(print);