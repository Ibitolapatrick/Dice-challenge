var randomNumber1= Math.floor(Math.random()*6)+1;
var randomDice= "dice" + randomNumber1 + ".png"
var imageSource= "./images/" + randomDice

var firstImage= document.querySelectorAll("img")[0];
firstImage.setAttribute("src", imageSource);





var randomNumber2= Math.floor(Math.random()*6) +1;

var randomDice= "dice" + randomNumber2+ ".png";

var imageSource= "./images/" + randomDice;

var secondImage= document.querySelectorAll("img")[1];

secondImage.setAttribute("src", imageSource);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!"
} else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!"
} else {
    document.querySelector("h1").innerHTML="It's a draw!"
}