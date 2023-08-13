function EvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

var userInput = prompt("Enter a number: ");
var num = parseInt(userInput); 

if (!isNaN(num)) {
    var result = EvenOrOdd(num);
    console.log(`The number ${num} is ${result}.`);
} else {
    console.log("Invalid input. Please enter a valid number.");
}








