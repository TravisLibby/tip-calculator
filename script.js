var baseCost;
var taxPercentage;
var tipPercentage;

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

function parsePromptInput(formInput, isPercent) {
  formInput = parseFloat(formInput);
  formInput = formInput.toFixed(2);
  if (isPercent) {
    formInput /= 100;
  }
  return formInput;
}

console.log(typeof baseCost);
console.log(baseCost);

console.log(typeof taxPercentage);
console.log(taxPercentage);

console.log(typeof tipPercentage);
console.log(tipPercentage);

var baseCostPlusTaxes = baseCost + (baseCost * taxPercentage);
console.log(baseCostPlusTaxes);







