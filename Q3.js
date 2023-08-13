var input = prompt("Write some text: ");

//split string to elements in array -> reverse elements -> join into a string again

var reversed = input.split("").reverse().join("");

console.log(reversed);