// Convert temperature from Celsius to Fahrenheit.
// (Formula: F = (C * 9/5) + 32) --->  C to F
const temperatureInCelsius = (temperature) => {
  return `${(temperature * 9) / 5 + 32}°F`;
};
console.log(temperatureInCelsius(30));

// Fahrenheit To Celsiu
// Formula : ((temperature - 32) * 5) / 9 ---> F to C

const temperatureInFahrenheit = (temperature) => {
  return `${((temperature - 32) * 5) / 9}°C`;
};
console.log(temperatureInFahrenheit(89));
