
//q1 Write a loop to print numbers from 1 to 10.

for (var i = 1; i <= 10; i++) {
      console.log(i);
}

//q2 Write a loop to print even numbers from 1 to 20.

for (var a = 1; a <= 20; a++) {
    if (a % 2 == 0) {
        console.log(a);
    }
}

//q3 Write a loop to print odd numbers from 1 to 15.

for (var a = 1; a <= 15; a++) {
    if (a % 2 == 1) {
        console.log(a);
    }
}

//q4 Write a loop to calculate and print the factorial of a number (let's say 5).

// const number = parseInt(prompt('Enter a positive integer: '));
// if (number < 0) {
//     console.log('Error! Factorial for negative number does not exist.');
// }

// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }

// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial of ${number} is ${fact}.`);
// }
//q5 Write a loop to print the multiplication table of a number (let's say 7) up to 10.

const number = parseInt(prompt('Enter an integer: '));

for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}

//q6 Write a loop to print the Fibonacci series up to the 10th term.\

//q7 Write a loop to find and print the sum of digits of a number (let's say 123).

//q9 Write a loop to print the square of numbers from 1 to 10.

for(let i = 1; i <= 10; i++) {
    console.log (i * i);
}
