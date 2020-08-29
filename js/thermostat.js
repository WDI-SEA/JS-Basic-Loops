/* Thermostat
Declare a variable called currentTemp that stores the current temperature. Set this to a random whole number between 1 and 100.
Hint: Use Math.random then multiply by 100 - make sure to use floor or rnd to get a whole number

Declare a variable called desiredTemp that is the temperature in Fahrenheit, that you personally like to relax at. (For most of us, this is between 68 and 72!)

Print out the current temperature is. For example:

The current temperature is 24F
While the temperature is too low, add a degree to the current temperature. Every time you increase the temperature, print out the current temperature again. For example:
The current temperature is now 25F
While the temperature is too high, subtract a degree from the current temperature. Every time you decrease the temperature, print out the current temperature again. */


var currentTemp = Math.floor(Math.random() * 100)

var desiredTemp = 70

console.log("The current temperature is", currentTemp)

while (currentTemp < desiredTemp) {
	currentTemp += 1
	console.log("The current temperature is now", currentTemp)
}

while (currentTemp > desiredTemp) {
	currentTemp -= 1
	console.log("The current temperature is now", currentTemp)
}
