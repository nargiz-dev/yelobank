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
  const value =[12, 24, 36] ;
 for(let i=0; i<3; i++){
  rows += `
    <tr>
      <td>${value[i]}ay</td>
      <td>${values[12]['AZN']['AYLIQ'] * 100}%</td>
      <td>${values[12]['AZN']['MUDDETIN_SONUNDA'] * 100}%</td>
      <td>${values[12]['USD']['AYLIQ'] * 100}%</td>
      <td>${values[12]['USD']['MUDDETIN_SONUNDA'] * 100}%</td>
    </tr>
  `;
document.getElementById("tableBody").innerHTML = rows;}
console.log((values[12]['AZN']['AYLIQ'])*2);