function Multiple(num) {
    if (num % 5 == 0) return "Multiple of 5";
    else if (num % 8 == 0) return "Multiple of 8";
    else return "Not a multiple of 5 or 8";
}

var userInput = prompt("Enter a number: ");
var num = parseInt(userInput);

var result = Multiple(num);

console.log(result);