'use strict';

const percentNumber = document.getElementById('percent-form');
const percentInput = document.getElementById('percent-number');
const percentBtnClear = document.getElementById('clear-percentages');
const maxNumber = document.getElementById('max-form');
const maxWeight = document.getElementById('max-weight');
const maxReps = document.getElementById('max-reps');
const maxBtnClear = document.getElementById('clear-max');

// Enter Number for Percentage Calculator
function getPercentages(e) {
  // Prevent default
  e.preventDefault();

  const number = percentInput.value;

  // Percentages
  // Tens
  document.querySelector('.forty').innerHTML = roundToFive(number * 0.4);
  document.querySelector('.fifty').innerHTML = roundToFive(number * 0.5);
  document.querySelector('.sixty').innerHTML = roundToFive(number * 0.6);
  document.querySelector('.seventy').innerHTML = roundToFive(number * 0.7);
  document.querySelector('.eighty').innerHTML = roundToFive(number * 0.8);
  document.querySelector('.ninety').innerHTML = roundToFive(number * 0.9);
  document.querySelector('.one-hundred').innerHTML = roundToFive(number * 1.0);

  // Fives
  document.querySelector('.forty-five').innerHTML = roundToFive(number * 0.45);
  document.querySelector('.fifty-five').innerHTML = roundToFive(number * 0.55);
  document.querySelector('.sixty-five').innerHTML = roundToFive(number * 0.65);
  document.querySelector('.seventy-five').innerHTML = roundToFive(
    number * 0.75
  );
  document.querySelector('.eighty-five').innerHTML = roundToFive(number * 0.85);
  document.querySelector('.ninety-five').innerHTML = roundToFive(number * 0.95);

  // Over One Hundred
  document.querySelector('.hundred-five').innerHTML = roundToFive(
    number * 1.05
  );
  document.querySelector('.hundred-ten').innerHTML = roundToFive(number * 1.1);
  document.querySelector('.hundred-fifteen').innerHTML = roundToFive(
    number * 1.15
  );
  document.querySelector('.hundred-twenty').innerHTML = roundToFive(
    number * 1.2
  );
}

// Round to nearest five
function roundToFive(num) {
  return Math.round(num / 5) * 5;
}

// Clear Percentage form
function clearPercents(e) {
  document
    .querySelectorAll('.clear')
    .forEach((element) => (element.innerHTML = ''));

  percentInput.value = '';
}

// Enter Numbers for Max weight
function getMax(e) {
  e.preventDefault();

  const weight = parseFloat(maxWeight.value);
  const reps = parseFloat(maxReps.value);

  document.querySelector('.est-max').innerHTML = (
    weight * reps * 0.0333 +
    weight
  ).toFixed(3);
}

// Clear Max Form
function clearMax(e) {
  document.querySelector('.est-max').innerHTML = '';
  maxWeight.value = '';
  maxReps.value = '';
}

// Event Listeners
percentNumber.addEventListener('submit', getPercentages);
percentBtnClear.addEventListener('click', clearPercents);
maxNumber.addEventListener('submit', getMax);
maxBtnClear.addEventListener('click', clearMax);
