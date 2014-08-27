var baseCost;
var taxPercentage;
var tipPercentage;

var parsePromptInput = function(formInput, isPercent) {
  formInput = parseFloat(formInput);
  formInput = formInput.toFixed(2);
  if (isPercent) {
    formInput /= 100;
  }
  formInput = parseFloat(formInput);
  formInput = formInput.toFixed(2);
  return Number(formInput);
};

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

var baseCostPlusTax = baseCost + (baseCost * taxPercentage);
var tipAmt = baseCostPlusTax * tipPercentage;
var totalCost = baseCostPlusTax + tipAmt;
console.log('Tax: ' + (baseCost * taxPercentage).toFixed(2));
console.log(baseCostPlusTax.toFixed(2));
console.log(tipAmt.toFixed(2));
console.log(totalCost.toFixed(2));

alert('Base Cost with Tax: ' + baseCostPlusTax.toFixed(2) + '\n' + 'Tip Amount: ' + tipAmt.toFixed(2) + '\n' + 'Total Cost: ' + totalCost.toFixed(2));






