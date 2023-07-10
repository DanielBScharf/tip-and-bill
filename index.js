const form = document.getElementById("bill-info");
const bill = document.getElementById("total");
const people = document.getElementById("people");
const tip = document.getElementById("tip%");
const custom = document.querySelector(".textSelectdiv");
const totalTab = document.querySelector('.totalTab');
const card = document.querySelector('.card')



function tipNum(params) {
  let percentage = 0;
  if (params === '5%') {
    percentage = .05;
  } else if (params === '10%'){
    percentage = .1;
  } else if (params === '15%') {
    percentage = .15;
  } else if (params === '20%') {
    percentage = .2;
  } else if (params === '25%') {
    percentage = .25;
  } else {
    percentage = params / 10
  };
  return percentage;
};

function optionalTip() {
  let customTip = document.createElement('input');
  customTip.innerHTML = 'id="customTip" name="tip@"';
  custom.appendChild(customTip);
};

const details = {
  totalBill: 0,
  totalTip: 0,
  eachPerson: 0
}

function calculateTotal(tip, bill, people) {
  if ( isNaN(parseFloat(tip))) {
    details.totalTip = 0;
    details.totalBill = parseFloat(bill);
  } else {
    details.totalTip = tip * parseFloat(bill);
    details.totalBill = (parseFloat(details.totalTip) + parseFloat(bill));
  }
  details.eachPerson = (details.totalBill / people);
};


function showAll(){
  totalTab.innerHTML = `<h4 class="card-title">The bill is $${bill.value}</h4><p class="card-text">With a ${tip.value} tip, your total tip is $${details.totalTip.toFixed(2)}</p> <p class="card-text">That makes your total bill <strong>$${details.totalBill.toFixed(2)}</strong></p><p class="card-text">With a party of ${people.value}, each person will pay <strong>$${details.eachPerson.toFixed(2)}</strong></p>`
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  card.classList.remove('hidden');
  console.log(parseFloat(tipNum(tip.value)), parseFloat(bill.value))
  calculateTotal(tipNum(tip.value), bill.value, people.value);
  showAll();
  form.reset();
});
