


function myFunction() {
  alert("What are You Doing?");
}

// // console.log(122131235 * 6342234234999999999n);
// window.alert("Welcome")

// // var a, b, c;
// // a = 5;
// // b = 6;
// // c = a + b;
// // document.getElementById("demo1").innerHTML = c;
// // var price1 = 5;
// // var price2 = 6;
// // var total = price1 + price2;
// // document.getElementById("demo").innerHTML =
// //   `The total is: ${total}`;

// // var w = window.innerWidth
// //   || document.documentElement.clientWidth
// //   || document.body.clientWidth;

// // var h = window.innerHeight
// //   || document.documentElement.clientHeight
// //   || document.body.clientHeight;

// // var x = document.getElementById("demo");
// // x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";


var text = "";
var i = 0;
const as = 12;

// ---------------------------- Last Updated on 9:06 am 25/05/2020--------------------------------- 
const US_Dollar = 161.23;
const Euro = 175.56;
const Dirham = 43.89;
const Pound = 196.32 ;
const Riyal = 42.92;
const Indian_Rupee = 2.12;
const Kuwaiti_Dinar = 521.85;
const Canadian_Dollar = 115.22;
const Australian_Dollar = 105.30;
const Omani_Rial = 418.75;
const Japanese_Yen = 1.50; 
const Malaysian_Ringgit = 36.95;
const Qatari_Rial = 44.28; 
const Bahraini_Dinar = 427.01;
const Thai_Baht = 5.05;
const Chinese_Yuan = 22.59;
const Hong_Kong_Dollar = 20.79;
const Danish_Krone = 23.55;
const New_Zealand_Dollar = 98.23; 
const Singapore_Dollar = 113.06;
const Norwegian_Krone = 16.11;
const Swiss_Franc = 165.84;

var asd = confirm("Are you sure?");
 
    if(asd) {
        document.write("You clicked OK button!");
    } else {
        document.write("You clicked Cancel button!");
    }

