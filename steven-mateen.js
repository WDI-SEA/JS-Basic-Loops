            //Get Even 
			//#1
            for (let i = 0; i < 201; i++) {
                if (i % 2 === 0) {
                    console.log(i);
                }
            }
            //Excited Kitten
            //#1 and #2
            counter = 1
            const catArray = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "meow?", "...why does the red dot always get away..."];
            while (counter < 11) {
                console.log("Love me, pet me! HSSSSSS!");
                if (counter % 2 === 0) {
                    console.log(catArray[Math.floor(Math.random()*4)]);
                }
                counter++;
            }
    
            //Thermostat
            //#1
            let currentTemp = (Math.floor(Math.random()*100))+1;
            //#2
            let desiredTemp = 70;
            //#3
            console.log('The current temperature is ' + currentTemp + 'F');
            //#4
                while (currentTemp < desiredTemp) {
                currentTemp++;
                console.log('The current temperature is now ' + currentTemp + 'F');
                }
            //#5
                while (currentTemp > desiredTemp) {
                currentTemp--;
                console.log('The current temperature is now ' + currentTemp + 'F');
                }
    
            //Fizzbuzz
            //#1, #2, #3, #4
    let counter = 1;
    while (counter < 101) {
      if (counter % 3 === 0 && counter % 5 === 0) {
        console.log('FizzBuzz');
      } else if (counter % 3 === 0) {
        console.log('Fizz');
      } else if (counter % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(counter);
      }
      counter++;
    }
    
            //Bonus
    var phoneBook = {
      "Abe": "111-111-1111",
      "Bob": "222-222-2222",
      "Cam": "333-333-3333",
      "Dan": "444-444-4444",
      "Ern": "555-555-5555",
      "Fry": "111-111-1111",
      "Gil": "222-222-2222",
      "Hal": "333-333-3333",
      "Ike": "444-444-4444",
      "Jim": "555-555-5555",
      "Kip": "111-111-1111",
      "Liv": "222-222-2222",
      "Mia": "333-333-3333",
      "Nik": "444-444-4444",
      "Oli": "555-555-5555",
      "Pam": "111-111-1111",
      "Qiq": "222-222-2222",
      "Rob": "333-333-3333",
      "Stu": "444-444-4444",
      "Tad": "555-555-5555",
      "Uwe": "111-111-1111",
      "Val": "222-222-2222",
      "Wil": "333-333-3333",
      "Xiu": "444-444-4444",
      "Yam": "555-555-5555",
      "Zed": "111-111-1111"
    }
    
    for(var properties in phoneBook) {
      if (phoneBook[properties] === "333-333-3333") {
        console.log(properties);
      }
    }