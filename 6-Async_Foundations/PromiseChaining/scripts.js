let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 500);
});

promise.then(function(data) {
    console.log("random int passed to resolve", data);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(Math.floor(Math.random() * 10));
        }, 3000);
    });
}).then(function(data) {
    console.log("second random int passed to resolve:", data);
});

// Promise can return data

let promise = new Promise(function(resolve, reject) {
    resolve(5);
});

promise.then(function(data) {
    return data * 2;
}).then(function(data) {
    return data + 20;
}).then(function(data) {
    console.log(data);
}); 