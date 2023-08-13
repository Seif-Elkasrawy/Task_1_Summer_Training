function calcCircleArea(radius) {
    return Math.PI * radius * radius;
}
  
function calcCircleCirc(radius) {
    return 2 * Math.PI * radius;
}
  
var input = prompt("Enter a radius: ");
var radius = parseInt(input);
const area = calcCircleArea(radius);
const circumference = calcCircleCirc(radius);
  
console.log(`Circle Area: ${area}`);
console.log(`Circle Circumference: ${circumference}`);
  