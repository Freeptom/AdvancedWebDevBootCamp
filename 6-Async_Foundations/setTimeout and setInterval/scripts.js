// Set Interval
// let num = 0;
// let intervalId = setInterval(function() {
//     num++;
//     console.log('num' + num);
//     if (num === 3) {
//         clearInterval(intervalId);
//     }
// }, 1000);

// Assignment

// Your goal is to Implement a function called countDown that accepts a time in seconds. The function will print the time remain to the console every second. Instead of printing 0, the function should print "Ring Ring Ring!!!".

function countDown(seconds) {
    let intervalId = setInterval(function(){
        seconds--;
        if (seconds > 0) {
            console.log('Timer: ', seconds);
        } else {
            console.log('Ring Ring Ring!');
            clearInterval(intervalId);
        }
    },1000);
}

countDown(4);



