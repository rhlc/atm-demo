// select input fields
const button = document.getElementById("clickButton");
var amount = document.getElementById("amount");
const results = document.getElementById("results");
const reset = document.getElementById('reset');

// variables
var denominations = [2000, 500, 200, 100];
var notes = 0;

// event listeners
button.addEventListener("click", withdrawMoney);
reset.addEventListener('click', function(e) {
	console.log('doo doo');
	window.location.reload();
})
// enter key press event
amount.addEventListener('keydown', function(e) {
	if(e.keyCode === 13) {
		withdrawMoney(e);

	}
});



amount.addEventListener("DOMContentLoaded", withdrawMoney);

function withdrawMoney(e) {
  e.preventDefault();
	var amountCopy = JSON.parse(JSON.stringify(amount.value));
  for (var i = 0; i < denominations.length; i++) {
    if (amount.value <= 25000 && amount.value % 10 == 0) {
      notes = parseInt(amount.value / denominations[i]);

      // remaining money
      amount.value = amount.value % denominations[i];
  
  		// display result
      const currencyNotes = document.createElement("p");
      currencyNotes.innerText = `₹${denominations[i]} x ${notes} = ${
        notes * denominations[i]
      }`;
      results.append(currencyNotes);

      // display entered amount
      const fin = document.getElementById('final');
      fin.innerText = `Total = ₹${amountCopy}`;
      // setInterval(function(){window.location.reload()}, 3000);
    } else {
      const err = document.createElement("p");
      err.innerText = `error: invalid amount value`;
      results.appendChild(err);
      break;
    }
  }
}