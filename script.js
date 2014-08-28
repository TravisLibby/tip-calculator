var baseCost;
var taxPercentage;
var tipPercentage;

function parsePromptInput(formInput, isPercent) {
  formInput = parseFloat(formInput);
  if (isPercent) {
    formInput /= 100;
  }
  formInput = parseFloat(formInput);
  return formInput;
}

while (typeof baseCost === 'undefined' || baseCost === '' || isNaN(baseCost)) {
  baseCost = prompt('Please enter the base cost of your meal.');
  baseCost = parsePromptInput(baseCost, false);
}

while (typeof taxPercentage === 'undefined' || taxPercentage === '' || isNaN(taxPercentage)) {
  taxPercentage = prompt('Please enter the tax rate.');
  taxPercentage = parsePromptInput(taxPercentage, true);
}

while (typeof tipPercentage === 'undefined' || tipPercentage === '' || isNaN(tipPercentage)) {
  tipPercentage = prompt('Please enter the percentage you\'d like to tip.');
  tipPercentage = parsePromptInput(tipPercentage, true);
}

var tipAmt = baseCost * tipPercentage;
var taxAmt = baseCost * taxPercentage;
var totalCost = baseCost + taxAmt + tipAmt;

var bill = 'Base: ' + baseCost.toFixed(2) + '\n' + 'Tax: ' + taxAmt.toFixed(2) + '\n' + 'Tip: ' + tipAmt.toFixed(2) + '\n' + 'Total Cost: ' + totalCost.toFixed(2);

alert(bill);






