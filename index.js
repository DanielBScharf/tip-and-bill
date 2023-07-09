const form = document.getElementById("bill-info");
const bill = document.getElementById("total");
const people = document.getElementById("people");
const tip = document.getElementById("tip%");
const custom = document.querySelector(".textSelectdiv");
const totalTab = document.querySelector('.totalTab');




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
  details.totalTip = tip * bill;
  details.totalBill = (parseFloat(details.totalTip) + parseFloat(bill));
  details.eachPerson = details.totalBill / people;
};


function showAll(){
  totalTab.innerHTML = `<h3>The bill is $${bill.value}</h3><h4>With a ${tip.value} tip, your total tip is $${details.totalTip}</h4> <h4>That makes your total bill <strong>$${details.totalBill}</strong></h4><h4>With a party of ${people.value} each person will pay <strong>$${details.eachPerson}</strong></h4>`
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  calculateTotal(tipNum(tip.value), bill.value, people.value);
  showAll();
  form.reset();
});
