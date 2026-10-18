const convertToCelsius = function(fahrenheit) {
  celsiusResult = (fahrenheit - 32)* (5/9);
  return parseFloat(celsiusResult.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  fahrenheitResult = (celsius * (9/5))+32;
  return parseFloat(fahrenheitResult.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
