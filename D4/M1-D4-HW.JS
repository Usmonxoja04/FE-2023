//exercise 1
let numbers = [1,2,3,4,5]
console.log("These are positive numbers :",numbers)

//exercise 2
let student = {
    name : "Usmonxoja",
    surname :"Moydinov",
    email:"usmonxojamoydinov3@gmail.com",
    age : 18
 };
 console.log(student)

 //exercise 3
   student.drivinglicence = false
   console.log(student)

   //exercise 4
delete student.age
console.log(student)

//exercise 5
let student1 = {
    name : "Abdunazar",
    surname :"Abdunazarov",
    email:"aburek@gmail.com",
    age : 19
};
console.log(student1)

//exercise 6
let totalShoppingCart =50;
if (totalShoppingCart => 50)
{
  console.log("We have free delivery for your shopping and total amoun of money is :", totalShoppingCart) ;
}
else if (totalShoppingCart < 50) 
{
  console.log("You have to pay 10 for delivery  and total amoun of money is :",totalShoppingCart +10);
};


//exercise 8
let car = {
    brand : "BMW",
    model: "BMW-3x",
    licensePlate:444,
};console.log(" The original one is",car);
console.log("Clones of the car")
let car2  = {...car};
car2.licensePlate = 714;
console.log("car2",car2);
let car3  = {...car};
car3.licensePlate = 715;
console.log("car3",car3);
let car4  = {...car};
car4.licensePlate = 716;
console.log("car4",car4);
let car5  = {...car};
car5.licensePlate = 717;
console.log("car5",car5);

console.log("-------------------------------------------------------------")
//exercise 9
let carsForRent = [car,car2,car3,car4,car5]
console.log(carsForRent)

//exercise 10
let sliced = carsForRent.slice(1,-1)
console.log(sliced)

//exercise 11

console.log(typeof car2.brand , car2.licensePlate)

//exercise 12
let carsForSale = [car,car2,car3]
let totalCars = carsForSale.lenght
console.log("There are ",carsForSale.length,"in total cars collection")

//exercise 13
// let arrayOfcars = {...carsForSale}
// for (i > 0 ;i < carsForSale ; i++){
    
// }
// console.log(carsForSale.length)