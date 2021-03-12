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
  "pluto",
  "gun",
  "run",
  "ladybug",
  "drumstick",
  "cold",
  "hot",
  "winter",
  "spring",
  "max",
];

// Randomly choose word
const randomWord = () => {
  const word = {
    index: Math.floor(Math.random() * wordList.length),
  };
  return word;
};

const gameWord = randomWord();
console.log(wordList[gameWord.index]);

// IIFE
(function () {
  for (let i = 0; i < wordList[gameWord.index].length; i++) {
    createP(i);
  }
})();

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

function createP(index) {
  document.querySelector(".output").innerHTML += `
    <div class="wordLetter-wrapper">
      <p class="wordLetter wordLetter${index}"></p>
      <span class="underline"></span>
    </div>
  `;
}

let countImage = 0;
let ifGuessedRight = true;

window.onsubmit = (e) => {
  e.preventDefault();

  // Fetch value of input field
  const inputValue = inputField.value.toLowerCase();

  // Check if it is a valid character
  if (allowedCharacters.includes(inputValue)) {
    // loop through every index of the string gameWord
    // Compare to see if character exists in gameWord
    for (let i = 0; i < wordList[gameWord.index].length; i++) {
      if (inputValue === wordList[gameWord.index].charAt(i)) {
        document.querySelector(`.wordLetter${i}`).innerText = inputValue;
        ifGuessedRight = true;
        break;
      } else {
        ifGuessedRight = false;
      }
    }

    // Add image
    if (countImage === 0 && ifGuessedRight === false) {
      $(
        `.game-image[src='./Images/${countImage}.png'`
      ).classList = notInvisibleClass;
      countImage++;
      ifGuessedRight = true;
    }
    if (countImage === 1 && ifGuessedRight === false) {
      $(
        `.game-image[src='./Images/${countImage}.png'`
      ).classList = notInvisibleClass;
      countImage++;
      ifGuessedRight = true;
    }
    if (countImage === 2 && ifGuessedRight === false) {
      $(
        `.game-image[src='./Images/${countImage}.png'`
      ).classList = notInvisibleClass;
      countImage++;
      ifGuessedRight = true;
    }
    if (countImage === 3 && ifGuessedRight === false) {
      $(
        `.game-image[src='./Images/${countImage}.png'`
      ).classList = notInvisibleClass;
      countImage++;
      ifGuessedRight = true;
    }
    if (countImage === 4 && ifGuessedRight === false) {
      $(
        `.game-image[src='./Images/${countImage}.png'`
      ).classList = notInvisibleClass;
      countImage++;
      ifGuessedRight = true;
    }
    if (countImage === 5 && ifGuessedRight === false) {
      $(
        `.game-image[src='./Images/${countImage}.png'`
      ).classList = notInvisibleClass;
      countImage++;
      ifGuessedRight = true;
      countImage = 0;
      document.querySelector(
        ".output"
      ).innerHTML = `<p style="font-size:5rem;color:red;">You lost! Try again!</p>`;
    }
  }
  return false;
};
