/******** Global 'this' ********/

console.log(this) // window

function whatIsThis() {
    return this;
}

whatIsThis(); // still window as inside of a function and is still the global object. Global rule applies unless 'this' is inside of a declared object.

function variablesInThis() {
    this.person = 'Elie'
}

variablesInThis() // the keyword this inside the function is the window. Anything attached to this global variable is accessible outside of the function. Basically created a global variable. IS NOT GOOD PRACTICE - strict mode stops thiss

console.log(person) // Elie

/******** Implicit/Object 'this' ********/

// strict mode does NOT make a difference here

// when 'this' is found inside of a declared object, the value of 'this' will always be the closest parent object:

let person = {
    firstName: 'Elie',
    sayHi: function () {
        return 'Hi ' + this.firstName; // closest parent object is 'person'
    },
    determineContext: function () {
        return this === person; // true
    }
}

person.sayHi() // 'Hi Elie'
person.determineContext(); // true, as person is the closest object and no other function is creating a different 'this'



// what should the keyword 'this' refer to here?

let person = {
    firstName: 'Elie',
    determineContext: this // window - A keyword 'this' is defined when a function is run! There is not a function being run here to create a new value of 'this', so it's still the window!!
}

// Nested Objects

let person = {
    firstName: 'Colt',
    sayHi: function () {
        return 'Hi ' + this.firstName; // Colt
    },
    determineContext: function () {
        return this === person; // true
    },
    dog: {
        sayHello: function () {
            return 'Hello ' + this.firstName; // undefined (closest object, dog doesn't have firstName)
        },
        determineContext: function () {
            return this === person // dog
        }
    }
}

/******** Explicit 'this' - call, apply, bind (can only be evoked on functions) ********/

// NAME OF METHOD   PARAMETERS                  INVOKE IMMEDIATELY

// Call             thisArg, a, b, c, ...       Yes
// Apply            thisArg, [a, b, c, ...]     Yes
// Bind             thisArg, a, b, c, ...       No