let currentTemp = Math.floor(Math.random() * 100 + 1);
let desiredTemp = Math.floor(Math.random() * 5 + 68);

console.log(`The current temperature is ${currentTemp}F and the desired temperature is ${desiredTemp}F.`);

while (currentTemp < desiredTemp) {
    currentTemp++;
    console.log(`The current temperature is now ${currentTemp}F`);
}

while (currentTemp > desiredTemp) {
    currentTemp--;
    console.log(`The current temperature is now ${currentTemp}F`);
}

