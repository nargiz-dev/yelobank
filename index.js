let AYLIQ = "AYLIQ";
let MUDDETIN_SONUNDA = "MUDDETIN_SONUNDA";
let AZN = "AZN";
let USD = "USD";
let a=AYLIQ;
let rows = "";
let valyuta = "AZN";
let mebleg = "50000";
let muddet = "24"; 
let umumiFaizGeliriOutput ='';
let ayliqFaizGeliriOutput ='';
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
};
let faiz = values[12]['AZN']['AYLIQ'];
const value = [12, 24, 36];
for (let i = 0; i < 3; i++) {
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

  const faiziTap = () =>{
    if (a===AYLIQ && valyuta===AZN) {
      faiz = values[12]['AZN'][AYLIQ];
    } 
    else if (a===MUDDETIN_SONUNDA && valyuta===AZN){
      faiz = values[12]['AZN'][MUDDETIN_SONUNDA];
    }
    else if (a===AYLIQ && valyuta===USD){
      faiz = values[12]['USD'][AYLIQ];
    }
    else {
      faiz = values[12]['USD'][MUDDETIN_SONUNDA];
  }
  };
 
const umumiFaizGeliri = (muddet, mebleg, faiz) => { 
  faiziTap();
   umumiFaizGeliriOutput= (+mebleg * +muddet * +faiz);
  document.querySelector(".umumiFaiz").innerHTML = umumiFaizGeliriOutput;
};

const ayliqFaizGeliri = (umumiFaizGeliriOutput, muddet) => {
  ayliqFaizGeliriOutput = ( +umumiFaizGeliriOutput / +muddet);
  document.querySelector(".ayliqFaiz").innerHTML = ayliqFaizGeliriOutput;
};
const faizDerecesi = (faiz) =>{
  faiziTap();
  faizDerecesiOutput = faiz * 100 +'%';
  document.querySelector('.faizDerecesi').innerHTML = faizDerecesiOutput;
}
umumiFaizGeliri(mebleg, muddet, faiz);
ayliqFaizGeliri(umumiFaizGeliriOutput, muddet);
faizDerecesi(faiz);

let checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    a= MUDDETIN_SONUNDA;
    document.getElementById("style").classList.add("hiddenItem");
  } else {
   a= AYLIQ;
    document.getElementById("style").classList.remove("hiddenItem");
  }
  faiziTap();
  umumiFaizGeliri(mebleg, muddet, faiz);
  faizDerecesi(faiz);
  ayliqFaizGeliri(umumiFaizGeliriOutput, muddet);
});
document.getElementById("valyuta").addEventListener("change", function () {
  valyuta = this.value;
    if(valyuta===AZN){
      valyuta=AZN;
      document.querySelector('.currency-difference1').innerHTML= valyuta;
      document.querySelector('.currency-difference2').innerHTML= valyuta;
    }
   else {
    valyuta=USD;
    document.querySelector('.currency-difference1').innerHTML= valyuta;
    document.querySelector('.currency-difference2').innerHTML= valyuta;
  }
  faiziTap();
  umumiFaizGeliri(mebleg, muddet, faiz);
  ayliqFaizGeliri(umumiFaizGeliriOutput, muddet);
  faizDerecesi(faiz);
});

const amountRange = document.querySelector(".amountRange");
const amountOutput = document.querySelector("#amount");

amountRange.addEventListener("input", function () {
  amountOutput.innerHTML = amountRange.value;
  mebleg = amountRange.value;
  umumiFaizGeliri(mebleg, muddet, faiz);
  ayliqFaizGeliri(umumiFaizGeliriOutput, muddet);
});

const periodRange = document.querySelector(".periodRange");
const periodOutput = document.querySelector("#period");

periodRange.addEventListener("input", function () {
  periodOutput.innerHTML = periodRange.value;
  muddet = periodRange.value;
  umumiFaizGeliri(mebleg, muddet, faiz);
  ayliqFaizGeliri(umumiFaizGeliriOutput, muddet);
});



