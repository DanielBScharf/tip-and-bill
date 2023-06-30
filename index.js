const form = document.getElementById('bill-info');
const bill = document.getElementById('total');
const people = document.getElementById('people');
const tip = document.getElementById('tip%');

function calculateTip(params) {
  const totalTip = params * bill;
  return totalTip;
}

function tipCalc(params) {

}
