// 1.Write a JavaScript function to calculate the sum of two numbers.
var str1 = 1;
var str2 = 3;
const sum = str1 + str2;
console.log(sum);
//2. Write a JavaScript program to find the maximum number in an array.

var str3 = [1, 2, 3, 4, 5];
var max = Math.max(...str3);
console.log(max);

//3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
var palindrome = "anna";
const splitt = palindrome.split("");
console.log(splitt.reverse().join(""));
// 4.Write a JavaScript program to reverse a given string.
var rev = "jayavenkat";
var recr = rev.split("");
var joined = recr.reverse();
console.log(joined.join(""));
//5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

var even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var diseven = even.filter((item) => item % 2 === 0);
console.log(diseven);
//6. Write a JavaScript program to calculate the factorial of a given number.
//wait some time to refer

let numm = 6;
let fact = 1;
for (i = 1; i <= numm; i++) {
  fact = fact * i;
}
console.log(fact);
console.log(`fact:${fact}`);

// 7. Write a JavaScript function to check if a given number is prime.

let num = 5;
function Number(num) {
  if (num % 2 === 0) {
    return false;
  }
  return true;
}
console.log(Number(num));

//8. Write a JavaScript program to find the largest element in a nested array.

const arr = [
  [12, 45, 75],
  [54, 45, 2],
  [23, 54, 75, 2],
];

const maximum = Math.max(...[].concat(...arr));

const minimum = Math.min(...[].concat(...arr));

console.log(maximum);

console.log(minimum);

const string = "jaya";
const index = string.toUpperCase();
console.log(index);

const concat1 = [1, 2, 3, 4, 5];
const concat2 = [5, 6, 7, 8];

const newarray = [...concat1, ...concat2];
const result = [...new Set(newarray)];
console.log(...result);
let text1 = "     Hello World!     ";
let text2 = text1.trim();
console.log(text2);


const val = "welcome to contest by XYZ!";
const split = val.split(" ");
const mapping = split.map((item) => item[0].toUpperCase() + item.substring(1));
const joining = mapping.join(" ");
console.log(joining);