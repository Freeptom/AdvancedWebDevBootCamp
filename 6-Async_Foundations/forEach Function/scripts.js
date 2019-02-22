

function forEach(arr, callback) {
    for ( var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}


var arr = [1,2,3,4,5,6];
forEach(arr, function(number){
    console.log(number * 2);
})