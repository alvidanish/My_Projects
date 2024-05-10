'use strict';

const checkBtn = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const againBtn = document.querySelector('.again');
const score = document.querySelector('.score');
let guessNumber = Math.trunc(Math.random() * 20) + 1;
console.log(number);

let score1 = 20;
let HighSore = 0;

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '⛔ No number!';
  } else if (guess === guessNumber) {
    document.querySelector('body').style.backgroundColor = '#e9ab26';
    number.style.width = '30rem';
    number.textContent = guessNumber;
    // number.style.backgroundImage = url('th.jpeg');

    if (score1 > HighSore) {
      HighSore = score1;
      document.querySelector('.highscore').textContent = HighSore;
    }
    message.textContent = '🏆 Correct Number!';
  } else if (guess !== guessNumber) {
    if (score1 > 1) {
      message.textContent = guess > guessNumber ? 'To High' : 'To Low';
      score1--;
      score.textContent = score1;
    } else {
      message.textContent = '😡you  lost the game';
      score.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  score1 = 20;
  guessNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = 'Start guessing...';
  score.textContent = score1;
  number.textContent = '?';
  guess.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
// document.querySelector('.guess').value = ' ';
