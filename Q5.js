function SumOrValue(num1, num2) {
    return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}
  
var input1 = prompt("Enter 1st number: ");
var number1 = parseInt(input1);
var input2 = prompt("Enter 2nd number: ");
var number2 = parseInt(input2);
  
if (SumOrValue(number1, number2)) {
    console.log("True");
} else {
    console.log("False");
}
  