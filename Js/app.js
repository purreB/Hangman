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
    // Create a function here that loops through index of randomized string
  };
  return word;
};

const gameWord = randomWord().index;

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

const inputField = document.querySelector(".input-field");

window.onsubmit = (e) => {
  e.preventDefault();

  // Fetch value of input field
  const inputValue = inputField.value.toLowerCase();

  // Check if it is a valid character
  if (allowedCharacters.includes(inputValue)) {
    // Todo > loop through every index of the string gameWord
    // Compare to see if character exists in gameWord
  }

  // if (character exists in gameWord) do

  // Resets input field
  inputField.value = "";
};
