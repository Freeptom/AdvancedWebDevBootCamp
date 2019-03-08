// works like call, but bind returns a function with the context of 'this' bound already!

function addNumbers(a, b, c, d) {
    return this.firstName + " just calculated " + (a + b + c + d);
}

let elie = {
    firstName: "Elie"
}

let elieCalc = addNumbers.bind(elie, 1, 2, 3, 4) // function(){}...
elieCalc(); // Elie just calculated 10

// With bind - we do not need to know all of the arguments up front!

let elieCalc = addNumbers.bind(elie, 1, 2);
elieCalc(3, 4) // Elie just calculated 10;

// Bind cont.

let colt = {
    firstName: "colt",
    sayHi: function () {
        setTimeout(function () {
            console.log("Hi" + this.firstName); // since settimeout is called at a later time and even though it is in a function, 'this' refers to global object, not the parent object, 'firstname: "colt"'
        }, 1000);
    }
}


// using bind to make this refer to parent object:

let colt = {
    firstName: "colt",
    sayHi: function () {
        setTimeout(function () {
            console.log("Hi" + this.firstName); // refers to Colt with the bind below.
        }.bind(this), 1000); // use 'this' here, rather than 'colt', as it allows us to change firstName to anything 
    }
}