// We can set the context of 'this' with 'new'. When new is used, an object is created

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let elie = new Person('Elie', 'Boobity');