// (1) Find Factorial of a number using for loop:

// let num = 5;
// let fact = 1;
// for (i = 1; i <= num; i++) {
//   fact = fact * i;
// }
// console.log(fact);

// (2) Find Factorial of a number using a while loop:

let num = 4;
let fact = 1;
var i = 1;
while (i <= num) {
  fact = fact * i;
  i++;
}
console.log(fact);

// (3) Calculate Factorial in a Recursive function:

function factnum(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factnum(n - 1);
  }
}
var result = factnum(8);
console.log(result);

// (4) Create a Fibonacci Series using a for loop:

function fibonicis(n) {
  var fibono = [];
  for (i = 2; i <= n; i++) {
    fibono[i] = fibono[i - 1] + fibono[i - 2];
  }
  return fibono;
}
var res = fibonicis(10);
console.log(res);
// Remove duplicate item from an array

var str = "one,two,three,four,five";
var val = str.split("");
console.log(val);

// Print all even numbers from 0 – 10
var even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var diseven = even.filter((item) => item % 2 === 0);
console.log(diseven);

//Calculate the sum of numbers within an array

let evenn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = evenn.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(sum);
// Create a function that reverses an array
let arr = [1, 2, 3, 4];
console.log(arr.reverse());

// 6. Sort an array from lowest to highest
let sort = [5, 6, 7, 1, 2, 4];
console.log(sort.sort());
// Create a function that filters out negative numbers
const arr2 = [1, 2, 3, 4, -1, -2, -3, -4];

var negativ = arr2.filter((number) => number <= 0);
console.log(negativ);
function Bolleran(number) {
  if (number % 10 == 0) {
    return true;
  } else {
    return false;
  }
}
var boolean = Bolleran(120);
console.log(boolean);
// 10. Return the number of vowels in a string

let vowles = "Hello world";

function letterswowles(vowles) {
  let lower = vowles.toLowerCase();
  let reg = /[aeiou]/g;
  let check = lower.match(reg);
  console.log(check);
  return check ? check.length : 0;
}
const letters = letterswowles(vowles);
console.log(letters);

// function sayHi() {
//   // console.log(name);
//   // console.log(age);
//   let name = 'Lydia';
//   let age = 21;
//   console.log(age);
//   console.log(name);
// }

// sayHi();

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(shape.diameter());
console.log(shape.perimeter());

+true;
!'Lydia';
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

let greeting;
greetign = {}; // Typo!
console.log(greetign);

function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

function func1(){
  setTimeout(()=>{
    console.log(x);
    console.log(y);
  },3000);

  var x = 2;
  let y = 12;
}
func1();