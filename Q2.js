for (let i = 1, text; i <= 100; i++, text = "") {
    if (i % 3 == 0) text += 'Fizz';
    if (i % 5 == 0) text += 'Buzz';
    console.log(text || i);
}
