function findLargestNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
  
var input1 = prompt("Enter 1st number: ");
var number1 = parseInt(input1);
var input2 = prompt("Enter 2nd number: ");
var number2 = parseInt(input2);
var input3 = prompt("Enter 3rd number: ");
var number3 = parseInt(input3);
  
var largestNumber = findLargestNumber(number1, number2, number3);
console.log(`The largest number is: ${largestNumber}`);
  