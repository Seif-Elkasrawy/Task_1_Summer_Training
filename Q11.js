function PositiveOrNegative(num) {
    if (num > 0) return " is positive";
    if (num < 0) return " is negative";
}

var input = prompt("Enter a number: ");
var number = parseInt(input);

console.log(number + PositiveOrNegative(number));