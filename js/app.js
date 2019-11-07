const btnRoll = document.querySelector('.btn_roll');

btnRoll.addEventListener('click', () => {
  roll();
});

function roll() {
  const dice1 = document.querySelector('.dice1');
  const dice2 = document.querySelector('.dice2');
  const dice3 = document.querySelector('.dice3');
  const dice4 = document.querySelector('.dice4');
  const dice5 = document.querySelector('.dice5');
  const dice6 = document.querySelector('.dice6');

  if (!document.getElementById('dice-1').checked) {
    randomOne = Math.floor(Math.random() * 6) + 1;
    dice1.src = `img/dice-${randomOne}.png`;
    console.log(!document.getElementById('dice-1').checked);
  }
  if (!document.getElementById('dice-2').checked) {
    randomTwo = Math.floor(Math.random() * 6) + 1;
    dice2.src = `img/dice-${randomTwo}.png`;
  }
  if (!document.getElementById('dice-3').checked) {
    randomThree = Math.floor(Math.random() * 6) + 1;
    dice3.src = `img/dice-${randomThree}.png`;
  }
  if (!document.getElementById('dice-4').checked) {
    randomFour = Math.floor(Math.random() * 6) + 1;
    dice4.src = `img/dice-${randomFour}.png`;
  }
  if (!document.getElementById('dice-5').checked) {
    randomFive = Math.floor(Math.random() * 6) + 1;
    dice5.src = `img/dice-${randomFive}.png`;
  }

  if (!document.getElementById('dice-6').checked) {
    randomSix = Math.floor(Math.random() * 6) + 1;
    dice6.src = `img/dice-${randomSix}.png`;
  }
}
