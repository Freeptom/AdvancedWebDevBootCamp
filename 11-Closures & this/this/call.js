// Using Call

person.dog.sayHello.call(person) // 'Hello Colt'

person.dog.determineContext.call(person) // true


// Using Call in the wild

let colt = {
    firstName: 'Colt',
    sayHi: function () {
        return 'Hi ' + this.firstName;
    }
}

let elie = {
    firstName: 'Elie',
    // So much duplication :(
    sayHi: function () {
        return 'Hi ' + this.firstName;
    }
}

// solution!

let colt = {
    firstName: 'Colt',
    sayHi: function () {
        return 'Hi ' + this.firstName;
    }
}

let elie = {
    firstName: 'Elie',
}

colt.sayHi(); // Hi Colt
colt.sayHi.call(elie) // Hi Elie - sets this to elie


// one step further

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
sayHi.call(elie) // Hi Elie




// Another use case

let divs = document.getElementsByTagName('div');

// how can we find all divs that have text, 'Hello'?
// can't use filter as divs is not an array. 

// call to the rescue!
// use slice method on arrays. Instead of target of slice (the keyword this) being that array, let's see the target of the keyword 'this' to be our divs array-like object.

let divsArray = [].slice.call(divs);

divsArray.filter(function (val) {
    return val.innerText === 'Hello';
})