// apply can be used just like call

function sayHi() {
    return 'Hi ' + this.firstName;
}

let colt = {
    firstName: 'Colt'
}

let elie = {
    firstName: 'Elie'
}

sayHi.call(colt) // Hi Colt
sayHi.apply(elie) // Hi Elie

// however when parameters are involved, it changes!

function addNumbers(a, b, c, d) {
    return this.firstName + " just calculated " + (a + b + c + d);
}

let colt = {
    firstName: "Colt"
}

let elie = {
    firstName: "Elie"
}

addNumbers.call(elie, 1, 2, 3, 4) // Elie just calculated 10
addNumbers.apply(elie[1, 2, 3, 4]) // Elie just calculated 10 - When a function does not accept an array, apply will spread out values in an array for us! 

// WHEN TO USE APPLY

let nums = [5, 7, 1, 4, 2]

Math.max(nums) // NaN

Math.max.apply(this, nums); // 7

// Another example

function sumValues(a, b, c) {
    return a + b + c;
}

let values = [4, 1, 2];

sumValues(values) // "4,1,2undefinedundefined"

sumValues.apply(this, [4, 1, 2]);