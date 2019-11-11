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

const diceMethod = [
  'Upright - 30s Bloom - 60g Water',
  'Inverted - No Bloom',
  'Inverted - 30s bloom - 60g Water',
  'Upright - No Bloom',
  'Inverted - 30s Bloom - 30g Water',
  'Upright - 30s Bloom - 30g Water'
];
const diceRatio = [
  '24g Coffee - 200g Water',
  'Your Choice',
  '12g Coffee - 200g Water',
  '15g Coffee - 250g Water',
  '12g Coffee - 200g Water',
  '24g Coffee - 200g Water (dilute to share)'
];
const diceGrind = [
  'Coarse - 4min',
  'Very Fine - 30s',
  'Fine - 60s',
  'Medium - 120s',
  'Medium Fine - 90s',
  'Your Choice'
];
const diceTemp = [
  '80 deg',
  '75 deg',
  '95 deg',
  '90 deg',
  'Your Choice',
  '85 deg'
];
const diceStir = [
  '2x Stir right before pressing',
  'Stir right before pressing',
  'Stir before pressing',
  'Stir one left, Stir one right before pressing',
  'Your Choice',
  'No Stir'
];

function roll() {
  const dice1 = document.querySelector('.dice1');
  const dice2 = document.querySelector('.dice2');
  const dice3 = document.querySelector('.dice3');
  const dice4 = document.querySelector('.dice4');
  const dice5 = document.querySelector('.dice5');

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
    console.log(random);
  }
}

function save() {
  console.log(diceMethod[random[0]]);
  console.log(diceRatio[random[1]]);
  console.log(diceGrind[random[2]]);
  console.log(diceTemp[random[3]]);
  console.log(diceStir[random[4]]);
}
