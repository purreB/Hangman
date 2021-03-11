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
  const word = {
    index: Math.floor(Math.random() * wordList.length),
    wordLength: wordList.length,
  };
  return word.index;
};

const gameWord = randomWord();

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
  "{",
  "}",
  "(",
  ")",
  "=",
  "_",
  "+",
  "-",
  "?",
  "å",
  "ä",
  "ö",
];

const allowedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

window.onsubmit = () => {
  // Fetch value of input field
  // Check if it is a valid character
  // Compare to see if character exists in gameWord
  // if (character exists in gameWord) do
};
