// Example 1

function sendMessage(message, callback) {
    return callback(message);
}

sendMessage("Message", console.log);

sendMessage("Alert", alert);

var answer = sendMessage("Are you sure?", confirm);




// Example 2

function greet(name, formatter) {
    return 'Hello, ' + formatter(name);
}

function upperCaseName(name) {
    return name.toUpperCase();
}

console.log(greet('Tim', upperCaseName));




// Example 3 - Using Anon function as callback instead

function greeter(name, formatter) {
    return 'Hello, ' + formatter(name);
}

console.log( greeter('Tim', function(name){
    return name.toUpperCase();
}) );

console.log( greeter('Tim', function(name) {
    return name + '!!!!';
}) );