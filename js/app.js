const btnRoll = document.querySelector('.btn_roll');
const btnSave = document.querySelector('.btn_save');

document.addEventListener(
  'DOMContentLoaded',
  function() {
    btnRoll.addEventListener('click', () => {
      roll();
    });
    btnSave.addEventListener('click', () => {
      save();
    });
  },
  false
);

let random = [];

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
    random[0] = Math.floor(Math.random() * 6) + 1;
    dice1.src = `img/dice-${random[0]}.png`;
  }
  if (!document.querySelector('.dice-2').checked) {
    random[1] = Math.floor(Math.random() * 6) + 1;
    dice2.src = `img/dice-${random[1]}.png`;
  }
  if (!document.querySelector('.dice-3').checked) {
    random[2] = Math.floor(Math.random() * 6) + 1;
    dice3.src = `img/dice-${random[2]}.png`;
  }
  if (!document.querySelector('.dice-4').checked) {
    random[3] = Math.floor(Math.random() * 6) + 1;
    dice4.src = `img/dice-${random[3]}.png`;
  }
  if (!document.querySelector('.dice-5').checked) {
    random[4] = Math.floor(Math.random() * 6) + 1;
    dice5.src = `img/dice-${random[4]}.png`;
  }

  if (!document.querySelector('.dice-6').checked) {
    random[5] = Math.floor(Math.random() * 6) + 1;
    dice6.src = `img/dice-${random[5]}.png`;
  }
}

function save() {
  for (let i = 0; i < random.length; i++) {
    console.log(diceOneArray[random[i] - 1]);
  }
}
