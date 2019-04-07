function printRest(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

printRest(1, 2, 3, 4, 5, 6);

// example:

// ES5
function sumArgs() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) { // using array like obj 'arguments'
    total += arguments[i];
  }
  return total;
}

// a little fancier ES5
function sumArgs() {
  let argumentsArray = [].slice.call(arguments);
  return argumentsArray.reduce(function (acc, next) {
    return acc + next;
  });
}

// ES2015
let sumArgs = (...args) => args.reduce((acc, next) => acc + next);