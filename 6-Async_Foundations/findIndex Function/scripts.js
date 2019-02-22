function findIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)){
            return i;
        }
    }
    return -1;
}

let arr = [4,6,1,6];

findIndex(arr, function(num, index, array){
   console.log(num === 6);
});


