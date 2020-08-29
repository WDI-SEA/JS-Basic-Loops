/* Fizz Buzz
Write a javascript application that logs all numbers from 1 - 100.

If a number is divisible by 3 log "Fizz" instead of the number.

If a number is divisible by 5 log "Buzz" instead of the number.

If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number. */

for (let i = 1; i <= 100; i++) {
	if ((i % 3 === 0) && !(i % 5 === 0)) {
		console.log("Fizz")
	} else if ((i % 5 === 0 ) && !(i % 3 === 0)) {
		console.log("Buzz")
	} else if ((i % 5 === 0 ) && (i % 3 === 0)) {
		console.log ("FizzBuzz")
	} else {
		console.log(i)
	}
}