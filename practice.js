// Write a JavaScript function to calculate the sum of two numbers.

function sum(a, b) {
  return a + b;
}
console.log(sum(3, 2));

// 2. Write a JavaScript program to find the maximum number in an array.

const max = [1, 2, 3, 4, 5, 67, 98];

const maximumValue = Math.max(...max);
console.log(maximumValue);

// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

const stringPalindrome = "anna";

const result = stringPalindrome.split("").reverse().join("");
console.log(stringPalindrome === result);

//array method
const reversearray = [1, 2, 3, 4];

const reverseresult = reversearray.reverse();
console.log(reverseresult);
//Write a JavaScript function to check if a given number is even or odd using inbuilt functions.
const CheckOddorEven = (number) => {
  if (number % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};
console.log(CheckOddorEven(20));
console.log(CheckOddorEven(21));

//Write a JavaScript function that takes a string as input and counts the number of vowels (a, e, i, o, u) using inbuilt functions.
