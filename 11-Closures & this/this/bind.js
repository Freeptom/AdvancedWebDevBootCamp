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