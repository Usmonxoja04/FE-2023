/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/

let test = "Usmonxoja";
console.log(test);

/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/

let sum = (10, 20);
result = 10 + 20;
console.log(result);

/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 
    (it should be randomly created at each execution).
*/
console.log("--------------------exercise 3-----------------");

/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and 
    returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

function splitMe(str) {
  return str.split(" ");
}
console.log(splitMe("I love coding"));

console.log("--------------------exercise 5-----------------");
/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/
// function onlyLetters(str){
//     return str.replace(/[0-9]/g, "")
// };
// console.log(onlyLetters("I have 7 books"))

/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/
let week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];
function whatDayIsIt() {
  let date = new Date();
  let day = date.getDay();
  return week[day];
}
console.log("Today is the :", whatDayIsIt());

console.log("-------------exercise 9---------------");

/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and
    returns the number of days passed since that date.
*/

console.log("--------------Objects and arrays--------------");

console.log("-------------exercise 11---------------");
/* EXERCISE 11
   Write a function called deleteProp which receives an object and a string as parameters,
   and returns the given object after deleting its property named as the given string.
*/

let car = {
  //key    //value
  name: "Fiat", // string
  model: "500",
  color: "white",
  weight: 1, // number
  isBrandNew: true, // false
  stop: function () {
    console.log("STOP !"); // Method -> function
  },
  printModalName: function () {
    console.log("This car is " + this.name + " " + this.model);
  },
};

function deleteProp(obj, str) {
  delete obj[str];
  return obj;
}
console.log(deleteProp(car, "color"));
console.log(car);

console.log("-------------exercise 12---------------");
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* EXERCISE 12
    Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/
//  function oldestMovie(){

//  }

console.log("-------------ecercise 13--------------");
/* EXERCISE 13
    Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/

function countMovies(movies) {
  return movies.length;
}
console.log(countMovies(movies));

console.log("--------------exercise 14--------------");
/* EXERCISE 14
    Write a function called onlyTheTitles which creates an array with just the titles of the movies contained 
    in the provided movies array.
*/
function onlyTheTitles(movies) {
  for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].Title);
  }
}
console.log(onlyTheTitles(movies));

console.log("-----------exercise 15------------");

/* EXERCISE 15
   Write a function called onlyInThisMillennium which returns only the movies produced 
   in this millennium from the provided movies array.
*/
function onlyInThisMillennium() {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year < 2000) {
      console.log(movies[i].Title);
    }
  }
}
onlyInThisMillennium();

console.log("-------------exercise 16--------------")

/* EXERCISE 16 
    Write a function called getMovieById which receives an id as a parameter and returns the movie 
    with the given id from the provided movies array.
*/
// const getMovieById = function(id) {
//   let foundMovie
//   for (let i = 0; i < movies.length;i++){
//     if (movies[i].imdbID === id){
//       foundMovie = movies[i]
//     }
//   }
//   return foundMovie
// };
// getMovieById(id)

console.log("-------------exercise 17---------------")

/* EXERCISE 17
    Write a function called sumAllTheYears which returns the sum of all the years in which the movies in 
    the provided movies array have been produced.
*/

const sumAllTheYears = function(){
  let result = 0;
  for (let  i = 0;i < movies.length;i++) {
    result += parseInt(movies[i].Year)
  }
  return result
}
console.log(sumAllTheYears())


console.log("-------------exercise 18---------------")
/* EXERCISE 18
    Write a function called searchByTitle which receives a string as a parameter and returns 
    all the movies in the provided movies array which contain that string in the title.
*/
const searchByTitle = function(str){
  let result = [];
  for (i = 0;i < movies.length;i++){
    if  (movies[i].Title.indexOf(str) !== - 1);
    result.push(movies[i]);
  }
  return result
};
console.log(searchByTitle())
