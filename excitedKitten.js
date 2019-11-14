let i = 1;

let catTalk = {
    1 : "...human...why you taking pictures of me?...",
    2 : "...the catnip made me do it...",
    3 : "meow?",
    4 : "...why does the red dot always get away..."
}

while (i <= 10) {
    if (i % 2 ==0) {
        let key = Math.floor(Math.random() * 4 + 1);
        console.log(key, catTalk[key]);
    } else {
        console.log("Love me, pet me! HSSSSSS!");
    }
    i++;
}