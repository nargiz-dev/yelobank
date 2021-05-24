let valyuta ='';
 document.getElementById('valyuta').addEventListener('change', function() {
  valyuta = this.value;
  console.log(valyuta);
});
let checkbox = document.querySelector('input[type="checkbox"]');
let a = '';
checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
   a= 'MUDDETIN SONUNDA';
   console.log(a);
   document.getElementById("style").classList.add("hiddenItem");
  } else {
    a= 'AYLIQ';
   console.log(a); 
   document.getElementById("style").classList.remove("hiddenItem");
  }
});

let periodValue = document.getElementById("periodRangeInput");
document.getElementById('periodRangeInput').addEventListener('click', function() {
  periodCurrentValue = period.value;
  console.log(periodCurrentValue);
});
let amountCurrentValue = '';
let  amountValue = document.getElementById("amountRangeInput");
document.getElementById('amountRangeInput').addEventListener('click', function() {
  amountCurrentValue = amount.value;
  console.log(amountCurrentValue);
});
function updatePeriod(val) {
  document.getElementById('period').value=val; 
}
function updateAmount(val) {
  document.getElementById('amount').value=val; 
}
const Values = [
  {
    months: 12,
    interest: {
      paidEachMonthAZN: 0.11,
      paidAtTheEndAZN: 0.115,
      paidEachMonthUSD: 0.015,
      paidAtTheEndUSD: 0.02
    }
  },
  {
    months: 24,
    interest: {
      paidEachMonthAZN: 0.11,
      paidAtTheEndAZN: 0.115,
      paidEachMonthUSD: 0.015,
      paidAtTheEndUSD: 0.02
    }
  },
  {
    months: 36,
    interest: {
      paidEachMonthAZN: 0.11,
      paidAtTheEndAZN: 0.115, 
      paidEachMonthUSD: 0.015,
      paidAtTheEndUSD: 0.02
    }
  }
];
let rows = "";
Values.forEach((value) => {
  const { months, interest } = value;
  const { paidEachMonthAZN, paidAtTheEndAZN, paidEachMonthUSD,paidAtTheEndUSD } = interest;
  rows += `
    <tr>
      <td>${months}ay</td>
      <td>${paidEachMonthAZN * 100}%</td>
      <td>${paidAtTheEndAZN * 100}%</td>
      <td>${paidEachMonthUSD * 100}%</td>
      <td>${paidAtTheEndUSD * 100}%</td>
    </tr>
  `;
});
document.getElementById("tableBody").innerHTML = rows;
const interestsFor12Months = Values.find( value => value.months === 12);




