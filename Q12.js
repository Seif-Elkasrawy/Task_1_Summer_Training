function storeAndPrintArray(numElements) {
    var array = [];
    for (let i = 0; i < numElements; i++) {
      const element = parseInt(prompt(`Enter element - ${i} :`));
      array.push(element);
    }
  
    console.log("Elements in the array:");
    for (let i = 0; i < array.length; i++) {
      console.log(`element - ${i} : ${array[i]}`);
    }
}
  
  
const numElements = 10;
  
storeAndPrintArray(numElements);
  