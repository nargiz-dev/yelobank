let AYLIQ = "AYLIQ";
let MUDDETIN_SONUNDA = "MUDDETIN_SONUNDA";
let AZN = "AZN";
let USD = "USD";
const values = {
  12: {
      AZN: {
           AYLIQ: "0.11",
           MUDDETIN_SONUNDA: "0.115",
      },
      USD: {
          AYLIQ: "0.015",
          MUDDETIN_SONUNDA: "0.02",
      },
  },   
  24: {
      AZN: {
           AYLIQ: "0.11",
           MUDDETIN_SONUNDA: "0.115",
      },
      USD: {
          AYLIQ: "0.015",
          MUDDETIN_SONUNDA: "0.02",
      },
  },  
  36: {
      AZN: {
           AYLIQ: "0.11",
           MUDDETIN_SONUNDA: "0.115",
      },
      USD: {
          AYLIQ: "0.015",
          MUDDETIN_SONUNDA: "0.02",
      },
  },  
}
let rows = "";
const value =[12, 24, 36];
for(let i=0; i<3; i++){
rows += `
  <tr>
    <td>${value[i]}ay</td>
    <td>${values[12][AZN][AYLIQ] * 100}%</td>
    <td>${values[12][AZN][MUDDETIN_SONUNDA] * 100}%</td>
    <td>${values[12][USD][AYLIQ] * 100}%</td>
    <td>${values[12][USD][MUDDETIN_SONUNDA] * 100}%</td>
  </tr>
`;
document.getElementById("tableBody").innerHTML = rows;
}
let faiz=``;
let checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', function () {
  if (checkbox.checked) {
   faiz= `${MUDDETIN_SONUNDA}` ;
   document.getElementById("style").classList.add("hiddenItem");
  } else {
    faiz= `${AYLIQ}` ;
   document.getElementById("style").classList.remove("hiddenItem");
  }
});

let valyuta ='';
 document.getElementById('valyuta').addEventListener('change', function() {
  valyuta = this.value;
  if (valyuta === USD){
   AYLIQ = values[12][USD][AYLIQ];
   MUDDETIN_SONUNDA = values[12][USD][MUDDETIN_SONUNDA];
  }
  else{
    AYLIQ = values[12][AZN][AYLIQ];
    MUDDETIN_SONUNDA = values[12][AZN][MUDDETIN_SONUNDA];
  }
});
let mebleg="50000";
const amountRange = document.querySelector(".amountRange");
const amountOutput = document.querySelector('#amount');
amountRange.addEventListener('input', function (){
   amountOutput.innerHTML = amountRange.value;
   mebleg= amountRange.value;
});
let muddet = "24";
const periodRange = document.querySelector(".periodRange");
const periodOutput = document.querySelector('#period');
periodRange.addEventListener('input', function (){
   periodOutput.innerHTML = periodRange.value;
    muddet= periodRange.value;
});


const umumiFaizGeliri = (muddet, mebleg, faiz) =>{
 console.log(+mebleg * +muddet * +faiz);
}
umumiFaizGeliri(mebleg,muddet,faiz);
const ayliqFaizGeliri = (muddet, mebleg, faiz) =>{
  return (+mebleg * +faiz/ +muddet);
}
































/*let periodValue = document.getElementById("periodRangeInput");
document.getElementById('periodRangeInput').addEventListener('input', function() {
  periodCurrentValue = period.value;
  console.log(periodCurrentValue);
  console.log(period);
});
let amountCurrentValue = '';
let  amountValue = document.getElementById("amountRangeInput");
document.getElementById('amountRangeInput').addEventListener('input', function() {
  amountCurrentValue = amount.value;
  console.log(amountCurrentValue);
});*/




