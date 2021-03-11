const $ = document.querySelector.bind(document);

const invisbleClass = "game-image invisible";
const notInvisibleClass = "game-image"
const images = [
    $(".game-image[src='./Images/0.png'"),
    $(".game-image[src='./Images/1.png'"),
    $(".game-image[src='./Images/2.png'"),
    $(".game-image[src='./Images/3.png'"),
    $(".game-image[src='./Images/4.png'"),
    $(".game-image[src='./Images/5.png'")
];

images[1].classList = notInvisibleClass;

const canvas = document.querySelector("#gameCanvas");

// canvas.classList = invisbleClass;
// const ctx = canvas.getContext("2d");

// function makeImage(src) {
//     let img = document.createElement("img");
//     img.src = src;
//     img.setAttribute("style", "z-index:1;");
//     // This next line will just add it to the <body> tag
//     canvas.append(img);
// }

// makeImage("./Images/0-ground.png");

// ctx.drawImage(, 10, 10);


