function add(num1, num2) {
    return num1 + num2;
}
  
function subtract(num1, num2) {
    return num1 - num2;
}
  
function multiply(num1, num2) {
    return num1 * num2;
}
  
function divide(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    } else {
      return "Cannot divide by zero";
    }
}
  
const operation = prompt("Enter operation (+, -, *, /):");
const number1 = parseFloat(prompt("Enter the 1st number:"));
const number2 = parseFloat(prompt("Enter the 2nd number:"));
  
let result;
  
switch (operation) {
    case "+":
      result = add(number1, number2);
      break;
    case "-":
      result = subtract(number1, number2);
      break;
    case "*":
      result = multiply(number1, number2);
      break;
    case "/":
      result = divide(number1, number2);
      break;
    default:
      result = "Invalid operation";
}
  
console.log("Result: " + result);
  