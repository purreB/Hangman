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
const inputField = document.querySelector(".input-field");

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
    wordLength: wordList.length
    // Create a function here that loops through index of randomized string
  };
  return word;
};

const gameWord = randomWord();
console.log(wordList[gameWord.index]);

( function() {
  for (let i = 0; i < wordList[gameWord.index].length; i++) {
    createP(i);
  }
}());


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

function createP(index){
  document.querySelector(".output").innerHTML += `
    <div class="wordLetter-wrapper">
      <p class="wordLetter wordLetter${index}"></p>
      <span class="underline"></span>
    </div>
  `;
}

window.onsubmit = (e) => {
  e.preventDefault();

  // Fetch value of input field
  const inputValue = inputField.value.toLowerCase();
  
  // Check if it is a valid character
  if (allowedCharacters.includes(inputValue)) {
    // Todo > loop through every index of the string gameWord
    // Compare to see if character exists in gameWord

    for( let i = 0; i < wordList[gameWord.index].length; i++) {
      if(inputValue === wordList[gameWord.index].charAt(i)) {
        document.querySelector(`.wordLetter${i}`).innerText = inputValue;
      }
    }
    // Add image
  }
};