function GetSelectedValue(){
    var currency = document.querySelector(`#currency`);
    var e = document.getElementById("Countries");
    var result = e.options[e.selectedIndex].value;
    var USD =  document.querySelector(`#USD`).value;
    var EUR  = document.querySelector(`#EUR`).value;
    var AED  = document.querySelector(`#AED`).value;
    var GBP  = document.querySelector(`#GBP`).value;
    var SAR  = document.querySelector(`#SAR`).value;
    var INR  = document.querySelector(`#INR`).value;
    var KWD  = document.querySelector(`#KWD`).value;
    var CAD  = document.querySelector(`#CAD`).value;
    var AUD  = document.querySelector(`#AUD`).value;
    var OMR  = document.querySelector(`#EUR`).value;
    var JPY  = document.querySelector(`#JPY`).value;
    var MYR  = document.querySelector(`#MYR`).value;
    var QAR  = document.querySelector(`#QAR`).value;
    var BHD  = document.querySelector(`#BHD`).value;
    var THB  = document.querySelector(`#THB`).value;
    var CNY  = document.querySelector(`#CNY`).value;
    var HKD  = document.querySelector(`#HKD`).value;
    var DKK  = document.querySelector(`#DKK`).value;
    var NZD  = document.querySelector(`#NZD`).value;
    var SGD  = document.querySelector(`#SGD`).value;
    var NOK  = document.querySelector(`#NOK`).value;
    var CHF  = document.querySelector(`#CHF`).value;


      if (result ==USD){
      if (currency.value > 1) {
            mulitply = currency.value * US_Dollar
            converted = mulitply.toFixed(2)
            alert(`${currency.value} USD Dollar = ${converted} Pakistani Rupees`);
            // document.write(`${currency.value} USD Dollar = ${converted} Pakistani Rupees`);
          }
          else if (currency.value < 1) {
            mulitply = currency.value * Euro
            converted = mulitply.toFixed(2)
            alert(`${currency.value} Euro = ${converted} Pakistani Rupees`);
          //   document.write(`${currency.value} Euro = ${converted} Pakistani Rupees`);
          }
          else {
            alert("Input Valid Number");
            // document.write(`Input Valid Number`);
          }
    }
      else if (result ==EUR) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Euro
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Euro = ${converted} Pakistani Rupees`);
        //   document.write(`${currency.value} Euro = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Euro
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Euro = ${converted} Pakistani Rupees`);
        //   document.write(`${currency.value} Euro = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
        //   document.write(`Input Valid Number`);
        }
      }
      else if (result ==AED) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Dirham
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Dirham = ${converted} Pakistani Rupees`);
        //   document.write(`${currency.value} Dirham = ${converted} Pakistani Rupees`);
        }

        else if (currency.value < 1) {
          mulitply = currency.value * Dirham
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Dirham = ${converted} Pakistani Rupees`);
        //   document.write(`${currency.value} Dirham = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
        //   document.write(`Input Valid Number`);
        }

      } 
      else if (result ==GBP) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Pound
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Pound = ${converted} Pakistani Rupees`);
        //   document.write(`${currency.value} Pound = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Pound
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Pound = ${converted} Pakistani Rupees`);
        //   document.write(`${currency.value} Pound = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
        //   document.write(`Input Valid Number`);
        }
      }
      else if (result ==SAR) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Riyal
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Riyal = ${converted} Pakistani Rupees`);
        //   document.write(`${currency.value} Riyal = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Riyal
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Riyal = ${converted} Pakistani Rupees`);
        //   document.write(`${currency.value} Riyal = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
        //   document.write(`Input Valid Number`);
        }
      } 
      else if (result ==INR) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Indian_Rupee
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Indian Rupee = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Indian Rupee = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Indian_Rupee
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Indian Rupee = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Indian Rupee = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result ==KWD) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Kuwaiti_Dinar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Kuwaiti Dinar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Kuwaiti Dinar = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Kuwaiti_Dinar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Kuwaiti Dinar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Kuwaiti Dinar = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == CAD) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Canadian_Dollar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Canadian Dollar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Canadian Dollar = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Canadian_Dollar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Canadian Dollar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Canadian Dollar = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == AUD) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Australian_Dollar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Australian Dollar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Australian Dollar = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Australian_Dollar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Australian Dollar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Australian Dollar = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == OMR) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Omani_Rial
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Omani Rial = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Omani Rial = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Omani_Rial
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Omani Rial = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Omani Rial = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == JPY) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Japanese_Yen
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Japanese Yen = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Japanese Yen = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Japanese_Yen
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Japanese Yen = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Japanese Yen = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == MYR) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Malaysian_Ringgit
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Malaysian Rinnggit = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Malaysian Rinnggit = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Malaysian_Ringgit
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Malaysian Rinnggit = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Malaysian Rinnggit = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == QAR) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Qatari_Rial
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Qatari Rial = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Qatari Rial = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Qatari_Rial
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Qatari Rial = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Qatari Rial = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == BHD) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Bahraini_Dinar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Bahraini Dinar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Bahraini Dinar = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Bahraini_Dinar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Bahraini Dinar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Bahraini Dinar = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == THB) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Thai_Baht
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Thai Baht = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Thai Baht = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Thai_Baht
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Thai Baht = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Thai Baht = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == CNY) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Chinese_Yuan
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Chinese Yuan = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Chinese Yuan = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Chinese_Yuan
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Chinese Yuan = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Chinese Yuan = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result ==HKD) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Hong_Kong_Dollar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Hong Kong Dollar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Hong Kong Dollar = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Hong_Kong_Dollar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Hong Kong Dollar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Hong Kong Dollar = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == DKK) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Danish_Krone
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Danish Krone = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Danish Krone = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Danish_Krone
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Danish Krone = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Danish Krone = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == NZD) {
        if (currency.value > 1) {
    
          mulitply = currency.value * New_Zealand_Dollar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} New Zealand Dollar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} New Zealand Dollar = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * New_Zealand_Dollar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} New Zealand Dollar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} New Zealand Dollar = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == SGD) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Singapore_Dollar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Singapore Dollar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Singapore Dollar = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Singapore_Dollar
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Singapore Dollar = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Singapore Dollar = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == NOK) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Norwegian_Krone
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Norweigian Krone = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Norweigian Krone = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Norwegian_Krone
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Norweigian Krone = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Norweigian Krone = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else if (result == CHF) {
        if (currency.value > 1) {
    
          mulitply = currency.value * Swiss_Franc
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Swiss Franc = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Swiss Franc = ${converted} Pakistani Rupees`);
        }
        else if (currency.value < 1) {
          mulitply = currency.value * Swiss_Franc
          converted = mulitply.toFixed(2)
          alert(`${currency.value} Swiss Franc = ${converted} Pakistani Rupees`);
          // document.write(`${currency.value} Swiss Franc = ${converted} Pakistani Rupees`);
        }
        else {
          alert("Input Valid Number");
          // document.write(`Input Valid Number`);
        }
      }
      else {
          alert("What are you Doing!!!");
        // document.write("What are You Doing!!!");
      }
}






// function add() {
//   if (document.querySelector(`#Countries`).value == "Usd") {
//     if (currency.value > 1) {
//       mulitply = currency.value * US_Dollar
//       converted = mulitply.toFixed(2)
//       alert(`${currency.value} USD Dollar = ${converted} Pakistani Rupees`);
//       // document.write(`${document.querySelector(`#currency`).value} USD Dollar = ${converted} Pakistani Rupees`);
//     }
//     else if (document.querySelector(`#currency`).value < 1) {
//       mulitply = document.querySelector(`#currency`).value * US_Dollar
//       converted = mulitply.toFixed(2)
//       alert(`${document.querySelector(`#currency`).value} USD Dollar = ${converted} Pakistani Rupees`);
//       // document.write(`${document.querySelector(`#currency`).value} USD Dollar = ${converted} Pakistani Rupees`);
//     }
//     else {
//       alert("Input Valid Number");
//       document.write(`Input Valid Number`);
//     }
//   }
//   else if (document.querySelector(`#EUR`).value == "Eur") {
//     if (document.querySelector(`#currency`).value > 1) {

//       mulitply = document.querySelector(`#currency`).value * Euro
//       converted = mulitply.toFixed(2)
//       alert(`${document.querySelector(`#currency`).value} Euro = ${converted} Pakistani Rupees`);
//       // document.write(`${document.querySelector(`#currency`).value} Euro = ${converted} Pakistani Rupees`);
//     }
//     else if (document.querySelector(`#currency`).value < 1) {
//       mulitply = document.querySelector(`#currency`).value * Euro
//       converted = mulitply.toFixed(2)
//       alert(`${document.querySelector(`#currency`).value} Euro = ${converted} Pakistani Rupees`);
//       document.write(`${document.querySelector(`#currency`).value} Euro = ${converted} Pakistani Rupees`);
//     }
//     else {
//       alert("Input Valid Number");
//       document.write(`Input Valid Number`);
//     }
//   }
//   else if (document.querySelector(`#AED`).value = true) {
//     if (document.querySelector(`#currency`).value > 1) {

//       mulitply = document.querySelector(`#currency`).value * Dirham
//       converted = mulitply.toFixed(2)
//       alert(`${document.querySelector(`#currency`).value} Dirham = ${converted} Pakistani Rupees`);
//       document.write(`${document.querySelector(`#currency`).value} Dirham = ${converted} Pakistani Rupees`);
//     }
//     else if (document.querySelector(`#currency`).value < 1) {
//       mulitply = document.querySelector(`#currency`).value * Dirham
//       converted = mulitply.toFixed(2)
//       alert(`${document.querySelector(`#currency`).value} Dirham = ${converted} Pakistani Rupees`);
//       document.write(`${document.querySelector(`#currency`).value} Dirham = ${converted} Pakistani Rupees`);
//     }
//     else {
//       alert("Input Valid Number");
//       document.write(`Input Valid Number`);
//     }
//   } else if (document.querySelector(`#GBP`).value = true) {
//     if (document.querySelector(`#currency`).value > 1) {

//       mulitply = document.querySelector(`#currency`).value * Pound
//       converted = mulitply.toFixed(2)
//       alert(`${document.querySelector(`#currency`).value} Pound = ${converted} Pakistani Rupees`);
//       document.write(`${document.querySelector(`#currency`).value} Pound = ${converted} Pakistani Rupees`);
//     }
//     else if (document.querySelector(`#currency`).value < 1) {
//       mulitply = document.querySelector(`#currency`).value * Pound
//       converted = mulitply.toFixed(2)
//       alert(`${document.querySelector(`#currency`).value} Pound = ${converted} Pakistani Rupees`);
//       document.write(`${document.querySelector(`#currency`).value} Pound = ${converted} Pakistani Rupees`);
//     }
//     else {
//       alert("Input Valid Number");
//       document.write(`Input Valid Number`);
//     }
//   }
//   else if (document.querySelector(`#SAR`).value = true) {
//     if (document.querySelector(`#currency`).value > 1) {

//       mulitply = document.querySelector(`#currency`).value * Riyal
//       converted = mulitply.toFixed(2)
//       alert(`${document.querySelector(`#currency`).value} Riyal = ${converted} Pakistani Rupees`);
//       document.write(`${document.querySelector(`#currency`).value} Riyal = ${converted} Pakistani Rupees`);
//     }
//     else if (document.querySelector(`#currency`).value < 1) {
//       mulitply = document.querySelector(`#currency`).value * Riyal
//       converted = mulitply.toFixed(2)
//       alert(`${document.querySelector(`#currency`).value} Riyal = ${converted} Pakistani Rupees`);
//       document.write(`${document.querySelector(`#currency`).value} Riyal = ${converted} Pakistani Rupees`);
//     }
//     else {
//       alert("Input Valid Number");
//       document.write(`Input Valid Number`);
//     }
//   } else if (document.querySelector(`#INR`).value = true) {
//     if (document.querySelector(`#currency`).value > 1) {

//       mulitply = document.querySelector(`#currency`).value * Indian_Rupee
//       converted = mulitply.toFixed(2)
//       alert(`${document.querySelector(`#currency`).value} Indian Rupee = ${converted} Pakistani Rupees`);
//       document.write(`${document.querySelector(`#currency`).value} Indian Rupee = ${converted} Pakistani Rupees`);
//     }
//     else if (document.querySelector(`#currency`).value < 1) {
//       mulitply = document.querySelector(`#currency`).value * Indian_Rupee
//       converted = mulitply.toFixed(2)
//       alert(`${document.querySelector(`#currency`).value} Indian Rupee = ${converted} Pakistani Rupees`);
//       document.write(`${document.querySelector(`#currency`).value} Indian Rupee = ${converted} Pakistani Rupees`);
//     }
//     else {
//       alert("Input Valid Number");
//       document.write(`Input Valid Number`);
//     }
//   }
//   else {
//     document.write("What are You Doing!!!");
//   }
// }

document.addEventListener(`DOMContentLoaded`, () => {
  // try {
  //   alert("Welcome guest!");
  // } catch (err) {
  //   document.getElementById("demo").innerHTML = err.message;
  // }

  // By default, submit button is disabled
  document.querySelector('#submit').disabled = true;

  // Enable submit button if there is text in the input field
  document.querySelector('#currency').onkeyup = () => {
    if (document.querySelector('#currency').value.length > 1)
      document.querySelector('#submit').disabled = false;
    else
      document.querySelector('#submit').disabled = true;

  };

});

