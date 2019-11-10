const btnRoll = document.querySelector('.btn_roll');
const btnSave = document.querySelector('.btn_save');

btnRoll.addEventListener('click', () => {
  roll();
});
btnSave.addEventListener('click', () => {
  save();
});

let randomOne = null;
let randomTwo = null;
let randomThree = null;
let randomFour = null;
let randomFive = null;
let randomSix = null;

const diceOneArray = ['01', '02', '03', '04', '05', '06'];
const diceTwoArray = ['01', '02', '03', '04', '05', '06'];
const diceThreeArray = ['01', '02', '03', '04', '05', '06'];
const diceFourArray = ['01', '02', '03', '04', '05', '06'];
const diceFiveArray = ['01', '02', '03', '04', '05', '06'];
const diceSixArray = ['01', '02', '03', '04', '05', '06'];

function roll() {
  const dice1 = document.querySelector('.dice1');
  const dice2 = document.querySelector('.dice2');
  const dice3 = document.querySelector('.dice3');
  const dice4 = document.querySelector('.dice4');
  const dice5 = document.querySelector('.dice5');
  const dice6 = document.querySelector('.dice6');

  if (!document.querySelector('.dice-1').checked) {
    randomOne = Math.floor(Math.random() * 6) + 1;
    dice1.src = `img/dice-${randomOne}.png`;
  }
  if (!document.querySelector('.dice-2').checked) {
    randomTwo = Math.floor(Math.random() * 6) + 1;
    dice2.src = `img/dice-${randomTwo}.png`;
  }
  if (!document.querySelector('.dice-3').checked) {
    randomThree = Math.floor(Math.random() * 6) + 1;
    dice3.src = `img/dice-${randomThree}.png`;
  }
  if (!document.querySelector('.dice-4').checked) {
    randomFour = Math.floor(Math.random() * 6) + 1;
    dice4.src = `img/dice-${randomFour}.png`;
  }
  if (!document.querySelector('.dice-5').checked) {
    randomFive = Math.floor(Math.random() * 6) + 1;
    dice5.src = `img/dice-${randomFive}.png`;
  }

  if (!document.querySelector('.dice-6').checked) {
    randomSix = Math.floor(Math.random() * 6) + 1;
    dice6.src = `img/dice-${randomSix}.png`;
  }
}

function save() {
  console.log(diceOneArray[randomOne - 1]);
  console.log(diceTwoArray[randomTwo - 1]);
  console.log(diceThreeArray[randomThree - 1]);
  console.log(diceFourArray[randomFour - 1]);
  console.log(diceFiveArray[randomFive - 1]);
  console.log(diceSixArray[randomSix - 1]);
}
