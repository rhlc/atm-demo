// select input fields
const button = document.getElementById("clickButton");
const amount = document.getElementById("amount");
const twoThousand = document.getElementById("two-thousand");
const fiveHundred = document.getElementById("five-hundred");
const twoHundred = document.getElementById("two-hundred");
const hundred = document.getElementById("hundred");

// event listeners
button.addEventListener("click", withdrawMoney);
amount.addEventListener("DOMContentLoaded", withdrawMoney);

function withdrawMoney(e) {
  e.preventDefault();

  // check if money is in valid denominations
 while(amount.value < 25000) {

 }
 


  console.log("click");
  console.log(amount.value);
  console.log(twoThousand);
  console.log(fiveHundred);
  console.log(twoHundred);
  console.log(hundred);
}
