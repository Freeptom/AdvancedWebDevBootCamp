// used to spread each val out 

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr1 = [7, 8, 9];

let combinedArr = [...arr1, ...arr2, ...arr3];



// another example
let arr = [3, 2, 4, 5, 1];
Math.max(arr) // NaN - cannot handle arrays

// sooo can use apply in ES5
Math.max.apply(this, arr) // 5

// but can use spread in ES2015
Math.max(...arr);




// another example
function sumVals(a, b, c) {
    return a + b + c;
}
let nums = [1, 2, 3]; // sumVals does not accept array

// ES5
sumValues.apply(this, nums);

// ES2015 
sumValues(...nums);