//exercise 1
let animals = ["cat", "dog", "camel"];
animals.reverse();
console.log(animals);

//exercise 2
const numbers = [123, 456, 678];
const max = Math.max(...numbers);
console.log(max);

//exercise 3
const number = [123, 456, 678];
const min = Math.min(...numbers);
console.log(min);

//exercise 4
function isEven(num) {
  return num % 2 === 0;
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr.filter(isEven));

//exercise 5
let array = [9, 8, 6, 5, 4, 10];
console.log(
  "exercise 5",
  array.filter((item) => item % 2 !== 0)
);

//exercise 6
let str = "I love the coding";
let removeVowels = str.replace(/[aeiou]/gi, "");
console.log(removeVowels);

//exercise 7

