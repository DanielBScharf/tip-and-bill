const form = document.getElementById("bill-info");
const bill = document.getElementById("total");
const people = document.getElementById("people");
const tip = document.getElementById("tip%");
const custom = document.querySelector(".textSelectdiv");
const showTip = document.querySelector('.tip-total');

function calculateTip(params) {
  const totalTip = params * Number(bill.value);
  return totalTip;
}

function tipNum(params) {
  let percentage = 0;
  // if (tip.value === '5%') {
  //   percentage = .05;
  // } else if (tip.value === '10%'){
  //   percentage = .1;
  // } else if (tip.value === '15%') {
  //   percentage = .15;
  // } else if (tip.value === '20%') {
  //   percentage = .2;
  // } else if (tip.value === '25%') {
  //   percentage = .25;
  // } else {
  //   percentage = tip.value / 10
  // }
  switch (params) {
    case params === "5%":
      percentage = 0.05;
    case params === "10%":
      percentage = 0.1;
    case params === "15%":
      percentage = 0.15;
    case params === "20%":
      percentage = 0.2;
    case params === "25%":
      percentage = 0.25;
    default:
      optionalTip
      const customTip = document.getElementById("customTip");
      percentage = customTip * 10;
  };
  return percentage
}

function optionalTip() {
  let customTip = document.createElement('input');
  customTip.innerHTML = 'id="customTip" name="tip@"';
  custom.appendChild(customTip);
};

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const done = document.createElement('h1');
//   done.innerText = 'DONE'
//   showTip.appendChild(done);
//   const totalBill = bill.value;
//     console.log(totalBill);
//   const totalTip = calculateTip(tipNum);
//     console.log(totalTip);
// });

form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(`the bill is ${typeof Number(bill.value)}`);
  console.log(`the tip is ${tipNum(tip.value)}`);
  // const done = document.createElement('h1');
  // done.innerText = 'DONE'
  // showTip.appendChild(done);
  // const totalBill = bill.value;
  //   console.log(totalBill);
  // const totalTip = calculateTip(tipNum);
  //   console.log(totalTip);
});
