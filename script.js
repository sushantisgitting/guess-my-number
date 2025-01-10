'use strict';
// Selecting and Printing
/*console.log(document.querySelector('.message').textContent);
// Changing the text
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 11;
document.querySelector('.score').textContent = 10;
// Manipulating Values
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

// Building The Project
// Handling Click Events

let secretNumber = Math.trunc(Math.random() * 15) + 1;
let score = 5;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Enter a Number 😥';

    // When Player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number 🥳';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High 📈' : 'Too Low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost The Game ❌';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 15) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
