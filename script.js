// console.log("Lets go oilers!");
// console.log("Lets go oilers!");
// console.log("Lets go oilers!");
// console.log("Lets go oilers!");
// console.log("Lets go oilers!");

//
// let i = 1; // control variable -- tells the loop to break

// while (i <= 10) { // conditional -- it breaks
//   console.log("Lets go oilers!");
//   console.log("Lets go oilers!");
//   i++; // iterator -- stops the loop
// }

// Example. Write a while loop that prints the phrase "Hello, world!" 25 times.
// let i = 1;
// while (i <= 25) {
//   console.log("Hello world ");
//   console.log(i);
//   i++;
// }

//
// let a = 0;
// while (a < 100) {
//   console.log(a);
//   a++;
// }

// console.log("loop finish");

// Print all ODD numbers from 100 to 130
// var x = 100;
// while (x <= 130) {
//   //check if x is Odd
//   if (x % 2 == 1) console.log(x);
//   x++;
// } // end of the loop

// var x = 101;
// while (x <= 129) {
//   console.log(x);
//   x += 2;
// }

// ADD all numbers  from 1 to 10
// 1+2+3+4+..... + 10=______let
// let i = 1;
// let total = 0;
// while (i <= 10) {
//   total = total + i;
//   console.log(`i ; ${i}`);
//   console.log(`toatal ;${total}`);
//   i++;
// }

// // Que1
// let a = 1;
// while (a <= 800) {
//   console.log("hello ");
//   a++;
// }
// // Que2
// let b = 20;
// while (b <= 500) {
//   if (b % 5 == 0) console.log(b);

//   b++;
// }

// // Que3
// let c = 10;
// while (c <= 100) {
//   if (c % 2 == 0) console.log(c);
//   c++;
// }
// // Que4
// let d = 18;
// let total = 0;
// while (d <= 150) {
//   total = total + d;
//   console.log(`d; ${d}`);
//   console.log(`tota1; ; ${total}`);
//   d++;
// }

// // Que 5
// let e = 10;
// let sum = 0;
// while (e <= 100) {
//   sum = sum + e;
//   console.log(`e = ${e}`);
//   console.log(`sum = ${sum}`);
//   e++;
// }

// do - while  -10 to +10

// let y = -10;

// do {
//   console.log(y);
//   y++;
// } while (y <= 10);

//stop string

// do {
//   var response = prompt("Tyrpe STOP to end");
// } while (response != "STOP");

// Break statements & while (true ) loops
// eneter number between 1 and 10

// while (true) {
//   let number = +prompt("Enter a number from a to 10");

//   //use an if - statement to break the loop
//   if (number >= 1 && number <= 10) {
//     break;
//   }
//   alert("you are not listning");
// }

// Ex. 25 to 1, but skip 18 and 7
// "continue " command skips the current iteration
// but moves to the next iteration of the loop

// let i = 25;
// while (true) {
//   if (i == 18 || i == 7) {
//     i--;
//     continue;
//   }

//   console.log(i);

//   i--;
//   if (i == 0) break; // break outs of the entire loop
// }

// // Que 1
// let a = 1;
// do {
//   console.log("HELLo");
//   a++;
// } while (a <= 800);

// // Que 2
// let b = 20;

// do {
//   if (b % 5 == 0) console.log(b);
//   b++;
// } while (b <= 500);

// //Que 3

// let c = 10;
// do {
//   if (c % 2 == 0) console.log(c);
//   c++;
// } while (c <= 100);

// // Que 4
// let d = 18;
// let tota1 = 0;

// do {
//   tota1 = tota1 + d;
//   console.log(`d ; ${d}`);
//   console.log(`total; ${tota1}`);
//   d++;
// } while (d <= 150);

// // Que 5
// let e = 10;
// let tota11 = 0;

// do {
//   tota11 = tota11 + e;
//   console.log(`e ; ${e}`);
//   console.log(`total; ${tota11}`);
//   e++;
// } while (e <= 100);

// guessing game

// while (true) {
//   let num = Math.floor(Math.random() * 20 + 1);
//   var guess = +prompt("Enter numbers between 1 and 20");

//   console.log(num);

//   if (guess == num) {
//     break;
//   }

//   alert("try again");
// }

//dice roll

// let a = Math.floor(Math.random() * 6 + 1);
// console.log(a);
// let b = Math.floor(Math.random() * 6 + 1);
// console.log(b);
// let tota1 = a + b;
// console.log(tota1);

/////////////// For loop
// print # from 1 to 10

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

// // count down from 10 to 1 then says BLASTOFF!
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// console.log("BLASTOFF!");

// Displays 15 random integers from 0 to 100
// for (let x = 0; x < 15; x++) {
//   let num = Math.floor(Math.random() * 100);

//   console.log(num);
// }

// program the factorial operation
// 3! = 3*2*1=6
// 5! = 5*4*3*2*1 = 120
// let result = 1;
// let start = +prompt("Enter the factorial number:");

// for (let i = start; i >= 1; i--) {
//   console.log(`i ; ${i}`);
//   result = result * i;
//   console.log(`result : ${result}`);
// }
// alert(`${start} != ${result}`);

// Ex. odds sum
// let endNum = +prompt("Add odds up to which number ?");
// // if they type 6, loop should add 1 + 3+ 5
// // if they type 3, loop should add 1 + 2+3
66;
// let toatal = 0;

// for (let y = 1; y <= endNum; y += 2) {
//   console.log(y);
//   toatal = toatal + y;
// }
// alert(`sum if odd = ${endNum} is ${toatal}`);

