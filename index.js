const form = document.getElementById('bill-info');
const bill = document.getElementById('total');
const people = document.getElementById('people');
const tip = document.getElementById('tip%');

function calculateTip(params) {
  const totalTip = params * bill;
  return totalTip;
}

function tipCalc(params) {
  const percentage = 0;
  if (tip.value === '5%') {
    percentage = .05;
  } else if (tip.value === '10%'){
    percentage = .1;
  } else if (tip.value === '15%') {
    percentage = .15;
  } else if (tip.value === '20%') {
    percentage = .2;
  } else if (tip.value === '25%') {
    percentage = .25;
  } else {
    percentage = tip.value / 10
  }
  return percentage
}
