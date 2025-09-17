//DICE #1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//random number between 1-6
//we will use this number to decide dice!

var randomDiceImage = "dice" + randomNumber1 + ".png";
//dice1.png - dice6.png
//Now we can use this dicex.png to change img elemnt source to display different dices.

var randomImageSource = "images/" + randomDiceImage;
//images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//DICE #2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🎉";
} else if (randomNumber2 > randomNumber1) {
  //If player 2 wins
  document.querySelector("h1").innerHTML = "PLayer 2 Wins! 🎉";
} else {
  //Draw
  document.querySelector("h1").innerHTML = "Draw! 🤝🏻";
}
