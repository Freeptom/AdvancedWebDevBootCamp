const arr = [1, 2, 3];

for (let val of arr) {
  console.log(val);
} // for..of works with any iterable, whereas forEach is only for arrays.forEach gives you access to the index, if you want it, whereas for..ofdoes not.