let add = function (a, b) {
    return a + b;
}

let addArrow = (a, b) => {
    return a + b;
}

// if on one line do not need return or curly braces
let addArrowOneLine = (a, b) => a + b;



// Refactoring with arrow funcs
[1, 2, 3].map(function (val) {
    return value * 2;
}) // [2,4,6];

[1, 2, 3].map(value => value * 2);



// refactoring again!
function doubleAndFilter(arr) {
    return arr.map(function (val) {
        return val * 2;
    }).filter(function (val) {
        return val % 3 === 0;
    })
};

let doubleAndFilterArrow = arr => arr.map(val => val * 2).filter(num => num % 3 === 0);


// no 'this' in arrow funcs
let instructor = {
    firstName: 'Elie',
    sayHi: function () {
        setTimeout(function () {
            console.log("hello " + this.firstName);
        }.bind(this), 1000); // need to bind as setTimeout has it's own 'this' of window
    }
}

let instructorArrow = {
    firstName: 'Elie',
    sayHi: function () {
        setTimeout(() => {
            console.log("hello " + this.firstName); // belongs to sayHi func as not an arrow func
        }, 1000); // why does this work? The value of 'this' inside the setTimeout (as an arrow func) is its enclosing context which is the instructorArrow object. Since arrow functions do not get a 'this', it doesn't belong to the window (like normal setTimeout would) 
    }
}

// arrow functions should NEVER be used as methods in objects.