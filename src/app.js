/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector(".number").innerHTML = generateRandomNumber();
  let suit = generateRandomSuit();
  if (suit == "♥" || suit == "♦") {
    document.querySelector(".container-Fluid").style.color = "red";
  }
  document.querySelector(".top-suit").innerHTML = suit;
  document.querySelector(".bottom-suit").innerHTML = suit;
};

let generateRandomNumber = () => {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let suit = ["♠", "♥", "♦", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
