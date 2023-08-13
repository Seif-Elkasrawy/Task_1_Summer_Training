function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * calculateFactorial(number - 1);
    }
}

var input = prompt("Enter a number:");
var num = parseInt(input);
  
const factorial = calculateFactorial(num);
console.log(`The factorial of ${num} is: ${factorial}`);
  