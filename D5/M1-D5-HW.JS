/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated rectangle.
*/
function area (l1,l2){
    return (l1*l2)
}
console.log("The area of the rectangle is that", area(7,8))

/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then
  it should return their sum multiplied by 3.
*/

function crazySum (num1,num2){
if (num1 > num2 || num2 > num1)
{
return  (num1 + num2);
}
else  (num1 === num2)
{
return (num1 + num2)*3;
}
 }
console.log( "The result is :",crazySum(5,5))


