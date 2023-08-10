"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

//displaying message function
const displayMessage = function (msg) {
  document.querySelector(".message").textContent = msg;
};

//check button

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (guess <= 20 && guess >= 0) {
    //when there is no input
    if (!guess) {
      //document.querySelector('.message').textContent = '🙅‍♀️ No Number!';
      displayMessage("🙅‍♀️ No Number!");
    }

    //when guess is correct
    else if (guess == secretNumber) {
      //document.querySelector('.message').textContent = '🎉Correct Number!';
      displayMessage("🎉Correct Number!");

      document.querySelector("body").style.backgroundColor = "#68b347";

      document.querySelector(".number").style.width = "30rem";

      document.querySelector(".number").textContent = secretNumber;

      //fixing highscore
      if (highScore < score) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    }

    //when guess is different
    else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //   guess < secretNumber ? '📉 Too Low' : '📈 Too High!';
        displayMessage(guess < secretNumber ? "📉 Too Low" : "📈 Too High!");

        score--;
        document.querySelector(".score").textContent = score;
      } else {
        //document.querySelector('.message').textContent = '🙁You lost the game!';
        displayMessage("🙁You lost the game!");
        document.querySelector(".score").textContent = 0;
      }
    }
  } else {
    displayMessage("Please select a number between 0 and 20");
  }
});

//again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "black";
  displayMessage("Start guessing... ");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
