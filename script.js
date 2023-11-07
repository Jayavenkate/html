// const url =
//   "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json ";
// async function getapi(url, cb) {
//   const response = await fetch(url);
//   const data = await response.json();
//   cb(data);
// }
// function displayData(data) {
//   console.log(data);
//   //map
//   const deletedata = data.map((value, id) => {
//     let obj = { ...value };
//     delete obj["description"];
//     return obj;
//   });
//   console.log(deletedata);
//   //filter
//   const filterdata = data.filter((value, id) => {
//     const data = value.year == 2020;
//     return data;
//   });
//   console.log(filterdata);
//   //filter

//   const div = data.filter((val, id) => {
//     const value = id % 2 == 0;
//     return value;
//   });
//   console.log(div);

//   const vote = data.reduce((acc, current) => {
//     return acc + current.votes;
//   },0);
//   console.log(vote);
// }
// const data = getapi(url, displayData);
// console.log(data);

// const arr = [1, 2, 3, 4, 5];
// arr.map((array, id) => {
//   const value = array * 2;
//   console.log(value);
// });

const url =
  "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json";

// async function apihandle(url, cb) {
//   const response = await fetch(url);
//   const data = await response.json();
//   cb(data);
// }
// function displayDta(data) {
//   console.log(data);
// }
// const data = apihandle(url, displayDta);
// console.log(data);

// const populate = () => {
//   console.log(resdata);
// };
// let resdata;
// const data = fetch(url)
//   .then((res) => res.json())
//   .then((res) => {
//     resdata = res;
//     populate();
//     return res;
//   });

//reverse the string

const str = "hello world";
const name = str.split("");

const reverse = name.reverse();
console.log(reverse.join(""));

//merge 2 array

// let A1 = [1, 2, 3, 4, 1, 2, 3, 4];
// let A2 = [5, 6, 7, 8];
// const arr3 = A1.concat(A2.filter((item) => A1.indexOf(item) < 0));
// console.log(arr3);

let arr1 = [1, 5, 3];
let arr2 = [4, 5, 6];
// let newArr = arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0));
const newArr = Array.from(new Set([...arr1, ...arr2]));
console.log(newArr);

// let A1 = [1, 2, 3, 4, 1, 2, 3, 4];
// let A2 = [5, 6, 7, 8];

// // Merge and remove duplicates
// let mergedArray = Array.from(new Set([...A1, ...A2]));

// console.log(mergedArray);

//

// Finding Common Elements
// commonElements([1, 3, 4, 6, 7, 9], [-1, 3]) ➞ [3]

function commonElements(arr6, arr7) {
  // Use the filter method to find elements that are present in both arrays
  let result = arr6.filter((item) => arr7.includes(item));
  return result;
}

// Example usage
let arr6 = [1, 3, 4, 6, 7, 9];
let arr7 = [-1, 3];
let common = commonElements(arr6, arr7);
console.log(common);

//eg-2
// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]
let arr8 = [1, 3, 4, 6, 7, 9];
let arr9 = [1, 2, 3, 4, 7, 10];

function commonfunction(arr8, arr9) {
  const filtervalue = arr8.filter((item) => arr9.includes(item));
  return filtervalue;
}
let commonvalue = commonfunction(arr8, arr9);
console.log(commonvalue);

//eg-3
// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

let arr10 = [1, 2, 2, 2, 3, 4, 5];
let arr11 = [1, 2, 4, 5];
let dup = Array.from(new Set([...arr10]));
console.log(dup);
function commonele(dup, arr11) {
  const value = dup.filter((item) => arr11.includes(item));
  return value;
}
let vommonele = commonele(dup, arr11);
console.log(vommonele);

//commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

let arr12 = [1, 2, 3, 4, 5];
let arr13 = [10, 12, 13, 15];

function nothing(arr12, arr13) {
  const noithingvalue = arr12.filter((item) => arr13.includes(item));
  return noithingvalue;
}
let nothingele = nothing(arr12, arr13);
console.log(nothingele);

//1st letter in uppercase

let first = "hello";
let valuefirst = first[0].toUpperCase() + first.substring(1);
let allvlue = first.toUpperCase();
console.log(allvlue);
console.log(valuefirst);

//const str = 'welcome to contest by XYZ!'; use each  every word as string first letter in upper case

const val = "welcome to contest by XYZ!";
const split = val.split(" ");
const mapping = split.map((item) => item[0].toUpperCase() + item.substring(1));
const joining = mapping.join(" ");
console.log(joining);

// Print all even numbers from 0 – 10
for (i = 0; i <= 10; i + 2) {
  console.log(i);
}
//prin all even number from 0to 10

for (i = 1; i <= 10; i + 2) {
  console.log(i);
}

  


//Input ={jack:"Three", jill: "Two",And:"one"};
// Expected Output= {JACK: "Three",JILL: "Two",AND: "one"}

const upper = { jack: "Three", jill: "Two", And: "one" };
