"use strict";

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */
const setBackgroundImage = function (imageUrl) {
  document.querySelector("body").style.background = imageUrl;
};

const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const setMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let numberOfTriesAttempted = 10;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  numberOfTriesAttempted = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setMessage("Start guessing...");
  setScore(numberOfTriesAttempted);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  setBackgroundImage("url('images/default.jpg')");
});

document.querySelector(".check").addEventListener("click", function () {
  const enteredNumber = Number(document.querySelector(".guess").value);

  if (!enteredNumber) {
    setMessage("⛔️ Not a valid input");
  } else if (enteredNumber === secretNumber) {
    setMessage("🎉 Correct number");
    document.querySelector(".number").textContent = secretNumber;
    setBackgroundImage("url('images/win.jpg')");
    document.querySelector(".number").style.width = "30rem";

    if (highscore < numberOfTriesAttempted) {
      highscore = numberOfTriesAttempted;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (enteredNumber !== secretNumber) {
    if (numberOfTriesAttempted > 1) {
      setMessage(enteredNumber > secretNumber ? "⬆️ Too high" : "⬇️ Too Low");
      numberOfTriesAttempted--;
      setScore(numberOfTriesAttempted);
    } else {
      setScore(0);
      setBackgroundImage("url('images/lose.jpg')");
      setMessage("💔 You lost the game");
    }
  }
});
