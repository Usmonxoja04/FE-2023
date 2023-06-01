/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
function area(l1, l2) {
  return l1 * l2;
}
console.log("The area of the rectangle is that", area(7, 8));

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then
  it should return their sum multiplied by 3.
*/

function crazySum(num1, num2) {
  if (num1 > num2 || num2 > num1) {
    return num1 + num2;
  } else num1 === num2;
  {
    return (num1 + num2) * 3;
  }
}
console.log("The result is :", crazySum(5, 5));

/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

const crazyDiff = function (num) {
  if (num > 19) {
    return (num - 19) * 3;
  } else {
    return num - 19;
  }
};
console.log(crazyDiff(20));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true 
 if n is within 20 and 100 (included) or if n it's equal to 400.
*/
 const boundary = function(n){
    if (n > 20 && n <= 100)
    {
        return true;
    } else {
        return  false
    }
 }
 console.log(boundary(26))

 /* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive",
 then it should just return the original string.
*/

const strivify = function(str){
if (str.startsWith("Strive")){
    return str;
} else {
    return  "Strive" + str ;
}
}
console.log(strivify (" Hello Usmonxoja"))

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and
  checks if it is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
let check3and7 = function(x){
    if(x % 3 === 0 || x % 7 ===0)
    {
        return ' x is multiple of 3 or 7';
    } else {
        return 'n is neither mutiple of 3 or 7';
    }
}
console.log(check3and7(9));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

let reverseString = function(str){
    return str.split('').reverse().join('');
}
console.log(reverseString("Strive"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed
  as a parameter.
*/

let upperFirst = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(upperFirst("i love coding"))

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and 
 last character of a given string passed as a parameter.
*/
function cutString(str){

    return str.slice(1,-1);
}
console.log("The new string is :",cutString('Note book'));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and 
 returns an array containing n random numbers between 0 and 10.
*/

function giveMeRandom(n){
    return Math.floor(Math.random() * n);
}
console.log(giveMeRandom(10))