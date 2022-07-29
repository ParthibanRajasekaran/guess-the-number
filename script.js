'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let numberOfTriesAttempted = 10;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  numberOfTriesAttempted = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = numberOfTriesAttempted;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.background = "url('default.jpg')";
});

document.querySelector('.check').addEventListener('click', function () {
  const enteredNumber = Number(document.querySelector('.guess').value);
  console.log(typeof enteredNumber);

  if (!enteredNumber) {
    document.querySelector('.message').textContent = '⛔️ Not a valid input';
  } else if (enteredNumber === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.background = "url('win.jpg')";
    document.querySelector('.number').style.width = '30rem';

    if (highscore < numberOfTriesAttempted) {
      highscore = numberOfTriesAttempted;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (enteredNumber !== secretNumber) {
    if (numberOfTriesAttempted > 1) {
      document.querySelector('.message').textContent =
        numberOfTriesAttempted > secretNumber ? '⬆️ Too high' : '⬇️ Too Low';
      numberOfTriesAttempted--;
      document.querySelector('.score').textContent = numberOfTriesAttempted;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.background = "url('lose.jpg')";
      document.querySelector('.message').textContent = '💔 You lost the game';
    }
  }
});
