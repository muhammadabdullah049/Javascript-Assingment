
// //q1 Write a loop to print numbers from 1 to 10.

// for (var i = 1; i <= 10; i++) {
//       console.log(i);
// }

// //q2 Write a loop to print even numbers from 1 to 20.

// for (var a = 1; a <= 20; a++) {
//     if (a % 2 == 0) {
//         console.log(a);
//     }
// }

// //q3 Write a loop to print odd numbers from 1 to 15.

// for (var a = 1; a <= 15; a++) {
//     if (a % 2 == 1) {
//         console.log(a);
//     }
// }

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

// const number = parseInt(prompt('Enter an integer: '));

// for(let i = 1; i <= 10; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }

//q6 Write a loop to print the Fibonacci series up to the 10th term.\

//q7 Write a loop to find and print the sum of digits of a number (let's say 123).

//q9 Write a loop to print the square of numbers from 1 to 10.

// for(let i = 1; i <= 10; i++) {
//     console.log (i * i);
// }
// var karachiKeAlaqe = [
//     "Saddar",
//     "Shah Faisal",
//     "Gulshan",
//     "Korangi",
//     "Dha",
//     "Lyari",
//     "Maleer",
//     "Nazimabad",
//     "Hyderi",
//   ];
//   var userElaqa = prompt("Aap kahan tashref rakhte hen");
//   var deliveryAvailable = false;
//   for (var i = 0; i < karachiKeAlaqe.length; i++) {
//     if (karachiKeAlaqe[i] === userElaqa) {
//       deliveryAvailable = true;
//       document.write("Delivery Available");
//       break;
//     }
// }
  // var karachiKeAlaqe = [
  //   "Saddar",
  //   "Shah Faisal",
  //   "Gulshan",
  //   "Korangi",
  //   "Dha",
  //   "Lyari",
  //   "Maleer",
  //   "Nazimabad",
  //   "Hyderi",
  // ];
  // var userElaqa = prompt("Aap kahan tashref rakhte hen");
  // var deliveryAvailable = false;
  // for (var i = 0; i < karachiKeAlaqe.length; i++) {
  //   if (karachiKeAlaqe[i] === userElaqa) {
  //     deliveryAvailable = true;
  //     document.write("Delivery Available");
  //     break;
  //   }
  // }
  // if (!deliveryAvailable) {
  //   document.write("Delivery Not Available");
  // }
  
  //nested loop=>
  // var userPrizeBond = [234, 235, 236, 237, 238, 323, 21, 313, 434, 124, 360];
  // var prizeBondWinner = [
  //   112, 152, 190, 201, 220, 236, 238, 250, 285, 310, 315, 320, 341, 360, 355,
  //   380, 400,
  // ];
  // var userWon = [];
  // for (var i = 0; i < userPrizeBond.length; i++) {
  //   for (var j = 0; j < prizeBondWinner.length; j++) {
  // console.log(
  //   "i=>",
  //   userPrizeBond[i],
  //   "j=>",
  //   prizeBondWinner[j],
  //   userPrizeBond[i] === prizeBondWinner[j]
  // );
  //     if (userPrizeBond[i] === prizeBondWinner[j]) {
  //       userWon.push(userPrizeBond[i]);
  //     }
  //   }
  // }
  // console.log("Prize bond ye nikle hen=>", userWon);
  
  // var students1 = ["Ahmed", "Abdul", "Bilal", "Raza", "Haris", "Shoab"];
  // var students2 = ["Hasan", "Tabish", "Usman", "Abdul", "Ahsan", "Hamza", "Bilal",];
  
  // var duplication = []
  // for(var i = 0; i < students1.length; i++){
  //   for(var j = 0; j < students2.length; j++){
  //     if(students1[i] === students2[j]){
  //       duplication.push(students1[i])
  //     }
  //   }
  // }
  // if (!deliveryAvailable) {
  //   document.write("Delivery Not Available");
  // }
  // console.log('These names are  in both list=>',duplication)


  // if (cityToCheck === cleanestCities [0]) {
  //   alert ("It's one of the cleanest city")
  // }
  // else if (cityToCheck === cleanestCities [1]) {
  //   alert ("It's one of the cleanest city")
  // }
  // else if (cityToCheck === cleanestCities [2]) {
  //   alert ("It's one of the cleanest city")
  // }
  // else if (cityToCheck === cleanestCities [3]) {
  //   alert ("It's one of the cleanest city")
  // }
  // else if (cityToCheck === cleanestCities [4]) {
  //   alert ("It's one of the cleanest city")
  // }
  // else {
  //   alert ("It's not on the list")
  // }
  var cityToCheck = prompt ("cityToCheck")            
  var cleanestCities =  ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
              
  for (var i = 0; i <= 4; i++) {
  if (cityToCheck === cleanestCities [i])
  alert ("It's one of the cleanest city")
 }