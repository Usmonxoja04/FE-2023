// exercise 3
let number = 12 + 20;
console.log("The result is " + number)

//exercise 4
let x1 = 12
console.log("x = " + x1)

//exercise 5
let name = "John Doe"
console.log("The name of the person is " + name)

//exercise 6
let y1 = 12
let result = x1 - y1
console.log("result shunga teng " ,result)

//exercise 7
let name1 = "john"
let name2 = "John"
let result1 = name1 == name2
console.log ("Bu ikkala varaible tengmi ",result1) 

//exercise 8
let numericValueLessThan10 = 2
let two = numericValueLessThan10 == 2;
console.log(two ? "two" : "false");


console.log("-------------extra homeworks-------------")
//exercise 4
let x = 23;
let y = -76;
let z = -13;
if (x>y && x>z){
    if (y>z) 
    {
        console.log(x + ", " + z + ", " +y)
    } 
    else
    {
        console.log(x+ ", " + y + ", " +z)
    }
}
else if (y > x && y >z){
    if (x>z)
    {
        console.log(y + ", " + x + ", " +z)   
    }
    else 
    {
        console.log(y + ", " + z + ", " +x)
    }
}
else if (x>y){
if (x>y)
{
    console.log(z + ", " + x + ", " +y)
}
else
{
    console.log(z+ ", " + y + ", " +x)
}
}  

//exercise 5
let num1 = 78
let num2 = 22
  let result2 =  (num1 +num2)/2
console .log("The avarage of this number " , result2)

//exercise 7

console.log(Number.isInteger(12))

//exercise 8
let number3 = 160
if (number3 % 25 == 0) {
   console.log("Your number is odd here")
}
else 
{
    console.log("your number is even here")
}
