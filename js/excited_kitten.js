/* Excited Kitten
Write code that logs "Love me, pet me! HSSSSSS!" 10 times.

For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", "meow?", or "...why does the red dot always get away..." at random.

Hint: You will need to use Math.random() */


var loveMe = "Love me, pet me! HSSSSS!"
var randomPhrases = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "meow?", "...why does the red dot always get away..."]

for (let i = 1; i < 10; i++) {
	if (i % 2 !== 0) {
		console.log(loveMe)
	}
	else {
    	console.log(randomPhrases[Math.floor(Math.random() * (4))])
	}

}