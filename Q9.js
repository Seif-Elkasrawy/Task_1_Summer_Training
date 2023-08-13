function computeSum(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
  }
  
  const start = 1;
  const end = 10;
  
  const result = computeSum(start, end);
  console.log(`The sum of numbers from ${start} to ${end} is: ${result}`);
  