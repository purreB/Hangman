const $ = document.querySelector.bind(document);

const invisbleClass = "game-image invisible";
const notInvisibleClass = "game-image";
const images = [
  $(".game-image[src='./Images/0.png'"),
  $(".game-image[src='./Images/1.png'"),
  $(".game-image[src='./Images/2.png'"),
  $(".game-image[src='./Images/3.png'"),
  $(".game-image[src='./Images/4.png'"),
  $(".game-image[src='./Images/5.png'"),
];

const canvas = document.querySelector("#gameCanvas");

// Word List
const wordList = [
  "clowning",
  "tomato",
  "potato",
  "pluto",
  "gun",
  "run",
  "nun",
  "chicken",
  "ladybug",
  "rooster",
  "weather",
  "feather",
  "together",
  "ginger",
  "summer",
  "drumstick",
  "cold",
  "hot",
  "winter",
  "autumn",
  "spring",
  "max",
];

// Randomy choose word
const randomWord = () => {
  const word = Math.floor(Math.random() * wordList.length);
  return word;
};

randomWord();

const notAllowed = [
  "`",
  "~",
  ".",
  "<",
  ">",
  ";",
  ":",
  "\\",
  "/",
  "[",
  "]",
  "|",
  "];{",
  "}",
  "(",
  ")",
  "=",
  "_",
  "+",
  "-",
  "?",
];

console.log(notAllowed);