//
// // // 1. A simple while loop
// var count = 1;
// while (count <= 3) {
//   console.log("Count is: " + count);
//   count++;
// }
// console.log("End of loop.");

// // 2. A do-while loop with a condition
// var x = 10;
// do {
//   console.log("X is: " + x);
//   x--;
// } while (x > 7);
// console.log("Outside of loop.");

// // 3. A for loop
// for (var i = 2; i <= 10; i += 2) {
//   console.log("Even number: " + i);
// }
// console.log("Loop finished.");

// 4. A while(true) loop
// var attempt = 1;
// while (true) {
//   console.log("Attempt #" + attempt);
//   if (attempt >= 3) {
//     break;
//   }
//   attempt++;
// }
// console.log("Loop exited.");

// 1. Print #'s 1 to 3
// var x = 1;
// while (x <= 3) {
//   console.log(` ${x}#`);
//   console.log("Looping");
//   x++;
// }

// 2. Print #'s 1 to 5
// for (var i = 1; i <= 5; i++) {
//   console.log(` ${i} #`);
// }

// 3. Print #'s 1 to 3
// var y = 1;
// do {
//   console.log(`${y}#`);
//   y++;
// } while (y <= 3);

// 4. Print #'s 0 to 5
// var z = 0;
// while (z <= 5) {
//   console.log(`${z}#`);
//   z++;
// }

// 5. Print #'s 10 to 0
// for (var i = 10; i >= 0; i--) {
//   console.log(`${i}#`);
// }

// // 1. Loop that prints numbers from 1 to 10
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 2. Loop that prints numbers from 10 to 1
// var x = 10;
// while (x >= 1) {
//   console.log(x);
//   x--;
// }

//Write a while loop that prints the phrase "Loopity Loop" 150 times.
// let a = 1;
// while (a <= 150) {
//   console.log("Loopity Loop");
//   a++;
// }

// Write a for loop that prints the numbers from -20 to +20.
// let b = -20;
// while (b <= 20) {
//   console.log(b);
//   b++;
// }

// Write a do-while loop that asks the user to enter any number other than 777. When they enter 777, the loop ends and the sum of their numbers is displays.Make sure the 777 is not included in the final sum.
// let num;
// let total = 0;
// alert(num);
// console.log(num);
// do {
//   num = +prompt("Enter any number that is not 777.");

//   if (num == 777) {
//     total = total + num;
//     console.log(`The total sum of trys ${total}`);
//     break;
//   }
// } while (num != 777);
// {
//   total = 777;
//   console.log(`Toatal : ${total}`);
// }

//
// let total = 0;
// let num;
// do {
//   num = +prompt("Enter a number (777 quits):");
//   total = total + num;
// } while (num != 777);

// total -= 777; // fixes the total

// console.log(`Total: ${total}`);

// Write a while(true) loop, with a break statement, that prints a random integers between 0 and 100. The loop breaks when the random number is either:
// less than or equal to 5, or
// greater than or equal to 95.

// while (true) {
//   let c = Math.round(Math.random() * 100);
//   console.log(c);

//   if (c <= 5 || c >= 95) {
//     break;
//   }
// }

// Write a program that asks the user to enter 3 numbers, then displays the highest of those numbers.
// let num1 = +prompt("type number 1");
// let num2 = +prompt("type number 2");
// let num3 = +prompt("type number 3");
// console.log(`1;${num1},2; ${num2}; 3; ${num3} `);

// if (num1 > num2 && num1 > num3) {
//   console.log(`The highest number is ${num1}`);
// } else if (num2 > num3 && num2 > num1) {
//   console.log(`The highest number is ${num2}`);
// } else if (num3 > num1 && num3 > num2) {
//   console.log(`The highest number is ${num3}`);
// }

// Write a program that asks the user to enter 3 numbers, then display those numbers in order, from lowest to highest.
let num1 = +prompt("type number 1");
let num2 = +prompt("type number 2");
let num3 = +prompt("type number 3");
// console.log(`1;${num1},2; ${num2}; 3; ${num3} `);

// if (num1 > num2 && num1 > num3) {
//   if (num2 < num3) {
//   }
//   console.log(` lowest : ${num2}, middle : ${num3}, Highest : ${num1}`);
// }else {
//     if(num2 > num1 && num2 > num3)
// }

// if (num1 > num2 && num1 > num3) {
//   // num1 is highest... check which is lowest
//   if (num2 < num3) {
//     // num2 is lowest
//     console.log(`${num2}, ${num3}, ${num1}`);
//   } else {
//     // num3 is lowest
//     console.log(`${num3}, ${num2}, ${num1}`);
//   }
// } else if (num2 > num1 && num2 > num3) {
//   // num2 is highest... check which is lowest
//   if (num1 < num3) {
//     // num1 is lowest
//     console.log(`${num1}, ${num3}, ${num2}`);
//   } else {
//     // num3 is lowest
//     console.log(`${num3}, ${num1}, ${num2}`);
//   }
// } else {
//   // num3 is highest... check which is lowest
//   if (num1 < num2) {
//     // num1 is lowest
//     console.log(`${num1}, ${num2}, ${num3}`);
//   } else {
//     // num2 is lowest
//     console.log(`${num2}, ${num1}, ${num3}`);
//   }
// }

// Write a program that creates a random number from -10 to +10 and prints that number. Then, print one of the following:
// If the number was negative, print that number to the power of 3.
// If the number was positive, print the remainder of that number when you divide it by 3.
