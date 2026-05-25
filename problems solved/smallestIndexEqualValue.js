function  smallestIndexEqualValue (arr) {
   for (let i = 0; i < arr.length; i++) {
    if (i % 10 === arr[i] % 10) {
      return i;
    }
  }
  return -1;
};
console.log(smallestIndexEqualValue([4,3,2,1] ))