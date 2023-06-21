console.log("--------------------------exercise 21--------------------------")
//21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"
let x = "John"
let y = "Doe"
console.log(x + "<> "+ y)

console.log("--------------------------exercise 22--------------------------")
//22) Create an object with properties such name, surname, email
let person = {
    name : "Usmonxoja",
    surname :"Moydinov",
    email:"usmonxojamoydinov3@gmail.com",
}
console.log(person)

console.log("--------------------------exercise 23--------------------------")
//23) Delete the email property from the previously created object
delete person.email
console.log(person)

console.log("--------------------------exercise 24--------------------------")
//24) Create an array with 10 strings in it
let arrayOfStrings = [];

for (let i = 0; i < 10; i++) {
  arrayOfStrings.push("New value: " + i);
};console.log(arrayOfStrings)



console.log("--------------------------exercise 25--------------------------")
//25) Print in the console every string from the previous array
for (let i = 0; i < arrayOfStrings.length; i++) {
    console.log(arrayOfStrings[i]);
  }
  console.log("--------------------------exercise 26--------------------------")
  //26) Create an array with 100 random numbers in it
  let arrayOfNumbers = []
  for (let i = 0;i < 100; i++);{
    arrayOfNumbers.push(Math.floor(Math.random() * 100));
  };
  console.log(arrayOfNumbers)


  
  console.log("--------------------------exercise 27--------------------------")

  //27) Write a function to get the maximum and minimum values from the previously created array

  const getMaxMin = function (numbers) {
    let max = numbers[0];
    let min = numbers[0];
    for (let i = 0; i < numbers.length - 1; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }

      if (numbers[i] < min) {
        min = numbers[i];
      }
    }
    return { max, min };
};
console.log(getMaxMin(arrayOfNumbers))

console.log("--------------------------exercise 28--------------------------")
//28) Create an array of arrays, in which every array has 10 random numbers
let arrayOfArrays = [];
for (let i = 0;i < 10; i++){
  let innerArray = []
  for(let j = 0; j < 10;j++){
    innerArray.push(Math.round(Math.random() * 10));
  }
  arrayOfArrays.push(innerArray)
};
console.log(arrayOfArrays)

console.log("--------------------------exercise 29--------------------------")
//29) Create a function that gets 2 arrays as parameters and returns the longest one
const returnLargest = function (array1, array2) {
  if (array1.length > array2.length) {
    return array1;
  } else {
    return array2;
  }
};
console.log(returnLargest([5,4],[4,5,6]))


console.log("-------------DOM exercises---------------")

console.log("---------------exercises 31---------------")
//31) Get the element with an id of "container" from the page
const container = document.getElementById("container");

console.log("---------------exercises 32---------------")
//32) Get every <td> element from the page
const tds  = document.querySelectorAll("td")

z

  console.log("---------------exercises 34---------------")
      // 34) Write a function to change the heading of the page
      const changeH1 = function (content) {
        const h1 = document.querySelector("h1");
        h1.innerText = content;
      };
      changeH1("new text");

      console.log("---------------exercises 35---------------")
      // 35) Write a function to add an extra row to the table
      const addRow = function () {
        const tbody = document.querySelector("tbody");
        const tr = document.createElement("tr");
        for (let i = 0; i < 5; i++) {
          const td = document.createElement("td");
          td.innerText = i + 1;
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      };
      addRow();

      console.log("---------------exercises 36---------------")
      // 36) Write a function to add a class of "test" to each row in the table
      const addClassToRow = function () {
        const trs = document.querySelectorAll("tr");
        for (let j = 0; j < trs.length; j++) {
          trs[j].classList.add("test");
        }
      };

      console.log("---------------exercises 37---------------")
      // 37) Write a function to add a red background to every link in the page
      const addRedBg = function () {
        const links = document.querySelectorAll("a");
        for (let l = 0; l < links.length; l++) {
          links[l].classList.add("bg-red");
        }
      };
      addRedBg();

      console.log("---------------exercises 38---------------")
      // 38) Console log "Page loaded" when the page is correctly loaded
      window.onload = function () {
        console.log("Page loaded");
      };

      console.log("---------------exercises 39---------------")
      // 39) Write a function to add new items to a unordered list
      const addLi = function () {
        const ul = document.querySelector("ul");
        const li = document.createElement("li");
        li.innerText = "new list item";
        ul.appendChild(li);
      };
      addLi();

      console.log("---------------exercises 40---------------")
      // 40) Write a function to empty a list
      const emptyList = function () {
        const ul = document.querySelector("ul");
        ul.innerHTML = "";
      };
      emptyList();